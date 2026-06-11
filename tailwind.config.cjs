/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                background: "var(--color-background)",
                surface: "var(--color-surface)",
                primary: "var(--color-primary)",
                secondary: "var(--color-secondary)",
                accent: "var(--color-accent)",
                muted: "var(--color-muted)",
                card: {
                    bg: "var(--color-card-bg)",
                    border: "var(--color-card-border)",
                    text: "var(--color-card-text)",
                    muted: "var(--color-card-text-muted)",
                },
            },
        },
    },
    plugins: [],
};
