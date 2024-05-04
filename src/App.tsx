import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalContext from './context';
import { Home } from './pages/Home';
import { ShoppingCart } from './pages/ShoppingCart';
import { ProductPage } from './pages/ProductPage'; // Import the ProductPage component

export function App(): JSX.Element {
  return (
    <ChakraProvider>
      <GlobalContext>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shoppingCart" element={<ShoppingCart />} />
            <Route path="/product/:id" element={<ProductPage />} />
            {/* Define route for single product page */}
          </Routes>
        </BrowserRouter>
      </GlobalContext>
    </ChakraProvider>
  );
}
