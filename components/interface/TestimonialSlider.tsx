"use client";

import { Button, TestimonialCard } from "@/components/interface";
import { navigationArrows, testimonies } from "@/lib";
import { NavigationArrow, Testimony } from "@/types";

interface TestimonialSliderProps {

}

interface NavigatorProps {

}

const Navigator: React.FC<NavigatorProps> = ({}) => {

  return (
    <div className="space-y-11">
      {
        navigationArrows?.map((a: NavigationArrow) => (
          <Button
            key={a.label}
            onClick={a.action}
            aria-label={a.label}
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
      <div className="ml-8 md:ml-12 lg:ml-[3.75rem] w-full">
        {
          testimonies?.map((t: Testimony) => (
            <TestimonialCard
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
  )
}

export default TestimonialSlider;