export interface UserProps {
  login: string;
  avatar_url?: string;
  html_url?: string;
  created_at?: string;
  followers?: number;
  following?: number;
  public_repos?: number;
  public_gists?: number;
  location?: string;
  name?: string;
  id?: number;
  gists_url?: string;
  hireable?: boolean;
  bio?: string;
}
