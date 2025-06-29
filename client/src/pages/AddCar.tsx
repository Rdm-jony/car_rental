import DashboardHeading from "@/components/Heading/DashboardHeading";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { carZodSchema } from "@/Model/car_model";
import { Textarea } from "@/components/ui/textarea";
import { ImageUp, } from "lucide-react";
import { Label } from "@/components/ui/label";
import { useState } from "react";



const AddCar = () => {
    const [image, setImage] = useState<File | null>(null)
    const form = useForm<z.infer<typeof carZodSchema>>({
        resolver: zodResolver(carZodSchema),

    })

    function onSubmit(data: z.infer<typeof carZodSchema>) {

          const formData = new FormData();
          for(const key in data){
            const value=data[key as keyof typeof data]
            formData.append(key,value as string | File)
          }
          console.log(formData)

    }
    return (
        <div>
            <DashboardHeading title="Add New Car" description="Fill in details to list a new car for booking, including pricing, availability, and car specifications" />
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-3 gap-5">
                    <FormField
                        control={form.control}
                        name="image"
                        render={({ field }) => (
                            <FormItem className="col-span-3">
                                <FormControl>
                                    <div className="flex gap-5 items-center">
                                        <Label htmlFor="image">
                                            {
                                                image ? <img className="w-20 h-20" src={URL.createObjectURL(image)} alt="" /> : <div className="w-20 text-muted-foreground h-20 bg-gray-50 flex justify-center items-center">
                                                    <ImageUp />
                                                </div>
                                            }


                                            <Input
                                                id="image"
                                                type="file"
                                                accept="image/*"
                                                className="hidden"
                                                onChange={(e) => {
                                                    const file = e.target.files?.[0] ?? null;  // undefined becomes null
                                                    field.onChange(file);
                                                    setImage(file);
                                                }}
                                            />
                                        </Label>
                                        <p className="text-muted-foreground">Upload a picture of your car</p>
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="brand"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Brand</FormLabel>
                                <FormControl>
                                    <Input className="placeholder:text-xs" placeholder="e.g. BMW, Mercedes, Audi..." {...field} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Category</FormLabel>
                                <FormControl>
                                    <Input className="placeholder:text-xs" placeholder="Sedan" {...field} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="fuelTypes"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Fuel Type</FormLabel>
                                <FormControl>
                                    <Input className="placeholder:text-xs" placeholder="Disel" {...field} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="seatingCapacity"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Seating Capacity</FormLabel>
                                <FormControl>
                                    <Input className="placeholder:text-xs" placeholder="5" {...field} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="model"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Model</FormLabel>
                                <FormControl>
                                    <Input className="placeholder:text-xs" placeholder="e.g. X5, E-Class, M4..." {...field} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="year"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Year</FormLabel>
                                <FormControl>
                                    <Input className="placeholder:text-xs" placeholder="2025" {...field} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="pricePerDay"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Price Per day</FormLabel>
                                <FormControl>
                                    <Input type="number" className="placeholder:text-xs" placeholder="100" {...field} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="transmission"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Transmission</FormLabel>
                                <FormControl>
                                    <Input className="placeholder:text-xs" placeholder="Automatic" {...field} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="location"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Location</FormLabel>
                                <FormControl>
                                    <Input className="placeholder:text-xs" placeholder="eg. San Francisco, CA" {...field} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem className="col-span-3">
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Describe your car, its condition, and any notable details..."
                                        className="resize-none"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button className="w-20" type="submit">Submit</Button>
                </form>
            </Form>
        </div >
    );
};

export default AddCar;