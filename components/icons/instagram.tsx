import { SVGProps } from "react";

const Instagram = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={12}
      height={12}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.248.517A3.172 3.172 0 0111.42 3.69v5.076a3.172 3.172 0 01-3.172 3.172H3.172A3.172 3.172 0 010 8.765V3.689A3.172 3.172 0 013.172.517h5.076zM5.71 3.69a2.538 2.538 0 100 5.076 2.538 2.538 0 000-5.076zm0 1.27a1.269 1.269 0 110 2.537 1.269 1.269 0 010-2.538zm2.855-2.221a.634.634 0 100 1.269.634.634 0 000-1.27z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Instagram;