import React, { createContext, useState, useEffect, FC } from "react";
import products, { ProductType } from "../data/productsData";
import { db } from "../firebase/config";

export type ProductContextType = [
  ProductType[],
  React.Dispatch<React.SetStateAction<ProductType[]>>
];

interface ProductProviderProps {
  children: React.ReactNode;
}

export const ProductContext = createContext<ProductContextType>([
  [],
  () => null,
]);

export const ProductProvider: FC<ProductProviderProps> = ({ children }) => {
  const [product, setProduct] = useState<ProductType[]>(products);

  useEffect(() => {
    // Convert the products array to an object
    const productsObj: Record<string, ProductType> = {};
    product.forEach((p) => {
      productsObj[p.id] = p;
    });

    // Update Firestore whenever the product state changes
    db.collection("products")
      .doc("products-doc")
      .set({ products: productsObj });
  }, [product]);

  return (
    <ProductContext.Provider value={[product, setProduct]}>
      {children}
    </ProductContext.Provider>
  );
};


// import React, { createContext, useState, FC } from "react";
// import products,{ProductType} from "../data/productsData";

// export type ProductContextType = [ProductType[], React.Dispatch<React.SetStateAction<ProductType[]>>];

// interface ProductProviderProps {
//   children: React.ReactNode;
// }

// export const ProductContext = createContext<ProductContextType>([[], () => null]);

// export const ProductProvider: FC<ProductProviderProps> = ({ children }) => {
//   const [product, setProduct] = useState<ProductType[]>(products);
//   return (
//     <ProductContext.Provider value={[product, setProduct]}>
//       {children}
//     </ProductContext.Provider>
//   );
// };
