import { Hono } from "hono";
import {
  registerUser,
  verifyUser,
} from "../controllers/user/register/register.user.ts";
import { loginUser } from "../controllers/user/login/login.user.ts";
import { editUser } from "../controllers/user/edit/edit.user.ts";
import { uploadProfile } from "../controllers/user/upload-profile/upload.profile.ts";
import { verify } from "../middlewares/verify.ts";
import { logout } from "../controllers/user/logout/logout.ts";

const userRouter = new Hono();

userRouter.post("/register", registerUser);
userRouter.get("/verify/:token", verifyUser);
userRouter.post("/login", loginUser);
userRouter.post("/logout", logout);
userRouter.put("/edit", verify, editUser);
userRouter.post("/upload", verify, uploadProfile);

export { userRouter };
