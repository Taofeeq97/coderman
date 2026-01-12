import { clerkClient } from "@clerk/nextjs/server";

export type UserType = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    clerkId: string;
    role: "admin" | "user";
}