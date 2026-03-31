const News = () => {
  return (
    <div>
      {/* Article page  */}
      <section className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Latest News</h1>
        <p className="text-lg mb-6">
          Stay updated with the latest news and insights from our industry.
        </p>
        {/* News articles would be listed here */}
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="News Video"
          className="w-full h-64 md:h-96"
          allowFullScreen
        />
        {/* Disclosure of details */}
        <div className="mt-6 p-4 bg-gray-100 rounded">
          <h2 className="text-2xl font-semibold mb-2">Disclosure of Details</h2>
          <p className="text-gray-700">
            We are committed to transparency and will disclose all relevant
            details regarding our news and updates. Stay tuned for more
            information.
          </p>
        </div>
      </section>

      {/* Other News */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Other News</h2>
        <p className="text-lg mb-6">
          Explore other news and updates from our company and industry.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <iframe 
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Other News Video"
            className="w-full h-64 md:h-96"
            allowFullScreen
        />
        <iframe 
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Other News Video"
            className="w-full h-64 md:h-96"
            allowFullScreen
        />
        </div>
      </section>


    </div>
  );
};

export default News;
