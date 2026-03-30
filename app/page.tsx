import Hero from "@/pages/Landing_Page";
import Overview from "@/pages/Overview";

const page = () => {
  return (
    <div
      style={{
        backgroundImage: "url(/hero_img2.avif)",
      }}
      className="relative bg-fixed bg-cover bg-no-repeat bg-center">
      <div className="bg-black/80 inset-0 absolute" />
      <Hero />
      <Overview />
    </div>
  );
}



export default page;