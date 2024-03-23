'use server';

import * as z from 'zod'
import { LoginSchema } from '@/schemas';

export const Login = async (values: z.infer<typeof LoginSchema>) => {
    const validatedField = LoginSchema.safeParse(values);
    if (!validatedField.success) {
        return { error: 'Invalid fields' }
    }

    return (
        console.log(values),
        { success: 'Login successful' }
    )
}