import Image from "next/image";
import type { Metadata } from "next";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Our Products",
  description: "Explore our range of fresh, sustainably-farmed poultry products.",
};

const products = [
  {
    name: "Farm Fresh Eggs",
    description: "Our signature pasture-raised eggs, known for their vibrant golden yolks and exceptional taste. Perfect for any meal.",
    price: "$6.00 / dozen",
    image: "https://placehold.co/400x300.png",
    hint: "eggs carton",
    tags: ["Best Seller", "Pasture-Raised"],
  },
  {
    name: "Free-Range Whole Chicken",
    description: "A tender and flavorful whole chicken, raised with care on open pastures. Ideal for roasting.",
    price: "$4.50 / lb",
    image: "https://placehold.co/400x300.png",
    hint: "raw chicken",
    tags: ["Free-Range"],
  },
  {
    name: "Boneless, Skinless Chicken Breasts",
    description: "Lean, versatile, and juicy chicken breasts, ready for your favorite recipes. Pack of two.",
    price: "$8.00 / lb",
    image: "https://placehold.co/400x300.png",
    hint: "chicken breast",
    tags: [],
  },
  {
    name: "Smoked Chicken Sausage",
    description: "Our artisanal smoked sausage, crafted with a blend of herbs and spices. Fully cooked and ready to eat.",
    price: "$9.50 / pack",
    image: "https://placehold.co/400x300.png",
    hint: "sausages",
    tags: ["Artisanal"],
  },
   {
    name: "Organic Chicken Feed",
    description: "The same high-quality, organic feed we give our own flock. Perfect for your backyard chickens.",
    price: "$25.00 / 50lb bag",
    image: "https://placehold.co/400x300.png",
    hint: "chicken feed",
    tags: ["Organic"],
  },
  {
    name: "Chicken Bone Broth",
    description: "Nutrient-dense and flavorful bone broth, slow-simmered for over 24 hours for maximum goodness.",
    price: "$12.00 / quart",
    image: "https://placehold.co/400x300.png",
    hint: "broth jar",
    tags: ["Healthy"],
  },
];

export default function ProductsPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl font-bold tracking-tight">Our Farm Products</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          From our pastures to your plate, every product is a promise of quality, freshness, and sustainable farming.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Card key={product.name} className="flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-xl">
            <div className="relative">
                <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={300}
                className="h-56 w-full object-cover"
                data-ai-hint={product.hint}
                />
                 {product.tags.length > 0 && (
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                        {product.tags.map(tag => (
                            <Badge key={tag} variant="secondary" className="bg-background/80 backdrop-blur-sm">{tag}</Badge>
                        ))}
                    </div>
                 )}
            </div>
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription>{product.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <p className="text-lg font-semibold text-primary">{product.price}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
