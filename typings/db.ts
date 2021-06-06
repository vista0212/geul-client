export interface IPost {
  id?: number;
  title?: string;
  body?: string;
  isPublished?: string;
  createdAt?: string;
  file?: IFile
}

export interface IComment {
  id: number;
  nickname: string;
  created_at: string;
  body: string;
}

export interface IFile {
  id: number;
  url: string;
}