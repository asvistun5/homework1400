import { Prisma, PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const data = [
    { name: "tag1" },
    { name: "tag2" },
    { name: "tag3" },
]

async function seed() {
    await prisma.tag.createMany({data});
}

seed()