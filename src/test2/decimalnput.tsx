import React, {ChangeEvent, FC} from 'react';
interface DecimalInputProps {
    onChange(val: string, e: ChangeEvent): void;
    value?: string;
    className?: string;
}

const floatRegExp = /^-?\d*,?\d*$/g;
const DecimalInput: FC<DecimalInputProps> = ({onChange, value, className}) => {
    function handleInputChange (e: ChangeEvent<HTMLInputElement>) {
        const val = e.target.value;
        if (val === '' || val.match(floatRegExp)) {
            onChange(val, e)
        }
    }

    return (
        <label>
            <input
                type="text"
                value={value}
                onChange={handleInputChange}
                className={className}
            />
        </label>
    );
};

export default DecimalInput;
