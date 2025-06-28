export interface ICar {
  owner: string; // MongoDB ObjectId as string
  brand: string;
  category: string;
  description: string;
  fuelTypes: string;
  image: string;
  model: string;
  year: string; // Can also be Date if using `new Date()` objects
  location: string;
  isAvailable: boolean;
  pricePerDay: number;
  seatingCapacity: number;
  transmission: string;
}
