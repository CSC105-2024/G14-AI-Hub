type Login = {
  email: string;
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

export type { Login, Hash, UserData, EditUser, Id, ImgId };
