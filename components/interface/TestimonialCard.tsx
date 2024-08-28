import Image from "next/image";
import clsx from "clsx";

import { Testimony } from "@/types";

interface TestimonialCardProps extends Testimony {
  className?: string
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name, occupation, src, note, className
}) => {
  const cardWidth = "w-full min-w-[14.5rem] md:min-w-[18.5rem] lg:min-w-[22rem] max-w-[14.5rem] md:max-w-[18.5rem] lg:max-w-[22rem]";

  return (
    // <div className="">
      <div
        className={clsx(className, cardWidth, "h-[19rem] md:h-[24rem] lg:h-[28.75rem] relative bg-main rounded-tr-[70px] shadow-activeCard")}
      >
        <div className="text-left absolute top-9 md:top-12 lg:top-14 right-4 md:right-5 lg:right-6">
          <span className="text-base md:text-lg text-black font-medium">{name}</span>
          <div className="text-xs md:text-sm text-black/50">
            <p className="leading-tight">{occupation}</p>
            <p className="leading-tight">Resident</p>
          </div>
        </div>
        <div className={clsx(cardWidth, "absolute bottom-2.5 md:bottom-4 lg:bottom-5 right-8 md:right-12 lg:right-[3.75rem]")}>
          <div className={clsx("mx-auto w-full max-h-40 md:max-h-52 lg:max-h-[15.5rem] overflow-hidden", {

          })}>
            <Image
              className="w-full h-full object-cover object-top"
              src={src}
              alt={name}
              priority
            />
          </div>
          <div
            className="py-3 lg:py-5 px-2.5 lg:px-4 w-full h-[7.75rem] md:h-[8.75rem] lg:h-[9.5rem] bg-primary rounded-[0.625rem] shadow-testimonialCard"
          >
            <div className="w-full h-full text-white overflow-hidden">{note}</div>
          </div>
        </div>
      </div>
    // </div>
  )
}

export default TestimonialCard;