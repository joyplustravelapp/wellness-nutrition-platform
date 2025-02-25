import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    content: 'Working with this nutritionist completely transformed my health journey. The personalized approach and constant support made all the difference in achieving my goals.',
    author: 'Jessica M.',
    role: 'Working professional, lost 30 pounds',
    imageUrl: '/images/testimonials/jessica.jpg',
  },
  {
    id: 2,
    content: 'As an athlete, I needed specific nutrition guidance to improve my performance. The customized meal plans and supplement recommendations significantly enhanced my recovery and energy levels.',
    author: 'Marcus T.',
    role: 'Competitive runner',
    imageUrl: '/images/testimonials/marcus.jpg',
  },
  {
    id: 3,
    content: 'The holistic approach to nutrition and wellness helped me manage my autoimmune condition better than years of conventional treatments alone. I've regained my energy and quality of life.',
    author: 'Diana K.',
    role: 'Autoimmune health journey',
    imageUrl: '/images/testimonials/diana.jpg',
  },
  {
    id: 4,
    content: 'The combination of nutrition guidance and yoga practices was exactly what I needed to reduce stress and improve my sleep quality. I feel more balanced and healthier than ever.',
    author: 'Robert J.',
    role: 'Business executive',
    imageUrl: '/images/testimonials/robert.jpg',
  },
];

export default function TestimonialsList() {
  return (
    <div className="py-16">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Client Success Stories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="rounded-xl bg-white border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center gap-x-4 mb-6">
              <div className="relative h-12 w-12 rounded-full bg-gray-50">
                <Image
                  className="h-12 w-12 rounded-full object-cover"
                  src={testimonial.imageUrl}
                  alt={`Photo of ${testimonial.author}`}
                  width={48}
                  height={48}
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{testimonial.author}</h3>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
            <blockquote className="text-gray-700 italic">
              "{testimonial.content}"
            </blockquote>
          </div>
        ))}
      </div>
    </div>
  );
}
