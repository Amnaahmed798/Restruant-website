import Image from "next/image";
import { Card } from "@/components/ui/card";

const team = [
  { name: "Chef Marco", role: "Head Chef", img: "/images/chefmarco.jpg" },
  { name: "Chef Anna", role: "Pastry Chef", img: "/images/anna.jpg" },
  { name: "Chef Luca", role: "Sous Chef", img: "/images/chefluca.jpg" },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-24 space-y-16">
      <section className="max-w-3xl mx-auto text-center space-y-4">
        <h1 className="text-4xl font-bold">Welcome to LaTavola&apos;s</h1>
        <p className="text-muted-foreground text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, at ut.
          Quaerat itaque, quae tempora cupiditate perspiciatis expedita id ex.
        </p>
      </section>
      <section>
        <h2 className="text-3xl font-semibold mb-8 text-center">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {team.map((member) => (
            <div key={member.name} className="flex flex-col items-center text-center space-y-4">
              <div className="w-56 h-56 rounded-full overflow-hidden">
                <Image
                  src={member.img}
                  alt={member.name}
                  width={224}
                  height={224}
                  className="w-full h-full object-cover"
                  placeholder="empty"
                />
              </div>
              <div>
                <h3 className="text-xl font-medium">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Story & Values */}
      <section className="space-y-16 max-w-4xl mx-auto">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold">Our Story</h2>
          <p className="text-muted-foreground text-lg">
            Founded in 2010, LøTavola&apos;s began as a small family-run trattoria on the
            outskirts of London. Over the years we&apos;ve grown—but our passion for
            handcrafted plates, fresh herbs, and warm hospitality remains the
            heart of everything we do. From sourcing organic produce from local
            farms to importing aged balsamic straight from Modena, we obsess over
            every detail so you don&apos;t have to.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-3">
          <Card className="p-8 lg:p-10 space-y-4 text-center shadow-md rounded-lg">
            <Card.Title className="text-2xl font-bold">✨ Our Mission</Card.Title>
            <Card.Description className="text-base leading-relaxed">
              To craft memorable dining experiences that celebrate seasonal
              ingredients, Italian tradition, and modern creativity—served with a
              smile.
            </Card.Description>
          </Card>
          <Card className="p-8 lg:p-10 space-y-4 text-center shadow-md rounded-lg">
            <Card.Title className="text-2xl font-bold">🌿 Sustainability</Card.Title>
            <Card.Description className="text-base leading-relaxed">
              We operate a zero-waste kitchen, compost organic scraps, and use 100%
              renewable electricity. 80% of our menu is sourced within 100 miles.
            </Card.Description>
          </Card>
          <Card className="p-8 lg:p-10 space-y-4 text-center shadow-md rounded-lg">
            <Card.Title className="text-2xl font-bold">🤝 Community</Card.Title>
            <Card.Description className="text-base leading-relaxed">
              Every month we host cooking workshops and donate a portion of sales
              to <span className="italic">Food for All UK</span>, helping combat food
              insecurity in our neighbourhood.
            </Card.Description>
          </Card>
        </div>
      </section>
    </div>
  );
} 