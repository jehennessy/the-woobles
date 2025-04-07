export default function Featured(featuredWooble) {
    const firstParagraph = featuredWooble.body_html.split('<p>')[1].split('</p>')[0];

    return (
        <div className="featured-wooble--container">
            <div className='featured-wooble--image'>
                <img src={featuredWooble.image.src} alt={featuredWooble.image.alt} width={featuredWooble.image.width} height={featuredWooble.image.height}/>
            </div>
            <div className='featured-wooble--details'>
               <p className='featured-wooble--description' dangerouslySetInnerHTML={{ __html: firstParagraph }}></p>
               <button className="product-card--add-to-cart" type="submit">
                    Add to Cart
                </button>
            </div>
        </div>
    )

}