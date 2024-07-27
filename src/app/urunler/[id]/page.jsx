import { notFound } from "next/navigation";

export default async function ProductDetailPage({params}){
    const { id } = params;
    const request = await fetch(`https://dummyjson.com/products/${id}`);
    if (request.ok) {
        const response = await request.json();
        return(
            <div>{response.title}</div>
        )   
    }
    else {
        return notFound();
    }

}

