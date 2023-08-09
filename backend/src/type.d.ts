export interface Note {
  title: string;
  text: string;
  image?: string;
}

export interface User {
  email: string;
  password: string;
  notes: Note[];
  image: string;
}
