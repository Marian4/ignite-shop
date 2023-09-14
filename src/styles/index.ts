import { createStitches } from "@stitches/react";


export const {
    globalCss,
    getCssText,
    styled,
    css,
    config,
    keyframes,
    theme,
    createTheme
} = createStitches({
    theme: {
        colors: {
            white: '#FFFFFF',

            gray100: '#e1e1e6',
            gray300: '#c4c4cc',
            gray800: '#202024',
            gray900: '#121214',

            green300: '#00b37e',
            green500: '#00855f'
        },

        fontSizes: {
            md: '1.125rem',
            lg: '1.25rem',
            xl: '1.5rem',
            '2xl': '2rem'
        }
    }
})
