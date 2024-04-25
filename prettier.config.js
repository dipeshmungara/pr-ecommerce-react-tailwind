// prettier.config.js
export default {
    plugins: ["prettier-plugin-tailwindcss"],
    // tailwindcss
    tailwindAttributes: ["theme"],
    tailwindFunctions: ["twMerge", "createTheme"],
};
