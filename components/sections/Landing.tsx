import Image from "next/image";
import Link from "next/link";

function Landing() {
  return (
    <section className="flex w-full min-h-screen justify-start max-w-[1400px] items-center p-10 flex-col">
      <div className="flex justify-start items-center w-full">
        <Image
          width={160}
          height={72}
          alt="website logo"
          src={"/assets/logos/productLOGO.png"}
        />
      </div>
      <div className="flex justify-between items-center w-full">
        <LeftLanding />
        <Image
          width={590}
          height={820}
          src={"/assets/product/productImage1.png"}
          alt="product image"
        />
      </div>
    </section>
  );
}

function LeftLanding() {
  return (
    <div className="flex justify-center items-start gap-5 flex-col">
      <h1 className="font-alfaOneSlab tracking-wide font-black text-4xl md:text-5xl lg:text-6xl">
        TRUSTED BY
        <br />
        ATHLETES
      </h1>
      <p className="opacity-60 max-w-[400px]">
        Integrated with A.I to ensure your massage pressure is never compromised
      </p>
      <div className="flex justify-center items-center gap-2.5">
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
                <Image
                  width={30}
                  height={30}
                  alt="rating star"
                  src={"/assets/starUtil.png"}
                />
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
      <div className="flex justify-center items-center gap-5">
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
