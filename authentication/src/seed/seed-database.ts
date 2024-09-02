import prisma from "../lib/prisma";
import { initialData } from "./seed";

async function main() {
  await prisma.user.deleteMany();

  const { users } = initialData;

  await prisma.user.createMany({
    data: users,
  });

  console.log("Seed Executed");
}

(() => {
  main();
})();
