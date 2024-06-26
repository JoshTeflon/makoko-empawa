import { SVGProps } from "react";

const Facebook = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={7}
      height={13}
      viewBox="0 0 7 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7 .436a.352.352 0 00-.093-.24.308.308 0 00-.225-.1H5.09a2.922 2.922 0 00-2.182.828 3.33 3.33 0 00-1 2.229v1.833H.32a.308.308 0 00-.226.1.351.351 0 00-.093.24v1.766c0 .09.034.176.093.24.06.064.14.1.225.1H1.91v4.55c0 .09.034.176.093.24.06.063.14.1.225.1h1.91a.308.308 0 00.224-.1.352.352 0 00.094-.24v-4.55h1.667c.07 0 .14-.024.196-.07a.341.341 0 00.116-.182l.458-1.766a.362.362 0 00-.054-.294.324.324 0 00-.111-.098.302.302 0 00-.14-.036H4.454V3.153a.696.696 0 01.207-.437.614.614 0 01.429-.175h1.59a.308.308 0 00.226-.099.352.352 0 00.093-.24V.436z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Facebook;