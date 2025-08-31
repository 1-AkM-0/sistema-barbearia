'use client'

import { useState, useEffect } from "react";
import axios from "axios";
import Card from "@/components/Card";
import Product from "@/lib/estoque";
export default function Home() {
  const [products, setProducts] = useState<Product[]>([])

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    /* const response = await axios.get("/api/products") */
    setProducts([{
      id: 1,
      name: 'test1',
      quantity: 2,
      price: 2,
      lastUpdate: 'ontote',
      isPerishable: false,

    },
    {
      id: 2,
      name: 'test2',
      quantity: 2,
      price: 2,
      lastUpdate: 'onte',
      isPerishable: true,
      expiration: 'amanha'


    }
    ])
    setLoading(false)
  }, [])
  return (
    <div className="min-h-screen bg-gray-50 p-6 ">
      <h1 className="text-2xl font-bold mb-6">
        📦 Estoque da Barbearia
      </h1>
      <div className="grid grid-cols-3 gap-6 mb-6">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
      <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Adicionar</button>
    </ div >
  );
}
