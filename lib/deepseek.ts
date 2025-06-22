'use client';

import { DEEPSEEK_CONFIG } from './constants';
import { DeepseekResponse } from './types';

function cleanMarkdownSyntax(text: string): string {
  return text
    .replace(/[*#_`]/g, '') // Remove Markdown markers
    .replace(/\n{3,}/g, '\n\n') // Replace multiple line breaks with double line breaks
    .replace(/[ \t]+/g, ' ') // Replace multiple spaces and tabs with single space
    .trim(); // Remove leading and trailing spaces
}

// Professional-level mock data, reaching professional MBTI report standards
function getMockInterpretation(mbtiType: string): string[] {
  const mockData: { [key: string]: string[] } = {
    'INTJ': [
      'Career Development In-Depth Analysis: As an "Architect" personality type, you possess an extremely rare combination of strategic thinking and execution capabilities, giving you unique competitive advantages in the workplace. Your brain naturally possesses systematic thinking abilities, enabling you to identify hidden patterns and potential opportunities in complex information that others cannot perceive. In career choices, you are best suited for senior positions requiring long-term strategic planning, innovative thinking, and independent decision-making authority, such as corporate strategic director, product architect, research project leader, investment analyst, management consulting consultant, etc. Your core advantage lies in being able to transform abstract concepts and visions into concrete actionable implementation plans while maintaining attention to detail and strict quality requirements. However, it should be noted that your excessive pursuit of perfection may affect project efficiency. It is recommended to learn to find a balance between "perfection" and "timely delivery." In career development, you should actively seek opportunities that can fully leverage your innovation capabilities and strategic thinking, while consciously cultivating teamwork and communication skills. Learn to convey your grand visions to team members in an accessible way, which will greatly enhance your leadership effectiveness.',
      'Interpersonal Relationships In-Depth Analysis: You demonstrate highly selective and deep characteristics in interpersonal relationships, which is both your strength and a challenge that needs balance. You naturally dislike superficial social activities and prefer to establish deep spiritual connections with people of similar intellectual levels and compatible values. Your social circle may be relatively small, but each relationship goes through careful screening and long-term trust-building processes. In intimate relationships, you are an extremely loyal and reliable partner, accustomed to expressing care and commitment through actions rather than flowery words. You have high expectations for partners, hoping they can understand and support your ideals and goals while resonating with you intellectually. However, you may face certain challenges in emotional expression and understanding others\' emotional needs. Your rational thinking patterns sometimes cause you to overlook the importance of emotional factors, which may lead those close to you to feel ignored or misunderstood. It is recommended that you actively learn and practice emotional intelligence skills, trying to express care and love in ways that others can understand and accept.',
      'Personal Growth Comprehensive Guide: Your personal growth journey is a deep process of continuous self-improvement and gradual realization of grand visions. As an INTJ type, you naturally possess strong learning desires and self-motivation, which are your most valuable growth assets. However, true growth requires you to find dynamic balance between rationality and emotion, independence and cooperation, perfectionism and pragmatism. It is recommended that you establish clear long-term growth goals and break them down into specific, measurable phased plans. While pursuing excellence, learn to accept "good enough" standards to avoid falling into perfectionism traps and missing important opportunities. Your growth focus should include: first, cultivating patience and empathy, which will significantly improve your collaboration effectiveness with others; second, developing public speaking and team leadership skills, learning to inspire and influence others; third, expanding your knowledge boundaries, not only deepening your professional field but also exploring other disciplines to gain cross-disciplinary insights.'
    ],
    'ENFP': [
      'Career Development In-Depth Analysis: As a "Campaigner" personality type, you are a natural motivator, innovator, and change driver in the workplace. You possess extremely rare enthusiasm and creative thinking that enables you to become a source of positive energy and innovative ideas in any work environment. Your career advantages are mainly reflected in: excellent interpersonal communication skills, keen market insight, strong adaptability and learning ability, and the talent to transform abstract concepts into engaging stories. You are best suited for career fields that allow creative expression, frequent interpersonal interaction, and diverse work content, such as marketing director, public relations specialist, training and education consultant, creative designer, psychological counselor, product manager, media planner, etc. In these fields, you can fully leverage your innovative thinking and interpersonal influence to create outcomes that have both commercial value and social significance.',
      'Interpersonal Relationships In-Depth Analysis: You are a natural builder and maintainer in the field of interpersonal relationships, possessing extremely rare empathy and emotional contagion abilities. You can quickly establish deep connections with people of various personality types, making them feel truly understood, valued, and inspired. Your social network is usually very broad and diverse, covering friends of all ages, professional backgrounds, and cultural backgrounds, each of whom can gain unique inspiration, support, and positive energy from interacting with you. In friendships, you are the type who can remember friends\' important dates, proactively offer help, and provide warm support during difficult times. You are good at discovering others\' strengths and potential and can express appreciation and encouragement in appropriate ways.',
      'Personal Growth Comprehensive Guide: Your personal growth journey is full of infinite possibilities and exciting changes, but it also requires clear direction and focus cultivation. As an ENFP type, you naturally possess excellent adaptability, learning ability, and the talent to draw wisdom from various experiences, all of which are valuable assets on your growth path. However, to achieve true personal breakthroughs and long-term success, you need to consciously cultivate some key abilities while maintaining your natural vitality. Your growth focus should include the following aspects: first, focus and execution cultivation is the area you most need to break through. It is recommended that you learn to make wise choices among numerous tempting opportunities, establish a flexible but clear goal system, allow yourself to adjust directions appropriately during pursuit, but ensure you always move toward meaningful core goals.'
    ],
    'ISTJ': [
      'Career Development In-Depth Analysis: As a "Logistician" personality type, you are an indispensable solid foundation in modern organizational structures and social operating systems. You possess an extremely precious combination of qualities: unparalleled sense of responsibility, high reliability, excellent execution, and systematic thinking abilities, all of which have enormous value in any professional environment. Your work style is characterized by stability, precision, and orderliness, enabling you to establish and maintain efficient operational systems in complex work environments. You are best suited for career fields requiring precision, stability, systematic management, and long-term planning, such as financial management, auditing, project management, legal affairs, healthcare, government service, quality control, operations management, etc.',
      'Interpersonal Relationships In-Depth Analysis: You demonstrate precious qualities of deep loyalty, reliability, and long-term commitment in interpersonal relationships, making you an extremely important and trustworthy presence in others\' lives. Although you may not be the type who is good at expressing emotions with flowery words, you prove your care, support, and commitment through continuous practical actions. Your friends and family know deeply that whenever and wherever they need help, you will not hesitate to extend a helping hand, providing real support and solutions.',
      'Personal Growth Comprehensive Guide: Your personal growth journey is a deep process of steady progress, continuous accumulation, and gradual improvement. As an ISTJ type, you naturally possess excellent qualities of self-discipline, perseverance, and long-term persistence, all of which are important foundations for achieving major life goals. However, in the rapidly changing modern society, true growth requires you to consciously expand your ability boundaries and thinking patterns while maintaining your core advantages.'
    ]
  };

  return mockData[mbtiType] || [
    `Career Development In-Depth Analysis: ${mbtiType} personality types possess unique and valuable career advantages and tremendous development potential. Your personality trait combination determines that you can perform excellently or even outstandingly in specific fields. The key is to deeply understand and fully leverage your core strengths. It is recommended to conduct comprehensive self-assessment, identify your most prominent abilities and most interesting areas, then choose career directions that can maximize these advantages. At the same time, honestly face your development blind spots and potential weaknesses, gradually improving through targeted learning, practice, and seeking help from others. When making career plans, comprehensively consider industry development trends, personal value alignment, economic returns, and achievement satisfaction, seeking work that can achieve both financial goals and bring deep satisfaction. Remember, the most ideal career is not just high-paying or high-status work, but work that makes you feel fulfilled, meaningful, enables continuous growth, and has a positive impact on society.`,
    `Interpersonal Relationships In-Depth Analysis: As a ${mbtiType} type, you have unique styles, strengths, and growth spaces in interpersonal interactions. Deeply understanding your communication preferences, emotional expression methods, and social needs will help you build more harmonious, deep, and meaningful interpersonal networks. Learn to truly appreciate and understand people of different personality types, as this diversity can not only bring rich and colorful experiences to your life but also provide valuable learning and growth opportunities. When dealing with interpersonal conflicts and disagreements, fully utilize your personality strengths while learning appropriate compromise and adjustment to find win-win solutions. Establishing healthy and clear interpersonal boundaries is very important - maintain an open and friendly attitude while protecting your core needs, values, and personal space.`,
    `Personal Growth Comprehensive Guide: Your personal growth journey has unique characteristics and infinite potential of the ${mbtiType} type, requiring personalized development strategies and implementation plans. Fully recognize and leverage your natural strengths, which are the foundation and driving force of your growth. At the same time, bravely face and actively improve your relative weaknesses, viewing them as growth opportunities rather than obstacles. Develop learning and development plans that match your personality characteristics and life rhythm, choosing the most suitable growth methods, learning approaches, and progress pace for you. Maintain an open and inclusive mindset, actively embrace new experiences, challenges, and learning opportunities, as these are valuable resources for promoting personal breakthroughs and ability enhancement.`
  ];
}

async function fetchWithRetry(url: string, options: RequestInit, retries = 3, delay = 2000): Promise<Response> {
  try {
    console.log(`Making API request (retries remaining: ${retries})`);
    
    // Create new AbortController
    const controller = new AbortController();
    let timeoutId: NodeJS.Timeout | null = null;
    
    // Set timeout
    const timeoutPromise = new Promise<never>((_, reject) => {
      timeoutId = setTimeout(() => {
        console.log('Request timeout, aborting request...');
        controller.abort();
        reject(new Error('Request timeout'));
      }, 120000); // 2 minute timeout
    });
    
    // Make request
    const fetchPromise = fetch(url, {
      ...options,
      signal: controller.signal
    });
    
    // Race: request completion vs timeout
    const response = await Promise.race([fetchPromise, timeoutPromise]);
    
    // Clear timeout
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    
    console.log('API request completed, status code:', response.status);
    
    // Handle specific error codes
    if (response.status === 429) {
      throw new Error('API request rate limit exceeded, please try again later');
    }
    
    if (response.status === 401) {
      throw new Error('API key is invalid or expired, please check your API key settings');
    }
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(`API request failed: ${response.status} ${response.statusText} - ${JSON.stringify(errorData)}`);
    }
    
    return response;
  } catch (error) {
    console.error(`Request attempt failed (retries remaining: ${retries}):`, error);
    
    // Improved error handling
    if (error instanceof Error) {
      if (error.name === 'AbortError' || error.message.includes('Request timeout')) {
        console.log('Request was aborted or timed out');
        if (retries <= 0) {
          throw new Error('Request timeout, please check network connection or try again later');
        }
      }
      if (error.message.includes('Failed to fetch')) {
        console.log('Network connection failed');
        if (retries <= 0) {
          throw new Error('Network connection failed, please check network settings');
        }
      }
    }
    
    if (retries <= 0) throw error;
    
    console.log(`Retrying in ${delay}ms...`);
    await new Promise(resolve => setTimeout(resolve, delay));
    return fetchWithRetry(url, options, retries - 1, delay * 1.5);
  }
}

export async function generateMbtiInterpretationWithDeepseek(mbtiType: string, quickMode: boolean = false): Promise<string[]> {
  try {
    // Debug: Check API key
    console.log('API key check:', {
      hasKey: !!DEEPSEEK_CONFIG.apiKey,
      keyLength: DEEPSEEK_CONFIG.apiKey?.length,
      keyStart: DEEPSEEK_CONFIG.apiKey?.substring(0, 10),
      isDefault: DEEPSEEK_CONFIG.apiKey?.includes('Please set')
    });
    
    // Check if API key is set
    if (!DEEPSEEK_CONFIG.apiKey || DEEPSEEK_CONFIG.apiKey.includes('Please set')) {
      throw new Error('API key not set, please set NEXT_PUBLIC_DEEPSEEK_API_KEY in .env.local file');
    }
    
    console.log(`Using real API for MBTI interpretation... ${quickMode ? '(Quick Mode)' : '(Standard Mode)'}`);
    
    // Adjust prompt and parameters based on mode
    const systemPrompt = quickMode 
      ? `You are a world-class MBTI personality analysis expert with a PhD in Psychology and 20 years of clinical experience.

Please provide professional MBTI personality type interpretation according to the following requirements:

1. Use standard English punctuation:
   - End sentences with periods (.)
   - Use commas (,) for separation
   - Use colons (:) for explanations
   - Use semicolons (;) for complex sentence separation
   - Use quotation marks ("") for emphasis
   - Use dashes (--) for explanations or supplements

2. Content requirements:
   - 300-400 words per aspect
   - Fluent and natural language with clear logic
   - Incorporate latest psychological research and practical advice
   - Avoid special symbols, asterisks, hash marks, etc.

3. Format requirements:
   - Express directly in plain text
   - Separate paragraphs with line breaks
   - Do not use Markdown formatting`
      : `You are a world-class MBTI personality analysis expert with a PhD in Psychology and 20 years of clinical experience.

Please provide in-depth professional MBTI personality type interpretation according to the following requirements:

1. Use standard English punctuation:
   - End sentences with periods (.)
   - Use commas (,) for separation
   - Use colons (:) for explanations
   - Use semicolons (;) for complex sentence separation
   - Use quotation marks ("") for emphasis
   - Use dashes (--) for explanations or supplements

2. Content requirements:
   - 600-800 words per aspect
   - Rigorous professional language with clear logical structure
   - Incorporate latest psychological research, cognitive science theories, and extensive practical cases
   - Content with extremely high professional standards and practical value

3. Format requirements:
   - Express directly in plain text
   - Separate paragraphs with line breaks
   - Do not use Markdown formatting, special symbols, asterisks, hash marks, etc.`;
    
    const userPrompt = quickMode
      ? `My MBTI type is ${mbtiType}. Please provide world-class professional interpretation from the following three perspectives, 300-400 words each, requiring deep professional content with strong practicality and proper punctuation:

1. Career Development In-Depth Analysis
Explore your career advantages and development paths, including cognitive advantage analysis, most suitable career fields, work style characteristics, workplace success strategies, leadership development paths, career bottleneck breakthrough methods.

2. Interpersonal Relationships In-Depth Analysis
Analyze your social psychological characteristics, including communication pattern analysis, friendship establishment and maintenance, intimate relationship characteristics, conflict handling strategies, interpersonal influence enhancement methods.

3. Personal Growth Comprehensive Guide
Develop your growth and development plan, including cognitive development characteristics, learning style optimization, emotional management strategies, stress coping mechanisms, potential development directions, long-term development planning.

Please ensure content has psychological theory support, contains specific actionable advice, and uses proper English punctuation.`
      : `My MBTI type is ${mbtiType}. Please provide world-class professional interpretation from the following three perspectives, 600-800 words each, requiring the professional standards of top psychological counselors with proper punctuation:

1. Career Development In-Depth Analysis
In-depth analysis of your career development potential, including workplace application analysis of cognitive function advantages, most suitable career fields and specific position recommendations, work style characteristics and team collaboration modes, core strategies and key abilities for workplace success, leadership development paths and management styles, identification and breakthrough methods for career bottlenecks, long-term career planning and transformation strategies.

2. Interpersonal Relationships In-Depth Analysis
Comprehensive analysis of your interpersonal interaction patterns, including social psychological characteristics and behavioral pattern analysis, communication style advantages and potential blind spots, strategies for friendship establishment, maintenance and deepening, performance characteristics and needs in intimate relationships, conflict handling and problem-solving abilities, establishment and enhancement of interpersonal influence, construction and maintenance of social networks.

3. Personal Growth Comprehensive Guide
Develop your comprehensive growth plan, including cognitive development characteristics and thinking pattern optimization, personalized learning styles and knowledge acquisition strategies, emotional management and mental health maintenance, stress coping mechanisms and resilience cultivation, specific directions and methods for potential development, personality improvement and self-actualization paths, long-term development planning and goal-setting strategies.

Please ensure content is based on latest psychological research, contains rich practical cases and specific actionable advice, reaching world-class psychological consultation professional standards with proper English punctuation.`;

    console.log('Starting API call...');

    const response = await fetchWithRetry(
      `${DEEPSEEK_CONFIG.baseUrl}/chat/completions`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${DEEPSEEK_CONFIG.apiKey}`,
        },
        body: JSON.stringify({
          model: DEEPSEEK_CONFIG.model,
          messages: [
            {
              role: 'system',
              content: systemPrompt
            },
            {
              role: 'user',
              content: userPrompt
            }
          ],
          stream: false,
          max_tokens: quickMode ? 2000 : 4000,
          temperature: quickMode ? 0.6 : 0.7,
          top_p: 0.9,
          response_format: {
            type: "text"
          },
        }),
      },
      2 // Maximum 2 retries
    );

    console.log('API response status:', response.status);

    const data = await response.json() as DeepseekResponse;
    
    if (!data.choices || data.choices.length === 0 || !data.choices[0].message.content) {
      throw new Error('API returned incorrect data format or empty content');
    }
    
    console.log('API call successful, parsing response content...');
    console.log('Original response length:', data.choices[0].message.content.length);
    
    // Parse response content, extract interpretation content
    let content = data.choices[0].message.content;
    
    // Punctuation normalization processing
    content = normalizePunctuation(content);
    
    console.log('Normalized content length:', content.length);
    console.log('Content preview:', content.substring(0, 200) + '...');
    
    // Improved content parsing logic
    let sections: string[] = [];
    
    // Method 1: Split by numbered sections (1. 2. 3.)
    const numberedSections = content.match(/\d+[.]\s*[^]*?(?=\d+[.]|$)/g);
    if (numberedSections && numberedSections.length >= 3) {
      console.log('Using numbered section split, found', numberedSections.length, 'sections');
      sections = numberedSections.slice(0, 3).map((section, index) => {
        // Remove leading number
        const cleaned = section.replace(/^\d+[.]\s*/, '').trim();
        const processed = cleanMarkdownSyntax(cleaned);
        console.log(`Numbered section ${index + 1} length:`, processed.length);
        console.log(`Numbered section ${index + 1} preview:`, processed.substring(0, 100) + '...');
        return processed;
      });
    }
    
    // Method 2: If no numbering found, split by keywords
    if (sections.length < 3) {
      console.log('Numbered section split failed, trying keyword split');
      const keywords = ['Career Development In-Depth Analysis', 'Interpersonal Relationships In-Depth Analysis', 'Personal Growth Comprehensive Guide'];
      
      for (const keyword of keywords) {
        // More precise keyword matching
        const regex = new RegExp(`${keyword}[:]?[^]*?(?=${keywords.filter(k => k !== keyword).map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')}|$)`, 'i');
        const match = content.match(regex);
        if (match) {
          // Remove keyword title
          const cleaned = match[0].replace(new RegExp(`^${keyword}[:]?\\s*`, 'i'), '').trim();
          const processed = cleanMarkdownSyntax(cleaned);
          console.log(`Keyword "${keyword}" match length:`, processed.length);
          console.log(`Keyword "${keyword}" preview:`, processed.substring(0, 100) + '...');
          sections.push(processed);
        }
      }
    }
    
    // Method 3: If still not enough, split by double line breaks
    if (sections.length < 3) {
      console.log('Keyword split failed, trying double line break split');
      const paragraphs = content
        .split(/\n\s*\n/)
        .filter(p => p.trim().length > 100) // Increase minimum length requirement
        .slice(0, 3)
        .map((p, index) => {
          const processed = cleanMarkdownSyntax(p.trim());
          console.log(`Paragraph ${index + 1} length:`, processed.length);
          console.log(`Paragraph ${index + 1} preview:`, processed.substring(0, 100) + '...');
          return processed;
        });
      
      if (paragraphs.length >= 3) {
        console.log('Double line break split successful, found', paragraphs.length, 'paragraphs');
        sections = paragraphs;
      }
    }
    
    // Method 4: If parsing fails, return entire content split into three parts
    if (sections.length < 3) {
      console.log('All split methods failed, force splitting into three parts');
      const contentLength = content.length;
      const partLength = Math.floor(contentLength / 3);
      sections = [
        content.substring(0, partLength),
        content.substring(partLength, partLength * 2),
        content.substring(partLength * 2)
      ].map((part, index) => {
        const processed = cleanMarkdownSyntax(part.trim());
        console.log(`Force split part ${index + 1} length:`, processed.length);
        console.log(`Force split part ${index + 1} preview:`, processed.substring(0, 100) + '...');
        return processed;
      });
    }
    
    // Validate content quality
    const minLength = 200; // Increase minimum length requirement
    const validSections = sections.filter(s => s.length >= minLength);
    
    if (validSections.length < 3 && content.length > 600) {
      console.log('Some content too short, re-splitting by length');
      const contentLength = content.length;
      const partLength = Math.floor(contentLength / 3);
      sections = [
        content.substring(0, partLength),
        content.substring(partLength, partLength * 2),
        content.substring(partLength * 2)
      ].map((part, index) => {
        const processed = cleanMarkdownSyntax(part.trim());
        console.log(`Re-split part ${index + 1} length:`, processed.length);
        return processed;
      });
    } else if (validSections.length >= 3) {
      sections = validSections.slice(0, 3);
    }
    
    console.log('Final parsed section count:', sections.length);
    console.log('Section lengths:', sections.map(s => s.length));
    console.log('Section integrity check:', sections.map((s, i) => ({
      index: i + 1,
      length: s.length,
      startsWithTitle: /^(Career Development|Interpersonal Relationships|Personal Growth)/.test(s),
      endsComplete: /[.!?]$/.test(s.trim())
    })));
    
    if (sections.length === 0 || sections.every(s => s.length < 100)) {
      throw new Error('Parsed content is empty or too short, please retry');
    }
    
    return sections.slice(0, 3);
  } catch (error) {
    console.error('Error generating MBTI interpretation with Deepseek:', error);
    console.log('Detailed information about API call failure:', {
      errorName: error instanceof Error ? error.name : 'Unknown',
      errorMessage: error instanceof Error ? error.message : String(error),
      mbtiType: mbtiType,
      quickMode: quickMode
    });
    
    // Re-throw error, don't use mock data
    throw new Error(`MBTI interpretation generation failed: ${error instanceof Error ? error.message : String(error)}`);
  }
}

// New: Punctuation normalization function
function normalizePunctuation(text: string): string {
  return text
    // Normalize basic punctuation
    .replace(/[.．]/g, '.')
    .replace(/[,，]/g, ',')
    .replace(/[:：]/g, ':')
    .replace(/[;；]/g, ';')
    .replace(/[?？]/g, '?')
    .replace(/[!！]/g, '!')
    .replace(/[-—–−]/g, '--')
    .replace(/--+/g, '--')
    .replace(/…/g, '...')
    .replace(/\.\.\./g, '...')
    .replace(/\(/g, '(')
    .replace(/\)/g, ')')
    // Remove extra spaces
    .replace(/\s+/g, ' ')
    .replace(/\s+([.,;:?!)])/g, '$1')
    .replace(/([()])\s+/g, '$1')
    .replace(/([.!?])([^.!?\s])/g, '$1 $2')
    .trim();
}