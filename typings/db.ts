interface BaseEntity {
  id: number;
  created_at: string;
  updated_at: string;
  deleted_at: string;
}

export interface IPost extends BaseEntity {
  title: string;
  body: string;
  isPublished: string;
  file: IFile;
  comments: Array<IComment>;
}

export interface IComment  extends BaseEntity {
  id: number;
  name: string;
  body: string;
}

export interface IFile {
  id: number;
  url: string;
}