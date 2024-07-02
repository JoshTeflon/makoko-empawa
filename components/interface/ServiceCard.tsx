import Image from "next/image";

import { WorkflowItem } from "@/types";
import clsx from "clsx";

interface ServiceCardProps extends WorkflowItem {
  className?: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({ src, title, note, className = '' }) => {
  return (
    <div className={clsx(className, "w-full max-w-xs lg:max-w-[21.25rem]")}>
      <div className="w-full h-[22.375rem] lg:h-[30.5rem]">
        <Image
          className="w-full h-full"
          src={src}
          alt={title}
          priority
        />
      </div>
      <div className="p-3.5 lg:py-[1.0625rem] lg:px-[1.6875rem] bg-white text-primary font-medium">
        <span className="text-sm uppercase">{title}</span>
        {
          note ? <span className="text-xs">{` (${note})`}</span> : ''
        }
      </div>
    </div>
  )
}

export default ServiceCard;