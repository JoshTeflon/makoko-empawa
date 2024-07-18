import Image from "next/image";

import { Button } from "../interface";
import AboutPng from "@/public/about_us.png"

const AboutUs: React.FC = () => {
  return (
    <section className="sm:px-5 lg:px-10 xl:px-20 mx-auto my-12 lg:my-20 w-full max-w-7xl lg:flex lg:items-end">
      <div className="z-10 px-4 lg:px-0 mx-auto max-w-[40rem] lg:min-w-[24rem] xl:min-w-[30.25rem] w-full h-[23.25rem] lg:h-[32.25rem]">
      {/* <div className="lg:absolute lg:left-0 lg:bottom-0 px-4 mx-auto max-w-[40rem] w-full h-[23.375rem] lg:h-[33.125rem]"> */}
        <Image
          className="w-full h-full"
          src={AboutPng}
          alt="About us"
          priority
        />
      </div>
      <div className="pt-[4.5rem] pb-10 px-5 lg:pt-10 lg:px-10 xl:px-14 lg:-ml-[20%] lg:min-w-[70%] bg-white flex flex-col items-end">
        <div className="lg:pl-[30%]">
          <h3 className="title-line text-black text-[1.375rem] lg:text-[2.25rem] leading-6 lg:leading-10 font-medium">About Us</h3>
          <div className="mt-8 mb-8 lg:mt-5 text-sm lg:text-base">
            <p>
              We are driven by a singular passion to create meaningful and sustainable impact in the lives of individuals in the slum. Founded on principles of compassion and empowerment, our journey began with a simple yet profound mission – to bring hope and renewal to those who need it most.
            </p>
            <p>
              As we continue on this journey, we invite you to join us. Together, we can transform challenges into opportunities, despair into hope, and dreams into reality. Together, we can raise champions in slums that thrives – resilient, vibrant, and full of promise...
            </p>
          </div>
          <Button
            variant="link"
            className="text-primary"
          >Read More</Button>
        </div>
      </div>
    </section>
  )
}

export default AboutUs;