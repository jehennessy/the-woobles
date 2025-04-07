export default function ProductCard({product}) {
    const productUrl = 'https://thewoobles.com/products/' + product.handle;
    return (
        <div className="product-card">
            <div className="product-card--inner">
                <div className="product-card--image">
                    <img src={product.image.src} alt={product.image.alt} width="300" height="300"/>
                </div>
                <div className="product-card--details">
                    <a href={productUrl} className="product-card--link">
                        <h2 className="product-card--title">{product.title}</h2>
                    </a>
                    <div className="product-card--price-wrapper">
                        <span className={"product-card--price" + (product.variants[0].compare_at_price > product.variants[0].price ? ' sale-price' : '')}>
                            ${product.variants[0].price}
                        </span>
                        <span className="product-card--compare-at-price">
                            {product.variants[0].compare_at_price > product.variants[0].price ? `$${product.variants[0].compare_at_price}` : ''}
                        </span>
                    </div>
                </div>
            </div>
            <button className="product-card--add-to-cart" type="submit">
                Add to Cart
            </button>
        </div>
    )
}