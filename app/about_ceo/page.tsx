import Image from "next/image";

const page = () => {
  return (
    <div className="">
      <div className="bg-linear-to-r from-amber-950 to-amber-700 text-white/90 flex flex-col-reverse gap-10 md:gap-10 md:flex-row items-center justify-between p-8 md:p-16">
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
            src="/ceo.png"
            alt="The C.E.O"
            width={402}
            height={502}
            className="rounded-tr-4xl rounded-bl-4xl"
          />
        </div>
      </div>
      <div className="h-full p-4 md:p-8 flex flex-col gap-4">

        {/*  */}
        <div className="rounded-xl bg-amber-950/5 flex flex-col gap-2 text-amber-950 text-lg md:text-xl p-4 md:p-8">
          <h1 className="text-xl md:text-2xl text-amber-950 font-bold">
            Juniour School Days
          </h1>
          <p className="text-justify leading-relaxed">
            The C.E.O Went to Loyola grammar school in the year <b>1976 - 1980</b> {' '}
            later leaving the school after recieving an award of unbreakable first position streak,
            Joining the Urban day grammar school in the year <b>1982 - 1985</b> Where he completed his 
            secondary school days still being the top of the class Mr phillip resulted to
            Joing business affairs classes as a commercial student. <br />
            As a commercial student and a prime love for <b>Economics</b> the C.E.O started having plans apart 
            from education resulting to lack of concentration, but this never hindered his educational status 
            but <b>Broke is first position streak. </b> Which then afterwards lead to the CEO following his 
            fetish in football, where he was almost recruited but couldn&apos;t accept the offer based on 
            unknown reasons. Thi little incident discouraged the CEO from chasing down the path of football,
            led to him thus focusing on his business career.
          </p>
        </div>
        {/*  */}
        <div className="rounded-xl  bg-amber-950/5 flex flex-col gap-2 text-amber-950 text-lg md:text-xl p-4 md:p-8">
          <h1 className="text-xl md:text-2xl text-amber-950 font-bold">
            Higher institution
          </h1>
          <p className="text-justify leading-relaxed">
            The C.E.O Never wnt to University, not private, state or eveen fedral but he was opportuned to attend 
            a plotechnic <b>Fedral Plotechnic Rufus Giwa</b> <br />
            As a passionate commercial student He got in to study Economics as a profession fully dedicating 
            himself to the art of business it was in this institute he got the inspiration to startt
            his own start up. <br />
             At the time he hasnt come up with the name this successful will bear as at the time he bears a 
             different name  but eventually after graduating and casing his goals The CEO finally named the firm 
             <b>Phipest bens int nig ltd</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
