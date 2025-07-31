'use server';

/**
 * @fileOverview A recipe generation AI agent.
 *
 * - generateFarmRecipe - A function that handles the recipe generation process.
 * - GenerateFarmRecipeInput - The input type for the generateFarmRecipe function.
 * - GenerateFarmRecipeOutput - The return type for the generateFarmRecipe function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateFarmRecipeInputSchema = z.object({
  ingredients: z
    .string()
    .describe('A comma separated list of ingredients available.'),
});
export type GenerateFarmRecipeInput = z.infer<typeof GenerateFarmRecipeInputSchema>;

const GenerateFarmRecipeOutputSchema = z.object({
  recipeName: z.string().describe('The name of the generated recipe.'),
  instructions: z.string().describe('The recipe instructions.'),
  ingredientsList: z.string().describe('A list of ingredients with quantities required for the recipe.'),
});
export type GenerateFarmRecipeOutput = z.infer<typeof GenerateFarmRecipeOutputSchema>;

export async function generateFarmRecipe(input: GenerateFarmRecipeInput): Promise<GenerateFarmRecipeOutput> {
  return generateFarmRecipeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateFarmRecipePrompt',
  input: {schema: GenerateFarmRecipeInputSchema},
  output: {schema: GenerateFarmRecipeOutputSchema},
  prompt: `You are an expert chef specializing in farm-to-table recipes.

You will use the provided ingredients to generate a unique and appealing recipe.

Ingredients: {{{ingredients}}}

Consider the available ingredients and generate a recipe with the following fields:

Recipe Name: {{recipeName}}
Ingredients List: {{ingredientsList}}
Instructions: {{instructions}}`,
});

const generateFarmRecipeFlow = ai.defineFlow(
  {
    name: 'generateFarmRecipeFlow',
    inputSchema: GenerateFarmRecipeInputSchema,
    outputSchema: GenerateFarmRecipeOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
