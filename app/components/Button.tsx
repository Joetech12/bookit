'use client';

import { IconType } from 'react-icons';
import Spinner from './Spinner';

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  showSpinner?: boolean;
  icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  showSpinner,
  icon: Icon,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`relative flex disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full ${
        outline ? 'bg-white' : 'bg-primary'
      } ${outline ? 'border-black' : 'border-primar'} ${
        outline ? 'text-black' : 'text-white'
      } ${small ? 'text-sm' : 'text-md'} ${small ? 'py-1' : 'py-3'} ${
        small ? 'font-light' : 'font-semibold'
      } ${small ? 'border-[1px]' : 'border-2'}`}
    >
      <div className="w-full">
          <span className="">
            {Icon && (
              <Icon
                size={24}
                className="
                    absolute
                    left-4
                    top-3
                  "
              />
            )}
          </span>
          <span> {showSpinner ? <Spinner /> : label}</span>
      </div>
    </button>
  );
};

export default Button;
