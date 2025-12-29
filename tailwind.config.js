/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--color-border)" /* gray-300 */,
        input: "var(--color-input)" /* gray-300 */,
        ring: "var(--color-ring)" /* blue-900 */,
        background: "var(--color-background)" /* gray-50 */,
        foreground: "var(--color-foreground)" /* gray-900 */,
        primary: {
          DEFAULT: "var(--color-primary)" /* blue-900 */,
          foreground: "var(--color-primary-foreground)" /* white */,
        },
        secondary: {
          DEFAULT: "var(--color-secondary)" /* blue-700 */,
          foreground: "var(--color-secondary-foreground)" /* white */,
        },
        destructive: {
          DEFAULT: "var(--color-destructive)" /* red-600 */,
          foreground: "var(--color-destructive-foreground)" /* white */,
        },
        muted: {
          DEFAULT: "var(--color-muted)" /* gray-100 */,
          foreground: "var(--color-muted-foreground)" /* gray-600 */,
        },
        accent: {
          DEFAULT: "var(--color-accent)" /* orange-500 */,
          foreground: "var(--color-accent-foreground)" /* white */,
        },
        popover: {
          DEFAULT: "var(--color-popover)" /* white */,
          foreground: "var(--color-popover-foreground)" /* gray-900 */,
        },
        card: {
          DEFAULT: "var(--color-card)" /* white */,
          foreground: "var(--color-card-foreground)" /* gray-900 */,
        },
        success: {
          DEFAULT: "var(--color-success)" /* green-600 */,
          foreground: "var(--color-success-foreground)" /* white */,
        },
        warning: {
          DEFAULT: "var(--color-warning)" /* yellow-600 */,
          foreground: "var(--color-warning-foreground)" /* gray-900 */,
        },
        error: {
          DEFAULT: "var(--color-error)" /* red-600 */,
          foreground: "var(--color-error-foreground)" /* white */,
        },
        action: {
          DEFAULT: "var(--color-action)" /* red-500 */,
          foreground: "var(--color-action-foreground)" /* white */,
        },
        trust: {
          DEFAULT: "var(--color-trust)" /* green-700 */,
          foreground: "var(--color-trust-foreground)" /* white */,
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Source Sans Pro", "sans-serif"],
        heading: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        card: "0 2px 8px rgba(27, 54, 93, 0.1)",
        modal: "0 4px 16px rgba(27, 54, 93, 0.15)",
        subtle: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-scale": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        "pulse-scale": "pulse-scale 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
