import type { Metadata } from "next";
import { Phone, Mail, MapPin } from "lucide-react";
import { ContactForm } from "./ContactForm";
import { FarmMap } from "./Map";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Feathered Acres. We'd love to hear from you!",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl font-bold tracking-tight">Get In Touch</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Have a question, feedback, or a special request? We're here to help.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <h2 className="font-headline text-2xl font-bold mb-4">Contact Information</h2>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex items-center gap-4">
                <MapPin className="h-5 w-5 text-primary" />
                <span>123 Farmstead Lane, Green Valley, CA 98765</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:hello@featheredacres.com" className="hover:text-primary">hello@featheredacres.com</a>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+1234567890" className="hover:text-primary">(123) 456-7890</a>
              </div>
            </div>
          </div>
           <div>
            <h2 className="font-headline text-2xl font-bold mb-4">Find Us</h2>
             <FarmMap />
          </div>
        </div>

        <div>
          <Card>
            <CardContent className="p-8">
              <h2 className="font-headline text-2xl font-bold mb-6">Send Us a Message</h2>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
