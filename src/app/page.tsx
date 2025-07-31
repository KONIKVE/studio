import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Egg, HeartHandshake, ChefHat } from "lucide-react";
import { ChickenIcon } from "@/components/icons/ChickenIcon";

const promises = [
  {
    icon: ChickenIcon,
    title: "Happy & Healthy Hens",
    description: "Our chickens roam freely in spacious, clean environments, ensuring their well-being and the quality of their eggs.",
  },
  {
    icon: Leaf,
    title: "Sustainable Farming",
    description: "We practice regenerative agriculture to enrich our soil, promote biodiversity, and reduce our environmental impact.",
  },
  {
    icon: Egg,
    title: "Unmatched Freshness",
    description: "From our farm to your table in the shortest time possible, guaranteeing peak freshness and flavor.",
  },
  {
    icon: HeartHandshake,
    title: "Community Focused",
    description: "We're proud to be a part of the local community, providing fresh food and transparent farming practices.",
  },
];

const featuredProducts = [
  {
    name: "Pasture-Raised Eggs",
    image: "https://placehold.co/400x300.png",
    hint: "eggs carton",
    description: "Rich, golden yolks and firm whites, a true testament to our hens' healthy diet and lifestyle.",
  },
  {
    name: "Free-Range Chicken",
    image: "https://placehold.co/400x300.png",
    hint: "raw chicken",
    description: "Tender, flavorful meat from chickens that have lived a natural, active life.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative h-[60vh] min-h-[400px] w-full">
        <Image
          src="https://placehold.co/1600x900.png"
          alt="A beautiful sunrise over the fields of Feathered Acres farm"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
          data-ai-hint="farm sunrise"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight">Feathered Acres</h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl">
            Naturally Raised, Exceptionally Fresh. The finest poultry products, straight from our farm to your family.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/products">Explore Our Products</Link>
          </Button>
        </div>
      </section>

      <section id="our-promise" className="py-12 md:py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight">Our Promise to You</h2>
            <p className="mt-2 max-w-2xl mx-auto text-lg text-muted-foreground">
              We're committed to ethical practices, superior quality, and the health of our community and planet.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {promises.map((promise) => (
              <Card key={promise.title} className="text-center">
                <CardHeader>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <promise.icon className="h-6 w-6" />
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="text-lg font-bold">{promise.title}</h3>
                  <p className="mt-2 text-muted-foreground">{promise.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="featured-products" className="bg-secondary/30 py-12 md:py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight">Featured Products</h2>
            <p className="mt-2 max-w-2xl mx-auto text-lg text-muted-foreground">
              A taste of our farm's best, harvested with care and delivered fresh.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {featuredProducts.map((product) => (
              <Card key={product.name} className="overflow-hidden">
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-1/3">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={400}
                      height={300}
                      className="h-full w-full object-cover"
                      data-ai-hint={product.hint}
                    />
                  </div>
                  <div className="sm:w-2/3 p-6">
                    <h3 className="text-xl font-bold">{product.name}</h3>
                    <p className="mt-2 text-muted-foreground">{product.description}</p>
                    <Button asChild variant="link" className="p-0 mt-4">
                      <Link href="/products">View Details &rarr;</Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="recipe-generator" className="py-12 md:py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <Card className="bg-accent text-accent-foreground p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="text-primary-foreground/80 text-accent">
              <ChefHat className="h-24 w-24 text-accent-foreground/50" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="font-headline text-3xl font-bold">From Our Farm to Your Table</h2>
              <p className="mt-2 max-w-2xl text-lg">
                Got some of our fresh products? Let our AI chef inspire your next meal with a custom recipe.
              </p>
            </div>
            <Button asChild size="lg" variant="secondary" className="bg-accent-foreground text-accent hover:bg-accent-foreground/90 shrink-0">
              <Link href="/recipes">Generate a Recipe</Link>
            </Button>
          </Card>
        </div>
      </section>
    </div>
  );
}
