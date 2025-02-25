import Link from 'next/link';
import Image from 'next/image';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const services = [
  {
    id: 'nutrition-basic',
    name: 'Essential Nutrition Plan',
    category: 'Nutrition Plans',
    description: 'A foundational nutrition plan with meal guidelines and basic recommendations to get you started on your health journey.',
    features: [
      'Initial nutrition assessment',
      'Customized 4-week meal plan',
      'Grocery shopping guide',
      'Basic recipe collection',
      'Email support for 30 days',
    ],
    price: '$99',
    popular: false,
    href: '/services/nutrition-plans#essential',
    imageUrl: '/images/services/nutrition-basic.jpg',
  },
  {
    id: 'nutrition-premium',
    name: 'Premium Nutrition Program',
    category: 'Nutrition Plans',
    description: 'A comprehensive nutrition program with personalized meal plans, detailed guidance, and ongoing support for sustainable results.',
    features: [
      'In-depth nutrition assessment',
      'Customized 8-week meal plan',
      'Grocery shopping guide',
      'Expanded recipe collection',
      'Supplement recommendations',
      'Two 30-minute follow-up consultations',
      'Email support for 60 days',
    ],
    price: '$199',
    popular: true,
    href: '/services/nutrition-plans#premium',
    imageUrl: '/images/services/nutrition-premium.jpg',
  },
  {
    id: 'nutrition-vip',
    name: 'VIP Nutrition Transformation',
    category: 'Nutrition Plans',
    description: 'Our most intensive nutrition program with fully personalized guidance, extensive support, and comprehensive resources for complete health transformation.',
    features: [
      'Comprehensive health assessment',
      'Customized 12-week progressive plan',
      'Grocery shopping guide',
      'Complete recipe library',
      'Supplement protocol',
      'Restaurant dining guide',
      'Travel nutrition strategies',
      'Four 30-minute follow-up consultations',
      'Priority email support for 90 days',
    ],
    price: '$349',
    popular: false,
    href: '/services/nutrition-plans#vip',
    imageUrl: '/images/services/nutrition-vip.jpg',
  },
  {
    id: 'yoga-beginner',
    name: 'Yoga Foundations',
    category: 'Yoga & Pilates',
    description: 'Perfect for beginners, this program introduces fundamental yoga poses, breathing techniques, and mindfulness practices.',
    features: [
      'Assessment of flexibility and needs',
      '8 recorded yoga sessions',
      'Pose guide with modifications',
      'Breathing technique tutorials',
      'Recommended practice schedule',
      'Email support for 60 days',
    ],
    price: '$79',
    popular: false,
    href: '/services/yoga-pilates#foundations',
    imageUrl: '/images/services/yoga-beginner.jpg',
  },
  {
    id: 'pilates-core',
    name: 'Core Power Pilates',
    category: 'Yoga & Pilates',
    description: 'Focus on building core strength, improving posture, and enhancing body awareness through targeted Pilates exercises.',
    features: [
      'Initial posture assessment',
      '10 recorded Pilates sessions',
      'Progressive difficulty levels',
      'Targeted core exercise library',
      'Posture correction guidance',
      'Email support for 60 days',
    ],
    price: '$89',
    popular: false,
    href: '/services/yoga-pilates#pilates',
    imageUrl: '/images/services/pilates-core.jpg',
  },
  {
    id: 'consultation-single',
    name: 'Initial Wellness Consultation',
    category: 'Consultations',
    description: 'A comprehensive one-on-one virtual session to assess your health status, discuss your goals, and create an initial action plan.',
    features: [
      '60-minute virtual consultation',
      'Health history review',
      'Goal setting and strategy',
      'Customized action plan',
      'Follow-up email summary',
      'Resource recommendations',
    ],
    price: '$149',
    popular: false,
    href: '/services/consultations#initial',
    imageUrl: '/images/services/consultation-single.jpg',
  },
];

export default function ServicesList() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Service Details</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-display">
            Explore Our Service Offerings
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Browse through our range of services designed to support your unique wellness journey.
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {services.map((service) => (
            <div key={service.id} className="flex flex-col border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition duration-300 overflow-hidden">
              <div className="relative h-60 w-full">
                <Image
                  src={service.imageUrl}
                  alt={service.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60" />
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="inline-flex items-center rounded-md bg-primary-50 px-2 py-1 text-xs font-medium text-primary-700 ring-1 ring-inset ring-primary-700/10">
                    {service.category}
                  </span>
                  <h3 className="mt-2 text-xl font-bold text-white">{service.name}</h3>
                </div>
                {service.popular && (
                  <div className="absolute top-0 right-0 m-4 bg-secondary-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Popular
                  </div>
                )}
              </div>
              
              <div className="flex-1 p-6 flex flex-col">
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <h4 className="text-sm font-semibold text-gray-900 mb-3">What's included:</h4>
                <ul className="space-y-2 mb-6 flex-1">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-primary-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto flex items-end justify-between">
                  <span className="text-2xl font-bold text-gray-900">{service.price}</span>
                  <Link href={service.href} className="btn-primary">
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Don't see exactly what you're looking for?</p>
          <Link href="/contact" className="btn-outline">
            Contact us for custom solutions
          </Link>
        </div>
      </div>
    </div>
  );
}
