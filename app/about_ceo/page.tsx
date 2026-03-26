import Image from "next/image";

const page = () => {
  return (
    <div className="bg-linear-to-r from-amber-950 to-amber-700 w-full text-white/90 flex flex-col items-center">
      <div className="flex flex-col-reverse gap-10 md:gap-10 md:flex-row items-center justify-between p-8 md:p-16">
        <div className="flex flex-col gap-5 w-full md:w-[60%]">
          <h1 className="font-bold text-xl md:text-3xl text-center md:text-left">
            C.E.O - Phillip Oluwole Oladosu
          </h1>
          <p className="font-light tracking-wider text-lg text-justify md:">
            Pst Phillip being the founder of Phipest Bens Int Nig Ltd started up
            as a student as constloyola grammer school, being just a boy had
            plans for a greater future but lacked the mean of achieving it at
            the time
          </p>
        </div>

        <div className="bg-white p-2 drop-shadow-lg">
          <Image
            src="/ceo_img.jpg"
            alt="The C.E.O"
            width={402}
            height={602}
            className="rounded-tr-4xl rounded-bl-4xl"
          />
        </div>
      </div>
      <div className="bg-amber-50 h-screen w-full md:w-[95%]">

      </div>
    </div>
  );
};

export default page;
