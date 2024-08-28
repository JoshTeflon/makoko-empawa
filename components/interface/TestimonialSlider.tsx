"use client";

import clsx from "clsx";

import { Button, TestimonialCard } from "@/components/interface";
import { navigationArrows, testimonies } from "@/lib";
import { NavigationArrow, Testimony } from "@/types";

interface TestimonialSliderProps {

}

interface NavigatorProps {
  disabled?: boolean
}

const Navigator: React.FC<NavigatorProps> = ({ disabled }) => {

  return (
    <div className="space-y-11">
      {
        navigationArrows?.map((a: NavigationArrow) => (
          <Button
            key={a.label}
            onClick={a.action}
            aria-label={a.label}
            disabled={disabled}
            className="w-11 h-11 bg-white text-primary rounded-full hover:scale-[1.025] active:scale-[1.05]"
          >
            {<a.icon />}
          </Button>
        ))
      }
    </div>
  )
}

const TestimonialSlider: React.FC<TestimonialSliderProps> = ({}) => {
  return (
    <div className="flex">
      <Navigator />
      <div className="w-full overflow-x-hidden">
        <div className="flex items-center space-x-5 lg:space-x-8 ml-8 md:ml-12 lg:ml-[3.85rem]">
          {
            testimonies?.map((t: Testimony, idx: number) => (
              <TestimonialCard
                // className={clsx({"ml-24": idx !== 0})}
                className={clsx("justify-start", {"scale-75 blur-[3px]": idx !== 0})}
                key={t.name}
                name={t.name}
                occupation={t.occupation}
                src={t.src}
                note={t.note}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default TestimonialSlider;