import { styled } from "..";

export const ProductContainer = styled("main", {
    display: "grid",
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'stretch',
    maxWidth: 1180,
    gap: '4rem',
    margin: '0 auto'
})

export const ImageContainer = styled("div", {
    width: '100%',
    maxWidth: 576,
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    padding: '0.25rem',
    borderRadius: 8,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    img: {
        objectFit: 'cover'
    },
    height: 660
})

export const ProductDetails = styled("div", {
    display: 'flex',
    flexDirection: 'column',

    h1: {
        fontSize: '$2xl',
        color: '$gray300'
    },

    span: {
        fontSize: '$2xl',
        color: '$green300',
        display: 'block',
        marginTop: '1rem'
    },

    p: {
        marginTop: '2.5rem',
        fontSize: '$md',
        color: '$gray300',
        lineHeight: 1.6
    },

    button: {
        marginTop: 'auto',
        backgroundColor: '$green500',
        border: 0,
        color: '$white',
        borderRadius: 8,
        padding: '1.25rem',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '$md',

        '&:disabled': {
            opacity: 0.6,
            cursor: 'not-allowed',
        },

        '&:not(:disabled):hover': {
            backgroundColor: '$green300',
        }
    }
})
