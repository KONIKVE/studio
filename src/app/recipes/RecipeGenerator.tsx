'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { handleGenerateRecipe } from '@/app/actions';
import type { GenerateFarmRecipeOutput } from '@/ai/flows/generate-farm-recipe';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Sparkles, UtensilsCrossed } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const formSchema = z.object({
  ingredients: z.string().min(10, {
    message: 'Please list at least one ingredient (e.g., "chicken breast, eggs").',
  }),
});

type FormData = z.infer<typeof formSchema>;

export function RecipeGenerator() {
  const [recipe, setRecipe] = useState<GenerateFarmRecipeOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ingredients: '',
    },
  });

  async function onSubmit(values: FormData) {
    setIsLoading(true);
    setError(null);
    setRecipe(null);

    const result = await handleGenerateRecipe(values);

    if (result.success && result.data) {
      setRecipe(result.data);
    } else {
      setError(result.error || 'An unexpected error occurred.');
    }
    setIsLoading(false);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create a Recipe</CardTitle>
        <CardDescription>
          List your ingredients (e.g., "2 chicken breasts, 1 dozen eggs, spinach, feta cheese") and let our AI chef work its magic.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="ingredients"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Available Ingredients</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="What's in your kitchen?"
                      rows={4}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading} className="w-full sm:w-auto">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-4 w-4" />
                  Generate Recipe
                </>
              )}
            </Button>
          </form>
        </Form>
        
        {error && (
            <div className="mt-8 text-center text-destructive">
                <p><strong>Oops!</strong> {error}</p>
            </div>
        )}

        {recipe && (
          <div className="mt-8">
            <Separator />
            <div className="mt-8">
                <Card className="border-primary bg-primary/5">
                    <CardHeader>
                        <div className="flex items-center gap-4">
                            <div className="flex-shrink-0">
                                <UtensilsCrossed className="h-8 w-8 text-primary" />
                            </div>
                            <div>
                                <CardTitle className="text-2xl font-headline text-primary">{recipe.recipeName}</CardTitle>
                                <CardDescription>Your custom-generated recipe is ready!</CardDescription>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div>
                            <h3 className="font-bold text-lg mb-2">Ingredients</h3>
                            <p className="whitespace-pre-line text-muted-foreground">{recipe.ingredientsList}</p>
                        </div>
                         <div>
                            <h3 className="font-bold text-lg mb-2">Instructions</h3>
                            <p className="whitespace-pre-line text-muted-foreground">{recipe.instructions}</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
