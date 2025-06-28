import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import type { z } from "zod";
import { signInSchema } from "@/Model/SignIn_model";
import Modal from "../Modal/Modal";
import SignUp from "../SignIUp/SignUp";
import { useState } from "react";

type SignInFormData = z.infer<typeof signInSchema>

const SignIn = () => {
    const [isSignUpOpen, setIsSignUpOpen] = useState(false);

    const form = useForm<SignInFormData>({
        resolver: zodResolver(signInSchema),
    })
    const onSubmit = (data: SignInFormData) => {
        console.log(data)
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                <p className="text-xs">Create an account?<span className="text-primary" onClick={() => setIsSignUpOpen(true)}> click here</span></p>
                <Button type="submit" className="w-full">Submit</Button>
            </form>
            {/* Controlled Modal */}
            <Modal
                open={isSignUpOpen}
                onOpenChange={setIsSignUpOpen}
                title={
                    <p className="text-2xl">
                        <span className="text-primary">User</span> Sign Up
                    </p>
                }
            >
                <SignUp />
            </Modal>
        </Form >
    );
};

export default SignIn;