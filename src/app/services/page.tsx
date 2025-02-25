import Link from 'next/link';
import Image from 'next/image';
import ServicesList from '@/components/services/ServicesList';
import ServiceCategories from '@/components/services/ServiceCategories';
import FAQ from '@/components/shared/FAQ';
import CTASection from '@/components/shared/CTASection';

export const metadata = {
  title: 'Services - Wellness & Nutrition Platform',
  description: 'Explore our nutrition plans, yoga & pilates programs, and wellness consultations',
};

const faqItems = [
  {
    question: 'How are your nutrition plans different from generic meal plans?',
    answer: 'Our nutrition plans are personalized based on your unique body composition, health history, goals, food preferences, and lifestyle. We take into account factors like allergies, intolerances, and cultural preferences to create a sustainable plan that works specifically for you.'
  },
  {
    question: 'Do I need to be experienced in yoga or pilates to benefit from your programs?',
    answer: 'Not at all! Our yoga and pilates programs are designed for all levels, from complete beginners to advanced practitioners. We offer modifications for each pose and exercise, allowing you to progress at your own pace while still challenging yourself appropriately.'
  },
  {
    question: 'How do virtual consultations work?',
    answer: 'Virtual consultations take place via secure video conferencing. Prior to your appointment, you'll complete a comprehensive intake form. During the session, we'll discuss your health history, goals, and challenges, and develop a personalized action plan. Follow-up sessions track your progress and adjust recommendations as needed.'
  },
  {
    question: 'How quickly will I see results?',
    answer: 'Results vary based on your starting point, goals, and consistency. Many clients report improvements in energy levels and digestion within 2-3 weeks. Physical changes like weight loss typically become noticeable within 4-6 weeks. We focus on sustainable, long-term changes rather than quick fixes.'
  },
  {
    question: 'Do you accept insurance for your services?',
    answer: 'We don't directly accept insurance, but we can provide you with detailed receipts that you can submit to your insurance provider for potential reimbursement. Many HSA and FSA accounts cover nutrition counseling services.'
  },
  {
    question: 'What if I have a medical condition that affects my nutrition needs?',
    answer: 'We have experience working with various health conditions and can adapt your nutrition plan accordingly. However, we always recommend collaborating with your healthcare provider, especially for medically complex situations. We're happy to communicate with your doctor to ensure a coordinated approach.'
  },
];

export default function Services() {
  return (
    <div className="bg-white">
      <div className="relative overflow-hidden bg-primary-50">
        <div className="absolute inset-y-0 right-0 hidden h-full w-1/2 lg:block">
          <Image
            className="absolute inset-0 h-full w-full object-cover"
            src="/images/services-header.jpg"
            alt="Woman doing yoga"
            width={1000}
            height={800}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-primary-50 opacity-90" />
        </div>
        
        <div className="relative px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl font-display">
              Services & Programs
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Discover our comprehensive wellness offerings, from personalized nutrition plans to yoga & pilates instruction—all designed to help you achieve your unique health goals.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href="/contact"
                className="btn-primary"
              >
                Book a free discovery call
              </Link>
              <Link href="#services-list" className="text-sm font-semibold leading-6 text-gray-900">
                View all services <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <ServiceCategories />
      
      <div id="services-list">
        <ServicesList />
      </div>
      
      <FAQ title="Frequently Asked Questions" items={faqItems} />
      
      <CTASection 
        title="Ready to transform your health?"
        description="Take the first step toward a healthier, more vibrant life with personalized nutrition and wellness guidance."
        primaryButtonText="Book a Consultation"
        primaryButtonLink="/contact"
        secondaryButtonText="View Pricing"
        secondaryButtonLink="/pricing"
      />
    </div>
  );
}
