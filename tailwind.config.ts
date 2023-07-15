import type { Config } from "tailwindcss";

export default {
    content: ["./src/components/**/*.{ts,tsx}", "./src/pages/**/*.{ts,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [],
} satisfies Config;