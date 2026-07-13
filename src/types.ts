export interface DISCAnswer {
  questionId: number;
  mostOptionId: string | null;  // Paling Sesuai
  leastOptionId: string | null; // Kurang Sesuai
}

export interface TestState {
  answers: Record<number, DISCAnswer>;
  currentQuestionIndex: number;
  isCompleted: boolean;
  useTimer: boolean;
  elapsedTime: number; // in seconds
  questionOrder?: number[];
  optionOrder?: Record<number, string[]>;
}
