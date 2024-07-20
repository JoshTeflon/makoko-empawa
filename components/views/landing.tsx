"use client";

import Image from "next/image";
import ReactCurvedText from "react-curved-text";

import { Button } from "@/components/interface";
import { Play } from "@/components/icons";

import LandingImage from "@/public/landing_preview.png";

const Landing: React.FC = () => {
  return (
    <section className="width-balance relative pt-4">
      <div>
        <div className="text-center lg:text-left">
          <h1 className="text-black text-2xl md:text-4xl lg:text-[2.75rem] xl:text-[3.125rem] font-medium lg:leading-[3rem] xl:leading-[3.75rem]">
            Creating positive change<br />
            in slums with {'“'}<span className="text-secondary">Tech</span>{'”'} <br />
            join us today
          </h1>
          <p className="mt-3 lg:mt-[1.125rem] mx-auto lg:mx-0 w-full max-w-[32rem] text-sm lg:text-base !leading-7">
            Our mission is to raise and empower individuals in the slums, turning potentials into success stories. Together, we can make a tangible difference in the lives of those who need it most. Every contribution, is a crucial step towards brighter futures and stronger communities.
          </p>
        </div>
        <div className="min-h-32 relative my-4 xl:mt-8 xl:mb-16 flex items-center justify-center lg:justify-start overflow-hidden">
          <Button
            className="z-10 -ml-40 sm:-ml-48 lg:ml-0 max-w-[8.75rem] sm:max-w-[10.625rem] lg:max-w-[12.5rem] text-primary"
            variant="outline"
          >
            Partner With Us
          </Button>
          <div className="absolute ml-40 sm:ml-48 lg:ml-36 xl:ml-40">
            <div className="relative">
              <ReactCurvedText
                width={300}
                height={300}
                cx={150}
                cy={150}
                rx={30}
                ry={30}
                startOffset={0}
                reversed={true}
                text='Learn about us through this video'
                textProps={{"style": {"fontSize": "13"}}}
                tspanProps={{"dy": "-25"}}
                svgProps={{"style": {"transform": "rotate(5deg)"}}}
              />
              <Button
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:border-none hover:animate-pulse"
                variant="naked"
              >
                <div className="w-14 h-14 bg-secondary text-black flex items-center justify-center rounded-full ">
                  <Play />
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:absolute lg:top-0 lg:right-0 lg:z-10 mx-auto mt-4 lg:mt-0 lg:ml-0 lg:mr-10 xl:mr-20 w-full max-w-[36rem] xl:max-w-[44rem]">
        <Image
          className="w-full"
          src={LandingImage}
          alt="landing hero"
          priority
        />
      </div>
    </section>
  )
}

export default Landing;