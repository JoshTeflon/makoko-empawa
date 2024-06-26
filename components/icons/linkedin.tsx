import { SVGProps } from "react";

const Linkedin = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={13}
      height={13}
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.5 4.739h2.25v1.12c.324-.644 1.155-1.223 2.403-1.223 2.394 0 2.962 1.283 2.962 3.636v4.36H9.692V8.809c0-1.341-.324-2.097-1.15-2.097-1.143 0-1.619.815-1.619 2.096v3.824H4.5V4.739zm-4.155 7.79h2.423V4.636H.345v7.893zm2.77-10.467a1.532 1.532 0 01-.456 1.091 1.569 1.569 0 01-2.204 0A1.543 1.543 0 010 2.063c0-.41.164-.803.456-1.092a1.565 1.565 0 012.203 0c.292.29.456.682.456 1.092z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Linkedin;