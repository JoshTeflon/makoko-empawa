import { SVGProps } from "react";

const X = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={11}
      height={11}
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.198 10.49L6.21 4.678l.007.005L9.812.517H8.611l-2.93 3.39L3.357.518H.205l3.722 5.427L0 10.49h1.202l3.256-3.773 2.589 3.773h3.15zM2.88 1.424l5.595 8.16h-.952l-5.6-8.16h.957z"
        fill="currentColor"
      />
    </svg>
  );
};

export default X;