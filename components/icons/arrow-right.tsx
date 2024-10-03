import { SVGProps } from "react";

const ArrowRight = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={16}
      height={10}
      viewBox="0 0 16 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.185 5.468a.459.459 0 000-.649L11.295.93a.458.458 0 00-.648.649l3.107 3.107H.6a.459.459 0 000 .917h13.155l-3.107 3.107a.458.458 0 00.649.648l3.89-3.89z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ArrowRight;