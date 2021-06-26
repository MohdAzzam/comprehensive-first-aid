import React from 'react';
import { FormattedMessage } from 'react-intl';

export default function Input({
    type,
    name,
    className,
    label,
    errors,
    onChange
}) {
    return (
        <div className='form-group input-feild'>
            <label className='input-lable'>
                <FormattedMessage id={label} />
            </label>
            <input type={type} name={name} className={className} onChange={onChange} />
            {
                !!errors[name]?.message &&
                <label className='error-message'>
                   <FormattedMessage id={errors[name]?.message} /> 
                </label>
            }
        </div>
    );
}