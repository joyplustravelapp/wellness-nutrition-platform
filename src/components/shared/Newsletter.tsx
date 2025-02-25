export default function Newsletter() {
  return (
    <div className="bg-primary-50">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-display">
            Get wellness tips in your inbox.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Sign up for our newsletter to receive nutrition advice, recipes, and wellness strategies to support your health journey.
          </p>
          <form className="mt-10 max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              >
                Subscribe
              </button>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              We care about your data. Read our{' '}
              <a href="/privacy" className="font-semibold text-primary-600 hover:text-primary-500">
                privacy policy
              </a>.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
