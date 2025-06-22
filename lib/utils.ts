import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// MBTI-related adjectives
const mbtiAdjectives = {
  E: ['energetic', 'cheerful', 'enthusiastic', 'outgoing'],
  I: ['thoughtful', 'quiet', 'reserved', 'calm'],
  S: ['practical', 'detailed', 'concrete', 'steady'],
  N: ['creative', 'intuitive', 'abstract', 'inspired'],
  T: ['rational', 'logical', 'analytical', 'objective'],
  F: ['emotional', 'empathetic', 'warm', 'caring'],
  J: ['planned', 'organized', 'decisive', 'structured'],
  P: ['flexible', 'spontaneous', 'adaptable', 'exploratory']
};

const animals = [
  'cat', 'fox', 'rabbit', 'panda', 'raccoon', 
  'shiba', 'penguin', 'koala', 'squirrel', 'dolphin',
  'owl', 'deer', 'alpaca', 'hamster', 'polar bear'
];

// Generate random nickname
export function generateNickname(mbtiType: string | null = null): string {
  const getRandomElement = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];
  
  let adjective = '';
  if (mbtiType) {
    // Randomly select an adjective from one dimension of the MBTI type
    const dimensions = mbtiType.split('');
    const randomDimension = getRandomElement(dimensions);
    adjective = getRandomElement(mbtiAdjectives[randomDimension as keyof typeof mbtiAdjectives]);
  } else {
    // Randomly select from all adjectives
    const allAdjectives = Object.values(mbtiAdjectives).flat();
    adjective = getRandomElement(allAdjectives);
  }
  
  const animal = getRandomElement(animals);
  const number = Math.floor(Math.random() * 1000);
  
  return `${adjective} ${animal} ${number}`;
}

// Get avatar URL
export function getAvatarUrl(nickname: string): string {
  // Use DiceBear's cute style avatars
  const style = 'adventurer-neutral'; // Can also use: 'avataaars', 'bottts', 'pixel-art' etc
  const seed = encodeURIComponent(nickname);
  return `https://api.dicebear.com/7.x/${style}/svg?seed=${seed}&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf`;
}

// Get avatar background color
export function getAvatarBackground(nickname: string): string {
  const backgrounds = [
    'bg-gradient-to-br from-blue-400 to-blue-300',
    'bg-gradient-to-br from-purple-400 to-purple-300',
    'bg-gradient-to-br from-pink-400 to-pink-300',
    'bg-gradient-to-br from-green-400 to-green-300',
    'bg-gradient-to-br from-yellow-400 to-yellow-300',
    'bg-gradient-to-br from-red-400 to-red-300',
    'bg-gradient-to-br from-indigo-400 to-indigo-300',
    'bg-gradient-to-br from-teal-400 to-teal-300'
  ];
  
  let hash = 0;
  for (let i = 0; i < nickname.length; i++) {
    hash = nickname.charCodeAt(i) + ((hash << 5) - hash);
  }
  
  return backgrounds[Math.abs(hash) % backgrounds.length];
}
