import Image from "next/image";
import Link from "next/link";

function Landing() {
  return (
    <section className="flex gap-10 w-full min-h-screen justify-start max-w-[1400px] items-center p-5 lg:p-10 flex-col">
      <div className="flex justify-start items-center w-full">
        <Image
          width={160}
          height={72}
          alt="website logo"
          src={"/assets/logos/productLOGO.png"}
        />
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center w-full">
        <LeftLanding />
        <div className="relative overflow-hidden p-5 md:p-10 w-full lg:w-1/2">
          <div className="absolute w-full">
            <div className="w-full h-[650px] relative ">
              <Image
                fill
                src={"/assets/product/productImage1BG.png"}
                alt="product image"
                className="object-contain"
              />
            </div>
          </div>
          <div className="w-full h-[650px] relative ">
            <Image
              fill
              src={"/assets/product/productImage1.png"}
              alt="product image"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function LeftLanding() {
  return (
    <div className="flex w-full lg:w-1/2 justify-center items-center lg:items-start gap-5 flex-col">
      <h1 className="font-alfaOneSlab w-full tracking-wide font-black text-5xl md:text-6xl lg:text-8xl">
        TRUSTED BY
        <br />
        ATHLETES
      </h1>
      <p className="opacity-60 max-w-[400px]">
        Integrated with A.I to ensure your massage pressure is never compromised
      </p>
      <div className="flex justify-center flex-wrap items-center gap-2.5">
        <div className="flex justify-center items-center flex-col gap-2.5">
          <div className=" flex justify-center items-end gap-2.5">
            <span className="text-2xl font-black">18</span>
            Months
          </div>
          <span className="opacity-60">Included Warranty</span>
        </div>
        <div className="flex justify-center items-start flex-col gap-2.5">
          <span className="text-2xl font-black">10000+</span>
          <span className="opacity-60">Loyal customers</span>
        </div>
        <div className="flex justify-center items-start flex-col gap-2.5">
          <div className="flex justify-center items-center gap-2.5">
            {Array(5)
              .fill(0)
              .map((item) => (
                <div className="w-6 md:w-8 aspect-square relative">
                  <Image
                    fill
                    alt="rating star"
                    src={"/assets/utils/starUtil.png"}
                  />
                </div>
              ))}
          </div>
          <span className="opacity-60">Stars</span>
        </div>
      </div>
      <Link
        href={"/#"}
        className="flex justify-center items-center my-10 text-black px-10 py-2 bg-custom flex-col"
      >
        <span className="text-[28px] leading-7 font-bold">BUY NOW</span>
        <span className="text-[12px]">{`(Risk free 30 day trials)`}</span>
      </Link>
      <p>Buy now, pay later option available</p>
      <p className="text-custom font-bold text-lg">
        Free Worldwide Express Delivery
      </p>
      <div className="flex flex-wrap justify-center items-center gap-5">
        <Image
          alt="afterpay logo"
          width={150}
          height={40}
          src={"/assets/logos/afterpayLOGO.png"}
        />
        <Image
          alt="zip logo"
          width={100}
          height={40}
          src={"/assets/logos/zipLOGO.png"}
        />
      </div>
    </div>
  );
}

export default Landing;
