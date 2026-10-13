// Resolve a file in public/ against the deploy base (/portfolio/ on GitHub Pages).
export const asset = (path) => `${import.meta.env.BASE_URL}${path}`;
