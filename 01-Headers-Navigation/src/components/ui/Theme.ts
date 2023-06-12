import { purple, blueGrey, red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import "@mui/material/styles/createPalette";
declare module "@mui/material/styles/createPalette" {
    interface CommonColors {
        blue: string;
        orange: string;
        lightRed: string;
        red: string;
        offBlack: string;
    }
}



const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";

export const mainThemeApp = createTheme({
    palette: {
        primary: {
            main: blueGrey[900],
            // main: purple[100],
            // main: '#d50000',
        },
    },
});
export const secThemeApp = createTheme({
    palette: {
        common: {
            blue: `${arcBlue}`,
            orange: `${arcOrange}`,
        },
        primary: {
            main: `${arcBlue}`,
        },
        secondary: {
            main: `${arcOrange}`,
        },
    },
});
