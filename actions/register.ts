'use server';

import * as z from 'zod'
import { RegisterSchema } from '@/schemas';

export const Register = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedField = RegisterSchema.safeParse(values);
    if (!validatedField) {
        return { error: 'Invalid credentials' }
    }
    return (
        console.log(values),
        { success: 'Registration successful' }
    )

}