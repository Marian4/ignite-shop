import { globalCss } from ".";

export const globalStyles = globalCss({
    '*': {
        padding: 0,
        margin: 0,
    },
    body: {
        backgroundColor: '$gray900',
        color: '$gray100',
        '-webkit-font-smoothing': 'antialiased'
    },
    'body, input, button, textarea': {
        fontFamily: 'Roboto',
        fontWeight: 400
    }
})
