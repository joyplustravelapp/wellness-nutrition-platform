import Link from 'next/link';
import Image from 'next/image';

const products = [
  {
    id: 1,
    name: 'Nourish & Thrive Meal Plan',
    href: '/products/nourish-thrive-meal-plan',
    price: '$49',
    description: 'A 4-week comprehensive meal plan designed for sustainable weight management and increased energy.',
    imageSrc: '/images/products/meal-plan.jpg',
    imageAlt: 'Healthy meal plan with a variety of nutritious recipes.',
    category: 'Meal Plan',
  },
  {
    id: 2,
    name: 'Plant-Powered Recipe E-Book',
    href: '/products/plant-powered-recipe-ebook',
    price: '$19',
    description: '50+ delicious plant-based recipes that are simple to make, nutrient-dense, and family-friendly.',
    imageSrc: '/images/products/recipe-book.jpg',
    imageAlt: 'Plant-based recipe e-book cover showing colorful vegetables.',
    category: 'E-Book',
  },
  {
    id: 3,
    name: 'Mindful Movement Program',
    href: '/products/mindful-movement-program',
    price: '$59',
    description: 'A 6-week yoga and pilates program with video tutorials for all levels to enhance strength and flexibility.',
    imageSrc: '/images/products/movement-program.jpg',
    imageAlt: 'Woman practicing yoga in a serene environment.',
    category: 'Video Program',
  },
  {
    id: 4,
    name: 'Gut Health Reset Guide',
    href: '/products/gut-health-reset-guide',
    price: '$29',
    description: 'A comprehensive guide to optimizing your digestive health with meal plans, recipes, and lifestyle tips.',
    imageSrc: '/images/products/gut-health-guide.jpg',
    imageAlt: 'Gut health guide showing nutritious foods for digestive health.',
    category: 'E-Book',
  },
];

export default function FeaturedProducts() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <h2 className="text-3xl font-display font-bold tracking-tight text-gray-900 sm:text-4xl">Featured Products</h2>
          <Link href="/products" className="hidden text-sm font-medium text-primary-600 hover:text-primary-500 md:block">
            Browse all products<span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
                <Image
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center"
                  width={300}
                  height={300}
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
              <p className="mt-2 text-sm text-gray-500 line-clamp-3">{product.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-sm md:hidden">
          <Link href="/products" className="font-medium text-primary-600 hover:text-primary-500">
            Browse all products<span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
