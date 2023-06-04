/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        fontFamily: {
            title: ['"Candal"', "sans-serif"],
        },
        container: {
            padding: {
                DEFAULT: "2vw",
                // sm: "2rem",
                // lg: "4rem",
                // xl: "5rem",
                // "2xl": "6rem",
            },
            // screens: {
            //     xl: "1400px",
            // },
        },
        extend: {
            colors: {
                primary: "var(--primary)",
                contrast: "var(--contrast)",
                contrast5: "var(--contrast-5)",
                contrast10: "var(--contrast-10)",
                transparent: "transparent",
                current: "currentColor",
                white: "#ffffff",
                purple: "#3f3cbb",
                midnight: "#121063",
                metal: "#565584",
                tahiti: "#3ab7bf",
                silver: "#ecebff",
                "bubble-gum": "#ff77e9",
                bermuda: "#78dcca",
            },

            fontSize: {
                sm: "0.8rem",
                base: "1rem",
                lg: "1.125rem",
                xl: "1.25rem",
                "2xl": "1.563rem",
                "3xl": "2rem",
                "4xl": "2.441rem",
                "5xl": "3.052rem",
            },
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        styled: true,
        // themes: true,
        base: true,
        utils: true,
        logs: true,
        rtl: false,
        prefix: "",
        themes: [
            "dark",
            {
                dark: {
                    // ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
                    // primary: "#1f242e",
                    // "primary-focus": "#232934",
                    primary: "rgb(125 211 252)",
                    // "primary-focus": "#232934",
                },
            },
        ],
    },
};
