const Banner: React.FC = () => {
  return (
    <div className="mt-0 lg:mt-12 xl:mt-24 w-full font-medium uppercase tracking-widest">
      <div
        className="relative z-20 h-[3.75rem] lg:h-20 bg-primary text-white text-2xl lg:text-[2.125rem] flex items-center justify-center"
      >
        HOPE FOR THE FUTURE
      </div>
      <div
        className="relative z-[15] -mt-[1.875rem] lg:-mt-10 pb-1 lg:pb-4 h-[3.75rem] lg:h-20 bg-white text-black/20 text-3xl lg:text-[2.75rem] whitespace-nowrap flex items-end justify-center overflow-x-hidden"
      >
        POSITIVE IMPACT THROUGH INFORMATION TECNOLOGY POSIVITE
      </div>
    </div>
  )
}

export default Banner;