import { SVGProps } from "react";

const BrainLeftCurve = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={32}
      height={98}
      viewBox="0 0 32 98"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M30.423 1.536c-.935-.819-2.358-.726-3.157.225A112.471 112.471 0 003.068 96.183c.243 1.219 1.446 1.985 2.66 1.717 1.212-.268 1.976-1.468 1.734-2.687a107.97 107.97 0 0123.19-90.488c.798-.951.706-2.371-.229-3.19z"
        fill="currentColor"
      />
    </svg>
  );
};

export default BrainLeftCurve;