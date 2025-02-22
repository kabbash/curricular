import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient()

export const getAllProducts = async () => {
    return await prisma.product.findMany({
        include: {
            reviews: {
                select: {
                    rating: true,
                }
            }
        }
    })
}

export const getProductById = async (id: number) => {
    const product = await prisma.product.findUniqueOrThrow({
        where: {
            id
        },
        include: {
            reviews: {
                include: {
                    user: true
                }
            }
        }
    })

    return product
}