import { SVGProps } from "react";

const Play = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={9}
      height={14}
      viewBox="0 0 9 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.168 7.975L2.083 13.3c-.716.628-1.84.118-1.84-.836V1.815A1.11 1.11 0 012.082.98l6.084 5.323a1.11 1.11 0 010 1.672z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Play;