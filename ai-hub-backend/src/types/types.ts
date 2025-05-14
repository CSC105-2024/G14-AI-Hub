type Login = {
  newEmail: string;
  password: string;
};

type Hash = {
  hash: string;
};

type UserData =
  | {
      name: string;
      email: string;
      role: string;
    }
  | {
      id: number | null;
    };

type EditUser = {
  name: string;
  email: string;
  password: string | null;
  newPassword: string | null;
};

type Id = {
  id: number;
};

type ImgId = {
  img_id: string;
};

type Course = {
  title: string;
  content: any;
  note: string;
  img1: string;
  img1_id: string;
  img2: string;
  img2_id: string;
  img3: string;
  img3_id: string;
  img4: string;
  img4_id: string;
  user_id: number;
  created_by: string;
};

export type { Login, Hash, UserData, EditUser, Id, ImgId, Course };
