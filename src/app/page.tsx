"use client";

import { useState, useEffect } from "react";
import Card from "@/components/Card";
import Product, { deleteProduct, estoque } from "@/lib/estoque";
export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const handleEdit = async (id: number) => {
    // TODO
  };
  const handleDelete = async (id: number) => {
    deleteProduct(id);
    setProducts([...estoque]);
  };
  useEffect(() => {
    setProducts(estoque);
    setLoading(false);
  }, []);
  return (
    <div className="min-h-screen bg-gray-50 p-6 ">
      <h1 className="text-2xl font-bold mb-6">📦 Estoque da Barbearia</h1>
      <div className="grid grid-cols-3 gap-6 mb-6">
        {products ? (
          products.map((product) => (
            <Card
              key={product.id}
              product={product}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          ))
        ) : (
          <p></p>
        )}
      </div>
      <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
        Adicionar
      </button>
    </div>
  );
}
