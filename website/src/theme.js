import { createTheme } from "@mui/material/styles";

const baseTheme = createTheme({
    typography: {
        fontFamily: "'Alegreya', serif",
        h2: {
            fontFamily: "'Playfair Display', serif",
        }
    }
})

export const light = createTheme(baseTheme, {
    palette: {
        mode: "light",
        primary: {
            background: "#F2F2F2",
            main: "#181818"
        },
        secondary: {
            main: "#0077B6"
        }
    }
})

export const dark = createTheme(baseTheme, {
    palette: {
        mode: "dark",
        primary: {
            background: "#181818",
            main: "#F2F2F2"
        },
        secondary: {
            main: "#00B4D8"
        }
    }
})