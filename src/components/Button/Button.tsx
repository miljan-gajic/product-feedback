import { cva, VariantProps } from 'class-variance-authority';
import { PropsWithChildren } from 'react';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-4 rounded-xl font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer',
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-white hover:bg-primary-hover focus:ring-primary-hover',
        secondary:
          'bg-secondary text-gray-800 hover:bg-secondary-hover focus:ring--secondary text-white',
        link: 'text-secondary hover:underline focus:ring-secondary',
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

type ButtonProps<T extends React.ElementType> = {
  as?: T;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> &
  PropsWithChildren &
  React.ComponentPropsWithoutRef<T>;

const Button = <T extends React.ElementType>({
  children,
  variant,
  size,
  className,
  as,
  ...props
}: ButtonProps<T>) => {
  const Component = as || 'button';
  return (
    <Component
      className={buttonVariants({ variant, size, className })}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;
