
import { z } from "zod";

export type ICar = z.infer<typeof carZodSchema> & { _id?: string }


// Define allowed fuel types, brands, etc.
const allowedFuelTypes = ["Petrol", "Diesel", "Electric", "Hybrid"] as const;
const allowedTransmissions = ["Automatic", "Manual"] as const;
const currentYear = new Date().getFullYear();

export const carZodSchema = z.object({
  // owner: z.string().min(1, "Owner is required"),

  brand: z.string()
    .min(2, "Brand must be at least 2 characters")
    .max(50, "Brand too long")
    .regex(/^[A-Za-z0-9\s-]+$/, "Only letters, numbers, spaces, and dashes are allowed"),

  category: z.string()
    .min(2, "Category must be at least 2 characters")
    .regex(/^[A-Za-z\s]+$/, "Only letters and spaces are allowed"),

  description: z.string()
    .min(10, "Description must be at least 10 characters"),

  fuelTypes: z.enum(allowedFuelTypes, {
    errorMap: () => ({ message: `Fuel type must be one of: ${allowedFuelTypes.join(", ")}` }),
  }),

  image: z
    .instanceof(File)
    .refine((file) => file.size > 0, "Image is required")
    .refine((file) => file.type.startsWith("image/"), "Only image files are allowed"),

  model: z.string()
    .min(1, "Model is required")
    .regex(/^[A-Za-z0-9\- ]+$/, "Only letters, numbers, and dashes allowed"),

  year: z.coerce.number()
    .int("Must be a valid year")
    .gte(1990, "Year must be 1990 or later")
    .lte(currentYear + 1, `Year cannot be later than ${currentYear + 1}`),

  location: z.string()
    .min(3, "Location must be at least 3 characters")
    .regex(/^[A-Za-z\s,]+$/, "Only letters, spaces, and commas are allowed"),

  // isAvailable: z.boolean().default(true),

  pricePerDay: z.coerce.number()
    .positive("Price must be greater than 0"),

  seatingCapacity: z.coerce.number()
    .int("Seating capacity must be a whole number")
    .gte(1, "At least 1 seat")
    .lte(9, "No more than 9 seats"),

  transmission: z.enum(allowedTransmissions, {
    errorMap: () => ({ message: `Transmission must be either ${allowedTransmissions.join(" or ")}` }),
  }),
});

export const BookingSchema = z.object({
  pickUpDate: z.date({
    required_error: "Pick up date is required.",
  }),
  returnDate: z.date({
    required_error: "Return date is required.",
  }),
  pickUpLocation: z.string({
    required_error: "Pick Location is required"
  }),
  returnLocation:z.string({
    required_error:"Return Location is required"
  })
})

export type IBooking = z.infer<typeof BookingSchema> & { user: string, car: string | Pick<ICar, 'brand' | 'category' | 'location' | 'image' | 'year'>, totalPrice: number, _id?: string, status?: 'confirmed' | 'pending', createdAt?: Date }

