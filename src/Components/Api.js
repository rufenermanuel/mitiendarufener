import data from "./data";

export const getProducts = async () => {
  return data;
};

export const getProductById = async (id) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(data.filter((dat) => dat.id === parseInt(id)));
    }, 1500);
  });
};

export const getProductsBiCategory = async (categoryId) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (categoryId) {
        console.log(categoryId);
        const filteredItems = data.filter(
          (prod) => prod.category === categoryId
        );
        res(filteredItems);
      } else {
        res(data);
      }
      res(
        categoryId ? data.filter((prod) => prod.category === categoryId) : data
      );
    }, 1500);
  });
};
