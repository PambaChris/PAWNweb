import ProductCard from '@/components/store/ProductCard';
import { products } from '@/data/products';

const StorePage = () => {
  return (
    <>
      {/* Page Header */}
      <header className="bg-muted py-24">
        <div className="container mx-auto px-4 text-center text-foreground">
          <h1 className="text-4xl font-bold font-heading">Our Merchandise</h1>
          <p className="text-lg mt-2 font-body text-primary">Wear Your Support</p>
        </div>
      </header>

      {/* Products Grid */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default StorePage;
