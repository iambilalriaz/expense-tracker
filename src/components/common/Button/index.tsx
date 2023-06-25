const Button = ({
  title,
  onClick,
  Icon,
  styles,
  variant = 'primary',
}: {
  title: string;
  onClick: () => void;
  Icon?: JSX.Element;
  styles?: string;
  variant?: 'primary' | 'secondary';
}) => {
  return (
    <button
      onClick={onClick}
      className={`${
        variant === 'secondary'
          ? 'text-secondary bg-light'
          : 'bg-primary text-light'
      }  flex items-center font-semibold text-sm rounded-lg px-4 py-2 ${styles}`}
    >
      {Icon ? <span className='mr-1'>{Icon}</span> : null} {title}
    </button>
  );
};

export default Button;
