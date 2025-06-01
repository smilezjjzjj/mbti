export interface Interpretation {
  id: string;
  mbtiType: string;
  content: string;
  timestamp: number;
}

export interface MbtiFormData {
  mbtiType: string;
}

export interface InterpretationResponse {
  interpretations: string[];
}

export interface DeepseekResponse {
  id: string;
  choices: {
    message: {
      role: string;
      content: string;
      reasoning_content?: string;
      tool_calls?: {
        id: string;
        type: string;
        function: {
          name: string;
          arguments: string;
        };
      }[];
    };
    finish_reason: string;
  }[];
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
  created: number;
  model: string;
  object: string;
}

export interface InterpretationState {
  loading: boolean;
  error: string | null;
  data: Interpretation | null;
}

export interface Comment {
  id: string;
  mbtiType: string;
  username: string;
  content: string;
  timestamp: number;
  likes: number;
}