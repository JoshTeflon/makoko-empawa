import { SVGProps } from "react";

const ArrowLeft = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={16}
      height={9}
      viewBox="0 0 16 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.274 4.095a.458.458 0 000 .648l3.89 3.89a.458.458 0 10.648-.648L1.704 4.877l13.156.001a.46.46 0 000-.918H1.705L4.811.854a.458.458 0 00-.649-.648l-3.89 3.89z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ArrowLeft;