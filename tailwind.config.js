/** @type {import('tailwindcss').Config} */

export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.jsx",
    ],
    theme: {
        extend: {
            backgroundImage: {
                mainBg: "url('/resources/images/bg.jpg')",
            },
        },
    },
    plugins: [],
};
