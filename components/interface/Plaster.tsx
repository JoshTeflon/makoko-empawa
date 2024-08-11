import clsx from "clsx";

interface PlasterProps {
  variant?: "primary" | "secondary"
  className?: string
}

const Plaster: React.FC<PlasterProps> = ({ variant = "primary", className }) => {
  return (
    <div
      className={clsx(className, "w-[9.125rem] h-[1.875rem] lg:h-10 transform rotate-[-20.88deg]", {
        "bg-primary": variant === 'primary',
        "bg-secondary": variant === 'secondary'
      })}
    ></div>
  )
}

export default Plaster;