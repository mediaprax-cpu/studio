
export type Product = {
  id: string;
  name: string;
  price: number;
  category: 'boys' | 'girls' | 'newborn';
  sizes: string[];
  colors: string[];
  imageId: string;
  description: string;
};

export type Category = {
  id: string;
  name: string;
  imageId: string;
};

export type Testimonial = {
  id: number;
  name: string;
  feedback: string;
  imageId: string;
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  imageId: string;
};

export type StoryChapter = {
  id: string;
  title: string;
  text: string;
  imageId: string;
};

export const products: Product[] = [
  { id: '1', name: 'Dino Adventure T-Shirt', price: 15.99, category: 'boys', sizes: ['2T', '3T', '4T', '5T'], colors: ['Green', 'Blue'], imageId: 'product-1', description: 'Roar into fun with this super-soft cotton tee featuring a friendly T-Rex. Perfect for playground expeditions and prehistoric playtime.' },
  { id: '2', name: 'Rainbow Stripe Leggings', price: 18.50, category: 'girls', sizes: ['2T', '3T', '4T', '5T'], colors: ['Rainbow'], imageId: 'product-2', description: 'Brighten any day with these stretchy and vibrant rainbow leggings. Made with a comfy elastic waistband for all-day play.' },
  { id: '3', name: 'Cozy Cloud Onesie', price: 22.00, category: 'newborn', sizes: ['0-3M', '3-6M', '6-9M'], colors: ['White', 'Gray'], imageId: 'product-3', description: 'Wrap your little one in the softness of a cloud. This organic cotton onesie is gentle on baby\'s skin and features easy-snap buttons.' },
  { id: '4', name: 'Super Star Jeans', price: 25.00, category: 'boys', sizes: ['4T', '5T', '6'], colors: ['Denim'], imageId: 'product-4', description: 'Your little rockstar will love these cool and comfy jeans with embroidered star patches. Durable for play, stylish for everyday.' },
  { id: '5', name: 'Sunny Day Dress', price: 28.00, category: 'girls', sizes: ['3T', '4T', '5T'], colors: ['Yellow', 'White'], imageId: 'product-5', description: 'A cheerful yellow dress perfect for sunny adventures. Lightweight and breezy, it features a cute floral pattern and a twirl-worthy skirt.' },
  { id: '6', name: 'Rocket Ship Hoodie', price: 30.00, category: 'boys', sizes: ['2T', '3T', '4T'], colors: ['Navy', 'Red'], imageId: 'product-6', description: '3-2-1 Blast off! This cozy fleece hoodie will keep your little astronaut warm on their journeys to the moon and back.' },
  { id: '7', name: 'Playful Polka Dot Skirt', price: 19.99, category: 'girls', sizes: ['4T', '5T', '6'], colors: ['Pink', 'White'], imageId: 'product-7', description: 'Twirls and giggles guaranteed! This fun polka dot skirt has a comfortable elastic waistband and a built-in short for worry-free play.' },
  { id: '8', name: 'Little Bear Pajamas', price: 24.50, category: 'newborn', sizes: ['0-3M', '3-6M'], colors: ['Beige', 'Brown'], imageId: 'product-8', description: 'Sweet dreams are made of these. Adorable bear-themed pajamas made from the softest organic cotton for a snuggly night\'s sleep.' },
  { id: '9', name: 'Explorer Cargo Shorts', price: 17.00, category: 'boys', sizes: ['5T', '6', '7'], colors: ['Khaki'], imageId: 'product-9', description: 'Ready for any adventure, these durable cargo shorts have plenty of pockets for treasures found along the way. ' },
  { id: '10', name: 'Butterfly Wings Raincoat', price: 35.00, category: 'girls', sizes: ['3T', '4T', '5T'], colors: ['Purple', 'Blue'], imageId: 'product-10', description: 'Make a splash! This magical raincoat has butterfly wings on the back and a waterproof shell to keep her dry on rainy days.' },
  { id: '11', name: 'Sleepy Sheep Swaddle', price: 18.00, category: 'newborn', sizes: ['Newborn'], colors: ['Mint', 'White'], imageId: 'product-11', description: 'A soft, breathable muslin swaddle with a gentle sheep pattern to help your little lamb drift off to sleep.' },
  { id: '12', name: 'Friendly Fox Sweater', price: 26.00, category: 'boys', sizes: ['2T', '3T', '4T'], colors: ['Orange', 'Cream'], imageId: 'product-12', description: 'Stay cozy and cunning in this charming knit sweater featuring a friendly fox face. A perfect layer for chilly days.' },
  { id: '13', name: 'Gamer Graphic Tee', price: 16.50, category: 'boys', sizes: ['6', '7', '8'], colors: ['Black', 'Green'], imageId: 'product-13', description: 'Level up their wardrobe with this awesome gamer tee. Made from 100% cotton for breathable comfort during epic gaming sessions.' },
  { id: '14', name: 'Unicorn Magic Tulle Dress', price: 32.00, category: 'girls', sizes: ['4T', '5T', '6'], colors: ['Pastel'], imageId: 'product-14', description: 'A dress as magical as she is! Featuring a sparkly unicorn bodice and a rainbow tulle skirt that\'s perfect for parties and dress-up.' },
  { id: '15', name: 'First Steps Baby Booties', price: 12.00, category: 'newborn', sizes: ['3-6M', '6-9M'], colors: ['Gray', 'Blue'], imageId: 'product-15', description: 'Keep tiny toes warm with these soft-soled baby booties. The gentle elastic ankle strap ensures they stay on wiggling feet.' },
  { id: '16', name: 'Construction Zone Joggers', price: 21.00, category: 'boys', sizes: ['2T', '3T', '4T'], colors: ['Yellow', 'Black'], imageId: 'product-16', description: 'For the little builder in your life, these comfy joggers feature cool construction vehicle prints and a soft fleece lining.' }
];

