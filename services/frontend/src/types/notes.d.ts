export interface Note {
  id: number;
  title: string;
  content: string;
  author: {
    id: number;
    username: string;
    full_name: string;
  };
  created_at: string;
}
