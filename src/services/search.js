async function search(keyword, location) {
  const products = await fetchOperation(keyword, location);
  return products;
}

async function fetchOperation(keyword, location) {
  var url = `${process.env.REACT_APP_BASE_URL}/ms-store-products/products`;

  if (location.includes("men")) {
    url += `?category=man`;
  }
  if (location.includes("woman")) {
    url += `?category=women`;
  }

  if (keyword !== "" && url.includes("?")) {
    url += `&name=${keyword}`;
  } else if (keyword !== "") {
    url += `?name=${keyword}`;
  }

  var response = await fetch(url);

  const json = await response.json();

  return json["products"];
}

export { search };
