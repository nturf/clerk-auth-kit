import { PrismaClient } from '@prisma/client'

const prismaSingleton = () => {
    return new PrismaClient()
}

type prismaSingleton = ReturnType<typeof prismaSingleton>

const globalForPrisma = global as unknown as { prisma: PrismaClient | undefined }
const prisma = globalForPrisma.prisma ?? prismaSingleton()

export default prisma

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma
