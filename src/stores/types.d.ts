type Result = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

type Data = {
  response_code: number;
  results: Result[];
};

export type ApiData = {
  data: Data;
};
