export interface QA {
  question: string;
  answer: string;
}

export interface Product {
  name: string;
  slug: string;
  category: string;
  description: string;
  benefits: string[];
  image?: string;
  qa?: QA[];
}
