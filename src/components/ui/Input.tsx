'use client';

import React, { InputHTMLAttributes, forwardRef } from 'react';
import cn from 'classnames';
import { LuEye, LuEyeOff } from 'react-icons/lu';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label: string
    className?: string
    onChange?: (...args: any[]) => any
    messageError?: string
}

const Input: React.ForwardRefRenderFunction<HTMLInputElement, Props> = (props, ref) => {
    const { label, className, children, onChange, messageError, type, ...rest } = props;
    const rootClassName = cn('w-full px-4 py-5 text-sm transition-colors bg-transparent border rounded-md shadow-sm h-9 border-input file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50', className);

    const [inputValue, setInputValue] = React.useState<string>('');
    const [showPassword, setShowPassword] = React.useState<boolean>(false);

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        if (onChange) {
            onChange(e.target.value);
        }
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div>
            <label className='block font-bold mb-1'>{label}</label>
            <div className='relative'>
                <input
                    ref={ref}
                    type={type === 'password' && showPassword ? 'text' : type || 'text'}
                    className={rootClassName}
                    onChange={handleOnChange}
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck="false"
                    {...rest}
                />
                {type === 'password' && inputValue !== '' && (
                    <div className='absolute top-[50%] -translate-y-1/2 right-4 cursor-pointer' onClick={toggleShowPassword}>
                        {showPassword ? <LuEyeOff /> : <LuEye />}
                    </div>
                )}
            </div>
            {messageError && messageError !== '' && (
                <p className='text-red-400 text-sm italic'>{messageError}</p>
            )}
        </div>
    );
};

export default forwardRef(Input);
