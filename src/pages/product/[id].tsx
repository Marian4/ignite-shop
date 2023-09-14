import { useRouter } from "next/router"
import { styled } from "../../styles"

const Button = styled("button", {
    backgroundColor: '$green500'
})

export default function Product () {
    const { query } = useRouter()
    return <Button>butao</Button>
}
