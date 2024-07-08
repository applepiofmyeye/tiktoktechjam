
import { relations } from "drizzle-orm";
import { pgTable, primaryKey, text, uuid } from "drizzle-orm/pg-core";

export const users = pgTable('users', {
    id: uuid("id").defaultRandom().primaryKey().notNull(),
    userName: text('user_name'),
});

export const shoppingLists = pgTable("shopping_lists", {
    id: uuid("id").defaultRandom().primaryKey().notNull(),
    title: text("title").notNull(),
    thumbnail: text("thumbnail").notNull(),
    userId: uuid("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
    slug: text("slug")
});

export const products = pgTable("products", {
    id: uuid("id").defaultRandom().primaryKey().notNull(),
    name: text("name").notNull(),
    price: text("price").notNull(),
    imageUrl: text("image_url").notNull(),
});

export const shoppingListsProducts = pgTable("list_to_products", {
    shoppingListId: uuid("shopping_list_id").notNull().references(() => shoppingLists.id, { onDelete: "cascade" }),
    productId: uuid("product_id").notNull().references(() => products.id, { onDelete: "cascade" })
}, (t) => ({
    pk: primaryKey({ columns: [t.shoppingListId, t.productId] }),
}));

export const videos = pgTable("videos",  {
    id: uuid("id").defaultRandom().primaryKey().notNull(),
    description: text("description").notNull(),
    imageUrl: text("image_url").notNull()
})

export const productsToVideos = pgTable("products_to_videos", {
    productId: uuid("product_id").notNull().references(()=> products.id, {onDelete: "no action"}),
    videoId: uuid("video_id").notNull().references(() => videos.id)
}, (t) => ({
    pk: primaryKey({columns: [t.productId, t.videoId]})
}))

export const usersRelations = relations(users, ({ many }) => ({
    shoppingLists: many(shoppingLists),
}));

export const shoppingListsRelations = relations(shoppingLists, ({ one, many }) => ({
    user: one(users, {
        fields: [shoppingLists.userId],
        references: [users.id],
    }),
    products: many(shoppingListsProducts),
}));

export const productsRelations = relations(products, ({ many }) => ({
    shoppingLists: many(shoppingListsProducts),
    videos: many(productsToVideos)
}));

export const videoRelations = relations(videos, ({many}) => ({
    products: many(productsToVideos)
}))

export const shoppingListsProductsRelations = relations(shoppingListsProducts, ({ one }) => ({
    shoppingList: one(shoppingLists, {
        fields: [shoppingListsProducts.shoppingListId],
        references: [shoppingLists.id],
    }),
    product: one(products, {
        fields: [shoppingListsProducts.productId],
        references: [products.id],
    }),
}));
export const videosToProductsRelations = relations(productsToVideos, ({ one }) => ({
    video: one(videos, {
        fields: [productsToVideos.videoId],
        references: [videos.id],
    }),
    product: one(products, {
        fields: [productsToVideos.productId],
        references: [products.id],
    }),
}));