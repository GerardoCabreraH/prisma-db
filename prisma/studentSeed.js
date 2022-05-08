const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

(async function main() {
  try {
    const woopa1 = await prisma.student.upsert({
      where: { name: "Woopa1" },
      update: {},
      create: {
        name: "Woopa1",
        lang: "javascript",
        missionCommander: "CarloGilmar",
        enrollments: 3
      },
    });

    const woopa2 = await prisma.student.upsert({
      where: { name: "Woopa2" },
      update: {},
      create: {
        name: "Woopa2",
        lang: "javascript",
        missionCommander: "CarloGilmar",
        enrollments: 5
      },
    });

    const woopa3 = await prisma.student.upsert({
      where: { name: "Woopa3" },
      update: {},
      create: {
        name: "Woopa3",
        lang: "java",
        missionCommander: "CarloGilmar",
        enrollments: 2
      },
    });

    const woopa4 = await prisma.student.upsert({
      where: { name: "Woopa4" },
      update: {},
      create: {
        name: "Woopa4",
        lang: "java",
        missionCommander: "CarloGilmar",
        enrollments: 1
      },
    });

    console.log("Create 4 students");
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();