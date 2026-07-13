import { getProducts } from "@/src/prisma-db";

type Product = {
    id: number;
    title: string;
    price: number;
    description: string | null;
};

export default async function ProductsDBPage() {
    const products: Product[] = await getProducts();

    return (
        <>
            <h1 className="text-2xl font-bold">Products DB</h1>
            <ul className="mt-4 space-y-4">
                {products.map((product) => (
                    <li key={product.id} className="p-4 border border-gray-300 rounded-md">
                        <h2 className="text-xl font-semibold">{product.title}</h2>
                        <p className="text-gray-600">${product.price}</p>
                        <p className="text-gray-600">{product.description}</p>
                    </li>
                ))}
            </ul>
        </>
    )
}