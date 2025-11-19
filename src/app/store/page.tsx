import Image from 'next/image';
import { products } from '@/data/products';

const StorePage = () => {
  return (
    <>
      {/* Page Header */}
      <header className="bg-dark-background py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl font-bold">Our Merchandise</h1>
          <p className="text-lg mt-2 text-secondary-purple">Wear Your Support</p>
        </div>
      </header>

      {/* Products Grid */}
      <section className="py-20 bg-dark-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product) => (
              <div key={product.id} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden group">
                <div className="relative">
                  <Image src={product.image} alt={product.name} width={500} height={500} className="object-cover w-full h-80" />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                    <button className="text-white bg-primary-purple text-white font-bold py-3 px-8 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-primary-purple text-lg font-semibold">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default StorePage;
