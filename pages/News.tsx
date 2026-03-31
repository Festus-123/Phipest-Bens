const News = () => {
  return (
    <div>
      <div className="bg-linear-to-r from-blue-700 to-blue-800 p-4 md:p-16 text-white">
        <h1 className="font-extrabold text-3xl md:text-7xl text-center md:text-start">
          News
        </h1>
      </div>
      {/* Main News Section */}
      <section className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">Latest News</h1>
        <p className="text-lg mb-6 text-gray-700">
          Stay updated with insights on government contracts, trade, and how businesses thrive globally.
        </p>

        {/* Featured Video */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.youtube.com/embed/4X9hYkqgFzY" 
            title="Government Contracting 101: Master Class"
            className="w-full h-64 md:h-[500px]"
            allowFullScreen
          />
        </div>

        {/* Disclosure */}
        <div className="mt-8 p-6 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-2">Disclosure of Details</h2>
          <p className="text-gray-700">
            We are committed to transparency and will disclose all relevant details regarding our news and updates. 
            Stay tuned for more information on our partnerships and industry activities.
          </p>
        </div>
      </section>

      {/* Other News Section */}
      <section className="container mx-auto px-4 py-12 bg-white">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Other News</h2>
        <p className="text-lg mb-6 text-gray-600">
          Explore other resources and updates from our company and industry leaders.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.youtube.com/embed/0zj2p0q0t5w" 
              title="Ultimate Government Contracting Startup Guide"
              className="w-full h-64 md:h-96"
              allowFullScreen
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.youtube.com/embed/3VZHg3Z0ZtE" 
              title="Entrepreneurship & Business Growth"
              className="w-full h-64 md:h-96"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Blogs & Articles Section */}
      <section className="container mx-auto px-4 py-12 bg-gray-50">
        <h2 className="text-3xl font-bold mb-4">Blogs & Articles</h2>
        <p className="text-lg mb-6 text-gray-700">
          Read expert blogs and articles about contracts, business strategies, and industry insights.
        </p>

        <div className="space-y-6">
          <article className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 hover:underline">
              <a href="https://www.adamsdrafting.com/" target="_blank" rel="noopener noreferrer">
                Adams on Contract Drafting
              </a>
            </h3>
            <p className="text-gray-600">
              A leading blog on contract language and drafting, helping businesses avoid costly mistakes.
            </p>
          </article>

          <article className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 hover:underline">
              <a href="https://www.contractscounsel.com/blog" target="_blank" rel="noopener noreferrer">
                ContractsCounsel Blog
              </a>
            </h3>
            <p className="text-gray-600">
              Covers everything from contract termination to professional service agreements and startup legal needs.
            </p>
          </article>

          <article className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 hover:underline">
              <a href="https://www.pittlaw.org/blog/business-contracts" target="_blank" rel="noopener noreferrer">
                Pitt Law – Business Contracts Explained
              </a>
            </h3>
            <p className="text-gray-600">
              Explains different types of business contracts and their role in protecting interests and minimizing risks.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
};

export default News;