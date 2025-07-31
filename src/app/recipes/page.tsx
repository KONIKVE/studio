import type { Metadata } from "next";
import { RecipeGenerator } from "./RecipeGenerator";

export const metadata: Metadata = {
  title: "Recipe Generator",
  description: "Create unique, farm-to-table recipes using your available ingredients with our AI-powered tool.",
};

export default function RecipesPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl font-bold tracking-tight">Farm-to-Table Recipe Generator</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Unleash your inner chef! Enter the ingredients you have on hand, and our AI will craft a delicious recipe just for you.
        </p>
      </div>
      
      <RecipeGenerator />
    </div>
  );
}
