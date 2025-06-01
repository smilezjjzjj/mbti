import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// MBTI相关的形容词
const mbtiAdjectives = {
  E: ['活力', '开朗', '热情', '外向'],
  I: ['深思', '安静', '内敛', '沉稳'],
  S: ['务实', '细致', '具象', '稳重'],
  N: ['创意', '直觉', '抽象', '灵感'],
  T: ['理性', '逻辑', '分析', '客观'],
  F: ['感性', '共情', '温暖', '关怀'],
  J: ['计划', '条理', '果断', '执行'],
  P: ['灵活', '随性', '适应', '探索']
};

const animals = [
  '猫', '狐狸', '兔子', '熊猫', '浣熊', 
  '柴犬', '企鹅', '考拉', '松鼠', '海豚',
  '猫头鹰', '小鹿', '羊驼', '仓鼠', '北极熊'
];

// 生成随机昵称
export function generateNickname(mbtiType: string | null = null): string {
  const getRandomElement = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];
  
  let adjective = '';
  if (mbtiType) {
    // 从MBTI类型中随机选择一个维度的形容词
    const dimensions = mbtiType.split('');
    const randomDimension = getRandomElement(dimensions);
    adjective = getRandomElement(mbtiAdjectives[randomDimension as keyof typeof mbtiAdjectives]);
  } else {
    // 随机从所有形容词中选择
    const allAdjectives = Object.values(mbtiAdjectives).flat();
    adjective = getRandomElement(allAdjectives);
  }
  
  const animal = getRandomElement(animals);
  const number = Math.floor(Math.random() * 1000);
  
  return `${adjective}的${animal}${number}`;
}

// 获取头像URL
export function getAvatarUrl(nickname: string): string {
  // 使用DiceBear的可爱风格头像
  const style = 'adventurer-neutral'; // 也可以使用: 'avataaars', 'bottts', 'pixel-art' 等
  const seed = encodeURIComponent(nickname);
  return `https://api.dicebear.com/7.x/${style}/svg?seed=${seed}&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf`;
}

// 获取头像背景色
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
