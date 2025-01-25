export const EventsHero = () => (
  <section className="bg-gray-50 py-16 relative">
    <div className="absolute top-0 left-0 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-50" />
    <div className="absolute bottom-10 right-10 w-24 h-24 bg-blue-200 rounded-full blur-2xl opacity-50" />
    <div className="absolute top-1/3 left-1/4 w-20 h-20 bg-yellow-100 rounded-lg blur-2xl opacity-50" />
    <div className="absolute top-10 right-1/3 w-28 h-28 bg-pink-100 rounded-full blur-3xl opacity-50" />

    <div className="container mx-auto px-6 lg:px-16 text-center relative">
      <div>
        <h1 className="text-5xl font-bold text-gray-800 leading-tight">
          Discover Inspiring{" "}
          <span className="text-blue-500">Learning Events</span>
        </h1>
        <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-xl mx-auto">
          Join expertly curated events designed to enhance your skills, foster
          collaboration, and drive innovation.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#events"
            className="px-8 py-3 bg-blue-500 text-white text-lg font-medium rounded-full shadow-lg hover:bg-blue-700 transition transform hover:scale-105"
          >
            View Events
          </a>
          <a
            href="#learn-more"
            className="px-8 py-3 border border-gray-300 text-gray-700 text-lg font-medium rounded-full shadow-lg hover:border-gray-500 hover:text-gray-900 transition transform hover:scale-105"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  </section>
);
