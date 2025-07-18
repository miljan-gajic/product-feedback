import { cva, VariantProps } from 'class-variance-authority';
import { PropsWithChildren } from 'react';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-4 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer',
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-white hover:bg-primary-hover focus:ring-primary-hover',
        secondary:
          'bg-secondary text-gray-800 hover:bg-gray-300 focus:ring--secondary',
      },
      size: {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> &
  PropsWithChildren;

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  size,
  className,
  ...props
}) => {
  return (
    <button className={buttonVariants({ variant, size, className })} {...props}>
      {children}
    </button>
  );
};

export default Button;
