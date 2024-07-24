import clsx from "clsx";

import { Button, ServiceCard } from "@/components/interface";
import { workflowList } from "@/lib";
import { WorkflowItem } from "@/types";

const Services: React.FC = () => {
  return (
    <section className="width-balance pt-16 sm:pb-14 lg:pt-28 lg:pb-16">
      <div>
        <div className="mb-5 lg:mb-10 xl:mb-20 w-full max-w-xl">
          <h3 className="title-line text-black text-[1.375rem] lg:text-[2.25rem] leading-9 font-medium">
            Our dedicated workflow
            <br />
            are as follows.
          </h3>
          <p className="mt-8 text-[0.875rem] lg:text-[1rem] leading-7">
            Our workflow focus areas are carefully crafted to serve the unique needs for raising champions in slums. We dedicate our efforts to enhancing and uplifting lives through the following.
          </p>
        </div>
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-[1.875rem]">
            {
              workflowList?.map((work: WorkflowItem, idx: number) => (
                <div
                  key={work?.title}
                  className={clsx("w-full", {
                    "lg:-mt-48 xl:-mt-56": idx === 2
                  })}
                >
                  <ServiceCard
                    className="mx-auto w-full"
                    src={work?.src}
                    title={work?.title}
                    note={work?.note}
                  />
                  {idx === 2 &&
                    <Button
                      className="hidden lg:flex mt-16 mx-auto text-primary"
                      variant="link"
                    >View All Services</Button>
                  }
                </div>
              ))
            }
            <Button
              className="hidden sm:flex lg:hidden self-center mx-auto text-primary"
              variant="link"
            >View All Services</Button>
          </div>
          <Button
            className="sm:hidden mt-11 mb-[3.75rem] mx-auto text-primary"
            variant="link"
          >View All Services</Button>
        </div>
      </div>
    </section>
  )
}

export default Services;