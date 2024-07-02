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
  const baseClasses = 'w-full font-medium flex items-center justify-center outline-none focus:outline-none transition-all ease-in-out';
  const variantClasses = {
    naked: '!py-0 w-fit bg-none text-current border-b-current hover:border-b hover:pb-0.5',
    primary: 'bg-primary text-white',
    outline: 'bg-none text-current border border-current',
    secondary: 'bg-secondary text-black',
    link: '!pt-0 !pb-0.5 w-fit bg-none text-current border-b-current border-b',
  };
  const sizeClasses = {
    base: 'py-4 lg:py-5 text-sm lg:text-base',
    sm: 'py-3.5 lg:py-4 text-xs lg:text-sm',
    xs: 'py-3.5 text-xs',
  };

  const classes = clsx(baseClasses, variantClasses[variant], sizeClasses[size], className);

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
