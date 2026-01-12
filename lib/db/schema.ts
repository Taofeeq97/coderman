import { integer, pgTable, text, timestamp,  varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
});


export const problemsTable = pgTable("problems", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  createdBy: integer().references(() => usersTable.id).notNull(),
  createdAt: timestamp().notNull().defaultNow(),
  title: varchar({ length: 255 }).notNull(),
  description: text().notNull(),
  difficulty: varchar({ length: 255 }).notNull(),
});

