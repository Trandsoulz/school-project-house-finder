import Link from "next/link";
import Image from "next/image";
import { Search, Home, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "./components/header";
import Footer from "./components/Footer";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col mx-auto max-w-[90rem]">
      <Header />
      <main className="flex-1 md:px-[3rem]">
        <section className="w-full bg-muted my-5 md:rounded-3xl">
          <div className="container px-4 md:px-6 h-[80vh] flex items-center justify-center">
            <div className="flex gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4 px-6">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Find Your Perfect Student Accommodation
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Search hundreds of student lodges near your campus. We make
                    finding your ideal student accommodation simple and
                    affordable.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <div className="relative flex-1">
                    <MapPin className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Enter location..."
                      className="w-full px-9 rounded-md border border-input bg-background py-2 text-sm"
                    />
                  </div>
                  <Button className="inline-flex items-center justify-center whitespace-nowrap gap-1 cursor-pointer active:scale-95 duration-200">
                    <Search className="h-4 w-4" />
                    Search
                  </Button>
                </div>
                <div className="flex gap-4 md:gap-10 justify-center text-sm text-muted-foreground">
                  <div className="flex flex-col items-center">
                    <span className="font-medium">100+</span> Lodges
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="font-medium">5+</span> Locations
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="font-medium">5k+</span> Happy Students
                  </div>
                </div>
              </div>
              <div className="mx-auto md:block hidden w-full max-w-[500px] lg:max-w-none">
                <div className="aspect-video overflow-hidden rounded-xl">
                  <Image
                    src="/dream-home.jpg?height=500&width=800"
                    width={800}
                    height={500}
                    alt="Modern house with pool"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  How It Works
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Finding your student accommodation has never been easier.
                  Follow these simple steps.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                  <Search className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Search</h3>
                  <p className="text-muted-foreground">
                    Enter your desired location and browse through hundreds of
                    student lodges.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                  <Home className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Explore</h3>
                  <p className="text-muted-foreground">
                    View detailed information, photos, and virtual tours of
                    student accommodations.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                  <Phone className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Connect</h3>
                  <p className="text-muted-foreground">
                    Contact Landlords directly and schedule viewings of your
                    favorite lodges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Featured Student Lodges
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover our handpicked selection of quality student
                  accomodation.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <Link
                  href={`/houses/${i}`}
                  key={i}
                  className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md"
                >
                  <div className="aspect-video w-full overflow-hidden">
                    <Image
                      src={`https://apiv1.hostel.ng/rooms/40MMQVVRPKhostelng.jpg`}
                      width={500}
                      height={300}
                      alt={`Property ${i}`}
                      className="object-cover w-full h-full transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg">
                      Modern Villa in Beverly Hills
                    </h3>
                    <div className="flex items-center gap-2 mt-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">Beverly Hills, CA</span>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <span className="font-bold text-lg">$1,250,000</span>
                      <div className="flex gap-2 text-sm text-muted-foreground">
                        <span>4 beds</span>
                        <span>•</span>
                        <span>3 baths</span>
                        <span>•</span>
                        <span>2,500 sqft</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="flex justify-center">
              <Button asChild>
                <Link href="/houses">View All Properties</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Ready to Find Your Student Lodge?
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Join thousands of satisfied students who found their perfect
                    accommodation with StudentLodge.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild>
                    <Link href="/houses">Start Searching</Link>
                  </Button>
                  <Button variant="outline" size="lg">
                    Contact an Agent
                  </Button>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6 sm:grid-cols-2">
                  <li className="flex items-start gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
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
                        className="h-4 w-4"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-medium">Verified Listings</h3>
                      <p className="text-sm text-muted-foreground">
                        All lodges are verified for authenticity and safety.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
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
                        className="h-4 w-4"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-medium">Trusted Landlords</h3>
                      <p className="text-sm text-muted-foreground">
                        Connect with verified and student-friendly landlords.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
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
                        className="h-4 w-4"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-medium">Virtual Tours</h3>
                      <p className="text-sm text-muted-foreground">
                        Explore lodges from the comfort of your current
                        residence.{" "}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
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
                        className="h-4 w-4"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-medium">Student-Friendly Leases</h3>
                      <p className="text-sm text-muted-foreground">
                        Flexible lease terms designed for students.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
