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
        
        // Check if it's the same MBTI type and cache hasn't expired (24 hours)
        if (interpretation.mbtiType === mbtiType) {
          const now = Date.now();
          const cacheAge = now - interpretation.timestamp;
          const CACHE_EXPIRY = 24 * 60 * 60 * 1000; // 24 hours
          
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

// Comment-related functions
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

// Nickname-related functions
export function getUserNickname(): string | null {
  if (typeof window !== 'undefined') {
    const nickname = localStorage.getItem(LOCAL_STORAGE_KEYS.lastUsername);
    
    // Check if it's the old auto-generated nickname format (e.g., "Inspiring Cat986"), if so, clear it
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