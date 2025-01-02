export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                principal: "hsla(337, 99%, 43%, 1)",
                secundario: "hsla(0, 0%, 20%, 1)",
                descripcion: "hsla(0, 0%, 56%, 1)"
            },
            fontFamily: {
                poppins: ['Poppins', 'serif'],
                bebas: ['Bebas Neue', 'serif']
            },
            animation: {
                tada: "tada 1s ease-in-out 5",
                jump: "jump 1s ease-in-out 5"
            },
            keyframes: {
                tada: {
                    "0%": {
                        transform: "scale(1)"
                    },
                    "10%": {
                        transform: "scale(0.9) rotate(-3deg)"
                    },
                    "20%": {
                        transform: "scale(0.9) rotate(-3deg)"
                    },
                    "30%": {
                        transform: "scale(1.1) rotate(3deg)"
                    },
                    "40%": {
                        transform: "scale(1.1) rotate(-3deg)"
                    },
                    "50%": {
                        transform: "scale(1.1) rotate(3deg)"
                    },
                    "60%": {
                        transform: "scale(1.1) rotate(-3deg)"
                    },
                    "70%": {
                        transform: "scale(1.1) rotate(3deg)"
                    },
                    "80%": {
                        transform: "scale(1.1) rotate(-3deg)"
                    },
                    "90%": {
                        transform: "scale(1.1) rotate(3deg)"
                    },
                    "100%": {
                        transform: "scale(1) rotate(0)"
                    }
                },
                jump: {
                    "0%": {
                        transform: "translateY(0)"
                    },
                    "50%": {
                        transform: "translateY(-20px)"
                    },
                    "100%": {
                        transform: "translateY(0)"
                    }
                }
            }
        }
    },
    plugins: [],
}