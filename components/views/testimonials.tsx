import { TestimonialSlider } from "../interface";

const Testimonials: React.FC = () => {
  return (
    <section className="py-[3.75rem] lg:py-[4.5rem] bg-primary">
      <div className="width-balance">
        <div className="mb-12 flex flex-col lg:flex-row justify-between">
          <h5 className="title-line text-white text-2xl md:text-3xl lg:text-4xl font-medium">
            Testimonials
          </h5>
          <p className="mt-6 lg:mt-0 max-w-[27.5rem] text-white/70 text-base">
            We are dedicated to fostering positive change, creating opportunities for growth, and building a stronger, more resilient community. With unwavering passion and a steadfast resolve, we continue to strive towards a brighter future for all
          </p>
        </div>
        <TestimonialSlider />
      </div>
    </section>
  )
}

export default Testimonials;