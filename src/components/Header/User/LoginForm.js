import React, {useState} from 'react';
import './Form.css'


const LoginForm = (props) => {
    const {status, toggler, loginHandler, userList,triggerPopup} = props
    const [passwordStatus, setPasswordStatus] = useState(false)
    const [inputUsername, setInputUsername] = useState('')
    const [inputPassword, setInputPassword] = useState('')

    const inputUsernameHandler = (e) => {
        setInputUsername(e.target.value)
    }
    const inputPasswordHandler = (e) => {
        setInputPassword(e.target.value)
    }
    const passwordHideHandler = () => {
        setPasswordStatus(!passwordStatus)
    }
    const checkUserExists = (user) => {
        return userList.some(e => e.username === user.username)
    }

    const loginUser = (user) => {
        if (user.username === "" || user.password === '') {
            triggerPopup('Kullanıcı adı ve şifre girmeniz gerek')
        } else {
            if (!checkUserExists(user)) {
                triggerPopup('Kullanıcı bulunamadı')
                return false

            } else if (userList.some((e) => e.username === user.username && e.password === user.password)) {
                loginHandler(user)
                triggerPopup('Hoşgeldin ' + user.username)
                return true
            } else {
                triggerPopup('Kullanıcı adı veya şifre yanlış')
                return false
            }
        }


    }

    const submitValues = (e) => {
        e.preventDefault()

        loginUser({username: inputUsername, password: inputPassword}) && toggler()

        setInputUsername('')
        setInputPassword('')
        // setUser({username: inputUsername,password: inputPassword})

    }


    return (
        <div className={'form-container'} style={{
            transform: status ? 'translateX(0)' : 'translateX(100%)',
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5))`
        }}>
            <div className={'close-btn-wrapper'}>
                <button className={'close-btn'} onClick={toggler}>&times;</button>
            </div>

            <form onSubmit={submitValues}>
                <div className={'input-wrapper'}>
                    <label className={'input-label'}>Kullanıcı Adı</label>
                    <input className={'user-input'} type={"text"} value={inputUsername}
                           onChange={inputUsernameHandler}/>
                </div>
                <div className={'input-wrapper'}>
                    <label className={'input-label'}>Şifre</label>
                    <input className={'user-input'} value={inputPassword} onChange={inputPasswordHandler}
                           type={passwordStatus ? 'text' : 'password'}/>
                </div>

                <button className={'submit-btn'} type="submit">Giriş Yap</button>

            </form>

            {/*<Popup show={popupState} popupStateHandler={popupHandler} info={popupInfo}/>*/}


        </div>
    );
};

export default LoginForm;

