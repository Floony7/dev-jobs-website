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
        descriptipn: formData.get('description'),
        hiringMultiples: formData.get('hiring-multiple-candidates') ?? false,
        isUrgent: formData.get('urgently-needed') ?? false,
    })
   
    if (!result.success) {
        console.log(result.error)
    }

    // console.log(title, location, jobType, "IS_URGENT: ", isUrgent);

    revalidatePath('/');
}