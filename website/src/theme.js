import { createTheme } from "@mui/material/styles";

const baseTheme = createTheme({
    typography: {
        fontFamily: "'Alegreya', serif",
        h2: {
            fontFamily: "'Playfair Display', serif",
        },
        p: {
            fontFamily: "'Alegreya', serif"
        }
    }
})

export const light = createTheme(baseTheme, {
    palette: {
        mode: "light",
        background: {
            default: "#F2F2F2"
        },
        primary: {
            background: "#F2F2F2",
        },
        secondary: {
            main: "#0077B6"
        },
        text: {
            main: "#181818",
            link: "#0077B6"
        }
    }
})

export const dark = createTheme(baseTheme, {
    palette: {
        mode: "dark",
        background: {
            default: "#181818"
        },
        primary: {
            background: "#181818",
        },
        secondary: {
            main: "#00B4D8"
        },
        text: {
            main: "#F2F2F2",
            link: "#0077B6"
        }
    }
})