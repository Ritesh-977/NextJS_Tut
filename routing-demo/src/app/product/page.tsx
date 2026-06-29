import Link from "next/link";

export default function ProductList(){
    const productID = 100;
    return <> 
    <h1>Product List</h1>
    <ul>
        <li>Product 1</li>
        <li>Product 2</li>
        <li>Product 3</li>
        <li>
        <Link href={`/product/${productID}`}> Product {productID} </Link>
        </li>
    </ul>
    </>
}