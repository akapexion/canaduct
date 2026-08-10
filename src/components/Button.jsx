import { Loader2 } from 'lucide-react';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconPosition = 'left',
  isLoading = false,
  disabled = false,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] focus:outline-none focus:ring-2 focus:ring-offset-2 overflow-hidden relative group disabled:opacity-60 disabled:pointer-events-none disabled:hover:translate-y-0';

  const variants = {
    primary: 'bg-primary hover:bg-primary-dark text-white shadow-md hover:box-glow focus:ring-primary border border-transparent',
    secondary: 'bg-white text-primary hover:bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md focus:ring-primary',
    outline: 'bg-transparent text-white border-2 border-white hover:bg-white/10 focus:ring-white backdrop-blur-sm',
    ghost: 'bg-transparent text-primary hover:bg-primary/10 focus:ring-primary',
    glass: 'bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white/30 shadow-lg hover:shadow-xl',
  };

  const sizes = {
    sm: 'text-sm px-4 py-2 gap-1.5',
    md: 'text-base px-6 py-3 gap-2',
    lg: 'text-lg px-8 py-4 gap-2.5',
  };

  const iconSize = size === 'sm' ? 'h-4 w-4' : size === 'lg' ? 'h-5 w-5' : 'h-4.5 w-4.5';

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {/* Shine sweep on hover — now actually animates, since `shimmer` is defined in index.css */}
      <span className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_1.2s_ease-in-out] pointer-events-none" />

      <span className="relative z-10 flex items-center justify-center">
        {isLoading ? (
          <Loader2 className={`${iconSize} animate-spin ${children ? 'mr-2' : ''}`} />
        ) : (
          Icon && iconPosition === 'left' && <Icon className={`${iconSize} ${children ? 'mr-0' : ''}`} />
        )}
        {children}
        {!isLoading && Icon && iconPosition === 'right' && (
          <Icon className={`${iconSize} transition-transform duration-300 group-hover:translate-x-1`} />
        )}
      </span>
    </button>
  );
};

export default Button;