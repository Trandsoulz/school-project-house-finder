import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Bed,
  Bath,
  Square,
  Heart,
  Share2,
  Calendar,
  Phone,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/app/components/header";
import { use } from "react";

// Mock data for houses
const houses = [
  {
    id: 1,
    title: "Modern Villa in Beverly Hills",
    description:
      "This stunning modern villa offers luxurious living in the heart of Beverly Hills. With spacious rooms, high ceilings, and floor-to-ceiling windows, this property is filled with natural light and offers breathtaking views of the surrounding landscape. The open-concept living area flows seamlessly into a gourmet kitchen equipped with top-of-the-line appliances and custom cabinetry. The primary suite features a spa-like bathroom and a large walk-in closet. Outside, you'll find a beautifully landscaped garden, a swimming pool, and a covered patio perfect for entertaining.",
    location: "Beverly Hills, CA",
    price: 1250000,
    beds: 4,
    baths: 3,
    sqft: 2500,
    yearBuilt: 2018,
    lotSize: "0.25 acres",
    garage: "2-car attached",
    type: "Single Family Home",
    status: "For Sale",
    features: [
      "Swimming Pool",
      "Home Theater",
      "Smart Home System",
      "Gourmet Kitchen",
      "Walk-in Closets",
      "Hardwood Floors",
      "Central Air Conditioning",
      "Fireplace",
      "Outdoor Kitchen",
      "Security System",
    ],
    images: [
      "/placeholder.svg?height=600&width=800&text=Property 1 - Image 1",
      "/placeholder.svg?height=600&width=800&text=Property 1 - Image 2",
      "/placeholder.svg?height=600&width=800&text=Property 1 - Image 3",
      "/placeholder.svg?height=600&width=800&text=Property 1 - Image 4",
    ],
    agent: {
      name: "Sarah Johnson",
      phone: "(310) 555-1234",
      email: "sarah.johnson@homeseeker.com",
      image: "/placeholder.svg?height=200&width=200&text=Agent",
    },
  },
  {
    id: 2,
    title: "Luxury Apartment in Manhattan",
    description:
      "Experience the height of luxury living in this stunning Manhattan apartment. Located in a prestigious building with 24/7 doorman and concierge services, this property offers unparalleled convenience and security. The apartment features high-end finishes throughout, including marble countertops, custom cabinetry, and hardwood floors. The gourmet kitchen is equipped with professional-grade appliances and opens to a spacious living area perfect for entertaining. Floor-to-ceiling windows provide abundant natural light and spectacular city views. The primary bedroom includes a luxurious en-suite bathroom with a soaking tub and separate shower.",
    location: "Manhattan, NY",
    price: 950000,
    beds: 3,
    baths: 2,
    sqft: 1800,
    yearBuilt: 2015,
    lotSize: "N/A",
    garage: "Parking available for purchase",
    type: "Condominium",
    status: "For Sale",
    features: [
      "Doorman Building",
      "Concierge Service",
      "Fitness Center",
      "Rooftop Terrace",
      "Floor-to-Ceiling Windows",
      "Marble Countertops",
      "Hardwood Floors",
      "Central Air Conditioning",
      "In-Unit Laundry",
      "Pet Friendly",
    ],
    images: [
      "/placeholder.svg?height=600&width=800&text=Property 2 - Image 1",
      "/placeholder.svg?height=600&width=800&text=Property 2 - Image 2",
      "/placeholder.svg?height=600&width=800&text=Property 2 - Image 3",
      "/placeholder.svg?height=600&width=800&text=Property 2 - Image 4",
    ],
    agent: {
      name: "Michael Chen",
      phone: "(212) 555-5678",
      email: "michael.chen@homeseeker.com",
      image: "/placeholder.svg?height=200&width=200&text=Agent",
    },
  },
  {
    id: 3,
    title: "Beachfront Condo in Miami",
    description:
      "Wake up to stunning ocean views in this beautiful beachfront condo in Miami Beach. This recently renovated property features an open floor plan with a modern kitchen, spacious living area, and a private balcony overlooking the Atlantic Ocean. The primary bedroom includes an en-suite bathroom with a walk-in shower and dual vanities. The second bedroom is perfect for guests or can be used as a home office. Residents enjoy access to resort-style amenities including a swimming pool, fitness center, and direct beach access. Located within walking distance to restaurants, shops, and entertainment venues.",
    location: "Miami Beach, FL",
    price: 780000,
    beds: 2,
    baths: 2,
    sqft: 1500,
    yearBuilt: 2010,
    lotSize: "N/A",
    garage: "1 assigned parking space",
    type: "Condominium",
    status: "For Sale",
    features: [
      "Ocean Views",
      "Private Balcony",
      "Swimming Pool",
      "Fitness Center",
      "Direct Beach Access",
      "24/7 Security",
      "Concierge Service",
      "Pet Friendly",
      "In-Unit Laundry",
      "Central Air Conditioning",
    ],
    images: [
      "/placeholder.svg?height=600&width=800&text=Property 3 - Image 1",
      "/placeholder.svg?height=600&width=800&text=Property 3 - Image 2",
      "/placeholder.svg?height=600&width=800&text=Property 3 - Image 3",
      "/placeholder.svg?height=600&width=800&text=Property 3 - Image 4",
    ],
    agent: {
      name: "Carlos Rodriguez",
      phone: "(305) 555-9012",
      email: "carlos.rodriguez@homeseeker.com",
      image: "/placeholder.svg?height=200&width=200&text=Agent",
    },
  },
];

