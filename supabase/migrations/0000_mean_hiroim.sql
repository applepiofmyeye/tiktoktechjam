CREATE TABLE IF NOT EXISTS "shoppingList" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text,
	"thumbnail" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "shopping_lists_thumbnails" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"thumbnail" text NOT NULL,
	"shopping_list_id" serial NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_name" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users_shopping_lists" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" serial NOT NULL,
	"shopping_lists_thumbnails_id" serial NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "shopping_lists_thumbnails" ADD CONSTRAINT "shopping_lists_thumbnails_shopping_list_id_shoppingList_id_fk" FOREIGN KEY ("shopping_list_id") REFERENCES "public"."shoppingList"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "users_shopping_lists" ADD CONSTRAINT "users_shopping_lists_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "users_shopping_lists" ADD CONSTRAINT "users_shopping_lists_shopping_lists_thumbnails_id_shopping_lists_thumbnails_id_fk" FOREIGN KEY ("shopping_lists_thumbnails_id") REFERENCES "public"."shopping_lists_thumbnails"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
