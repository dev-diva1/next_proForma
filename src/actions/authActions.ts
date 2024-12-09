'use server'

import {z} from 'zod'
import bcrypt from 'bcrypt'
import prisma from '../../prisma/client';
import { redirect } from 'next/navigation';
import { errorHandler } from '@/utils/errorHandler';
import { ConflictError } from '@/utils/errors';
import { Sign } from 'crypto';

const SignInSchema = z.object({
    firstName: z.string().min(1, {message:'First name is required'}),
    lastName: z.string().min(1, {message:'Last name is required'}),
    email: z.string().email({message:'Invalid email format'}),
    password: z.string().min(8, {message: 'Password must be at least 8 characters'}).max(20, {message: 'Password cannot exceed 20 characters'})
})
const SignUpSchema = z.object({
    email: z.string().email({message:'Invalid email format'}),
    password: z.string().min(1,{message: 'Password is required'})
})
const hashPassword = async(password: string): Promise<string> => {
    const saltRounds = 10
    const hashedPassword = await bcrypt.hash(password, saltRounds)
    return hashedPassword
}

const comparePassword = async (password:string, hashedPassword:string) => {
    const isValidPassword = await bcrypt.compare(password, hashedPassword)
    return isValidPassword 
}

export type State = {
    status: number | null,
    message: string,
    details?: string[]
}

export const signUp = async (prevState: State, formData: FormData) => {
    const validatedFields = SignInSchema.safeParse({
        firstName: formData.get('firstName') as string,
        lastName: formData.get('lastName') as string,
        email: formData.get('email') as string,
        password: formData.get('password') as string
    })
    try {

        if(!validatedFields.success) {
            throw validatedFields.error
        }

        const {firstName, lastName, email, password} = validatedFields.data


        const hashedPassword = await hashPassword(password)
        if (!hashedPassword) {
            throw new Error('Password Hashing failed')
        }


        const existingUser = await prisma.user.findUnique({
            where: {email}
        })

        if(existingUser) {
            throw new ConflictError('A user with this email already exists.')
        }

        await prisma.user.create({
            data:{
                firstName,
                lastName,
                email,
                password: hashedPassword
            }
       })
       
    
    } catch (error) {
       console.error('Sign-up error:', error)
       return errorHandler(error)
    }
    redirect('/sign-in')  
    
  };

export const signIn = async ( prevState: State, formData: FormData) => {
  const validatedFields = SignUpSchema.safeParse({
        email: formData.get('email') as string,
        password: formData.get('password') as string
  })

  try {

    if (!validatedFields.success) {
        throw validatedFields.error
    }

    const {email, password} = validatedFields.data

    // get user
    const user = await prisma.user.findUnique({
       where: {
        email
       }
    })

    if (!user) {
        throw new Error('Invalid credentials!')
    }

    const isValidPassword = await comparePassword(password, user?.password)

    if(!isValidPassword) {
        throw new Error('Invalid credentials!')
    }
  } catch (error) {
    console.log('error', error)
    return errorHandler(error)
  }
  redirect('/dashboard')
}