"use client"

import Link from "next/link";
import { useState, useEffect } from "react"

export default function ProductPage(){
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function getData(){
            const request = await fetch("https://dummyjson.com/products");
            const response = await request.json();
            const products = response.products;
            setProducts(products);
            setIsLoading(false);
        }
        getData();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setProducts([...products, {
            title: product
        }]);
        setProduct("");
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={product} onChange={(e) => setProduct(e.target.value)}/>
                <button type="submit">ekle</button>
            </form>
            {isLoading ? (
                <div>yükleniyor...</div>
            ) : (            
                <ul>
                    {products.map((product,index) => (
                        <li key={index}>{product.title} <Link href={`/urunler/${product.id}`}>Detayı göster </Link> </li>
                    ))}
                </ul>
            )}
        </div>
    )
}