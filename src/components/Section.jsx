import useReveal from '../hooks/useReveal';

const Section = ({
  children,
  className = '',
  bg = 'white',
  id,
  reveal = true, // fade-up into view as the user scrolls
}) => {
  const bgColors = {
    white: 'bg-white',
    slate: 'bg-slate-50',
    primary: 'bg-primary text-white',
    secondary: 'bg-secondary',
  };

  const { ref, isVisible } = useReveal();

  return (
    <section
      id={id}
      ref={reveal ? ref : null}
      className={`py-16 md:py-24 ${bgColors[bg]} ${reveal ? `reveal ${isVisible ? 'is-visible' : ''}` : ''} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default Section;