"use server";

import { revalidatePath } from "next/cache";
import { z } from 'zod';

const createJobSchema = z.object({
    title: z.string().min(3, {message: 'Title must contain at least 3 characters'}),
    location: z.string().min(3, {message: 'Title must contain at least 3 characters'}),
    remuneration: z.string().min(5, {message: 'Title must contain at least 5 characters'}),
    jobType: z.string().min(8, {message: 'Title must contain at least 8 characters'}),
    description: z.string().min(10, {message: 'Title must contain at least 10 characters'}),
    hiringMultiples: z.boolean(),
    isUrgent: z.boolean(),
})

export async function createJob(formData: FormData) {
    const result = createJobSchema.safeParse({
        title: formData.get('title'),
        location: formData.get('location'),
        remuneration: formData.get('remuneration'),
        jobType: formData.get('job-type'),
        description: formData.get('description'),
        hiringMultiples: formData.get('hiring-multiple-candidates') === null ? false : true,
        isUrgent: formData.get('urgently-needed') === null ? false : true,
    })
   console.log(formData);
    if (!result.success) {
        console.log(result.error.flatten().fieldErrors)
    }

    revalidatePath('/');
}