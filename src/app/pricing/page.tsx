import { CheckIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import { Metadata } from 'next';
import CTASection from '@/components/shared/CTASection';

export const metadata: Metadata = {
  title: 'Pricing - Wellness & Nutrition Platform',
  description: 'View our pricing plans and packages for nutrition coaching and wellness services',
};

const tiers = [
  {
    name: 'Basic',
    id: 'tier-basic',
    href: '/contact?plan=basic',
    price: { monthly: '$19', annually: '$190' },
    description: 'Access to essential resources and support for your wellness journey.',
    features: [
      'Basic nutrition assessment',
      'Monthly recipe collections',
      'Access to member articles',
      'Weekly wellness tips email',
      'Member community access',
      '10% discount on digital products',
    ],
    mostPopular: false,
  },
  {
    name: 'Premium',
    id: 'tier-premium',
    href: '/contact?plan=premium',
    price: { monthly: '$39', annually: '$390' },
    description: 'Everything in Basic plus enhanced support and premium content.',
    features: [
      'Comprehensive nutrition assessment',
      'Personalized monthly meal guide',
      'Access to all member content',
      'Monthly live Q&A sessions',
      'Video library (yoga & pilates)',
      'Bi-weekly cooking demonstrations',
      '15% discount on digital products',
    ],
    mostPopular: true,
  },
  {
    name: 'VIP',
    id: 'tier-vip',
    href: '/contact?plan=vip',
    price: { monthly: '$99', annually: '$990' },
    description: 'Our most comprehensive package with personalized guidance and priority support.',
    features: [
      'All Premium features',
      'Monthly 1-on-1 check-in call (30 min)',
      'Personalized monthly challenges',
      'Priority support via email',
      'Custom nutrition plan updates',
      'Advanced progress tracking',
      '25% discount on digital products',
      'Early access to new content',
    ],
    mostPopular: false,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function PricingPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-base font-semibold leading-7 text-primary-600">Pricing</h1>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl font-display">
            Membership Plans
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Choose the perfect membership plan to support your wellness journey. All plans include access to our member community and exclusive resources.
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-5 text-gray-600">
          All plans include a 14-day satisfaction guarantee. Cancel anytime.
        </p>
        <div className="mt-16 flex justify-center">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className={classNames(
                  tier.mostPopular ? 'ring-2 ring-primary-600' : 'ring-1 ring-gray-200',
                  'rounded-3xl p-8 xl:p-10'
                )}
              >
                <div className="flex items-center justify-between gap-x-4">
                  <h2 id={tier.id} className="text-lg font-semibold leading-8 text-gray-900">
                    {tier.name}
                  </h2>
                  {tier.mostPopular ? (
                    <p className="rounded-full bg-primary-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-primary-600">
                      Most popular
                    </p>
                  ) : null}
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-3xl font-bold tracking-tight text-gray-900">{tier.price.monthly}</span>
                  <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>
                </p>
                <p className="mt-1 text-sm leading-6 text-gray-600">{tier.price.annually} billed annually</p>
                <Link
                  href={tier.href}
                  aria-describedby={tier.id}
                  className={classNames(
                    tier.mostPopular
                      ? 'bg-primary-600 text-white shadow-sm hover:bg-primary-500'
                      : 'text-primary-600 ring-1 ring-inset ring-primary-200 hover:ring-primary-300',
                    'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600'
                  )}
                >
                  Get started today
                </Link>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon className="h-6 w-5 flex-none text-primary-600" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Individual Services */}
        <div className="mx-auto mt-24 max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900 font-display">
            Individual Services
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            <div className="pt-6">
              <dt className="text-lg font-semibold leading-7 text-gray-900">Initial Nutrition Consultation</dt>
              <dd className="mt-1 text-base leading-7 text-gray-600">
                <p className="mb-2">A comprehensive 60-minute session to assess your nutritional needs, health history, and goals, followed by personalized recommendations.</p>
                <p className="font-semibold">$149</p>
              </dd>
            </div>
            <div className="pt-6">
              <dt className="text-lg font-semibold leading-7 text-gray-900">Follow-Up Consultation</dt>
              <dd className="mt-1 text-base leading-7 text-gray-600">
                <p className="mb-2">A 30-minute session to review progress, address challenges, and adjust your nutrition plan as needed.</p>
                <p className="font-semibold">$95</p>
              </dd>
            </div>
            <div className="pt-6">
              <dt className="text-lg font-semibold leading-7 text-gray-900">Personalized Nutrition Plan</dt>
              <dd className="mt-1 text-base leading-7 text-gray-600">
                <p className="mb-2">A customized nutrition plan based on your specific needs, preferences, and goals. Includes meal suggestions, shopping lists, and recipes.</p>
                <p className="font-semibold">Starting at $99</p>
              </dd>
            </div>
            <div className="pt-6">
              <dt className="text-lg font-semibold leading-7 text-gray-900">Nutrition & Yoga Package</dt>
              <dd className="mt-1 text-base leading-7 text-gray-600">
                <p className="mb-2">Combines nutritional guidance with personalized yoga practice recommendations for a holistic approach to wellness.</p>
                <p className="font-semibold">$199</p>
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <CTASection 
        title="Ready to transform your health?"
        description="Book a free 15-minute discovery call to learn how I can help you achieve your wellness goals."
        primaryButtonText="Schedule a Call"
        primaryButtonLink="/contact"
        secondaryButtonText="Learn More"
        secondaryButtonLink="/services"
      />
    </div>
  );
}
