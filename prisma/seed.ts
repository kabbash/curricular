import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Review" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;

  await prisma.product.createMany({
    data: [
      {
        name: 'Monstera Deliciosa',
        description:
          'A tropical plant with large, glossy leaves that add a touch of the jungle to any space.',
        price: 45,
        quantity: 15,
        image: 'https://i.postimg.cc/X7B0t4MV/evie-s-8vovu-ZCj0c-unsplash.jpg',
      },
      {
        name: 'Fiddle Leaf Fig',
        description:
          'A popular indoor tree with large, violin-shaped leaves, perfect for brightening up your home.',
        price: 60,
        quantity: 12,
        image: 'https://i.postimg.cc/NMj3Dw7v/feey-7d7-OR-Rvuf-U-unsplash.jpg',
      },
      {
        name: 'Snake Plant',
        description:
          'A hardy, low-maintenance plant that thrives in low light and purifies the air.',
        price: 25,
        quantity: 20,
        image:
          'https://i.postimg.cc/HkQ1szsR/linh-le-Ebwp2-6-BG8-E-unsplash.jpg',
      },
      {
        name: 'Pothos Golden',
        description:
          'A versatile trailing plant with heart-shaped leaves, ideal for hanging baskets or shelves.',
        price: 20,
        quantity: 18,
        image:
          'https://i.postimg.cc/7ZvykdDS/nagy-arnold-X-Iv-VDu-Hv-DQ-unsplash.jpg',
      },
      {
        name: 'Rubber Plant',
        description:
          'A striking plant with dark green, glossy leaves that make a bold statement in any room.',
        price: 35,
        quantity: 10,
        image:
          'https://i.postimg.cc/WzQxsqRs/still-life-with-indoor-plants.jpg',
      },
    ],
  });

  await prisma.user.createMany({
    data: [
      {
        email: 'alice@prisma.io',
        name: 'Alice',
      },
      {
        email: 'bob@prisma.io',
        name: 'Bob',
      },
    ],
  });

  await prisma.review.createMany({
    data: [
      {
        rating: 5,
        comment: 'The Aloe Vera arrived healthy and vibrant!',
        productId: 1,
        userId: 1,
      },
      {
        rating: 4,
        comment: 'The Fiddle Leaf Fig is stunning, but took a while to adjust.',
        productId: 2,
        userId: 1,
      },
      {
        rating: 5,
        comment: "Love my Snake Plant! It's so easy to care for.",
        productId: 3,
        userId: 1,
      },
      {
        rating: 3,
        comment: "The Peace Lily struggled a bit, but it's recovering now.",
        productId: 4,
        userId: 1,
      },
      {
        rating: 5,
        comment: 'Spider Plant is perfect for my home! Highly recommend.',
        productId: 5,
        userId: 1,
      },
      {
        rating: 5,
        comment: 'Spider Plant is perfect for my home! Highly recommend.',
        productId: 5,
        userId: 2,
      },
      {
        rating: 4,
        comment:
          'Rubber Plant looks great, but it needs more light than I expected.',
        productId: 1,
        userId: 1,
      },
      {
        rating: 5,
        comment: 'Boston Fern adds such a lovely touch to my living room!',
        productId: 2,
        userId: 1,
      },
      {
        rating: 5,
        comment: "Pothos grows like a weed! I'm so happy with my purchase.",
        productId: 3,
        userId: 1,
      },
      {
        rating: 3,
        comment: "Pothos grows like a weed! I'm so happy with my purchase.",
        productId: 3,
        userId: 2,
      },
      {
        rating: 2,
        comment: "My Orchid had a short bloom, I'm a bit disappointed.",
        productId: 4,
        userId: 1,
      },
      {
        rating: 1,
        comment: "My Orchid had a short bloom, I'm a bit disappointed.",
        productId: 4,
        userId: 2,
      },
      {
        rating: 5,
        comment: 'The Chinese Money Plant is beautiful and unique!',
        productId: 5,
        userId: 1,
      },
    ],
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
