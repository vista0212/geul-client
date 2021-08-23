export interface IPost {
  id: number;
  title: string;
  body: string;
  isPublished: string;
  createdAt: string;
  file: IFile;
  comments: Array<IComment>;
}

export interface IComment {
  id: number;
  name: string;
  created_at: string;
  body: string;
}

export interface IFile {
  id: number;
  url: string;
}