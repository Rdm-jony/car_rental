import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";

import { signUpSchema, type IUser } from "@/Model/SignUp_model";
import { useSignUpMutation, type IErrorResponse } from "@/Redux/baseAPi";
import { toast } from "sonner";


const SignUp = () => {
    const [signUp] = useSignUpMutation()

    const form = useForm<Pick<IUser, 'email' | 'name' | 'password'>>({
        resolver: zodResolver(signUpSchema),
    })

    const onSubmit = async (value: Pick<IUser, 'email' | 'name' | 'password'>) => {
        try {
            const response = await signUp(value).unwrap();
            toast.success(response.message)
        } catch (error: unknown) {
            const err = error as IErrorResponse;
            toast.error(err.data?.message || 'Something went wrong');
        }
    };

    return (
        <div className="h-screen flex justify-center items-center">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-1/3 border-2 p-8 rounded-xl shadow-xl">
                    <h1 className="text-3xl font-semibold text-center"><span className="text-primary">User</span> Sign Up</h1>

                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="Username" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
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
                    <p className="text-xs">Already have account?<a className="text-primary" > click here</a></p>
                    <Button type="submit" className="w-full">Submit</Button>
                </form>
                {/* Controlled Modal */}

            </Form>
        </div>
    );
};

export default SignUp;