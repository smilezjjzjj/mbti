'use client';

import { useState, useEffect, Suspense } from 'react';
import { Comment } from '@/lib/types';
import { 
  getComments, saveComment, deleteComment, likeComment,
  getUserNickname, saveUserNickname
} from '@/lib/storage';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { HeartIcon, Trash2Icon, MessageCircleIcon } from 'lucide-react';
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
      <div className="glass-effect h-24 rounded-xl"></div>
      <div className="glass-effect h-32 rounded-xl"></div>
    </div>
  );
}

export default function CommentSection({ mbtiType }: CommentSectionProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentText, setCommentText] = useState('');
  const [userNickname, setUserNickname] = useState(() => {
    // 优先使用存储的昵称，如果没有则生成新昵称
    const savedNickname = getUserNickname();
    if (savedNickname) return savedNickname;
    
    const newNickname = generateNickname(mbtiType);
    saveUserNickname(newNickname);
    return newNickname;
  });

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
      <div className="w-full space-y-6">
        {/* 发表评论区域 */}
        <div className="glass-effect rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <Avatar className={`h-12 w-12 ring-3 ring-white/50 ${getAvatarBackground(userNickname)}`}>
              <AvatarImage src={getAvatarUrl(userNickname)} alt={userNickname} />
              <AvatarFallback className="font-semibold">{userNickname[0]}</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-semibold text-gray-800">{userNickname}</div>
              <div className="text-sm text-gray-600">当前用户</div>
            </div>
          </div>
          
          <div className="space-y-4">
            <Textarea 
              placeholder="分享你的MBTI体验和感悟..." 
              value={commentText} 
              onChange={(e) => setCommentText(e.target.value)}
              className="min-h-[120px] glass-effect border-white/30 focus:border-purple-400 focus:ring-purple-400 resize-none"
            />
            <div className="flex justify-end">
              <Button 
                onClick={handleSubmitComment} 
                disabled={!commentText.trim()}
                className="modern-button disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <MessageCircleIcon className="h-4 w-4 mr-2" />
                发表评论
              </Button>
            </div>
          </div>
        </div>
        
        {/* 评论列表 */}
        <div className="space-y-4">
          {comments.length === 0 ? (
            <div className="glass-effect rounded-2xl p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center">
                <MessageCircleIcon className="h-8 w-8 text-purple-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">还没有评论</h3>
              <p className="text-gray-600">成为第一个分享想法的人吧！</p>
            </div>
          ) : (
            comments.map((comment, index) => (
              <div 
                key={comment.id} 
                className="glass-effect rounded-2xl p-6 hover:bg-white/30 transition-all duration-200 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-4">
                  <Avatar className={`h-12 w-12 ring-2 ring-white/50 ${getAvatarBackground(comment.username)}`}>
                    <AvatarImage src={getAvatarUrl(comment.username)} alt={comment.username} />
                    <AvatarFallback className="font-semibold">{comment.username[0]}</AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="font-semibold text-gray-800">{comment.username}</div>
                        <div className="text-sm text-gray-500">{formatDate(comment.timestamp)}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        {comment.mbtiType !== 'general' && (
                          <Badge 
                            variant="outline" 
                            className="bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 border-purple-200 font-medium"
                          >
                            {comment.mbtiType}
                          </Badge>
                        )}
                        {comment.username === userNickname && (
                          <button
                            onClick={() => handleDeleteComment(comment.id)}
                            className="text-red-500 hover:text-red-700 p-2 rounded-lg hover:bg-red-50 transition-all duration-200"
                            title="删除评论"
                          >
                            <Trash2Icon size={16} />
                          </button>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed mb-4 whitespace-pre-wrap">
                      {comment.content}
                    </p>
                    
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => handleLikeComment(comment.id)}
                        className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition-colors text-sm font-medium group"
                      >
                        <HeartIcon 
                          size={18} 
                          className={`transition-all duration-200 group-hover:scale-110 ${
                            comment.likes > 0 ? 'fill-red-500 text-red-500' : ''
                          }`} 
                        />
                        <span>{comment.likes}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </Suspense>
  );
} 