export const MBTI_TYPES = [
  'ISTJ', 'ISFJ', 'INFJ', 'INTJ',
  'ISTP', 'ISFP', 'INFP', 'INTP',
  'ESTP', 'ESFP', 'ENFP', 'ENTP',
  'ESTJ', 'ESFJ', 'ENFJ', 'ENTJ'
];

export const MBTI_DESCRIPTIONS = {
  'ISTJ': '尽责的现实主义者。安静、严肃，通过全面性和可靠性获得成功。实际、注重事实、现实，并对自己和他人的责任感强。',
  'ISFJ': '尽职的守护者。安静、友善、负责任和谨慎。坚定地致力于履行义务。',
  'INFJ': '富有洞察力的理想主义者。寻求思想、关系和物质之间的意义和联系。希望了解什么能激励人们。',
  'INTJ': '富有想象力的战略家。具有创新的思维和强大的推动力来实施想法和实现目标。',
  'ISTP': '灵活的分析者。宽容灵活，安静地观察直到问题出现，然后迅速行动找到可行的解决方案。',
  'ISFP': '富有艺术感的探索者。安静、友善、敏感和善良。享受当下和周围发生的事情。',
  'INFP': '富有同情心的理想主义者。理想主义，忠于自己的价值观和重要的人。希望过与价值观相符的外在生活。',
  'INTP': '创新的思想家。寻求为感兴趣的一切发展逻辑解释。理论性和抽象性强，对思想比社交互动更感兴趣。',
  'ESTP': '灵活的行动者。灵活和宽容，采用注重即时结果的务实方法。理论和概念性解释让他们感到厌烦。',
  'ESFP': '活力四射的表演者。外向、友善和包容。热爱生活、人和物质享受。',
  'ENFP': '热情的创新者。热情洋溢且富有想象力。视生活充满可能性。能快速建立事件和信息之间的联系。',
  'ENTP': '大胆的思想家。机智、聪明、善于激发他人、警觉和直言不讳。在解决新的和具有挑战性的问题时足智多谋。',
  'ESTJ': '高效的管理者。实际、现实、注重事实。果断，迅速采取行动实施决策。组织项目和人员。',
  'ESFJ': '关爱的协调者。热心、有责任心和合作精神。希望周围环境和谐，并为建立和谐而坚定地工作。',
  'ENFJ': '富有同理心的领导者。温暖、善解人意、反应敏捷且负责。高度关注他人的情感、需求和动机。',
  'ENTJ': '果断的指挥官。坦率、果断，天生的领导者。快速发现不合逻辑和效率低下的程序和政策。'
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
  apiKey: process.env.NEXT_PUBLIC_OPENROUTER_API_KEY || "请在.env.local文件中设置NEXT_PUBLIC_OPENROUTER_API_KEY",
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