import data from "./data";
//import { getFirestore, collection, getDocs } from "firebase/firestore";
/* export const getProducts = async () => {
  // return data;
  
  const qDb=getFirestore();
   const qCollection=collection(qDb,'products')
   getDocs(qCollection).then(res=>res.docs.map(product=>({id:product.id,...product.data()})))
 

  return console.log(data);
};
getProducts(); */
export const getProductById = async (id) => {
  return new Promise((res, rej) => {
    
      res(data.filter((dat) => dat.id === parseInt(id)));
    
  });
};

export const getProductsByCategory = async (categoryId) => {
  return new Promise((res, rej) => {
   
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
    ;
  });
};
