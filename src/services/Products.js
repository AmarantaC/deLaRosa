const products = [
    {
      id: 1,
      title: "Rosa",
      category: "Playeras",
      stock: 7,
      img: "https://cdn.shopify.com/s/files/1/2687/6776/files/area_de_impresion_playera_480x480.jpg?v=1612304274",
      detail: "M",
      price: 349.28,
    },
    {
      id: 2,
      title: "Amarillo",
      category: "Playeras",
      stock: 7,
      img: "https://cdn.shopify.com/s/files/1/2687/6776/files/area_de_impresion_playera_480x480.jpg?v=1612304274",
      detail: "S",
      price: 236.76,
    },
    {
      id: 3,
      title: "Negro",
      category: "Playeras",
      stock: 5,
      img: "https://cdn.shopify.com/s/files/1/2687/6776/files/area_de_impresion_playera_480x480.jpg?v=1612304274",
      detail: "G",
      price: 326.01,
    },
    {
      id: 4,
      title: "Verde",
      category: "Playeras",
      stock: 6,
      img: "https://cdn.shopify.com/s/files/1/2687/6776/files/area_de_impresion_playera_480x480.jpg?v=1612304274",
      detail: "S",
      price: 386.07,
    },
    {
      id: 5,
      title: "Azul",
      category: "Playeras",
      stock: 3,
      img: "https://cdn.shopify.com/s/files/1/2687/6776/files/area_de_impresion_playera_480x480.jpg?v=1612304274",
      detail: "M",
      price: 153.39,
    },
    {
      id: 6,
      title: "Naranja",
      category: "Playeras",
      stock: 10,
      img: "https://cdn.shopify.com/s/files/1/2687/6776/files/area_de_impresion_playera_480x480.jpg?v=1612304274",
      detail: "G",
      price: 386.08,
    },
    {
      id: 7,
      title: "Morado",
      category: "Playeras",
      stock: 2,
      img: "https://cdn.shopify.com/s/files/1/2687/6776/files/area_de_impresion_playera_480x480.jpg?v=1612304274",
      detail: "G",
      price: 260.25,
    },
    {
      id: 8,
      title: "Blanco",
      category: "Playeras",
      stock: 10,
      img: "https://cdn.shopify.com/s/files/1/2687/6776/files/area_de_impresion_playera_480x480.jpg?v=1612304274",
      detail: "S",
      price: 172.41,
    },
    {
      id: 9,
      title: "Gris",
      category: "Playeras",
      stock: 7,
      img: "https://cdn.shopify.com/s/files/1/2687/6776/files/area_de_impresion_playera_480x480.jpg?v=1612304274",
      detail: "X",
      price: 219.54,
    },
    {
      id: 10,
      title: "Rojo",
      category: "Accesorios",
      stock: 10,
      img: "https://tardan.com.mx/wp-content/uploads/2019/10/SOMBRERO-DE-COPA-NEGRO-TRASERO-600x600.jpg",
      detail: "G",
      price: 364.2,
    },
    {
        id: 11,
        title: "Magenta",
        category: "Accesorios",
        stock: 7,
        img: "https://tardan.com.mx/wp-content/uploads/2019/10/SOMBRERO-DE-COPA-NEGRO-TRASERO-600x600.jpg",
        detail: "X",
        price: 219.54,
      },
      {
        id: 12,
        title: "Cafe",
        category: "Accesorios",
        stock: 10,
        img: "https://tardan.com.mx/wp-content/uploads/2019/10/SOMBRERO-DE-COPA-NEGRO-TRASERO-600x600.jpg",
        detail: "G",
        price: 364.2,
      }
  ];
  
  const getProducts= () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 1000);
    });
  };

  const getDetail = (id) => {
    return new Promise((resolve, reject) => {
      const reqItem = products.find((item) => {
        return item.id === parseInt(id);
      });
  
      setTimeout(() => {
        if (reqItem) resolve(reqItem);
        else reject("No se encontró el producto");
      }, 2000);
    });
  };

  const getProductByCategory = (categoryURL) => {
   
    return new Promise((resolve) => {
      let reqItems = products.filter((item) => item.category === categoryURL);
  
      setTimeout(() => {
        resolve(reqItems);
      }, 2000);
    });
  };
  

  export default getProducts

  export { getDetail, getProductByCategory };