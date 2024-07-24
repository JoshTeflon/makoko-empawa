import { BrainLeftCurve, BrainRightCurve } from "../icons";
import { BrainList } from "@/lib";
import { BrainItem } from "@/types";

const Brains: React.FC = () => {
  return (
    <section className="width-balance py-[3.25rem] lg:py-24">
      <h3
        className="title-line after:mb-9 lg:after:mb-14 after:mx-auto text-center text-black text-[1.375rem] lg:text-[2.25rem] leading-6 lg:leading-10 font-medium"
      >
        Brains Behind The Movement
      </h3>
      <div className="w-full flex flex-wrap justify-around xl:justify-between gap-y-8 xl:gap-y-0 gap-x-4">
        {
          BrainList?.map((i: BrainItem, idx: number) => (
            <div key={i?.name} className="flex flex-col items-center">
              <div className={`flex  items-center ${idx % 2 === 0 ? 'text-secondary' : 'text-primary'}`}>
                <div className={` ${idx % 2 === 0 ? '-mr-4 mb-14' : '-mr-[1.25rem] mt-14 rotate-180'}`}>
                  {idx % 2 === 0 ? <BrainLeftCurve /> : <BrainRightCurve />}
                </div>
                <div className="w-[13.5rem] h-[13.5rem] rounded-full bg-current"></div>
                <div className={`${idx % 2 === 0 ? '-ml-[1.25rem] mb-14' : '-ml-4 mt-14 rotate-180'}`}>
                {idx % 2 === 0 ? <BrainRightCurve /> : <BrainLeftCurve />}
                </div>
              </div>
              <div className="mt-4 lg:mt-5 flex flex-col items-center">
                <span className="text-[1.375rem] text-black font-medium leading-7">{i?.name}</span>
                <span className="text-base text-black/70">{i?.role}</span>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Brains;