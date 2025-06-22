export const MBTI_TYPES = [
  'ISTJ', 'ISFJ', 'INFJ', 'INTJ',
  'ISTP', 'ISFP', 'INFP', 'INTP',
  'ESTP', 'ESFP', 'ENFP', 'ENTP',
  'ESTJ', 'ESFJ', 'ENFJ', 'ENTJ'
];

export const MBTI_DESCRIPTIONS = {
  'ISTJ': 'The Logistician. Quiet, serious, earn success by thoroughness and dependability. Practical, matter-of-fact, realistic, and responsible.',
  'ISFJ': 'The Protector. Quiet, friendly, responsible, and conscientious. Committed to meeting their obligations.',
  'INFJ': 'The Advocate. Seek meaning and connection in ideas, relationships, and material possessions. Want to understand what motivates people.',
  'INTJ': 'The Architect. Have original minds and great drive for implementing their ideas and achieving their goals.',
  'ISTP': 'The Virtuoso. Tolerant and flexible, quiet observers until a problem appears, then act quickly to find workable solutions.',
  'ISFP': 'The Adventurer. Quiet, friendly, sensitive, and kind. Enjoy the present moment and what\'s going on around them.',
  'INFP': 'The Mediator. Idealistic, loyal to their values and to people who are important to them. Want an external life that is congruent with their values.',
  'INTP': 'The Thinker. Seek to develop logical explanations for everything that interests them. Theoretical and abstract, interested more in ideas than in social interaction.',
  'ESTP': 'The Entrepreneur. Flexible and tolerant, they take a pragmatic approach focused on immediate results. Theories and conceptual explanations bore them.',
  'ESFP': 'The Entertainer. Outgoing, friendly, and accepting. Exuberant lovers of life, people, and material comforts.',
  'ENFP': 'The Campaigner. Enthusiastic, imaginative. See life as full of possibilities. Make connections between events and information very quickly.',
  'ENTP': 'The Debater. Quick, ingenious, stimulating, alert, and outspoken. Resourceful in solving new and challenging problems.',
  'ESTJ': 'The Executive. Practical, realistic, matter-of-fact. Decisive, quickly move to implement decisions. Organize projects and people.',
  'ESFJ': 'The Consul. Warmhearted, conscientious, and cooperative. Want harmony in their environment and work with determination to establish it.',
  'ENFJ': 'The Protagonist. Warm, empathetic, responsive, and responsible. Highly attuned to the emotions, needs, and motivations of others.',
  'ENTJ': 'The Commander. Frank, decisive, assume leadership readily. Quickly see illogical and inefficient procedures and policies.'
};

export const COLORS = {
  primary: '#0071E3',
  lightBlue: '#0077ED',
  darkBlue: '#0068D1',
  background: '#F5F5F7',
  cardBackground: '#FFFFFF',
  text: '#1D1D1F',
  secondaryText: '#86868B',
  lightText: '#6E6E73',
  border: '#D2D2D7',
  error: '#FF3B30'
};

export const DEEPSEEK_CONFIG = {
  baseUrl: "https://api.siliconflow.cn/v1",
  apiKey: process.env.NEXT_PUBLIC_DEEPSEEK_API_KEY || "Please set NEXT_PUBLIC_DEEPSEEK_API_KEY in .env.local file",
  model: "deepseek-ai/DeepSeek-V3",
  maxTokens: 2000,
  temperature: 0.7,
  topP: 0.7,
};

export const LOCAL_STORAGE_KEYS = {
  lastMbti: 'mbti-last-type',
  interpretationHistory: 'mbti-current-interpretation',
  comments: 'mbti-comments',
  lastUsername: 'mbti-last-username'
};