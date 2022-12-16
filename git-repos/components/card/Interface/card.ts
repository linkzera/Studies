export interface CardProps {
  id: number;
  name: string;
  owner: {
    login: string;
    avatar_url: string;
    url: string;
  };
  html_url: string;
  description?: string;
  created_at: string;
  updated_at: string;
  language: string;
  forks_count?: number;
  stargazers_count?: number;
  watchers_count?: number;
  open_issues_count?: number;
  repos?: CardProps[];
}