export const categories: Category[] = [
  { id: 'boys', name: 'Boys', imageId: 'category-boys' },
  { id: 'girls', name: 'Girls', imageId: 'category-girls' },
  { id: 'newborn', name: 'Newborn', imageId: 'category-newborn' },
];

export const testimonials: Testimonial[] = [
  { id: 1, name: 'Priya S.', feedback: 'The clothes are absolutely adorable and so well-made! My daughter wants to wear her sunny day dress every single day.', imageId: 'testimonial-1' },
  { id: 2, name: 'Amit K.', feedback: 'Finally, boys\' clothes that are fun and durable. The rocket ship hoodie is a huge hit with my son. Great quality!', imageId: 'testimonial-2' },
  { id: 3, name: 'Sunita M.', feedback: 'I bought the cozy cloud onesie for my newborn and it\'s the softest thing ever. Highly recommend for new parents.', imageId: 'testimonial-3' },
];

export const teamMembers: TeamMember[] = [
  { id: '1', name: 'Mani', role: 'Founder & CEO', imageId: 'team-1' },
  { id: '2', name: 'John Smith', role: 'Lead Designer', imageId: 'team-2' },
  { id: '3', name: 'Emily White', role: 'Head of Fun', imageId: 'team-3' },
];

export const storyChapters: StoryChapter[] = [
    {
        id: '1',
        title: 'A Tiny Idea',
        text: 'It all started with a simple sketch. Our founder, a mom of two, was tired of boring, uninspired kids\' clothes. She dreamed of creating a brand that was as colorful and unique as her own children. So, with a notebook full of doodles, the idea for guglumuglu was born.',
        imageId: 'story-1'
    },
    {
        id: '2',
        title: 'Stitching the Dream',
        text: 'From sketches to stitches, the first collection came to life in a small home studio. Every fabric was chosen for softness, every seam sewn with care, and every design filled with love and a touch of whimsy. It was a labor of love, fueled by coffee and toddler naps.',
        imageId: 'story-2'
    },
    {
        id: '3',
        title: 'Opening Our Doors',
        text: 'Today, guglumuglu has grown from a kitchen table dream to a beloved brand for families everywhere. We may have a bigger studio, but our mission remains the same: to create bright, beautiful clothes that let kids be kids. Thank you for being part of our story!',
        imageId: 'story-3'
    }
]

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About Us' },
  { href: '/story', label: 'Our Story' },
  { href: '/contact', label: 'Contact' },
];
