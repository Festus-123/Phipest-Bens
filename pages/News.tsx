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

      {/* Section for past articles */}
        <section className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-4">Map</h2>
          <p className="text-lg mb-6">
            Company location and sites.
          </p>
         <div>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537363153168!3d-37.81627977975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d9a651e5e7c!2sEnvato%20Melbourne%20Office!5e0!3m2!1sen!2sau!4v1600000000000"
                title="Past Articles Map"
                className="w-full h-64 md:h-96"
                allowFullScreen
            />
         </div>
        </section>
    </div>
  );
};

export default News;
