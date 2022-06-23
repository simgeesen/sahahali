import React, {useState} from 'react';
import './Form.css'

const SignUpForm = ({status, toggler, signUpHandler, userList, triggerPopup}) => {
    const [inputUsername, setInputUsername] = useState('')
    const [inputPassword, setInputPassword] = useState('')
    const [inputPasswordAgain, setInputPasswordAgain] = useState('')

    const inputUsernameHandler = (e) => {
        setInputUsername(e.target.value)
    }
    const inputPasswordHandler = (e) => {
        setInputPassword(e.target.value)
    }
    const inputPasswordAgainHandler = (e) => {
        setInputPasswordAgain(e.target.value)
    }

    //check input passwords are matching
    const arePasswordsMatching = () => {
        return inputPassword === inputPasswordAgain
    }
    const generateUser = (username, password) => {
        return {username: username, password: password}
    }
    const checkUserExists = (user) => {
        return userList.some(e => e.username === user.username)
    }
    const addNewUser = (user) => {
        if (checkUserExists(user)) {
            // setError(true)
            return true
        } else {
            signUpHandler(user)
            return false
        }
    }


    const submitValues = (e) => {
        e.preventDefault()
        if (arePasswordsMatching()) {
            if (addNewUser(generateUser(inputUsername, inputPassword))) {
                triggerPopup("Kullanıcı adı alınmış")

            } else {
                toggler()
                triggerPopup("Kayıt tamamlandı")
            }
        } else {
            triggerPopup("Şifreler uyuşmuyor")
        }
        setInputUsername('')
        setInputPassword('')
        setInputPasswordAgain('')

    }

    return (
        <div className={'form-container'} style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5))`,
            transform: status ? 'translateX(0)' : 'translateX(100%)'

        }}>
            <div className={'close-btn-wrapper'}>
                <button className={'close-btn'} onClick={toggler}>&times;</button>
            </div>

            <div>
                <form onSubmit={submitValues}>
                    <div className={'input-wrapper'}>
                        <label className={'input-label'}>Kullanıcı Adı</label>
                        <input className={'user-input'} type={"text"} value={inputUsername}
                               onChange={inputUsernameHandler}/>
                    </div>
                    <div className={'input-wrapper'}>
                        <label className={'input-label'}>Şifre</label>
                        <input className={'user-input'} value={inputPassword} onChange={inputPasswordHandler}
                               type={'password'}
                               style={{border: arePasswordsMatching() ? 'solid 1px black' : ' solid 1px red'}}/>
                    </div>
                    <div className={'input-wrapper'}>
                        <label className={'input-label'}>Şifre Tekrar</label>
                        <input className={'user-input'} value={inputPasswordAgain} onChange={inputPasswordAgainHandler}
                               type={'password'}
                               style={{border: arePasswordsMatching() ? 'solid 1px black' : ' solid 1px red'}}/>
                    </div>

                    <button className={'submit-btn'} type="submit">Kaydol</button>

                </form>
            </div>

        </div>
    );
};

export default SignUpForm;
