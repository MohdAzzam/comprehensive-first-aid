import React, { useEffect, useState } from 'react';
import { Navbar } from 'react-bootstrap';
import stroage from '../../util/storage';
import { GLOABL_CONSTANS } from '../../Constant';
import storage from '../../util/storage';

export default function LangugeChange() {
    const [language, setLanguage] = useState('');
    /**
     * 
     */
    useEffect(() => {
        let lang = stroage.get(GLOABL_CONSTANS.USER_LANG);
        if (!lang) {
            stroage.set(GLOABL_CONSTANS.USER_LANG, GLOABL_CONSTANS.EN_LANG, true);
            lang = GLOABL_CONSTANS.EN_LANG;
        }

        setLanguage(lang === GLOABL_CONSTANS.EN_LANG ? GLOABL_CONSTANS.AR_LANG : GLOABL_CONSTANS.EN_LANG);
    }, []);

    function handelChangeLanguage() {
        let lang = GLOABL_CONSTANS.AR_LANG;
        if (language !== GLOABL_CONSTANS.AR_LANG) {
            lang = GLOABL_CONSTANS.EN_LANG;
        }

        storage.remove(GLOABL_CONSTANS.USER_LANG);
        storage.set(GLOABL_CONSTANS.USER_LANG, lang, true);
        window.location.reload();
    }

    return (
        <Navbar.Text className='badge badge-pill badge-info' onClick={handelChangeLanguage}>
            {language}
        </Navbar.Text>
    )
}