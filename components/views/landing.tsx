import { Button } from "../interface";

const Landing = () => {
  return (
    <section className="lg:py-2 width-balance">
      <div>
        <div className="text-center lg:text-left">
          <h1 className="text-black text-2xl md:text-4xl lg:text-[3.125rem] font-medium lg:leading-[3.75rem]">
            Creating positive change<br />
            in slums with {'“'}<span className="text-secondary">Tech</span>{'”'} <br />
            join us today
          </h1>
          <p className="mt-3 lg:mt-[1.125rem] mx-auto lg:mx-0 w-full max-w-[32rem] text-sm lg:text-base !leading-7">
            Our mission is to raise and empower individuals in the slums, turning potentials into success stories. Together, we can make a tangible difference in the lives of those who need it most. Every contribution, is a crucial step towards brighter futures and stronger communities.
          </p>
        </div>
        <div className="mt-5 lg:mt-8 flex items-center justify-center lg:justify-start">
          <Button
            className="max-w-[8.75rem] lg:max-w-[12.5rem] text-primary"
            variant="outline"
          >
            Partner With Us
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Landing;