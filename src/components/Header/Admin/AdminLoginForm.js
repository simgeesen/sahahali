import { React, useState } from 'react'
import '../User/Form.css'

function AdminLoginForm(props) {
    const { status, toggler, adminLoginHandler, adminList, triggerPopup} = props
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
    const checkAdminExists = (admin) => {
        return adminList.some(e => e.username === admin.username)
    }

    const loginAdmin = (admin) => {
        if (admin.username === "" || admin.password === '') {
            triggerPopup('Kullanıcı adı ve şifre girmeniz gerek')
        } else {
            if (!checkAdminExists(admin)) {
                triggerPopup('Yönetici bulunamadı')
                return false

            } else if (adminList.some((e) => e.username === admin.username && e.password === admin.password)) {
                adminLoginHandler(admin)
                triggerPopup('Hoşgeldin ' + admin.username)
                return true
            } else {
                triggerPopup('Kullanıcı adı veya şifre yanlış')
                return false
            }
        }


    }

    const submitValues = (e) => {
        e.preventDefault()

        loginAdmin({ username: inputUsername, password: inputPassword }) && toggler()
        setInputUsername('')
        setInputPassword('')

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
                        onChange={inputUsernameHandler} />
                </div>
                <div className={'input-wrapper'}>
                    <label className={'input-label'}>Şifre</label>
                    <input className={'user-input'} value={inputPassword} onChange={inputPasswordHandler}
                        type={passwordStatus ? 'text' : 'password'} />
                </div>

                <button className={'submit-btn'} type="submit">Giriş Yap</button>

            </form>



        </div>
    );
}

export default AdminLoginForm