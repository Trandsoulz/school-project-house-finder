import { create } from "zustand";

interface HouseStore {
  id: number;
  title: string;
  location: string;
  price: number;
  images: string[];
  lotSize: string;
  garage: string;
  type: string;
  status: string;
  features: string[];
  agent: {
    name: string;
    phone: string;
    email: string;
    image: string;
  };
}

interface HouseState {
  houses: HouseStore[];
  setHouses: (house: HouseStore[]) => void;
  getHousesById: (id: number) => HouseStore | undefined;
  getHousesByLocation: (location: string) => HouseStore[];
}

const useHouseStore = create<HouseState>((set, get) => ({
  houses: [
    {
      id: 135,
      title: "AKPs Residential Lodge",
      location: "Choba, Uniport",
      price: 450000,
      lotSize: "N/A",
      garage: "Bike storage available",
      type: "Studio Apartment",
      status: "For Rent",
      features: [
        "Fully Furnished",
        "High-Speed Internet",
        "Utilities Included",
        "Study Desk",
        "Kitchenette",
        "Laundry Facilities",
        "Security System",
        "5-Minute Walk to Campus",
        "Close to Dining",
        "Student Lounge",
      ],
      images: [
        "https://apiv1.hostel.ng/rooms/F948UiUShostelng.jpeg",
        "https://apiv1.hostel.ng/rooms/OKtXCGoqhostelng.jpeg",
        "https://apiv1.hostel.ng/rooms/96DQvMmlhostelng.jpeg",
        // "/placeholder.svg?height=600&width=800&text=Lodge 1 - Image 4",
      ],
      agent: {
        name: "Sarah Johnson",
        phone: "(310) 555-1234",
        email: "sarah.johnson@studentlodge.com",
        image: "/placeholder.svg?height=200&width=200&text=Landlord",
      },
    },
    {
      id: 64,
      title: "Shekinah Glory Lodge",
      location: "Alakahia, Uniport",
      price: 500000,
      lotSize: "N/A",
      garage: "Bike storage available",
      type: "Studio Apartment",
      status: "For Rent",
      features: [
        "Fully Furnished",
        "High-Speed Internet",
        "Utilities Included",
        "Study Desk",
        "Kitchenette",
        "Laundry Facilities",
        "Security System",
        "5-Minute Walk to Campus",
        "Close to Dining",
        "Student Lounge",
      ],
      images: [
        "https://apiv1.hostel.ng/rooms/Q9PSYD9FVZhostelng.jpg",
        "https://apiv1.hostel.ng/rooms/3CWV3F5VN4hostelng.jpg",
        "https://apiv1.hostel.ng/rooms/KBMF7NC98Zhostelng.jpg",
        // "/placeholder.svg?height=600&width=800&text=Lodge 1 - Image 4",
      ],
      agent: {
        name: "Sarah Johnson",
        phone: "(310) 555-1234",
        email: "sarah.johnson@studentlodge.com",
        image: "/placeholder.svg?height=200&width=200&text=Landlord",
      },
    },
    {
      id: 45,
      title: "Olessoh Lodge",
      location: "Back of Chem, Uniport",
      price: 550000,
      lotSize: "N/A",
      garage: "Bike storage available",
      type: "Studio Apartment",
      status: "For Rent",
      features: [
        "Fully Furnished",
        "High-Speed Internet",
        "Utilities Included",
        "Study Desk",
        "Kitchenette",
        "Laundry Facilities",
        "Security System",
        "5-Minute Walk to Campus",
        "Close to Dining",
        "Student Lounge",
      ],
      images: [
        "https://apiv1.hostel.ng/rooms/P0MSPDAB2Lhostelng.jpg",
        "https://apiv1.hostel.ng/rooms/XWNDTAX7YIhostelng.jpg",
        "https://apiv1.hostel.ng/rooms/O7J7YTHNL0hostelng.jpg",
        // "/placeholder.svg?height=600&width=800&text=Lodge 1 - Image 4",
      ],
      agent: {
        name: "Sarah Johnson",
        phone: "(310) 555-1234",
        email: "sarah.johnson@studentlodge.com",
        image: "/placeholder.svg?height=200&width=200&text=Landlord",
      },
    },
    {
      id: 106,
      title: "Ipweb Lodge",
      location: "Alakahia, Uniport",
      price: 600000,
      lotSize: "N/A",
      garage: "Bike storage available",
      type: "Studio Apartment",
      status: "For Rent",
      features: [
        "Fully Furnished",
        "High-Speed Internet",
        "Utilities Included",
        "Study Desk",
        "Kitchenette",
        "Laundry Facilities",
        "Security System",
        "5-Minute Walk to Campus",
        "Close to Dining",
        "Student Lounge",
      ],
      images: [
        "https://apiv1.hostel.ng/rooms/083YaYxhhostelng.jpeg",
        "https://apiv1.hostel.ng/rooms/mkMLpsKzhostelng.jpeg",
        "https://apiv1.hostel.ng/rooms/AotV94yphostelng.jpeg",
        // "/placeholder.svg?height=600&width=800&text=Lodge 1 - Image 4",
      ],
      agent: {
        name: "Sarah Johnson",
        phone: "(310) 555-1234",
        email: "sarah.johnson@studentlodge.com",
        image: "/placeholder.svg?height=200&width=200&text=Landlord",
      },
    },
    {
      id: 114,
      title: "Peace Complex Lodge",
      location: "Back of Chem, Uniport",
      price: 650000,
      lotSize: "N/A",
      garage: "Bike storage available",
      type: "Studio Apartment",
      status: "For Rent",
      features: [
        "Fully Furnished",
        "High-Speed Internet",
        "Utilities Included",
        "Study Desk",
        "Kitchenette",
        "Laundry Facilities",
        "Security System",
        "5-Minute Walk to Campus",
        "Close to Dining",
        "Student Lounge",
      ],
      images: [
        "https://apiv1.hostel.ng/rooms/tZp1ozRdhostelng.jpeg",
        "https://apiv1.hostel.ng/rooms/vNx0JWykhostelng.jpeg",
        "https://apiv1.hostel.ng/rooms/SzUliDSjhostelng.jpeg",
        // "/placeholder.svg?height=600&width=800&text=Lodge 1 - Image 4",
      ],
      agent: {
        name: "Sarah Johnson",
        phone: "(310) 555-1234",
        email: "sarah.johnson@studentlodge.com",
        image: "/placeholder.svg?height=200&width=200&text=Landlord",
      },
    },
    {
      id: 91,
      title: "Kysimdy Lodge",
      location: "Choba, Uniport",
      price: 700000,
      lotSize: "N/A",
      garage: "Bike storage available",
      type: "Studio Apartment",
      status: "For Rent",
      features: [
        "Fully Furnished",
        "High-Speed Internet",
        "Utilities Included",
        "Study Desk",
        "Kitchenette",
        "Laundry Facilities",
        "Security System",
        "5-Minute Walk to Campus",
        "Close to Dining",
        "Student Lounge",
      ],
      images: [
        "https://apiv1.hostel.ng/rooms/sgXkTMymhostelng.jpeg",
        "https://apiv1.hostel.ng/rooms/iRb2j319hostelng.jpeg",
        "https://apiv1.hostel.ng/rooms/mn3dbMuNhostelng.jpeg",
        // "/placeholder.svg?height=600&width=800&text=Lodge 1 - Image 4",
      ],
      agent: {
        name: "Sarah Johnson",
        phone: "(310) 555-1234",
        email: "sarah.johnson@studentlodge.com",
        image: "/placeholder.svg?height=200&width=200&text=Landlord",
      },
    },
    {
      id: 93,
      title: "Strong Tower Lodge",
      location: "Back of Chem, Uniport",
      price: 750000,
      lotSize: "N/A",
      garage: "Bike storage available",
      type: "Studio Apartment",
      status: "For Rent",
      features: [
        "Fully Furnished",
        "High-Speed Internet",
        "Utilities Included",
        "Study Desk",
        "Kitchenette",
        "Laundry Facilities",
        "Security System",
        "5-Minute Walk to Campus",
        "Close to Dining",
        "Student Lounge",
      ],
      images: [
        "https://apiv1.hostel.ng/rooms/ln4xA8z3hostelng.jpg",
        "https://apiv1.hostel.ng/rooms/5l1ItV2ghostelng.jpg",
        "https://apiv1.hostel.ng/rooms/fMhFPOzMhostelng.jpg",
        // "/placeholder.svg?height=600&width=800&text=Lodge 1 - Image 4",
      ],
      agent: {
        name: "Sarah Johnson",
        phone: "(310) 555-1234",
        email: "sarah.johnson@studentlodge.com",
        image: "/placeholder.svg?height=200&width=200&text=Landlord",
      },
    },
    {
      id: 41,
      title: "Deliht Estate Lodge",
      location: "Choba, Uniport",
      price: 800000,
      lotSize: "N/A",
      garage: "Bike storage available",
      type: "Studio Apartment",
      status: "For Rent",
      features: [
        "Fully Furnished",
        "High-Speed Internet",
        "Utilities Included",
        "Study Desk",
        "Kitchenette",
        "Laundry Facilities",
        "Security System",
        "5-Minute Walk to Campus",
        "Close to Dining",
        "Student Lounge",
      ],
      images: [
        "https://apiv1.hostel.ng/rooms/8TLYZJLLW3hostelng.jpg",
        "https://apiv1.hostel.ng/rooms/9LF3AJGUFNhostelng.jpg",
        "https://apiv1.hostel.ng/rooms/NLC9UXVA4Ohostelng.jpg",
        // "/placeholder.svg?height=600&width=800&text=Lodge 1 - Image 4",
      ],
      agent: {
        name: "Sarah Johnson",
        phone: "(310) 555-1234",
        email: "sarah.johnson@studentlodge.com",
        image: "/placeholder.svg?height=200&width=200&text=Landlord",
      },
    },
    {
      id: 49,
      title: "GloryVille Lodge",
      location: "Alakahia, Uniport",
      price: 850000,
      lotSize: "N/A",
      garage: "Bike storage available",
      type: "Studio Apartment",
      status: "For Rent",
      features: [
        "Fully Furnished",
        "High-Speed Internet",
        "Utilities Included",
        "Study Desk",
        "Kitchenette",
        "Laundry Facilities",
        "Security System",
        "5-Minute Walk to Campus",
        "Close to Dining",
        "Student Lounge",
      ],
      images: [
        "https://apiv1.hostel.ng/rooms/Q9PSYD9FVZhostelng.jpg",
        "https://apiv1.hostel.ng/rooms/11Y8R9M4LAhostelng.jpg",
        "https://apiv1.hostel.ng/rooms/FONR4NNEF9hostelng.jpg",
        // "/placeholder.svg?height=600&width=800&text=Lodge 1 - Image 4",
      ],
      agent: {
        name: "Sarah Johnson",
        phone: "(310) 555-1234",
        email: "sarah.johnson@studentlodge.com",
        image: "/placeholder.svg?height=200&width=200&text=Landlord",
      },
    },
  ],
  setHouses: (houses) => set({ houses }),
  getHousesById: (id) => get().houses.find((house) => house.id === id),
  getHousesByLocation: (location) =>
    get().houses.filter((house) =>
      house.location.toLowerCase().includes(location.toLowerCase())
    ),
}));

export default useHouseStore;
