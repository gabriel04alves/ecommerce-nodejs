import { z } from "zod";

export const SignUpSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
});

export const AddressSchema = z.object({
  lineOne: z.string(),
  lineTwo: z.string().optional(),
  postalCode: z.string().length(8),
  country: z.string(),
  city: z.string(),
});

export const UpdateUserSchema = z.object({
  name: z.string().optional(),
  defaultShippingAddress: z.number().optional(),
  defaultBillingAddress: z.number().optional(),
});

export const changeUserRoleSchema = z.object({
  role: z.enum(["ADMIN", "USER"]),
});
