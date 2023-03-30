export interface Photo {
  id: number;
  title: string;
  content: string;
  image: string;
}

export interface PhotosState {
  photos: Array<Photo>;
  loading: boolean;
  error: string;
}

export interface ContentTab {
  label: string;
  value: number;
  content: JSX.Element;
}
