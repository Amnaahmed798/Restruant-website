import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-24 grid lg:grid-cols-2 gap-16">
      <section>
        <h1 className="text-4xl font-bold mb-8">Get in Touch</h1>
        <form className="space-y-6 max-w-xl">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium">
              Name
            </label>
            <Input id="name" placeholder="Your name" required />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 font-medium">
              Email
            </label>
            <Input id="email" type="email" placeholder="you@example.com" required />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1 font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              placeholder="How can we help?"
              required
            />
          </div>
          <Button type="submit" className="px-6 py-3 text-base">
            Send Message
          </Button>
        </form>
      </section>
      <section className="flex items-center justify-center">
        <iframe
          title="Restaurant Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019454935024!2d-122.41941528468106!3d37.77492927975937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064c86b4d37%3A0x5f092b081e6e33d7!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
          width="100%"
          height="350"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
} 