import Link from 'next/link';
import Image from 'next/image';

const posts = [
  {
    id: 1,
    title: '5 Simple Habits for Better Digestive Health',
    href: '/blog/simple-habits-for-digestive-health',
    description:
      'Discover easy-to-implement daily practices that can significantly improve your gut health and overall wellbeing.',
    date: 'Mar 16, 2025',
    datetime: '2025-03-16',
    category: { name: 'Nutrition', href: '/blog/category/nutrition' },
    imageUrl: '/images/blog/digestive-health.jpg',
    readingTime: '6 min read',
  },
  {
    id: 2,
    title: 'The Science of Mindful Eating: How to Transform Your Relationship with Food',
    href: '/blog/science-of-mindful-eating',
    description:
      'Learn how mindful eating practices can help reduce overeating, improve digestion, and enhance your enjoyment of meals.',
    date: 'Mar 10, 2025',
    datetime: '2025-03-10',
    category: { name: 'Wellness', href: '/blog/category/wellness' },
    imageUrl: '/images/blog/mindful-eating.jpg',
    readingTime: '8 min read',
  },
  {
    id: 3,
    title: 'Morning Yoga Flow for Energy & Focus',
    href: '/blog/morning-yoga-flow',
    description:
      'Start your day right with this 15-minute yoga sequence designed to boost energy, enhance focus, and set a positive tone.',
    date: 'Mar 5, 2025',
    datetime: '2025-03-05',
    category: { name: 'Yoga', href: '/blog/category/yoga' },
    imageUrl: '/images/blog/morning-yoga.jpg',
    readingTime: '4 min read',
  },
];

export default function LatestBlog() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-display">Latest Articles</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Practical wellness tips, nutrition insights, and inspiration for your health journey.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col items-start justify-between border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div className="relative w-full">
                <Image
                  src={post.imageUrl}
                  alt=""
                  className="aspect-[16/9] w-full object-cover"
                  width={600}
                  height={350}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-gray-900/0" />
              </div>
              <div className="max-w-xl p-6">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <Link
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.name}
                  </Link>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>
                <div className="relative mt-4 flex items-center gap-x-4">
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <span className="absolute inset-0" />
                      {post.readingTime}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="text-sm font-semibold leading-6 text-primary-600 hover:text-primary-500"
          >
            View all articles <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
