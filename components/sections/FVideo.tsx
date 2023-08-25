import Image from "next/image";

function FVideo() {
  return (
    <section className="relative aspect-video w-full max-w-[1400px] ">
      <Image alt="" fill src={"/assets/product/productImage5.png"} />
      <div className="absolute z-[2] flex justify-center items-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <svg
          viewBox="0 0 318 318"
          className="max-w-[318px] max-h-[318px] h-full w-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_bd_2_772)">
            <circle
              cx="158.903"
              cy="138.903"
              r="85.0972"
              fill="white"
              fill-opacity="0.17"
              shape-rendering="crispEdges"
            />
          </g>
          <path
            d="M157.174 92.3772C159.033 92.3772 160.893 92.3772 162.751 92.3772C162.991 92.4308 163.226 92.5122 163.468 92.5309C170.912 93.0571 177.877 95.1853 184.233 99.0808C196.563 106.637 204.151 117.531 206.815 131.784C207.148 133.567 207.313 135.384 207.555 137.184C207.555 139.042 207.555 140.902 207.555 142.76C207.497 143.089 207.432 143.417 207.383 143.747C207.085 145.797 206.915 147.873 206.477 149.892C203.993 161.323 198.123 170.688 188.813 177.741C177.232 186.514 164.19 189.422 149.968 186.458C138.584 184.086 129.331 178.118 122.25 168.916C114.608 158.978 111.43 147.662 112.624 135.209C113.593 125.118 117.512 116.209 124.234 108.602C131.606 100.266 140.787 95.0712 151.763 93.1176C153.554 92.7986 155.37 92.6217 157.174 92.3772ZM148.066 139.906C148.066 145.668 148.066 151.429 148.068 157.192C148.068 157.532 148.049 157.881 148.119 158.209C148.447 159.742 149.982 160.217 151.5 159.241C160.486 153.471 169.469 147.697 178.45 141.917C180.287 140.734 180.266 139.193 178.405 137.996C169.476 132.252 160.541 126.517 151.614 120.77C150.818 120.258 150.024 119.906 149.106 120.407C148.191 120.91 148.056 121.762 148.059 122.715C148.073 128.443 148.066 134.175 148.066 139.906Z"
            fill="white"
          />
          <defs>
            <filter
              id="filter0_bd_2_772"
              x="0.446053"
              y="0.986744"
              width="316.914"
              height="316.914"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="7.61592" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_2_772"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="20.5407" />
              <feGaussianBlur stdDeviation="36.6798" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_backgroundBlur_2_772"
                result="effect2_dropShadow_2_772"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow_2_772"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </section>
  );
}

export default FVideo;
