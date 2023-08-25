import Image from "next/image";

function Package() {
  return (
    <section className="flex gap-10 w-full justify-between max-w-[1400px] lg:flex-row flex-col items-center p-5 lg:p-10">
      <div className=" w-full lg:w-1/2 aspect-square relative">
        <div className="w-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square -z-[1] max-h-[70%] max-w-[70%] h-full bg-neutral-800 rounded-full" />
        <div className="relative top-1/2 -translate-y-1/2 aspect-square w-full z-[1] max-h-[487px]">
          <Image
            alt=""
            fill
            className=" object-contain pb-14 pr-14"
            src={"/assets/product/productImage4.png"}
          />
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center items-start flex-col gap-10  p-5">
        <span className="font-alfaOneSlab w-full tracking-wider font-black text-2xl md:text-4xl lg:text-6xl ">
          WHAT'S INCLUDED IN YOUR ORDER
        </span>
        <ul className="list-disc text-lg opacity-70 flex justify-center items-start  flex-col gap-2.5">
          <li>Booster Professional Series Massager</li>
          <li>
            6 different massage heads (to suit all muscle groups and intensity
            preference)
          </li>
          <li>
            Portable carry case with internal foam mould for safe and convenient
            storage
          </li>
          <li>How-to-use instruction manual</li>
          <li>USB-C charger cord</li>
          <li>18 Months Inclued Warranty</li>
          <li>Free Express Delivery</li>
        </ul>
      </div>
    </section>
  );
}

export default Package;
