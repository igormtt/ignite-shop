import {createContext, ReactNode } from 'react';

export const useProductCart = createContext({})

function addProductToCart(id: string) {
  
}

export default function ProductCartProvider({children}: {children: ReactNode}) {
  return(
    <useProductCart.Provider value={{}}>
      {children}
    </useProductCart.Provider>
  )
}