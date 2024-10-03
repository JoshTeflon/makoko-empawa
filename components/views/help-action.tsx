import Image from "next/image";
import clsx from "clsx";

import { Button, Plaster } from "@/components/interface";

import ActionBg from "@/public/help_action.jpeg";

const Plasters: React.FC<{className?: string}> = ({ className }) => {
  return (
    <div className={clsx(className, 'absolute')}>
      <Plaster variant="secondary" />
      <Plaster className="mt-4 lg:mt-5" />
    </div>
  )
}

const HelpAction: React.FC = () => {
  return (
    <section className="width-balance py-24 lg:py-[7rem] overflow-x-hidden">
      <div
        className="mx-auto w-full max-w-[19.75rem] md:max-w-[32rem] lg:max-w-[42rem] xl:max-w-[53rem]"
      >
        <div className="relative w-full">
          <Plasters className="z-10 -left-8 lg:-left-10 -top-1" />
          <Plasters className="z-10 -right-8 lg:-right-10 -bottom-2" />
          <div className="w-full h-56">
            <Image
              className="w-full h-full object-cover object-[center_20%]"
              src={ActionBg}
              alt="Help Action"
              priority
            />
            <div className="w-full h-full bg-black/45 absolute top-0 bottom-0 left-0 right-0">
              <div className="mt-2 w-full h-full flex flex-col items-center justify-center">
                <h5 className="text-xl md:text-2xl lg:text-3xl text-white font-semibold text-center">
                  Join our action
                  <br />
                  Everyone can help.
                </h5>
                <div className="mt-8 md:mt-5 w-full flex items-center justify-center space-x-1.5 md:space-x-2">
                  <Button
                    variant="primary"
                    size="xs"
                    className="max-w-[6.625rem] lg:max-w-[7.25rem] border border-primary"
                  >Donate Now</Button>
                  <Button
                    variant="outline"
                    size="xs"
                    className="text-white max-w-[9.25rem] lg:max-w-[10.5rem]"
                  >Become A Volunteer</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default HelpAction;