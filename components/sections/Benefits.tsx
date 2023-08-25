import Image from "next/image";

type BenefitsListT = {
  iconLink: string;
  description: string;
};
const benefitsIconPath = "/assets/utils/icons/benefits";

const BenefitsList: BenefitsListT[] = [
  {
    iconLink: `${benefitsIconPath}/icon6.png`,
    description: "Prevents delayed onset muscle soreness",
  },
  {
    iconLink: `${benefitsIconPath}/icon2.png`,
    description: "Release tension in tight muscles",
  },
  {
    iconLink: `${benefitsIconPath}/icon5.png`,
    description: "Ideal for warm-up, injury prevention, and recovery",
  },
  {
    iconLink: `${benefitsIconPath}/icon7.png`,
    description:
      "Increases blood flow and activates both muscular and nervous system",
  },
  {
    iconLink: `${benefitsIconPath}/icon4.png`,
    description: "Removes toxic bi-products post training",
  },
  {
    iconLink: `${benefitsIconPath}/icon3.png`,
    description: "Removes scar tissue and encourages natural muscle repair",
  },
  {
    iconLink: `${benefitsIconPath}/icon1.png`,
    description: "Perfect for relaxation",
  },
];

function Benefits() {
  return (
    <section className="flex gap-10 w-full lg:flex-row flex-col justify-between max-w-[1400px] items-center p-5 lg:p-10 ">
      <div className="flex flex-1 justify-center flex-col gap-10 items-center">
        <span className="font-alfaOneSlab w-full tracking-wider font-black text-2xl md:text-4xl lg:text-6xl ">
          THE BENEFITS
        </span>
        <div className="flex justify-start items-start gap-y-5 flex-wrap w-full">
          {BenefitsList.map((item, index) => (
            <BenefitsListC {...item} key={index} />
          ))}
        </div>
      </div>
      <Image
        alt=""
        width={450}
        height={450}
        src={"/assets/product/productImage3.png"}
      />
    </section>
  );
}

function BenefitsListC(props: BenefitsListT) {
  return (
    <div className="flex justify-start pr-5 w-full md:w-[50%] items-center gap-5">
      <div className="relative w-12 h-12 bg-neutral-800 rounded-full aspect-square">
        <Image alt="" src={props.iconLink} fill />
      </div>
      <span className="opacity-70">{props.description}</span>
    </div>
  );
}

export default Benefits;
