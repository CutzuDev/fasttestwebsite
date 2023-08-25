import Image from "next/image";

function Recovery() {
  return (
    <section className="flex w-full aspect-[32/9] overflow-hidden bg-neutral-800 justify-between max-w-[1400px] items-center ">
      <div className="relative h-full max-w-[50%] aspect-video">
        <Image
          alt=""
          className="object-contain"
          fill
          src={"/assets/utils/recoveryText.png"}
        />
      </div>
      <div className="relative h-full -mr-5 max-w-[50%] aspect-video">
        <Image
          fill
          alt=""
          className="object-contain"
          src={"/assets/utils/model1.png"}
        />
      </div>
    </section>
  );
}

export default Recovery;
