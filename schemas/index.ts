import * as z from 'zod'

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Invalid email address"
    }),
    password: z.string().trim().min(1, {
        message: "Password is required"
    }),
})
export const RegisterSchema = z.object({
    email: z.string().email({
        message: "Invalid email address"
    }),
    password: z.string().trim().min(6, {
        message: "Minimum 6 Characters required"
    }),
    name: z.string().trim().min(2, {
        message: "Name is requred"
    }),
    lastname: z.string().trim().min(2, {
        message: "Last name is required"
    })
})