import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema } from "@/Model/SignIn_model";
import { useSignInMutation, type IErrorResponse } from "@/Redux/baseAPi";
import type { IUser } from "@/Model/SignUp_model";
import { toast } from "sonner";
import { useNavigate } from "react-router";


const SignIn = () => {
    const [signIn] = useSignInMutation()
    const navigate=useNavigate()

    const form = useForm<Pick<IUser, 'email' | 'password'>>({
        resolver: zodResolver(signInSchema),
    })

    const onSubmit = async (data: Pick<IUser, 'email' | 'password'>) => {
        try {
            const response = await signIn(data).unwrap();
            toast.success(response.message)
            navigate("/")
        } catch (error: unknown) {
            const err = error as IErrorResponse;
            toast.error(err.data?.message || 'Something went wrong');
        }
    }

    return (
        <div className="h-screen flex justify-center items-center">

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-1/3 border-2 p-8 rounded-xl shadow-xl">
                    <h1 className="text-3xl font-semibold text-center"><span className="text-primary">User</span> Sign In</h1>
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="Email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input placeholder="Password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <p className="text-xs">Create an account?<span className="text-primary" > click here</span></p>
                    <Button type="submit" className="w-full">Submit</Button>
                </form>
                {/* Controlled Modal */}

            </Form >
        </div>
    );
};

export default SignIn;