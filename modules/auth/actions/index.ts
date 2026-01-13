"use server";

import { db } from "@/lib/db";
import { usersTable } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import {  currentUser } from "@clerk/nextjs/server";


export const onBoardUser = async () => {
    const clerkUser = await currentUser();
    if (!clerkUser) {
        return {
            success:false,
            data:null,
            message: "User not found"
        };
    }
    const [existingUser] = await db.select().from(usersTable).where(eq(usersTable.clerkId, clerkUser.id));
    if (existingUser) {
        return {
            success:true,
            data:existingUser,
            message: "user already exists"
        };
    }
    const newUser = await db.insert(usersTable).values({
        clerkId: clerkUser.id,
        firstName: clerkUser.firstName || '',
        lastName: clerkUser.lastName || '',
        email: clerkUser.emailAddresses[0].emailAddress,
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date(),
    })
    return {
        success:true,
        data:newUser,
        message: "user created successfully"
    }
}


export const getCurrentUserRole = async () => {
    const user = await currentUser();
    if (!user) {
        return null;
    }
    const [existingUser] = await db.select({role:usersTable.role}).from(usersTable).where(eq(usersTable.clerkId, user.id));
    return existingUser?.role;
}