import { create } from "zustand";

interface HouseStore {
  id: number;
  title: string;
  location: string;
  price: number;
  image: string;
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
      image: "https://apiv1.hostel.ng/rooms/F948UiUShostelng.jpeg",
    },
    {
      id: 64,
      title: "Shekinah Glory Lodge",
      location: "Alakahia, Uniport",
      price: 500000,
      image: "https://apiv1.hostel.ng/rooms/Q9PSYD9FVZhostelng.jpg",
    },
    {
      id: 45,
      title: "Olessoh Lodge",
      location: "Back of Chem, Uniport",
      price: 550000,
      image: "https://apiv1.hostel.ng/rooms/P0MSPDAB2Lhostelng.jpg",
    },
    {
      id: 106,
      title: "Ipweb Lodge",
      location: "Alakahia, Uniport",
      price: 600000,
      image: "https://apiv1.hostel.ng/rooms/083YaYxhhostelng.jpeg",
    },
    {
      id: 114,
      title: "Peace Complex Lodge",
      location: "Back of Chem, Uniport",
      price: 650000,
      image: "https://apiv1.hostel.ng/rooms/tZp1ozRdhostelng.jpeg",
    },
    {
      id: 91,
      title: "Kysimdy Lodge",
      location: "Choba, Uniport",
      price: 700000,
      image: "https://apiv1.hostel.ng/rooms/sgXkTMymhostelng.jpeg",
    },
    {
      id: 93,
      title: "Strong Tower Lodge",
      location: "Back of Chem, Uniport",
      price: 750000,
      image: "https://apiv1.hostel.ng/rooms/ln4xA8z3hostelng.jpg",
    },
    {
      id: 41,
      title: "Deliht Estate Lodge",
      location: "Choba, Uniport",
      price: 800000,
      image: "https://apiv1.hostel.ng/rooms/8TLYZJLLW3hostelng.jpg",
    },
    {
      id: 49,
      title: "GloryVille Lodge",
      location: "Alakahia, Uniport",
      price: 850000,
      image: "https://apiv1.hostel.ng/rooms/CZZ3KSIMR1hostelng.jpg",
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
