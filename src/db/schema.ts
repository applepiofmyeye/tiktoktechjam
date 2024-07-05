import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  userName: text('user_name'),
});

export const shoppingList = pgTable("shoppingList", {
    id: serial("id").primaryKey(),
    title: text("title"),
    thumbnail: text("thumbnail")

})

export const shoppingListThumbnails = pgTable("shopping_lists_thumbnails", {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    thumbnail: text("thumbnail").notNull(),
    shoppingListId: serial("shopping_list_id").references(() => shoppingList.id, {onDelete: "cascade"})
}) 

export const usersShoppingLists = pgTable("users_shopping_lists", {
    id: serial("id").primaryKey(),
    userId: serial("user_id").references(() => users.id, {onDelete: "cascade"}).notNull(),
    shoppingListThumbnailsId: serial("shopping_lists_thumbnails_id").references(() => shoppingListThumbnails.id, {onDelete: "cascade"})
})


export type InsertUser = typeof users.$inferInsert;
export type SelectUser = typeof users.$inferSelect;