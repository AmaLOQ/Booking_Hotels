import {createTheme, Theme} from "@mui/material";

const COLORS = {
    DARK_SHADE_100: `rgba(31, 32, 65, 1)`,
    DARK_SHADE_75: `rgba(31, 32, 65, .75)`,
    DARK_SHADE_50: `rgba(31, 32, 65, .5)`,
    DARK_SHADE_25: `rgba(31, 32, 65, .25)`,
    DARK_SHADE_5: `rgba(31, 32, 65, .05)`,
    PURPLE: `rgba(188, 156, 255, 1)`,
    GREEN: `rgba(111, 207, 151, 1)`,
    WHITE: `rgba(255, 255, 255, 1)`,
    BUTTON_MAIN: `linear-gradient(180deg, rgba(188,156,255,1) 0%, rgba(139,164,249,1) 100%)`,
}

declare module '@mui/material/styles' {
    interface DefaultTheme extends Theme {}
    interface Palette {
        buttonColors: Palette['primary'];
        white: Palette['primary'];
    }
    interface PaletteOptions {
        buttonColors?: PaletteOptions['primary'];
        white?: PaletteOptions['primary'];

    }
}

export const theme = createTheme({
    palette: {
        mode: 'light',
        primary:{
            main: COLORS.DARK_SHADE_100,
        },
        text: {
            primary: COLORS.DARK_SHADE_50,
            secondary: COLORS.DARK_SHADE_100,
        },
        buttonColors: {
            main: COLORS.BUTTON_MAIN,
        },
        white: {
            main: COLORS.WHITE
        }
    },
    typography: {
        fontFamily: 'Montserrat',
        h1: {
            fZ: '24px',
        },
        h2: {
            fZ: '19px'
        },
        h3: {
            fZ: '12px'
        },
        body1: {
            fontSize: '14px'
        },
        fontWeightRegular: '400',
    }

})