export default function HouseDetailPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const { id } = use(params);
  const houseId = Number.parseInt(id);
  const house = houses.find((h) => h.id === houseId) || houses[0];

  // Similar properties (excluding current one)
  const similarProperties = houses.filter((h) => h.id !== houseId).slice(0, 3);

  return (
    <div className="flex min-h-screen flex-col mx-auto max-w-[90rem]">
      {/* <header className="sticky top-0 z-40 border-b bg-background px-[3rem]">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              <span className="text-xl font-bold">HomeSeeker</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium">
              Home
            </Link>
            <Link href="/houses" className="text-sm font-medium">
              Properties
            </Link>
            <Link href="#" className="text-sm font-medium">
              About
            </Link>
            <Link href="#" className="text-sm font-medium">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button size="sm">Sign Up</Button>
          </div>
        </div>
      </header> */}

      <Header />
      <main className="flex-1 px-[3rem]">
        <div className="container px-4 py-6 md:px-6 md:py-12">
          <div className="mb-6">
            <Link
              href="/houses"
              className="text-sm text-muted-foreground hover:underline"
            >
              &larr; Back to Properties
            </Link>
          </div>

          {/* Property Header */}
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <h1 className="text-3xl font-bold">{house.title}</h1>
              <div className="mt-2 flex items-center text-muted-foreground">
                <MapPin className="mr-1 h-4 w-4" />
                <span>{house.location}</span>
              </div>
            </div>
            <div className="flex flex-col items-end gap-2">
              <div className="text-3xl font-bold">
                ${house.price.toLocaleString()}
              </div>
              <div className="flex gap-4">
                <Button variant="outline" size="sm" className="gap-1">
                  <Heart className="h-4 w-4" />
                  Save
                </Button>
                <Button variant="outline" size="sm" className="gap-1">
                  <Share2 className="h-4 w-4" />
                  Share
                </Button>
              </div>
            </div>
          </div>

          {/* Property Images */}
          <div className="mb-8">
            <Carousel className="w-full">
              <CarouselContent>
                {house.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="aspect-video overflow-hidden rounded-lg">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${house.title} - Image ${index + 1}`}
                        width={800}
                        height={600}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>

          {/* Property Details */}
          <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
            <div className="space-y-8">
              {/* Overview */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Overview</h2>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                  <div className="flex flex-col items-center justify-center rounded-lg border bg-background p-4 shadow-sm">
                    <Bed className="mb-2 h-5 w-5 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      Bedrooms
                    </span>
                    <span className="font-medium">{house.beds}</span>
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-lg border bg-background p-4 shadow-sm">
                    <Bath className="mb-2 h-5 w-5 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      Bathrooms
                    </span>
                    <span className="font-medium">{house.baths}</span>
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-lg border bg-background p-4 shadow-sm">
                    <Square className="mb-2 h-5 w-5 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      Square Feet
                    </span>
                    <span className="font-medium">
                      {house.sqft.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-lg border bg-background p-4 shadow-sm">
                    <Calendar className="mb-2 h-5 w-5 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      Year Built
                    </span>
                    <span className="font-medium">{house.yearBuilt}</span>
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <Tabs defaultValue="description">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="description">Description</TabsTrigger>
                  <TabsTrigger value="details">Details</TabsTrigger>
                  <TabsTrigger value="features">Features</TabsTrigger>
                </TabsList>
                <TabsContent value="description" className="mt-4 space-y-4">
                  <p className="text-muted-foreground">{house.description}</p>
                </TabsContent>
                <TabsContent value="details" className="mt-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="flex justify-between border-b py-2">
                      <span className="font-medium">Property Type</span>
                      <span className="text-muted-foreground">
                        {house.type}
                      </span>
                    </div>
                    <div className="flex justify-between border-b py-2">
                      <span className="font-medium">Status</span>
                      <span className="text-muted-foreground">
                        {house.status}
                      </span>
                    </div>
                    <div className="flex justify-between border-b py-2">
                      <span className="font-medium">Year Built</span>
                      <span className="text-muted-foreground">
                        {house.yearBuilt}
                      </span>
                    </div>
                    <div className="flex justify-between border-b py-2">
                      <span className="font-medium">Lot Size</span>
                      <span className="text-muted-foreground">
                        {house.lotSize}
                      </span>
                    </div>
                    <div className="flex justify-between border-b py-2">
                      <span className="font-medium">Garage</span>
                      <span className="text-muted-foreground">
                        {house.garage}
                      </span>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="features" className="mt-4">
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
                    {house.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4 text-primary"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Agent Information */}
            <div>
              <div className="sticky top-24 rounded-lg border bg-background p-6 shadow-sm">
                <div className="mb-6 flex items-center gap-4">
                  <div className="h-16 w-16 overflow-hidden rounded-full">
                    <Image
                      src={house.agent.image || "/placeholder.svg"}
                      alt={house.agent.name}
                      width={64}
                      height={64}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{house.agent.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      Real Estate Agent
                    </p>
                  </div>
                </div>
                <div className="mb-6 space-y-2">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span>{house.agent.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span>{house.agent.email}</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <Button className="w-full">Schedule a Viewing</Button>
                  <Button variant="outline" className="w-full">
                    Request Info
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Similar Properties */}
          <section className="mt-16">
            <h2 className="mb-6 text-2xl font-bold">Similar Properties</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {similarProperties.map((property) => (
                <Link
                  href={`/houses/${property.id}`}
                  key={property.id}
                  className="group"
                >
                  <div className="overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md">
                    <div className="aspect-video w-full overflow-hidden">
                      <Image
                        src={property.images[0] || "/placeholder.svg"}
                        width={500}
                        height={300}
                        alt={property.title}
                        className="h-full w-full object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold">{property.title}</h3>
                      <div className="mt-2 flex items-center text-sm text-muted-foreground">
                        <MapPin className="mr-1 h-3 w-3" />
                        <span>{property.location}</span>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="font-bold">
                          ${property.price.toLocaleString()}
                        </span>
                        <div className="flex gap-2 text-sm text-muted-foreground">
                          <span>{property.beds} beds</span>
                          <span>•</span>
                          <span>{property.baths} baths</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
      <footer className="border-t bg-muted px-[3rem]">
        <div className="container flex flex-col gap-6 py-8 md:py-12">
          <div className="flex flex-col gap-6 md:flex-row md:gap-8 lg:gap-12">
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                <span className="text-xl font-bold">HomeSeeker</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Finding your dream home made simple. Browse thousands of
                properties in your desired location.
              </p>
            </div>
            <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3">
              <div className="space-y-4">
                <h4 className="text-sm font-medium">Company</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-sm font-medium">Help</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      FAQs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-sm font-medium">Legal</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Terms
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-xs text-muted-foreground">
              © 2025 HomeSeeker. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
