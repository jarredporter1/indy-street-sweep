import { z } from "zod/v4";

export const signupSchema = z.object({
  name: z.string().min(2, "Name is required").max(100),
  email: z.string().email("Please enter a valid email"),
  phone: z
    .string()
    .regex(/^\+?[\d\s()\-]{7,15}$/, "Please enter a valid phone number")
    .optional()
    .or(z.literal("")),
  groupSize: z.number().int().min(1, "At least 1 person").max(50, "Maximum 50 per signup"),
  church: z.string().max(100).optional().or(z.literal("")),
  tshirtSize: z.enum(["XS", "S", "M", "L", "XL", "2XL", "3XL"]),
  role: z.enum(["volunteer", "site_leader"]),
  rallyPointId: z.string().min(1, "Please select a rally point"),
  previousExperience: z.string().max(1000).optional().or(z.literal("")),
  trialRunAvailable: z.boolean().optional(),
});

export type SignupInput = z.infer<typeof signupSchema>;
