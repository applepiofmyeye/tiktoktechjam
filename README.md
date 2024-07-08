Hi my name is Joey. This was my submission for the TikTok Techjam 2024 (but i am silly and read the timezone wrong hehe) but here it is for me to keep track of my progress :-)

## Inspiration

The problem statement I chose was: Enhancing Tailored Discovery, to improve and hyperpersonalise the shopping experience for users. For me, I chose to innovate the method of collecting data, and using this data. I was inspired by a problem which I often face when using Tiktok. When scrolling, many influencers share their expert tips on which are the best products to get for makeup, cameras, equipment or just clothes. I love "saving" these videos but I know I'll never come to them again.
Though a simple solution, I believe that it can provide groundbreaking change to the way users view Tiktok and Tiktok Shop.

## The solution

Through Shopping Lists and custom Product Links, creators can link products (whether in Tiktok shop or not) to their videos. This means that users can easily access the items mentioned in the video, save them, share them etc.

## Getting Started

Firs, open the website [here]()! (to be linked after deploymeny)

The left hand side of the screen has been designed to simulate a phone. To get started, enter a username for yourself. This will be saved as your temporary account for this demo.
You may use the buttons "home", "add", "profile" to navigate around the website, and there are 3 demo flows to follow as described below.

### You might now be wondering: what makes this different from Tiktok shop?

The differences, though slight, change the purpose of using this feature.
Currently, Tiktok Shop allows users to add only what is available on Tiktok Shop. This means that when users see the button for Tiktok shop, it's perceived as an ad and swiped away.
However, by making these changes, it can change the way users perceive videos with linked products, which could drastically change the way they use Tiktok and Tiktok Shop

Adding new products (that are not available) on Tiktok Shop benefits both Tiktok and users.
Firstly, this allows Tiktok to gather data on what are the items that Tiktok Shop is lacking. Tiktok can then leverage on this data to encourage relevant merchants to join the platform and sell these products on Tiktok Shop considering there is a demand for their products.

Secondly, users are able to easily access items recommended in the videos, reducing the friction to purchase as they are immediately able to access the products mentioned. Note: currently this prototype does not have a "add to cart" button, but it would be more ideal to reduce friction to purchase.

With data of what product keywords are trending, which demographic of people are sharing and exchanging reviews on which products, Tiktok can leverage on this data to do so much more! I provided some ideas, including: sharing what your friends have been loving nearing their birthdays, flash sales for any product you've been eyeing, or (for products not yet available on Tiktok Shop) new items that have been added to Tiktok Shop that are very similar to the ones saved.

## Demo Flows

Flow 1: Adding items to shopping list
_Prerequisite: should have added a username_

1. Click the "Scroll Tiktok" Button on the "home" page to view the videos available for demo.
2. Click on the shopping bag icon (coloured in green)
3. A bottom sheet should pop up, with the products linked.
   - First video: one product linked.
   - Second video: 0 products linked.
   - Third video: 3 products linked.
4. Click on the Shopping List icon next to a product
5. Choose a shopping list to add it to. - No shopping list: Click "Add shopping list" to make a new shopping list. (then continue to the next bullet point) - Have shopping list: Click on the shopping list to add the product to.
   _[These changes will be reflected in the "profile" page. **Current limitation:** data does not get updated yet, for future improvement]_

Flow 2: Adding items to a video (from a creator's perspective)

1. Click the "add" button at the bottom of the screen
2. Click "Link products"
3. A bottom sheet should pop up, to search all the products in the database.
   (Continue to flow 2.1 or 2.2)

Flow 2.1: Linking an existing product.

1. Click "Sony Camera 1" (or any other product) and a picture with it's description and price should show up.
2. Click the picture
3. The product should be shown below the "Link products"

Flow 2.2: Adding new products

1. Click the "Add Product" button at the bottom of the sheet.
2. Enter a name of the product and its price.
3. Submit the form. If successful, a pop up should show that the item has been added.
   _[Current limitation: images are not allowed and hence are randomly assigned using "Lorem Picsum", a Lorem Ipsum for pictures. Future work: 1. could allow image uploads but would need to consider security and community guidelines. 2. allow external links to be added to a product. 3. add reviews for new products, even if they're not sold on Tiktok shop]_

Flow 3: This or That (Currently only a static page)

1. Navigate to "home" screen
2. click "Try now!" under This or That
3. Click on the option you like
4. Add a comment!
   _[Future work: should be able to save options, send to friends. Should also be able to create a This or That page for friends to see.]_

## Tools used

- Next.JS
- React
- Vercel
- Drizzle ORM
- Zod
- ShadCN
- MaterialUI

I really learnt alot these few days! There is much room for improvement and I would love any feedback! (design wise, database wise etc!)

_ps: if you read till here you're amazing thank you_
