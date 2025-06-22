'use client';

import { useState, useEffect, Suspense } from 'react';
import { Comment } from '@/lib/types';
import { 
  getComments, saveComment, deleteComment, likeComment,
  getUserNickname, saveUserNickname
} from '@/lib/storage';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { HeartIcon, Trash2Icon, MessageCircleIcon, EditIcon, CheckIcon } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { getAvatarUrl, getAvatarBackground } from '@/lib/utils';

interface CommentSectionProps {
  mbtiType: string | null;
}

// Comment loading placeholder
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
  const [isEditingNickname, setIsEditingNickname] = useState(false);
  const [tempNickname, setTempNickname] = useState('');
  const [userNickname, setUserNickname] = useState(() => {
    // Prioritize stored nickname, return empty string if none to let user input
    const savedNickname = getUserNickname();
    return savedNickname || '';
  });

  // If no nickname, automatically enter edit mode
  useEffect(() => {
    if (!userNickname) {
      setIsEditingNickname(true);
      setTempNickname('');
    }
  }, [userNickname]);

  // Load comments
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

  // Start editing nickname
  const startEditingNickname = () => {
    setTempNickname(userNickname);
    setIsEditingNickname(true);
  };

  // Save nickname
  const saveNickname = () => {
    const nickname = tempNickname.trim();
    if (nickname) {
      setUserNickname(nickname);
      saveUserNickname(nickname);
      setIsEditingNickname(false);
    }
  };

  // Cancel editing nickname
  const cancelEditingNickname = () => {
    setTempNickname('');
    // If user has no nickname, cannot cancel editing, must input nickname
    if (userNickname) {
      setIsEditingNickname(false);
    }
  };

  // Submit comment
  const handleSubmitComment = () => {
    if (!commentText.trim() || !userNickname) return;
    
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

  // Delete comment
  const handleDeleteComment = (commentId: string) => {
    deleteComment(commentId);
    setComments(comments.filter(comment => comment.id !== commentId));
  };

  // Like comment
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

  // Format date
  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
  };

  if (isLoading) {
    return <CommentSkeleton />;
  }

  return (
    <Suspense fallback={<CommentSkeleton />}>
      <div className="w-full space-y-4 sm:space-y-6">
        {/* Post Comment Area */}
        <div className="glass-effect rounded-2xl p-4 sm:p-6">
          <div className="flex items-start gap-3 mb-4 sm:mb-6">
            <Avatar className={`h-10 w-10 sm:h-12 sm:w-12 ring-2 sm:ring-3 ring-white/50 flex-shrink-0 ${getAvatarBackground(userNickname || 'User')}`}>
              <AvatarImage src={getAvatarUrl(userNickname || 'User')} alt={userNickname || 'User'} />
              <AvatarFallback className="font-semibold text-sm sm:text-base">{(userNickname || 'U')[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              {isEditingNickname ? (
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                  <Input
                    value={tempNickname}
                    onChange={(e) => setTempNickname(e.target.value)}
                    placeholder="Nickname"
                    className="glass-effect border-white/30 focus:border-purple-400 focus:ring-purple-400 w-full sm:w-32 h-10 text-sm"
                    maxLength={20}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        saveNickname();
                      }
                    }}
                  />
                  <div className="flex gap-2">
                    <Button
                      onClick={saveNickname}
                      disabled={!tempNickname.trim()}
                      size="sm"
                      className="modern-button px-3 h-10 flex-1 sm:flex-none"
                    >
                      <CheckIcon className="h-4 w-4" />
                    </Button>
                    {userNickname && (
                      <Button
                        onClick={cancelEditingNickname}
                        variant="outline"
                        size="sm"
                        className="px-3 h-10 flex-1 sm:flex-none"
                      >
                        Cancel
                      </Button>
                    )}
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-between">
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold text-gray-800 text-sm sm:text-base truncate">{userNickname}</div>
                    <div className="text-xs sm:text-sm text-gray-600">Current User</div>
                  </div>
                  <Button
                    onClick={startEditingNickname}
                    variant="ghost"
                    size="sm"
                    className="text-gray-500 hover:text-gray-700 p-2 flex-shrink-0"
                    title="Edit nickname"
                  >
                    <EditIcon className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>
          
          <div className="space-y-3 sm:space-y-4">
            <Textarea 
              placeholder={userNickname ? "Share your MBTI experience and insights..." : "Please set a nickname before posting comments..."} 
              value={commentText} 
              onChange={(e) => setCommentText(e.target.value)}
              className="min-h-[100px] sm:min-h-[120px] glass-effect border-white/30 focus:border-purple-400 focus:ring-purple-400 resize-none text-sm sm:text-base"
              disabled={!userNickname}
            />
            <div className="flex justify-end">
              <Button 
                onClick={handleSubmitComment} 
                disabled={!commentText.trim() || !userNickname}
                className="modern-button disabled:opacity-50 disabled:cursor-not-allowed h-10 sm:h-auto px-4 sm:px-6 text-sm sm:text-base"
              >
                <MessageCircleIcon className="h-4 w-4 mr-2" />
                Post Comment
              </Button>
            </div>
          </div>
        </div>
        
        {/* Comments List */}
        <div className="space-y-3 sm:space-y-4">
          {comments.length === 0 ? (
            <div className="glass-effect rounded-2xl p-6 sm:p-8 text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center">
                <MessageCircleIcon className="h-6 w-6 sm:h-8 sm:w-8 text-purple-500" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">No comments yet</h3>
              <p className="text-sm sm:text-base text-gray-600">Be the first to share your thoughts!</p>
            </div>
          ) : (
            comments.map((comment, index) => (
              <div 
                key={comment.id} 
                className="glass-effect rounded-2xl p-4 sm:p-6 hover:bg-white/30 transition-all duration-200 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-3 sm:gap-4">
                  <Avatar className={`h-10 w-10 sm:h-12 sm:w-12 ring-2 ring-white/50 flex-shrink-0 ${getAvatarBackground(comment.username)}`}>
                    <AvatarImage src={getAvatarUrl(comment.username)} alt={comment.username} />
                    <AvatarFallback className="font-semibold text-sm sm:text-base">{comment.username[0]}</AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 sm:mb-3 gap-2">
                      <div className="min-w-0">
                        <div className="font-semibold text-gray-800 text-sm sm:text-base truncate">{comment.username}</div>
                        <div className="text-xs sm:text-sm text-gray-500">{formatDate(comment.timestamp)}</div>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        {comment.mbtiType !== 'general' && (
                          <Badge 
                            variant="outline" 
                            className="bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 border-purple-200 font-medium text-xs"
                          >
                            {comment.mbtiType}
                          </Badge>
                        )}
                        {comment.username === userNickname && (
                          <button
                            onClick={() => handleDeleteComment(comment.id)}
                            className="text-red-500 hover:text-red-700 p-1.5 sm:p-2 rounded-lg hover:bg-red-50 transition-all duration-200"
                            title="Delete comment"
                          >
                            <Trash2Icon size={14} className="sm:w-4 sm:h-4" />
                          </button>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed mb-3 sm:mb-4 whitespace-pre-wrap text-sm sm:text-base">
                      {comment.content}
                    </p>
                    
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => handleLikeComment(comment.id)}
                        className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition-colors text-xs sm:text-sm font-medium group"
                      >
                        <HeartIcon 
                          size={16} 
                          className={`sm:w-[18px] sm:h-[18px] transition-all duration-200 group-hover:scale-110 ${
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