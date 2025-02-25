import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Wellness & Nutrition Platform',
  description: 'Explore nutrition, wellness, and fitness articles for a healthier lifestyle',
};

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
    author: {
      name: 'Jane Smith',
      role: 'Nutritionist',
      href: '/about',
      imageUrl: '/images/nutritionist-profile.jpg',
    },
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
    author: {
      name: 'Jane Smith',
      role: 'Nutritionist',
      href: '/about',
      imageUrl: '/images/nutritionist-profile.jpg',
    },
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
    author: {
      name: 'Jane Smith',
      role: 'Nutritionist & Yoga Instructor',
      href: '/about',
      imageUrl: '/images/nutritionist-profile.jpg',
    },
    imageUrl: '/images/blog/morning-yoga.jpg',
    readingTime: '4 min read',
  },
  {
    id: 4,
    title: 'Seasonal Eating: Spring Edition',
    href: '/blog/seasonal-eating-spring',
    description:
      'Why eating seasonally benefits your health, budget, and the environment, plus top spring produce picks and delicious recipes.',
    date: 'Feb 28, 2025',
    datetime: '2025-02-28',
    category: { name: 'Nutrition', href: '/blog/category/nutrition' },
    author: {
      name: 'Jane Smith',
      role: 'Nutritionist',
      href: '/about',
      imageUrl: '/images/nutritionist-profile.jpg',
    },
    imageUrl: '/images/blog/seasonal-eating.jpg',
    readingTime: '7 min read',
  },
  {
    id: 5,
    title: 'Understanding Food Labels: A Nutritionist's Guide',
    href: '/blog/understanding-food-labels',
    description:
      'How to decode nutrition facts panels and ingredient lists to make informed choices about the foods you eat.',
    date: 'Feb 20, 2025',
    datetime: '2025-02-20',
    category: { name: 'Nutrition', href: '/blog/category/nutrition' },
    author: {
      name: 'Jane Smith',
      role: 'Nutritionist',
      href: '/about',
      imageUrl: '/images/nutritionist-profile.jpg',
    },
    imageUrl: '/images/blog/food-labels.jpg',
    readingTime: '9 min read',
  },
  {
    id: 6,
    title: 'The Connection Between Stress & Nutrition',
    href: '/blog/stress-nutrition-connection',
    description:
      'How stress affects your diet and nutritional needs, plus foods and eating strategies to support your body during stressful periods.',
    date: 'Feb 14, 2025',
    datetime: '2025-02-14',
    category: { name: 'Wellness', href: '/blog/category/wellness' },
    author: {
      name: 'Jane Smith',
      role: 'Nutritionist',
      href: '/about',
      imageUrl: '/images/nutritionist-profile.jpg',
    },
    imageUrl: '/images/blog/stress-nutrition.jpg',
    readingTime: '8 min read',
  },
];

const categories = [
  { name: 'All', href: '/blog' },
  { name: 'Nutrition', href: '/blog/category/nutrition' },
  { name: 'Wellness', href: '/blog/category/wellness' },
  { name: 'Yoga', href: '/blog/category/yoga' },
  { name: 'Recipes', href: '/blog/category/recipes' },
];

export default function BlogPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center pt-16 lg:pt-20">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-display">Blog</h1>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Nutrition insights, wellness tips, and practical advice for your health journey.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-2xl">
          <div className="flex justify-center space-x-4">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="rounded-full px-4 py-1.5 text-sm font-medium text-gray-900 ring-1 ring-gray-200 hover:bg-gray-50"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col items-start justify-between border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div className="relative w-full">
                <Image
                  src={post.imageUrl || '/images/placeholder.svg'}
                  alt=""
                  width={600}
                  height={350}
                  className="aspect-[16/9] w-full object-cover"
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
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <div className="relative h-10 w-10 rounded-full overflow-hidden">
                    <Image
                      src={post.author.imageUrl || '/images/placeholder.svg'}
                      alt=""
                      width={40}
                      height={40}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <Link href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </Link>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                  <div className="ml-auto text-xs text-gray-500">{post.readingTime}</div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center pb-20">
          <button
            type="button"
            className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            Load more articles
          </button>
        </div>
      </div>
    </div>
  );
}
