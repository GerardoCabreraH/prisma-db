const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

(async function main() {
  try {
    const woopa = await prisma.missionCommander.upsert({
      where: { name: "Woopa" },
      update: {},
      create: {
        name: "Woopa",
        username: "ajolonauta",
        mainStack: "Node",
      },
    });

    const woopa1 = await prisma.missionCommander.upsert({
      where: { name: "Woopa1" },
      update: {},
      create: {
        name: "Woopa1",
        username: "ajolonauta1",
        mainStack: "Node",
      },
    });

    const woopa2 = await prisma.missionCommander.upsert({
      where: { name: "Woopa 2" },
      update: {},
      create: {
        name: "Woopa 2",
        username: "ajolonauta2",
        mainStack: "Java",
      },
    });

    const woopa3 = await prisma.missionCommander.upsert({
      where: { name: "Woopa 3" },
      update: {},
      create: {
        name: "Woopa 3",
        username: "ajolonauta3",
        mainStack: "Node",
      },
    });

    console.log("Create 4 mission commander");
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();