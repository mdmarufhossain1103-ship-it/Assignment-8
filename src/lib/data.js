export const getProducts = async () => {
    const res = await fetch('https://assignment-8-json.onrender.com/products')
    return res.json();
}