"use client";

import Link from "next/link";
import Image from "next/image";
import { Search, MapPin, Filter, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Header from "../components/header";
import Footer from "../components/Footer";
import useHouseStore from "../stores/houseStore";
import { useState } from "react";
import { Value } from "@radix-ui/react-select";

// Mock data for houses
// const houses = [
//   {
//     id: 135,
//     title: "AKPs Residential Lodge",
//     location: "Choba, Uniport",
//     price: 450000,
//     image: "https://apiv1.hostel.ng/rooms/F948UiUShostelng.jpeg",
//   },
//   {
//     id: 64,
//     title: "Shekinah Glory Lodge",
//     location: "Alakahia, Uniport",
//     price: 500000,
//     image: "https://apiv1.hostel.ng/rooms/Q9PSYD9FVZhostelng.jpg",
//   },
//   {
//     id: 45,
//     title: "Olessoh Lodge",
//     location: "Back of Chem, Uniport",
//     price: 550000,
//     image: "https://apiv1.hostel.ng/rooms/P0MSPDAB2Lhostelng.jpg",
//   },
//   {
//     id: 106,
//     title: "Ipweb Lodge",
//     location: "Alakahia, Uniport",
//     price: 600000,
//     image: "https://apiv1.hostel.ng/rooms/083YaYxhhostelng.jpeg",
//   },
//   {
//     id: 114,
//     title: "Peace Complex Lodge",
//     location: "Back of Chem, Uniport",
//     price: 650000,
//     image: "https://apiv1.hostel.ng/rooms/tZp1ozRdhostelng.jpeg",
//   },
//   {
//     id: 91,
//     title: "Kysimdy Lodge",
//     location: "Choba, Uniport",
//     price: 700000,
//     image: "https://apiv1.hostel.ng/rooms/sgXkTMymhostelng.jpeg",
//   },
//   {
//     id: 93,
//     title: "Strong Tower Lodge",
//     location: "Back of Chem, Uniport",
//     price: 750000,
//     image: "https://apiv1.hostel.ng/rooms/ln4xA8z3hostelng.jpg",
//   },
//   {
//     id: 41,
//     title: "Deliht Estate Lodge",
//     location: "Choba, Uniport",
//     price: 800000,
//     image: "https://apiv1.hostel.ng/rooms/8TLYZJLLW3hostelng.jpg",
//   },
//   {
//     id: 49,
//     title: "GloryVille Lodge",
//     location: "Alakahia, Uniport",
//     price: 850000,
//     image: "https://apiv1.hostel.ng/rooms/CZZ3KSIMR1hostelng.jpg",
//   },
// ];

export default function HousesPage() {
  const houses = useHouseStore((state) => state.houses);

  const searchByLocation = useHouseStore((state) => state.getHousesByLocation);

  const [selectedLocation, setSelectedLocation] = useState("");

  // Filtered houses based on the selected location
  const filteredHouses = selectedLocation
    ? searchByLocation(selectedLocation)
    : houses;

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
        <section className="w-full py-6 md:py-12 bg-muted rounded-b-2xl">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-bold tracking-tighter">
                Find Your Student Lodge
              </h1>
              <div className="grid gap-4 md:grid-cols-[1fr_auto]">
                <div className="flex flex-col gap-4 sm:flex-row">
                  <div className="relative flex-1">
                    <Select
                      onValueChange={(value) => setSelectedLocation(value)}
                    >
                      <SelectTrigger id="locations" className="w-full">
                        <SelectValue placeholder="Locations" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="uniport">All Locations</SelectItem>
                        <SelectItem value="choba">Choba</SelectItem>
                        <SelectItem value="back of chem">
                          Back of Chem
                        </SelectItem>
                        <SelectItem value="alakahia">Alakahia</SelectItem>
                      </SelectContent>
                    </Select>
                    {/* <MapPin className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Enter location..."
                      className="w-full px-9 rounded-md border border-input bg-background py-2 text-sm"
                    /> */}
                  </div>
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                    <Select>
                      <SelectTrigger id="price" className="w-full">
                        <SelectValue placeholder="Price" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="any">Any Price</SelectItem>
                        <SelectItem value="500k">Under 500K</SelectItem>
                        <SelectItem value="1m">Under 700K</SelectItem>
                        <SelectItem value="2m">Under 1M</SelectItem>
                        <SelectItem value="5m">Under 1.5M</SelectItem>
                        <SelectItem value="5m+">2M+</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger id="beds" className="w-full">
                        <SelectValue placeholder="Beds" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="any">Any</SelectItem>
                        <SelectItem value="1">1+</SelectItem>
                        <SelectItem value="2">2+</SelectItem>
                        <SelectItem value="3">3+</SelectItem>
                        <SelectItem value="4">4+</SelectItem>
                        <SelectItem value="5">5+</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger id="baths" className="w-full">
                        <SelectValue placeholder="Baths" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="any">Any</SelectItem>
                        <SelectItem value="1">1+</SelectItem>
                        <SelectItem value="2">2+</SelectItem>
                        <SelectItem value="3">3+</SelectItem>
                        <SelectItem value="4">4+</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger id="type" className="w-full">
                        <SelectValue placeholder="Type" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="any">Any Type</SelectItem>
                        <SelectItem value="house">House</SelectItem>
                        <SelectItem value="apartment">Apartment</SelectItem>
                        <SelectItem value="condo">Condo</SelectItem>
                        <SelectItem value="townhouse">Townhouse</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-9 w-9 sr-only"
                  >
                    <Filter className="h-4 w-4 sr-only" />
                    <span className="sr-only">Filter</span>
                  </Button>
                  <Button className="h-9 w-full">
                    <Search className="mr-2 h-4 w-4" />
                    Search
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col gap-8">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold md:block hidden">
                  {filteredHouses.length} Properties Found
                </h2>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">
                    Sort by:
                  </span>
                  <Select defaultValue="newest">
                    <SelectTrigger id="sort" className="w-[180px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="newest">Newest</SelectItem>
                      <SelectItem value="price-asc">
                        Price: Low to High
                      </SelectItem>
                      <SelectItem value="price-desc">
                        Price: High to Low
                      </SelectItem>
                      <SelectItem value="sqft">Square Feet</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredHouses.map((house) => (
                  <Card
                    key={house.id}
                    className="overflow-hidden py-0 gap-0 rounded-sm"
                  >
                    <CardHeader className="p-0">
                      <Link href={`/houses/${house.id}`}>
                        <div className="aspect-video w-full overflow-hidden">
                          <Image
                            src={house.image || "/placeholder.svg"}
                            alt={house.title}
                            width={500}
                            height={300}
                            className="h-full w-full object-cover transition-transform hover:scale-105"
                          />
                        </div>
                      </Link>
                    </CardHeader>
                    <CardContent className="p-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-lg">
                            ₦{house.price.toLocaleString()}
                          </span>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin className="mr-1 h-3 w-3" />
                            {house.location}
                          </div>
                        </div>
                        <Link
                          href={`/houses/${house.id}`}
                          className="hover:underline"
                        >
                          <h3 className="font-semibold">{house.title}</h3>
                        </Link>
                        {/* <div className="flex justify-between text-sm text-muted-foreground">
                          <span>{house.beds} beds</span>
                          <span>{house.baths} baths</span>
                          <span>{house.sqft.toLocaleString()} sqft</span>
                        </div> */}
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button asChild className="w-full rounded-sm">
                        <Link href={`/houses/${house.id}`}>View Details</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              <div className="flex justify-center">
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon" disabled>
                    <ChevronDown className="h-4 w-4 rotate-90" />
                    <span className="sr-only">Previous</span>
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 w-8">
                    1
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 w-8">
                    2
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 w-8">
                    3
                  </Button>
                  <Button variant="outline" size="icon">
                    <ChevronDown className="h-4 w-4 -rotate-90" />
                    <span className="sr-only">Next</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
