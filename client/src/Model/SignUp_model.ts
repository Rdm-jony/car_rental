import { z } from "zod";


export type IUser= z.infer<typeof signUpSchema> & {role: "owner" | "user" | null, image?: string,_id:string}


export const signUpSchema = z.object({
  name: z.string().min(2, "Username must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});