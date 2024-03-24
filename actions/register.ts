'use server';

import * as z from 'zod'
import { RegisterSchema } from '@/schemas';
import bcrypt from 'bcryptjs';
import { database } from '@/lib/database';
import { getUserByEmail } from '@/data/user';


export const Register = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(values);
    if (!validatedFields.success) {
        return { error: 'Invalid credentials' }
    }

    const { name, lastname, email, password } = validatedFields.data
    const hashPassword = await bcrypt.hash(password, 10)
    const existingUser = await getUserByEmail(email)

    if (existingUser) {
        return { error: 'Email already in use' }
    }
    await database.user.create({
        data: {
            name,
            lastname,
            email,
            password: hashPassword
        }
    })

    // send verifaction email

    return { success: 'Registration successful' }
}