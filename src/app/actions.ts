'use server';

import { z } from 'zod';
import { generateFarmRecipe, type GenerateFarmRecipeInput } from '@/ai/flows/generate-farm-recipe';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export async function handleContactSubmit(prevState: any, formData: FormData) {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Please correct the errors below and try again.',
    };
  }
  
  // For demonstration, we'll just log the data.
  // In a real application, you would send an email or save to a database.
  console.log('Contact form submitted:');
  console.log(validatedFields.data);

  return {
    message: 'Thank you for your message! We will get back to you soon.',
    errors: null,
  };
}


export async function handleGenerateRecipe(input: GenerateFarmRecipeInput) {
    try {
        const recipe = await generateFarmRecipe(input);
        return { success: true, data: recipe };
    } catch (error) {
        console.error("Recipe generation failed:", error);
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
        return { success: false, error: `Failed to generate recipe. ${errorMessage}` };
    }
}
