import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'naked' | 'primary' | 'outline' | 'secondary' | 'link';
  size?: 'base' | 'sm' | 'xs';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'naked',
  size = 'base',
  className = '',
  ...props
}) => {
  const baseClasses = 'font-medium flex items-center justify-center outline-none focus:outline-none transition-all ease-in-out duration-200';
  const variantClasses = {
    naked: '!py-0 w-fit bg-none text-current border-b-current hover:border-b active:scale-[1.025]',
    primary: 'w-full bg-primary text-white hover:scale-[1.025] active:-translate-y-0.5',
    outline: 'w-full bg-none text-current border border-current hover:bg-galleryLines/5 active:-translate-y-0.5',
    secondary: 'w-full bg-secondary text-black hover:bg-secondary/95 active:scale-[1.025]',
    link: '!pt-0 !pb-0.5 w-fit h-fit bg-none text-current border-b-current border-b hover:scale-[1.025] active:-translate-y-0.5',
  };
  const sizeClasses = {
    base: 'py-4 lg:py-5 text-sm lg:text-base',
    sm: 'py-3.5 lg:py-4 text-xs lg:text-sm',
    xs: 'py-3.5 text-xs',
  };

  const classes = clsx(baseClasses, variantClasses[variant], sizeClasses[size], className);

  return (
    <button
      className={classes}
      style={{ backfaceVisibility: 'hidden', willChange: 'transform' }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
