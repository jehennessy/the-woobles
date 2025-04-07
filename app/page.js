import { promises as fs } from 'fs';
import Featured from "./featured";
import ProductGrid from "./product-grid";

export default async function LandingPage() {
  const productsFile = await fs.readFile(process.cwd() + '/app/products.json', 'utf8');
  const productsData = JSON.parse(productsFile);

  let featuredWooble = false;
  let beginnerKits = {products: []};
  let beginnerPlusKits = {products: []};
  let bundles = {products: []};
  let intermediateKits = {products: []};
  let accessoryKits = {products: []};

  productsData.products.forEach((product) => {
    if (product.tags.includes('Featured')) {
      if(!featuredWooble) {
        featuredWooble = product;
      }
    } else if (product.title.includes('Bundle') || product.title.includes('bundle')) {
      bundles.products.push(product);
    } else if (product.product_type === 'Beginner' || product.product_type === 'Beginner Kit') {
      beginnerKits.products.push(product);
    } else if (product.product_type === 'Beginner+' || product.product_type === 'Beginner+ Kit') {
      beginnerPlusKits.products.push(product);
    } else if (product.product_type === 'Intermediate' || product.product_type === 'Intermediate Kit') {
      intermediateKits.products.push(product);
    } else if (product.product_type === 'Accessory' || product.product_type === 'Accessory Kit') {
      accessoryKits.products.push(product);
    }
  });


  return (
    <div className="landing-page">
      <main className="main-container">
        {featuredWooble ? (
          <Featured {...featuredWooble} />
        ) : ''}
        {beginnerKits.products.length > 0 ? (
          <div className="product-section--container product-section--beginner-kits">
            <h2 className="product-section--title">Beginner Kits</h2>
            <ProductGrid {...beginnerKits}/>
          </div>
        ) : ''}
        {beginnerPlusKits.products.length > 0 ? (
          <div className="product-section--container product-section--beginner-plus-kits">
            <h2 className="product-section--title">Beginner+ Kits</h2>
            <ProductGrid {...beginnerPlusKits}/>
          </div>
        ) : ''}
        {bundles.products.length > 0 ? (
          <div className="product-section--container product-section--bundles">
            <h2 className="product-section--title">Bundles</h2>
            <ProductGrid {...bundles}/>
          </div>
        ) : ''}
        {intermediateKits.products.length > 0 ? (
          <div className="product-section--container product-section--intermediate-kits">
            <h2 className="product-section--title">Intermediate Kits</h2>
            <ProductGrid {...intermediateKits}/>
          </div>
        ) : ''}
        {accessoryKits.products.length > 0 ? (
          <div className="product-section--container product-section--accessory-kits">
            <h2 className="product-section--title">Accessory Kits</h2>
            <ProductGrid {...accessoryKits}/>
          </div>
        ) : ''}
      </main>
    </div>
  );
} 
