export const images = Object.entries(
    import.meta.glob('../assets/images/*.jpg', {eager: true})
).map(([path, module]) => ({
    img: module.default
}));
