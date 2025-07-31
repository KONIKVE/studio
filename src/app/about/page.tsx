import Image from "next/image";
import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Leaf, HeartHandshake, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about the history, values, and sustainable practices of Feathered Acres.",
};

const values = [
    {
        icon: Leaf,
        title: "Sustainability",
        text: "We are committed to regenerative farming practices that heal the land, promote biodiversity, and ensure a healthy ecosystem for generations to come."
    },
    {
        icon: HeartHandshake,
        title: "Animal Welfare",
        text: "Our hens are the heart of our farm. We provide them with a natural, stress-free environment, ample space to roam, and a high-quality organic diet."
    },
    {
        icon: Award,
        title: "Uncompromising Quality",
        text: "From the health of our flock to the freshness of our products, we never compromise on quality. We believe you can taste the difference."
    }
]

const galleryImages = [
    { src: "https://placehold.co/800x600.png", alt: "Hens roaming freely in a green pasture", hint: "chickens pasture" },
    { src: "https://placehold.co/800x600.png", alt: "A farmer collecting fresh eggs", hint: "collecting eggs" },
    { src: "https://placehold.co/800x600.png", alt: "A close-up of a carton of colorful eggs", hint: "eggs carton" },
    { src: "https://placehold.co/800x600.png", alt: "The red barn of Feathered Acres at sunset", hint: "farm barn" },
    { src: "https://placehold.co/800x600.png", alt: "A panoramic view of the farm", hint: "farm landscape" },
]

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl font-bold tracking-tight">About Feathered Acres</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          More than just a farm, we are a family dedicated to bringing you the freshest, most ethically-raised poultry products.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div className="order-2 md:order-1">
          <h2 className="font-headline text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-muted-foreground mb-4">
            Feathered Acres began with a simple idea: that food should be real, wholesome, and raised with respect for nature. Founded in 2010 by the Smith family, our farm started with a small flock of hens and a big dream. We wanted to create a place where animals could live happy, healthy lives and where our community could find food they could trust.
          </p>
          <p className="text-muted-foreground">
            Over the years, our farm has grown, but our core principles remain unchanged. We've embraced sustainable practices, expanded our range of products, and become a beloved local source for fresh eggs and poultry. Every day, we're grateful for the opportunity to be stewards of this land and to share the fruits of our labor with you.
          </p>
        </div>
        <div className="order-1 md:order-2">
            <Image 
                src="https://placehold.co/600x400.png"
                alt="The founding family of Feathered Acres smiling in a field"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
                data-ai-hint="farm family"
            />
        </div>
      </div>

      <section className="mb-20">
        <h2 className="font-headline text-3xl font-bold text-center mb-10">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map(value => (
                <Card key={value.title} className="p-6 text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                        <value.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.text}</p>
                </Card>
            ))}
        </div>
      </section>

      <section>
        <h2 className="font-headline text-3xl font-bold text-center mb-10">A Glimpse Into Farm Life</h2>
        <Carousel className="w-full max-w-4xl mx-auto" opts={{ loop: true }}>
            <CarouselContent>
            {galleryImages.map((image, index) => (
                <CarouselItem key={index}>
                    <Card>
                        <CardContent className="p-0">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                width={800}
                                height={600}
                                className="w-full aspect-video md:aspect-[4/3] object-cover rounded-lg"
                                data-ai-hint={image.hint}
                            />
                        </CardContent>
                    </Card>
                </CarouselItem>
            ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
      </section>

    </div>
  );
}
