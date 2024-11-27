"use client";
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
    username: z.string().min(2, { message: "Username must be atleast 2 characters"}),
    email: z.string().email({message: "Invalid email address"}),
    phoneNumber: z.string().min(10, { message: "Enter a valid phone number"}).max(10, {message: "Phone number must not exceed 10 digits"}),
    country: z.enum(["India", "USA", "UK", "Australia"], {message: "Enter a valid country"})

})
const UserForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues:{
            username: "",
            email: "",
            phoneNumber: "",
            country: "India",
        }
    })
    const onSubmit = () => {
    }
    return (
        <section className="py-[100px]">
            <div className="lg:container mx-auto">
                <div className="grid grid-cols-2">
                    <div className="relative">
                        <h2 className="text-4xl font-medium">Hello!!! </h2>
                        <p className='pt-6 max-w-[450px] text-3xl'>"Join the Welcome Hub: It's like a VIP club... but for everyone! Sign up and let's make you officially welcomed!"</p>
                    </div>
                    <div className="relative">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                                <FormField
                                    control={form.control}
                                    name="username"
                                    render={({ field, fieldState }) => (
                                        <FormItem>
                                            <FormLabel className="text-2xl">Username</FormLabel>
                                            <FormControl>
                                                <Input placeholder="username" {...field} />
                                            </FormControl>
                                            {fieldState.error && (
                                                <span className='text-red-600 text-xs'>{fieldState.error.message}</span>
                                            )}
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field, fieldState }) => (
                                        <FormItem>
                                            <FormLabel className="text-2xl">Email</FormLabel>
                                            <FormControl>
                                                <Input placeholder="examplemail@email.com" {...field} />
                                            </FormControl>
                                            {fieldState.error && (
                                                <span className='text-red-600 text-xs'>{fieldState.error.message}</span>
                                            )}
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="phoneNumber"
                                    render={({ field, fieldState }) => (
                                        <FormItem>
                                            <FormLabel className="text-2xl">Contact Number</FormLabel>
                                            <FormControl>
                                                <Input placeholder="contact number" {...field} />
                                            </FormControl>
                                            {fieldState.error && (
                                                <span className='text-red-600 text-xs'>{fieldState.error.message}</span>
                                            )}
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="country"
                                    render={({ field, fieldState }) => (
                                        <FormItem>
                                            <FormLabel className="text-2xl">COUNTRY</FormLabel>
                                            <FormControl>
                                                <Input placeholder="country" {...field} />
                                            </FormControl>
                                            {fieldState.error && (
                                                <span className='text-red-600 text-xs'>{fieldState.error.message}</span>
                                            )}
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit">Submit</Button>
                            </form>
                        </Form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UserForm
