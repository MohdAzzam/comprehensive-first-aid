import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserHelper } from '../../api/UserHelper';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from "react-router";
import Page from "../../components/Page";
import Input from '../../components/Input';
import { FormattedMessage } from 'react-intl';
export default function Login() {
    const [showLoading, setShowLoading] = useState(false);
    const history = useHistory();
    // validation schema.
    const validation = Yup.object().shape({
        username: Yup.string()
            .required('login.form.username.message.required'),
        password: Yup.string().required('login.form.password.message.required'),

    });

    //Form hooks
    const { setError, register, handleSubmit, setValue, formState: { errors } } = useForm({
        resolver: yupResolver(validation)
    });

    useEffect(() => {
        register('username');
        register('email');
        register('password');

    })
    function onSubmit(form) {
        setShowLoading(true);
        UserHelper.login(form).then(resopnse => {
            console.log(resopnse);
            setShowLoading(false);

        }).catch((e) => {
            console.log(e.data);
            setShowLoading(false);

        })
    }
    return (
        <Page showLoading={showLoading}
            childrens={(
                <form className=''>

                    <Input type='text' name='username' errors={errors} label='username' className='form-control' onChange={(e) => setValue('username', e.target.value)} />
                    <Input type='password' errors={errors}
                     label='password' 
                     name='password'
                     className='form-control'
                     onChange={(e) => setValue('password', e.target.value)} />

                    <button onClick={handleSubmit(onSubmit)} className="btn btn-primary"><FormattedMessage id='home.form.submit' /></button>
                </form>
            )} />
    )
}