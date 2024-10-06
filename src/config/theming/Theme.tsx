import { createTheme } from '@mui/material/styles'
import DancingScript from '../../utilities/fonts/google/Dancing_Script/static/DancingScript-Regular.ttf';
import ArchitectsDaughter from '../../utilities/fonts/google/Architects_Daughter/ArchitectsDaughter-Regular.ttf';

const dancingscript = {
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `
      local('DancingScript'),
      local('DancingScript-Regular'),
      url(${DancingScript}) format('truetype')
    `,
    unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF UTF-8",
}

const architectsDaughter = {
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `
      local('ArchitectsDaughter'),
      local('ArchitectsDaughter-Regular'),
      url(${ArchitectsDaughter}) format('truetype')
    `,
    unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF UTF-8",
}

export const theme = createTheme({
    palette: {
        primary: {
            main: "#cd930b",
            light: "#d4ab2e",
            dark: "#cc8307",
        },
        secondary: {
            main: "#93b219",
            light: "#D8ECCB",
            dark: "#2F4328",
        },
        info: {
            main: "#94e0cd",
        },
        error: {
            main: "#e5a48e",
        },
        background: {
            default: "#f7f3e5",
        }
    },
    typography: {
        fontSize: 15,
        fontFamily: "DancingScript, ArchitectsDaughter",
        fontWeightLight: "500",
        fontWeightMedium: "700",
        fontWeightBold: "800",
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                '@global': {
                    '@font-face': [dancingscript, architectsDaughter],
                 },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: "#c9c1b6"
                }
            }
        },
        MuiIconButton: {
            defaultProps: {
                size: "small",
            }
        }
    },
    spacing: 12,
})