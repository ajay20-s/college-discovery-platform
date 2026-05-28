import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.savedCollege.deleteMany();
  await prisma.college.deleteMany();

  await prisma.college.createMany({
    data: [
      {
        name: "IIT Delhi",
        location: "Delhi",
        fees: 250000,
        rating: 4.8,
        description:
          "One of India's premier engineering institutes with excellent placements and research facilities.",
        courses: "B.Tech, M.Tech, MBA",
        image: "/colleges/iitdelhi.jpg",
        averagePackage: "₹22 LPA",
highestPackage: "₹52 LPA",
placementRate: "96%",
ranking: "#1 NIRF Engineering",
      },

      {
        name: "IIT Bombay",
        location: "Mumbai",
        fees: 280000,
        rating: 4.9,
        description:
          "Top-ranked IIT known for innovation, startups, and world-class education.",
        courses: "B.Tech, M.Tech, MBA",
        image: "/colleges/iitbombay.jpg",
        averagePackage: "₹24 LPA",
highestPackage: "₹60 LPA",
placementRate: "97%",
ranking: "#2 NIRF Engineering",
      },

      {
        name: "IIT Madras",
        location: "Chennai",
        fees: 240000,
        rating: 4.8,
        description:
          "Premier IIT with strong focus on research and technology.",
        courses: "B.Tech, M.Tech, MS",
        image: "/colleges/iitmadras.jpg",
        averagePackage: "₹18 LPA",
highestPackage: "₹40 LPA",
placementRate: "92%",
ranking: "#5 NIRF",
      },

      {
        name: "NIT Trichy",
        location: "Tamil Nadu",
        fees: 180000,
        rating: 4.7,
        description:
          "One of the best NITs in India with excellent academics and placements.",
        courses: "B.Tech, MCA, MBA",
        image: "/colleges/nittirchy.jpg",
        averagePackage: "₹14 LPA",
highestPackage: "₹38 LPA",
placementRate: "91%",
ranking: "#9 NIRF Engineering",
      },

      {
        name: "BITS Pilani",
        location: "Rajasthan",
        fees: 350000,
        rating: 4.7,
        description:
          "Renowned private engineering institution with strong industry exposure.",
        courses: "B.Tech, M.Tech",
        image: "/colleges/bitspilani.jpg",
        averagePackage: "₹19 LPA",
highestPackage: "₹45 LPA",
placementRate: "94%",
ranking: "#7 Private Engineering",
      },

      {
        name: "IIIT Hyderabad",
        location: "Hyderabad",
        fees: 320000,
        rating: 4.8,
        description:
          "Top institute for AI, ML, and computer science research.",
        courses: "B.Tech, MS, PhD",
        image: "/colleges/iithyd.jpg",
        averagePackage: "₹18 LPA",
highestPackage: "₹40 LPA",
placementRate: "92%",
ranking: "#5 NIRF",
      },

      {
        name: "VIT Vellore",
        location: "Vellore",
        fees: 220000,
        rating: 4.5,
        description:
          "Popular private university with strong placement records.",
        courses: "B.Tech, MBA, MCA",
        image: "/colleges/vellore.jpg",
        averagePackage: "₹19 LPA",
highestPackage: "₹45 LPA",
placementRate: "94%",
ranking: "#21 Private Engineering",
      },

      {
        name: "SRM University",
        location: "Chennai",
        fees: 260000,
        rating: 4.4,
        description:
          "Modern university known for engineering and research programs.",
        courses: "B.Tech, MBA, MBBS",
        image: "/colleges/srm.jpg",
        averagePackage: "₹19 LPA",
highestPackage: "₹45 LPA",
placementRate: "94%",
ranking: "#7 Private Engineering",
      },

      {
        name: "Delhi University",
        location: "Delhi",
        fees: 50000,
        rating: 4.6,
        description:
          "Prestigious central university with diverse academic programs.",
        courses: "BA, BSc, BCom, MA",
        image: "/colleges/delhi.jpg",
        averagePackage: "₹19 LPA",
highestPackage: "₹45 LPA",
placementRate: "94%",
ranking: "#7 Private Engineering",
      },

      {
        name: "Anna University",
        location: "Chennai",
        fees: 90000,
        rating: 4.5,
        description:
          "Leading state university for engineering education in Tamil Nadu.",
        courses: "B.E, M.E, MBA",
        image: "/colleges/anna.jpg",
        averagePackage: "₹19 LPA",
highestPackage: "₹45 LPA",
placementRate: "94%",
ranking: "#21 Private Engineering",
      },

      {
        name: "Jadavpur University",
        location: "Kolkata",
        fees: 30000,
        rating: 4.7,
        description:
          "Highly respected university known for engineering and arts.",
        courses: "B.Tech, MA, MSc",
        image: "/colleges/jadavpur.jpg",
        averagePackage: "₹19 LPA",
highestPackage: "₹45 LPA",
placementRate: "94%",
ranking: "#7 Private Engineering",
      },

      {
        name: "Manipal University",
        location: "Manipal",
        fees: 310000,
        rating: 4.5,
        description:
          "Top private university with international exposure.",
        courses: "B.Tech, MBA, MBBS",
       image: "/colleges/manipal.jpg",
       averagePackage: "₹18 LPA",
highestPackage: "₹40 LPA",
placementRate: "92%",
ranking: "#5 NIRF",
      },
    ],
  });

  console.log("Seed data inserted");
}

main()
  .catch((e) => {
    console.log(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });