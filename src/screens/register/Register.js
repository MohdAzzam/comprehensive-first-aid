import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserHelper } from '../../api/UserHelper';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from "react-router";
import Page from "../../components/Page";
import Input from '../../components/Input';
import { FormattedMessage } from 'react-intl';


export default function Register() {
    const [showLoading, setShowLoading] = useState(false);
    const history = useHistory();
    // validation schema.
    const validation = Yup.object().shape({
        username: Yup.string()
            .required('login.form.username.message.required'),
        password: Yup.string().required('login.form.password.message.required'),
        email:Yup.string().email().required('login.form.email.message.required'),
        phoneNumber:Yup.string().required('login.form.phonenumber.message.required'),
        userType: Yup.string().required(),
    });

    //Form hooks
    const { setError, register, handleSubmit, setValue, formState: { errors } } = useForm({
        resolver: yupResolver(validation),
        defaultValues: {
            userType: 'user'
        }
    });

    useEffect(() => {
        register('username');
        register('password');
        register('email');
        register('phoneNumber');
        register('userType');

    })
    function onSubmit(form) {
        console.log(form)
        setShowLoading(true);
        UserHelper.register(form).then(resopnse => {
            console.log(resopnse);
            setShowLoading(false);

        }).catch((e) => {
            console.log(e.data);
            setError('username', { message: 'Username or password invalid' });
            setShowLoading(false);

        })
    }
    return (
        <Page showLoading={showLoading}
            childrens={(
                <form className=''>

                    <Input type='text'
                        name='username'
                        errors={errors}
                        label='username'
                        className='form-control'
                        onChange={(e) => setValue('username', e.target.value)} />
                    <Input type='password' errors={errors}
                        label='password'
                        name='password'
                        className='form-control'
                        onChange={(e) => setValue('password', e.target.value)} />
                    <Input type='email' errors={errors}
                        label='email'
                        name='email'
                        className='form-control'
                        onChange={(e) => setValue('email', e.target.value)} />
                    <Input type='text' errors={errors}
                        label='phoneNumber'
                        name='phoneNumber'
                        className='form-control'
                        onChange={(e) => setValue('phoneNumber', e.target.value)} />
                        <span className='font-weight-bold'><FormattedMessage id='home.form.userType' /></span>
                    <select className="custom-select mb-4 " onChange={(e) => setValue('userType', e.target.value)}>
                        <option value='user'>User</option>
                        <option value='paramedic'>Paramedic</option>
                    </select>
                    <button onClick={handleSubmit(onSubmit)} className="btn btn-primary"><FormattedMessage id='home.register.submit' /></button>
                </form>
            )} />
    )
}