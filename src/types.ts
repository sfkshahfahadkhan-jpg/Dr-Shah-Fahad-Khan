export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: string;
  explanation?: string;
}

export interface QuizSubmission {
  id: string;
  studentEmail: string;
  studentName: string;
  score: number;
  total: number;
  sectionName: string;
  submittedAt: number;
}

export type QuizState = 'welcome' | 'register' | 'quiz' | 'results' | 'admin';

export interface UserProgress {
  currentQuestionIndex: number;
  answers: Record<string, string>;
  isFinished: boolean;
  score: number;
  startTime?: number;
}
