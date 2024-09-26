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
                bookBg: "url('/resources/images/bgProduct.png')",
                catBg: "url('/resources/images/bgLeftColumn.jpg')",
                bookDescBg: "url('/resources/images/bgDownMenu.png')",
            },
        },
    },
    plugins: [],
};
