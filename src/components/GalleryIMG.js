export const images = Object.entries (
    import.meta.glob("../assets/images/*{jpg, jpeg}", {eager: true, as: "url"})
);
