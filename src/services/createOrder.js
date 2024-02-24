async function createOrder(items) {
    var url = `${process.env.REACT_APP_BASE_URL}/ms-store-cart/orders`;
    await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ products: items.map((item) => item.id)}),
    });
}

export { createOrder };