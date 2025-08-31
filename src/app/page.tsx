'use client'
import { useState } from "react";
export default function Home() {
  const [products, setProducts] = useState([])

  const [newProduct, setNewProduct] = useState({
    name: "",
    quantity: 0,
    price: 0.0,
    lastUpdate: '',
    perishable: false,
    expirationDate: ''
  })
  return (
    <div className="min-h-screen bg-gray-50 p-6 ">
      <h1 className="text-2xl font-bold">
        📦 Estoque da Barbearia
      </h1>

    </ div>
  );
}
