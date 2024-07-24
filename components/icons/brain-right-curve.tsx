import { SVGProps } from "react";

const BrainRightCurve = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={36}
      height={105}
      viewBox="0 0 36 105"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M30.721 104.125a2.198 2.198 0 002.655-1.68A112.468 112.468 0 004.324 1.398C3.469.51 2.054.512 1.183 1.385c-.871.872-.868 2.284-.014 3.173a108.005 108.005 0 0127.855 96.886c-.252 1.206.496 2.404 1.697 2.681z"
        fill="currentColor"
      />
    </svg>
  );
};

export default BrainRightCurve;