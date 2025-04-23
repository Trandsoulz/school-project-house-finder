"use client";

import Link from "next/link";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { use } from "react";
import {
  MapPin,
  Bed,
  Bath,
  // Square,
  Heart,
  Share2,
  // Calendar,
  Phone,
  Mail,
  Lightbulb,
  Shield,
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
import useHouseStore from "@/app/stores/houseStore";

// Mock data for houses
// const houses = [
//   {
//     id: 1,
//     title: "Modern Studio Near State University",
//     description:
//       "This comfortable studio apartment is perfect for students at State University. Located just a 5-minute walk from campus, this fully furnished unit includes high-speed internet, a study desk, and a kitchenette. The building features a common laundry room, study lounge, and secure entry. Utilities are included in the rent, making budgeting easier for students. The apartment is also close to the university library, student center, and various dining options.",
//     location: "University District, CA",
//     price: 650,
//     beds: 1,
//     baths: 1,
//     sqft: 450,
//     yearBuilt: 2015,
//     lotSize: "N/A",
//     garage: "Bike storage available",
//     type: "Studio Apartment",
//     status: "For Rent",
//     features: [
//       "Fully Furnished",
//       "High-Speed Internet",
//       "Utilities Included",
//       "Study Desk",
//       "Kitchenette",
//       "Laundry Facilities",
//       "Security System",
//       "5-Minute Walk to Campus",
//       "Close to Dining",
//       "Student Lounge",
//     ],
//     images: [
//       "https://apiv1.hostel.ng/rooms/F948UiUShostelng.jpeg",
//       "https://apiv1.hostel.ng/rooms/OKtXCGoqhostelng.jpeg",
//       "https://apiv1.hostel.ng/rooms/96DQvMmlhostelng.jpeg",
//       // "/placeholder.svg?height=600&width=800&text=Lodge 1 - Image 4",
//     ],
//     agent: {
//       name: "Sarah Johnson",
//       phone: "(310) 555-1234",
//       email: "sarah.johnson@studentlodge.com",
//       image: "/placeholder.svg?height=200&width=200&text=Landlord",
//     },
//   },
//   {
//     id: 2,
//     title: "Shared Apartment Near Tech College",
//     description:
//       "This shared apartment offers a private bedroom in a 3-bedroom unit, perfect for students at Tech College. Your private room comes furnished with a bed, desk, and closet, while the common areas (kitchen, living room, and bathroom) are shared with two other students. The apartment is located just a 10-minute walk from campus and includes high-speed internet, basic utilities, and access to the building's fitness center and study room. The neighborhood has plenty of student-friendly cafes, shops, and public transportation options.",
//     location: "College Park, NY",
//     price: 550,
//     beds: 1,
//     baths: 1,
//     sqft: 350,
//     yearBuilt: 2010,
//     lotSize: "N/A",
//     garage: "Street parking available",
//     type: "Shared Apartment",
//     status: "For Rent",
//     features: [
//       "Private Bedroom",
//       "Shared Kitchen",
//       "Furnished",
//       "High-Speed Internet",
//       "Utilities Included",
//       "Fitness Center",
//       "Study Room",
//       "10-Minute Walk to Campus",
//       "Public Transportation Nearby",
//       "Laundry Facilities",
//     ],
//     images: [
//       "https://apiv1.hostel.ng/rooms/F948UiUShostelng.jpeg",
//       "https://apiv1.hostel.ng/rooms/OKtXCGoqhostelng.jpeg",
//       "https://apiv1.hostel.ng/rooms/96DQvMmlhostelng.jpeg",
//     ],
//     agent: {
//       name: "Michael Chen",
//       phone: "(212) 555-5678",
//       email: "michael.chen@studentlodge.com",
//       image: "/placeholder.svg?height=200&width=200&text=Landlord",
//     },
//   },
//   {
//     id: 3,
//     title: "Private Room in Student House",
//     description:
//       "Enjoy a comfortable private room in this student-focused house just 15 minutes from campus by bus. Your room comes furnished with a bed, desk, chair, and wardrobe. The house features a large shared kitchen, two bathrooms, a cozy living room, and a small backyard perfect for relaxing after classes. All utilities and high-speed internet are included in the rent. The house is located in a quiet residential area with a grocery store, laundromat, and several affordable restaurants within walking distance. Regular bus service to campus runs every 15 minutes.",
//     location: "Campus View, FL",
//     price: 450,
//     beds: 1,
//     baths: 1,
//     sqft: 200,
//     yearBuilt: 2005,
//     lotSize: "Small backyard",
//     garage: "No parking available",
//     type: "Private Room",
//     status: "For Rent",
//     features: [
//       "Private Bedroom",
//       "Shared Kitchen",
//       "Shared Bathrooms",
//       "Furnished",
//       "All Utilities Included",
//       "High-Speed Internet",
//       "Backyard",
//       "Bus to Campus",
//       "Quiet Neighborhood",
//       "Grocery Store Nearby",
//     ],
//     images: [
//       "/placeholder.svg?height=600&width=800&text=Lodge 3 - Image 1",
//       "/placeholder.svg?height=600&width=800&text=Lodge 3 - Image 2",
//       "/placeholder.svg?height=600&width=800&text=Lodge 3 - Image 3",
//       "/placeholder.svg?height=600&width=800&text=Lodge 3 - Image 4",
//     ],
//     agent: {
//       name: "Carlos Rodriguez",
//       phone: "(305) 555-9012",
//       email: "carlos.rodriguez@studentlodge.com",
//       image: "/placeholder.svg?height=200&width=200&text=Landlord",
//     },
//   },
// ];

export default function HouseDetailPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const houses = useHouseStore((state) => state.houses);

  const { id } = use(params);
  const houseId = Number.parseInt(id);
  const house = houses.find((h) => h.id === houseId) || houses[0];

  // Similar properties (excluding current one)
  const similarProperties = houses
    .filter((h) => h.id !== houseId)
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);

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
      <main className="flex-1 px-[1.2rem] md:px-[3rem]">
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
            <Carousel
              className="w-full md:w-1/2 mx-auto"
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
            >
              <CarouselContent>
                {house.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="aspect-video overflow-hidden rounded-lg">
                      <Image
                        priority
                        src={image}
                        alt={`${house.title} - Image ${index + 1}`}
                        width={800}
                        height={600}
                        className="h-full w-full object-cover"
                        unoptimized // reason why the imaes are even loading in the first place, but it's slow
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
                <h3 className="text-xl font-semibold">Amenties</h3>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                  <div className="flex flex-col items-center justify-center rounded-lg border bg-background p-4 shadow-sm">
                    <Bed className="mb-2 h-5 w-5 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Bed</span>
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-lg border bg-background p-4 shadow-sm">
                    <Bath className="mb-2 h-5 w-5 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      Bathroom
                    </span>
                    {/* <span className="font-medium"></span> */}
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-lg border bg-background p-4 shadow-sm">
                    <Lightbulb className="mb-2 h-5 w-5 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      24/7 Electricity
                    </span>
                    {/* <span className="font-medium">
                      {house.sqft.toLocaleString()}
                    </span> */}
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-lg border bg-background p-4 shadow-sm">
                    <Shield className="mb-2 h-5 w-5 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      Security
                    </span>
                    {/* <span className="font-medium">{house.yearBuilt}</span> */}
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <Tabs defaultValue="details">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="details">Details</TabsTrigger>
                  <TabsTrigger value="features">Features</TabsTrigger>
                </TabsList>
                {/* <TabsContent value="description" className="mt-4 space-y-4">
                  <p className="text-muted-foreground">{house.description}</p>
                </TabsContent> */}
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
                    {/* <div className="flex justify-between border-b py-2">
                      <span className="font-medium">Year Built</span>
                      <span className="text-muted-foreground">
                        {house.yearBuilt}
                      </span>
                    </div> */}
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
                      priority
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
            {/* <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"> */}

            <Carousel
              className="w-full mx-auto"
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
            >
              <CarouselContent>
                {similarProperties.map((property) => (
                  <CarouselItem
                    className="md:basis-1/2 lg:basis-1/3"
                    key={property.id}
                  >
                    <Link
                      href={`/houses/${property.id}`}
                      key={property.id}
                      className="group"
                    >
                      <div className="overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md">
                        <div className="aspect-video w-full overflow-hidden">
                          <Image
                            priority
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
                            {/* <div className="flex gap-2 text-sm text-muted-foreground">
                          <span>{property.beds} beds</span>
                          <span>•</span>
                          <span>{property.baths} baths</span>
                        </div> */}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>

            {/* </div> */}
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
