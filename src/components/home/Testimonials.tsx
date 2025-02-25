import Image from 'next/image';

const testimonials = [
  {
    content: 'Working with this nutrition program completely changed my relationship with food. I've not only lost weight but also gained energy and confidence.',
    author: 'Sarah Johnson',
    role: 'Lost 25 lbs in 4 months',
    imageUrl: '/images/testimonials/sarah.jpg',
  },
  {
    content: 'The personalized approach made all the difference. This isn't a one-size-fits-all program—it's carefully tailored to your unique needs and goals.',
    author: 'Michael Robertson',
    role: 'Improved athletic performance',
    imageUrl: '/images/testimonials/michael.jpg',
  },
  {
    content: 'The combination of nutrition guidance and yoga practice has helped me manage my stress and improve my sleep quality dramatically.',
    author: 'Emma Chen',
    role: 'Stress management success',
    imageUrl: '/images/testimonials/emma.jpg',
  },
];

export default function Testimonials() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-primary-600">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-display">
            Hear from my satisfied clients
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author} className="pt-8 sm:inline-block sm:w-full sm:px-4">
                <figure className="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
                  <blockquote className="text-gray-900">
                    <p>"{testimonial.content}"</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <div className="relative h-10 w-10 rounded-full bg-gray-50">
                      <Image
                        className="h-10 w-10 rounded-full object-cover"
                        src={testimonial.imageUrl}
                        alt=""
                        width={40}
                        height={40}
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author}</div>
                      <div className="text-gray-600">{testimonial.role}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
