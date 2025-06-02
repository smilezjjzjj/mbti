'use client';

import { LOCAL_STORAGE_KEYS } from './constants';
import { Interpretation, Comment } from './types';

export function saveLastMbtiType(mbtiType: string): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(LOCAL_STORAGE_KEYS.lastMbti, mbtiType);
  }
}

export function getLastMbtiType(): string | null {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(LOCAL_STORAGE_KEYS.lastMbti);
  }
  return null;
}

export function getInterpretationByMbtiType(mbtiType: string): Interpretation | null {
  if (typeof window !== 'undefined') {
    const interpretationString = localStorage.getItem(LOCAL_STORAGE_KEYS.interpretationHistory);
    if (interpretationString) {
      try {
        const interpretation: Interpretation = JSON.parse(interpretationString);
        
        // 检查是否是同一个MBTI类型且缓存未过期（24小时）
        if (interpretation.mbtiType === mbtiType) {
          const now = Date.now();
          const cacheAge = now - interpretation.timestamp;
          const CACHE_EXPIRY = 24 * 60 * 60 * 1000; // 24小时
          
          if (cacheAge <= CACHE_EXPIRY) {
            return interpretation;
          }
        }
      } catch (e) {
        console.error('Failed to parse interpretation', e);
      }
    }
  }
  return null;
}

export function saveInterpretation(interpretation: Interpretation): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(LOCAL_STORAGE_KEYS.interpretationHistory, JSON.stringify(interpretation));
  }
}

// 评论相关功能
export function getComments(mbtiType?: string): Comment[] {
  if (typeof window !== 'undefined') {
    const commentsString = localStorage.getItem(LOCAL_STORAGE_KEYS.comments);
    if (commentsString) {
      try {
        const comments: Comment[] = JSON.parse(commentsString);
        return mbtiType 
          ? comments.filter(comment => comment.mbtiType === mbtiType) 
          : comments;
      } catch (e) {
        console.error('Failed to parse comments', e);
      }
    }
  }
  return [];
}

export function saveComment(comment: Comment): void {
  if (typeof window !== 'undefined') {
    const comments = getComments();
    comments.push(comment);
    localStorage.setItem(LOCAL_STORAGE_KEYS.comments, JSON.stringify(comments));
  }
}

export function deleteComment(commentId: string): void {
  if (typeof window !== 'undefined') {
    const comments = getComments();
    const filteredComments = comments.filter(comment => comment.id !== commentId);
    localStorage.setItem(LOCAL_STORAGE_KEYS.comments, JSON.stringify(filteredComments));
  }
}

export function likeComment(commentId: string): void {
  if (typeof window !== 'undefined') {
    const comments = getComments();
    const updatedComments = comments.map(comment => {
      if (comment.id === commentId) {
        return {
          ...comment,
          likes: comment.likes + 1
        };
      }
      return comment;
    });
    localStorage.setItem(LOCAL_STORAGE_KEYS.comments, JSON.stringify(updatedComments));
  }
}

// 昵称相关功能
export function getUserNickname(): string | null {
  if (typeof window !== 'undefined') {
    const nickname = localStorage.getItem(LOCAL_STORAGE_KEYS.lastUsername);
    
    // 检查是否是旧的自动生成昵称格式（如"灵感的猫986"），如果是则清除
    if (nickname && /^.+的.+\d+$/.test(nickname)) {
      localStorage.removeItem(LOCAL_STORAGE_KEYS.lastUsername);
      return null;
    }
    
    return nickname;
  }
  return null;
}

export function saveUserNickname(nickname: string): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(LOCAL_STORAGE_KEYS.lastUsername, nickname);
  }
}