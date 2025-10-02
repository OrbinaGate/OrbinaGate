import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        electric: {
          blue: "#1e40ff",
          light: "#4169ff",
          bright: "#6495ff",
          ice: "#87ceeb",
        },
      },
      fontFamily: {
        futura: ['"Impact"', '"Arial Black"', '"Helvetica Bold"', '"Trebuchet MS"', "sans-serif"],
        modern: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          '"Roboto"',
          '"Oxygen"',
          '"Ubuntu"',
          '"Cantarell"',
          "sans-serif",
        ],
        tech: ['"Consolas"', '"Monaco"', '"Lucida Console"', '"Liberation Mono"', '"Courier New"', "monospace"],
        display: ['"Impact"', '"Arial Black"', '"Helvetica Bold"', '"Franklin Gothic Heavy"', "sans-serif"],
      },
      animation: {
        "float-modern": "float-modern 4s ease-in-out infinite",
        "spin-modern": "spin-modern 6s linear infinite",
        "pulse-modern": "pulse-modern 3s ease-in-out infinite",
        "wave-modern": "wave-modern 4s ease-in-out infinite",
        "morph-modern": "morph-modern 8s ease-in-out infinite",
        "electric-flow": "electric-flow 3s ease-in-out infinite",
        "spectrum-flow": "spectrum-flow 4s ease-in-out infinite",
        "cosmic-flow": "cosmic-flow 5s ease-in-out infinite",
        "quantum-oscillate": "quantum-oscillate 2s ease-in-out infinite alternate",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      letterSpacing: {
        "ultra-wide": "0.2em",
        "mega-wide": "0.3em",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
