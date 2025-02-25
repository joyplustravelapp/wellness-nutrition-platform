import Link from 'next/link';
import Image from 'next/image';

const categories = [
  {
    name: 'Nutrition Plans',
    description: 'Personalized nutrition guidance tailored to your unique body and goals',
    href: '/services/nutrition-plans',
    icon: '/images/icons/nutrition-icon.svg',
  },
  {
    name: 'Yoga & Pilates',
    description: 'Mindful movement practices to strengthen body and calm mind',
    href: '/services/yoga-pilates',
    icon: '/images/icons/yoga-icon.svg',
  },
  {
    name: 'Consultations',
    description: 'One-on-one virtual sessions for personalized guidance and support',
    href: '/services/consultations',
    icon: '/images/icons/consultation-icon.svg',
  },
];

export default function ServiceCategories() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Our Offerings</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-display">
            Choose Your Path to Wellness
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Explore our core service categories, each designed to support different aspects of your health journey.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {categories.map((category) => (
              <div key={category.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-xl font-semibold leading-7 text-gray-900">
                  <div className="h-14 w-14 flex-none rounded-lg bg-primary-50 flex items-center justify-center">
                    <Image src={category.icon} className="h-8 w-8 text-primary-600" aria-hidden="true" width={32} height={32} alt="" />
                  </div>
                  {category.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{category.description}</p>
                  <p className="mt-6">
                    <Link href={category.href} className="text-base font-semibold leading-6 text-primary-600 hover:text-primary-500">
                      Learn more <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
