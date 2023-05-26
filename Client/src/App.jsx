import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import { ProductsPage } from "./pages/ProductsPage/ProductsPage";
import { ProductDetails } from "./pages/ProductDetails/ProductDetails";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ProductsPage />}></Route>
        <Route path="/:id" element={<ProductDetails />}></Route>
      </Routes>
    </>
  );
}

export default App;
