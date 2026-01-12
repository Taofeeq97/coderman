import { integer, pgTable, text, timestamp,  varchar, pgEnum } from "drizzle-orm/pg-core";

export const roleEnum = pgEnum("role", ["admin", "user"]);

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  clerkId: varchar({ length: 255 }).notNull().unique(),
  firstName: varchar({ length: 255 }).notNull(),
  lastName: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  role: roleEnum("role").notNull().default("user"),
  createdAt: timestamp().notNull().defaultNow(),
  updatedAt: timestamp().notNull().defaultNow(),
});


export const problemsTable = pgTable("problems", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  createdBy: integer().references(() => usersTable.id).notNull(),
  createdAt: timestamp().notNull().defaultNow(),
  title: varchar({ length: 255 }).notNull(),
  description: text().notNull(),
  difficulty: varchar({ length: 255 }).notNull(),
});

