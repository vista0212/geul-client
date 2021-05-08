export interface IPost {
  id: number;
  title: string;
  thumbnail: string;
  created_at: string;
}

export interface IComment {
  id: number;
  nickname: string;
  created_at: string;
  body: string;
}