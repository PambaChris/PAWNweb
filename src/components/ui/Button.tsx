import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const Button = ({
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  ...props
}: ButtonProps) => {
  const baseStyles = 'font-bold rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantStyles = {
    primary: 'bg-primary text-foreground hover:bg-primary/80 focus:ring-primary',
    secondary: 'bg-muted text-foreground hover:bg-muted/80 focus:ring-muted',
    ghost: 'bg-transparent text-foreground hover:bg-muted focus:ring-muted',
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
