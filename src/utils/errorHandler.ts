import { ZodError } from "zod";
import { ConflictError, DatabaseError, ValidationError } from "./errors";
import { Prisma } from "@prisma/client";


export const errorHandler = (error: any)=> {
   if (error instanceof ValidationError) {
    return {
        status: 400,
        message: error.message,
        details: error.details || [],
    }
   }

   if (error instanceof DatabaseError) {
    return {
        status: 500,
        message: error.message,
    }
   }
   if (error instanceof ConflictError) {
    return {
        status: 409,
        message: error.message,
    }
   }

   if (error instanceof ZodError) {
    return {
        status: 400,
        message: 'Validation Error',
        details: error.errors.map(err => err.message),
    }
   }

   if (error instanceof Error) {
    return {
        status: 500,
        message: error.message || 'An unexpected error occurred.',
    };
}

   return {
    status: 500,
    message: 'An unknown error occurred'
   }



}