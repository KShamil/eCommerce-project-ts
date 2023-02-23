import React, { createContext, useState, FC } from "react";
import products,{ProductType} from "../data/productsData";

export type ProductContextType = [ProductType[], React.Dispatch<React.SetStateAction<ProductType[]>>];

interface ProductProviderProps {
  children: React.ReactNode;
}

export const ProductContext = createContext<ProductContextType>([[], () => null]);

export const ProductProvider: FC<ProductProviderProps> = ({ children }) => {
  const [product, setProduct] = useState<ProductType[]>(products);
  return (
    <ProductContext.Provider value={[product, setProduct]}>
      {children}
    </ProductContext.Provider>
  );
};
