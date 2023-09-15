import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product"
import { GetStaticPaths, GetStaticProps } from "next"
import { stripe } from "@/lib/stripe"
import Stripe from "stripe"
import { useRouter } from "next/router"
import Image from "next/image"



interface ProductProps {
    product: {
        id: string,
        name: string,
        description: string,
        imageUrl: string,
        price: string
    }
}

export default function Product ({ product }: ProductProps) {
    const { isFallback } = useRouter()

    if (isFallback) return <h1>Loading...</h1>
    return (
        <ProductContainer>
            <ImageContainer>
                <Image src={product.imageUrl} width={520} height={480} alt="" />
            </ImageContainer>
            <ProductDetails>
                <h1>{product.name}</h1>
                <span>{product.price}</span>
                <p>{product.description}</p>
                <button>Comprar</button>
            </ProductDetails>
        </ProductContainer>
    )
}

export const getStaticPaths: GetStaticPaths = () => {
    return {
        paths: [],
        fallback: true
    }
}

interface getStaticPropsParams { id: string }

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
    const { id } = params as getStaticPropsParams

    const product = await stripe.products.retrieve( id ,{
      expand: ['default_price']
    })

    const price = product.default_price as Stripe.Price
  
    return { 
        props: { 
            product: {
                id: product.id,
                name: product.name,
                description: product.description,
                imageUrl: product.images[0],
                price: new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
                }).format(price.unit_amount as number / 100)
            }
        },
        revalidate: 60 * 60 * 1
    }
  }
