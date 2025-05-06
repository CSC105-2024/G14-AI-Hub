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

export type { Login, Hash, UserData };
