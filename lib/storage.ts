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

export function getInterpretationHistory(): Interpretation[] {
  if (typeof window !== 'undefined') {
    const historyString = localStorage.getItem(LOCAL_STORAGE_KEYS.interpretationHistory);
    if (historyString) {
      try {
        return JSON.parse(historyString);
      } catch (e) {
        console.error('Failed to parse interpretation history', e);
      }
    }
  }
  return [];
}

export function saveInterpretation(interpretation: Interpretation): void {
  if (typeof window !== 'undefined') {
    const historyString = localStorage.getItem(LOCAL_STORAGE_KEYS.interpretationHistory);
    let history: Interpretation[] = [];
    
    if (historyString) {
      try {
        history = JSON.parse(historyString);
      } catch (e) {
        console.error('Failed to parse interpretation history', e);
        history = [];
      }
    }
    
    // Check if interpretation already exists for this MBTI type
    const existingIndex = history.findIndex(item => item.mbtiType === interpretation.mbtiType);
    if (existingIndex >= 0) {
      // Update existing interpretation
      history[existingIndex] = interpretation;
    } else {
      // Add new interpretation, limit to 10 most recent
      history.push(interpretation);
      if (history.length > 10) {
        history = history.slice(history.length - 10);
      }
    }
    
    localStorage.setItem(LOCAL_STORAGE_KEYS.interpretationHistory, JSON.stringify(history));
  }
}

export function getInterpretationByMbtiType(mbtiType: string): Interpretation | null {
  const history = getInterpretationHistory();
  const interpretation = history.find(item => item.mbtiType === mbtiType);
  
  if (interpretation) {
    // 检查缓存是否过期（例如7天）
    const now = Date.now();
    const cacheAge = now - interpretation.timestamp;
    const CACHE_EXPIRY = 7 * 24 * 60 * 60 * 1000; // 7天
    
    if (cacheAge > CACHE_EXPIRY) {
      return null; // 缓存已过期
    }
  }
  
  return interpretation || null;
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