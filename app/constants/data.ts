export interface Source {
  id: string;
  name: string;
}

export interface Article {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: Source;
  title: string;
  url: string;
  urlToImage: string;
}

export interface NewsApiData {
  articles: Article[];
  status: string;
  totalResults: number;
}

export interface ArticleOffline {
  id: number | null;
  author: string | null;
  content: string | null;
  description: string | null;
  publishedAt: string;
  title: string;
  url: string;
  urlToImage: string | null;
}
