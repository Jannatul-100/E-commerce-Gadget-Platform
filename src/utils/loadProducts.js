export default async function loadProducts(){
    const response = await fetch("gadget_products.json")
    const data = await response.json()

    return data;
}