import ProductCard from "./product-card";

export default function ProductGrid(data) {
    
    return (
        <div className="product-grid">
            {data.products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}