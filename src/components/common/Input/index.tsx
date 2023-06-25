import { ChangeEvent, KeyboardEvent } from 'react';

type InputProps = {
  id: string;
  value: number | string;
  type: 'number' | 'text';
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onPressEnter?: (e: KeyboardEvent) => void;
  placeholder: string;
  inputTextSize?: string;
  autoFocus?: boolean;
};
const Input = ({
  id,
  value,
  type,
  onInputChange,
  onPressEnter,
  placeholder,
  inputTextSize,
  autoFocus,
}: InputProps) => {
  return (
    <div className='relative z-0 px-2 w-full group text-secondary'>
      <label
        htmlFor={`${id}`}
        className={`${
          value
            ? 'top-1 text-sm md:text-lg text-primary'
            : 'top-[34px] md:top-9 text-xl md:text-2xl text-secondary'
        } relative group-focus-within:top-1 group-focus-within:text-sm group-focus-within:md:text-lg group-focus-within:text-primary w-auto`}
      >
        {placeholder}
      </label>
      <input
        className={`${
          inputTextSize ?? 'text-2xl md:text-3xl'
        } p-0 outline-none bg-transparent w-full border-b-2 border-secondary py-1`}
        id={`${id}`}
        type={type}
        autoFocus={!!autoFocus}
        value={value || ''}
        onChange={onInputChange}
        onKeyDown={onPressEnter}
        onBlur={(e) => {
          if (!e.target.value) {
            e?.target?.previousSibling?.classList?.remove('top-1', 'text-sm');
          }
        }}
      />
    </div>
  );
};

export default Input;
