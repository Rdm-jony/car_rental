import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";

import { signUpSchema } from "@/Model/SignUp_model";
import type { z } from "zod";
import Modal from "../Modal/Modal";
import SignIn from "../SignIn/SignIn";
import { useState } from "react";

type SignInFormData = z.infer<typeof signUpSchema>

const SignUp = () => {
    const [isSignInOpen, setIsSignInOpen] = useState(false);

    const form = useForm<SignInFormData>({
        resolver: zodResolver(signUpSchema),
    })
    const onSubmit = (data: SignInFormData) => {
        console.log(data)
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="username"
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
                <p className="text-xs">Already have account?<span className="text-primary" onClick={() => setIsSignInOpen(true)}> click here</span></p>
                <Button type="submit" className="w-full">Submit</Button>
            </form>
            {/* Controlled Modal */}
            <Modal
                open={isSignInOpen}
                onOpenChange={setIsSignInOpen}
                title={
                    <p className="text-2xl">
                        <span className="text-primary">User</span> Sign Up
                    </p>
                }
            >
                <SignIn />
            </Modal>
        </Form>
    );
};

export default SignUp;