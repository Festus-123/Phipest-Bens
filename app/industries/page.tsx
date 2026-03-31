import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div>
      {/* Header section */}
      <div>
        <h1 className="text-3xl md:text-7xl p-4 md:p-16 bg-linear-to-r from-blue-700 to-blue-800 text-white font-extrabold text-center md:text-start">
          Industries
        </h1>
      </div>

      {/* Construction industry section */}
      <section className="w-full flex flex-col-reverse md:flex-row items-center gap-20 justify-between p-8 md:p-16">
        <div className="relative flex flex-col gap-4 w-full md:w-[60%] h-80">
          <h1 className="font-bold text-xl md:text-3xl">
            Construction industry
          </h1>
          <p className="text-justify">
            Phipest-bens International Nig Ltd has a strong presence in the
            construction industry, providing a wide range of services including
            project management, general contracting, and specialized
            construction solutions. We have successfully completed numerous
            projects across Nigeria, ranging from residential and commercial
            buildings to infrastructure development. Our team of experienced
            professionals is dedicated to delivering high-quality workmanship
            and ensuring client satisfaction on every project we undertake.
          </p>
          <Link
            href="https://construction-website-gIlt-ten.vercel.app/"
            className="absolute bottom-5 right-5 bg-linear-to-r from-blue-400 to-blue-500 hover:from-blue-500 rounded-lg py-2 px-4 md:py-3 md:px-8 text-white w-max shadow-md"
          >
            Visit site
          </Link>
        </div>
        <div>
          <Image
            src="/construction.jpg"
            alt="Construction Industry"
            width={600}
            height={400}
            className="h-90 object-cover object-center shadow-xl rounded-lg"
          />
        </div>
      </section>

      {/* Auto industry section */}
      <section className="w-full flex flex-col-reverse md:flex-row-reverse items-center gap-20 justify-between p-8 md:p-16">
        <div className="relative flex flex-col gap-4 w-full md:w-[60%] h-80">
          <h1 className="font-bold text-xl md:text-3xl">Auto industry</h1>
          <p className="text-justify">
            In the auto industry, Phipest-bens International Nig Ltd is involved
            in the import and distribution of automotive parts and accessories.
            We have established strong partnerships with leading manufacturers
            and distributors to ensure a steady supply of quality products to
            our customers. Our commitment to customer satisfaction and
            competitive pricing has made us a preferred choice for automotive
            parts in the Nigerian market. We also provide excellent after-sales
            support and services to our clients, ensuring that they have a
            seamless experience when purchasing from us.
          </p>
          <Link
            target="_blank"
            href=""
            className="absolute bottom-5 right-5 bg-linear-to-r from-blue-400 to-blue-500 hover:from-blue-500 rounded-lg py-2 px-4 md:py-3 md:px-8 text-white w-max shadow-md"
          >
            Visit site
          </Link>
        </div>
        <div>
          <Image
            src="/car_sales.jpg"
            alt="Auto Industry"
            width={600}
            height={400}
            className="h-90 object-cover object-center shadow-xl rounded-lg"
          />
        </div>
      </section>

      {/* Architecture design industry section */}
      <section className="w-full flex flex-col-reverse md:flex-row items-center gap-20 justify-between p-8 md:p-16">
        <div className="relative flex flex-col gap-4 w-full md:w-[60%] h-80">
          <h1 className="font-bold text-xl md:text-3xl">Architecture design</h1>
          <p className="text-justify">
            Phipest-bens International Nig Ltd also offers architectural design
            services, providing innovative and sustainable design solutions for a
            variety of projects. Our team of skilled architects and designers
            brings creativity and expertise to every project, ensuring that our
            clients receive the best possible design outcomes. We work closely
            with our clients to understand their vision and requirements, and we
            utilize the latest design technologies to bring their ideas to life.
          </p>
          <Link
            target="_blank"
            href=""
            className="absolute bottom-5 right-5 bg-linear-to-r from-blue-400 to-blue-500 hover:from-blue-500 rounded-lg py-2 px-5 md:py-3 md:px-8 text-white w-max shadow-md"
          >
            Visit site
          </Link>
        </div>
        <div>
          <Image
            src="/architectural_design.jpg"
            alt="Architecture Design"
            width={600}
            height={400}
            className="h-90 object-cover object-center shadow-xl rounded-lg"
          />
        </div>
      </section>
    </div>
  );
};

export default page;
