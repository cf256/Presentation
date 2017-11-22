import createTheme from "spectacle/lib/themes/default";

const theme = createTheme(
    {
        primary: "#F2F1ED",
        secondary: "rgb(1, 91, 83)",
        tertiary: "#A0D1CA"
    },
    {
        primary: "Montserrat",
        secondary: { name: "Droid Serif", googleFont: true, styles: ["400", "700i"] }
    }
);

export default theme;