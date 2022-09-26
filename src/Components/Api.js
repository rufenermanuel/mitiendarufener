import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import data from "./data";

export const getProducts = async () => {
    return data;
/*     const url = `https://fakestoreapi.com/products?limit=1`;
    const resp = await fetch(url);
    const data = await resp.json(); */

    const productsData = data.map((prod) => {
      return {
        id: prod.id,
        title: prod.title,
        price: prod.price,
        pictureUrl: prod.image,
        description: prod.description,
      };
    });

  };

  
  export const getProductById= async(id)=>{
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(data.filter(dat=>dat.id===parseInt(id) ));
      }, 1500);
    });
  }