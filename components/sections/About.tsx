import Image from "next/image";

type AboutListT = {
  iconLink: string;
  description: string;
};
const aboutIconPath = "/assets/utils/icons/about";

const AboutList: AboutListT[] = [
  {
    iconLink: `${aboutIconPath}/icon3.png`,
    description: "Integrated with Artificial Intelligence | Smart Hit Control",
  },
  {
    iconLink: `${aboutIconPath}/icon8.png`,
    description: "6 different head attachments to suit all muscle groups",
  },
  {
    iconLink: `${aboutIconPath}/icon5.png`,
    description: "Triple Noise Reduction Technology",
  },
  {
    iconLink: `${aboutIconPath}/icon2.png`,
    description: "Remaining Power Display",
  },
  {
    iconLink: `${aboutIconPath}/icon7.png`,
    description: "Vibration filtering for smoother operating",
  },
  {
    iconLink: `${aboutIconPath}/icon4.png`,
    description: "5 Year Motor Warranty",
  },
  {
    iconLink: `${aboutIconPath}/icon9.png`,
    description: "12V Lithium battery with 2 hour fast charging",
  },
  {
    iconLink: `${aboutIconPath}/icon2.png`,
    description: "30 Day Money Back Guarantee",
  },
  {
    iconLink: `${aboutIconPath}/icon1.png`,
    description:
      "12 KG pressure bearing with brushless motor (Which means it's intensely powerful, while also having an extremely quiet & frictionless operating system)",
  },
];

function About() {
  return (
    <section className="flex gap-10 w-full min-h-screen justify-start max-w-[1400px] items-center p-5 lg:p-10 flex-col">
      <div className="flex flex-wrap justify-center items-center w-full gap-10">
        <Image
          alt=""
          width={160}
          height={160}
          src={"/assets/utils/uAsset1.png"}
        />
        <Image
          alt=""
          width={250}
          height={70}
          src={"/assets/utils/uAsset2.png"}
        />
        <Image
          alt=""
          width={145}
          height={170}
          src={"/assets/utils/uAsset3.png"}
        />
      </div>
      <span className="font-alfaOneSlab font-black tracking-widest text-center text-4xl md:text-7xl opacity-10">
        MASSAGE GUN
      </span>
      <div className="flex flex-col lg:flex-row justify-between items-center w-full">
        <Image
          alt=""
          width={490}
          height={490}
          src={"/assets/product/productImage2.png"}
        />
        <RightAbout />
      </div>
    </section>
  );
}

function RightAbout() {
  return (
    <div className="flex flex-1 gap-10 p-2.5 md:p-10 justify-center items-center flex-col">
      <span className="font-alfaOneSlab w-full tracking-wider font-black text-2xl md:text-4xl lg:text-6xl ">
        WHAT MAKES THIS GUN DIFFERENT FROM THE REST
      </span>
      <div className="flex justify-start items-start gap-y-5 flex-wrap w-full">
        {AboutList.map((item, index) => (
          <AboutListC {...item} key={index} />
        ))}
      </div>
    </div>
  );
}

function AboutListC(props: AboutListT) {
  return (
    <div className="flex justify-start pr-5 w-full md:w-[50%] items-start gap-5">
      <div className="relative w-12 h-12 bg-neutral-800 rounded-full aspect-square">
        <Image alt="" src={props.iconLink} fill />
      </div>
      <span className="opacity-70">{props.description}</span>
    </div>
  );
}

export default About;
