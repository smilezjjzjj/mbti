'use client';

import { useState, useEffect, Suspense } from 'react';
import { Comment } from '@/lib/types';
import { 
  getComments, saveComment, deleteComment, likeComment
} from '@/lib/storage';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { HeartIcon, Trash2Icon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { generateNickname, getAvatarUrl, getAvatarBackground } from '@/lib/utils';

interface CommentSectionProps {
  mbtiType: string | null;
}

// 评论加载占位符
function CommentSkeleton() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-24 bg-gray-200 rounded-lg"></div>
      <div className="h-32 bg-gray-200 rounded-lg"></div>
    </div>
  );
}

export default function CommentSection({ mbtiType }: CommentSectionProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentText, setCommentText] = useState('');
  const [userNickname] = useState(() => generateNickname(mbtiType));

  // 加载评论
  useEffect(() => {
    const loadData = async () => {
      try {
        if (mbtiType) {
          setComments(getComments(mbtiType));
        } else {
          setComments(getComments());
        }
      } catch (error) {
        console.error('Failed to load comments:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadData();
  }, [mbtiType]);

  // 提交评论
  const handleSubmitComment = () => {
    if (!commentText.trim()) return;
    
    const newComment: Comment = {
      id: `comment-${Date.now()}`,
      mbtiType: mbtiType || 'general',
      username: userNickname,
      content: commentText.trim(),
      timestamp: Date.now(),
      likes: 0
    };
    
    saveComment(newComment);
    setComments([...comments, newComment]);
    setCommentText('');
  };

  // 删除评论
  const handleDeleteComment = (commentId: string) => {
    deleteComment(commentId);
    setComments(comments.filter(comment => comment.id !== commentId));
  };

  // 点赞评论
  const handleLikeComment = (commentId: string) => {
    likeComment(commentId);
    setComments(comments.map(comment => {
      if (comment.id === commentId) {
        return {
          ...comment,
          likes: comment.likes + 1
        };
      }
      return comment;
    }));
  };

  // 格式化日期
  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
  };

  if (isLoading) {
    return <CommentSkeleton />;
  }

  return (
    <Suspense fallback={<CommentSkeleton />}>
      <div className="w-full max-w-md mx-auto mt-10">
        <div className="bg-white/90 backdrop-blur-md shadow-apple rounded-xl border border-[#E8E8ED] p-6">
          <div className="flex items-center gap-3 mb-6">
            <Avatar className={`h-10 w-10 ring-2 ring-white ${getAvatarBackground(userNickname)}`}>
              <AvatarImage src={getAvatarUrl(userNickname)} alt={userNickname} />
              <AvatarFallback>{userNickname[0]}</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium text-[#1D1D1F]">{userNickname}</div>
              <div className="text-xs text-[#86868B]">当前用户</div>
            </div>
          </div>
          
          <div className="space-y-4 mb-6">
            <Textarea 
              placeholder="分享你的看法..." 
              value={commentText} 
              onChange={(e) => setCommentText(e.target.value)}
              className="min-h-[100px] focus:ring-2 focus:ring-blue-500 border-[#E8E8ED]"
            />
            <div className="flex justify-end">
              <Button 
                onClick={handleSubmitComment} 
                disabled={!commentText.trim()}
                className="bg-gradient-to-r from-[#0071E3] to-[#40AAFF] hover:from-[#0068D1] hover:to-[#3B9EEB] text-white"
              >
                发表评论
              </Button>
            </div>
          </div>
          
          <div className="space-y-4">
            {comments.length === 0 ? (
              <div className="text-center py-8 text-[#86868B]">
                还没有评论，成为第一个评论的人吧！
              </div>
            ) : (
              comments.map(comment => (
                <Card key={comment.id} className="border border-[#E8E8ED] shadow-sm">
                  <CardContent className="p-4">
                    <div className="flex gap-3">
                      <Avatar className={`h-10 w-10 ring-2 ring-white ${getAvatarBackground(comment.username)}`}>
                        <AvatarImage src={getAvatarUrl(comment.username)} alt={comment.username} />
                        <AvatarFallback>{comment.username[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="font-medium text-[#1D1D1F]">{comment.username}</div>
                            <div className="text-xs text-[#86868B]">{formatDate(comment.timestamp)}</div>
                          </div>
                          <div className="flex items-center gap-2">
                            {comment.mbtiType !== 'general' && (
                              <Badge variant="outline" className="bg-[#F5F5F7] text-[#86868B] border-[#E8E8ED]">
                                {comment.mbtiType}
                              </Badge>
                            )}
                            {comment.username === userNickname && (
                              <button
                                onClick={() => handleDeleteComment(comment.id)}
                                className="text-[#FF3B30] hover:text-[#FF2D55] p-1 rounded-full hover:bg-[#FFF1F0] transition-colors"
                                title="删除评论"
                              >
                                <Trash2Icon size={16} />
                              </button>
                            )}
                          </div>
                        </div>
                        <p className="mt-2 text-[#1D1D1F]">{comment.content}</p>
                        
                        <div className="flex gap-4 mt-3">
                          <button
                            onClick={() => handleLikeComment(comment.id)}
                            className="flex items-center gap-1 text-[#86868B] hover:text-[#0071E3] transition-colors text-sm"
                          >
                            <HeartIcon size={16} />
                            <span>{comment.likes}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </div>
    </Suspense>
  );
} 