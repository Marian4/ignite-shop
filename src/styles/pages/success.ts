import { styled } from "..";

export const SuccessContainer = styled("main", {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    height: 656,

    h1: {
        fontSize: '$2xl',
        color: '$gray100'
    },

    p: {
        fontSize: '$xl',
        color: '$gray300',
        textAlign: 'center',
        maxWidth: 560,
        marginTop: '2rem'
    },

    a: {
        textDecoration: 'none',
        fontSize: '$lg',
        fontWeight: 'bold',
        display: 'block',
        color: '$green500',
        marginTop: '5rem',

        '&:hover': {
            color: '$green300',
        }
    }
})

export const ImageContainer = styled("div", {
    width: '100%',
    maxWidth: 130,
    height: 145,
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    padding: '0.25rem',
    borderRadius: 8,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '4rem',

    img: {
        objectFit: 'cover'
    },
})
