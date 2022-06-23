import './App.css';
import React, { useState } from 'react';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Popup from "./components/UI/Popup";
import dummyHaliSaha from "./data/data";
import dummyUserList from "./data/users";
import dummyAdminList from "./data/admin"
import AdminPanel from './components/Admin/AdminPanel';


function App() {
    const [userList, setUserList] = useState(dummyUserList)
    const [adminList, setAdminList] = useState(dummyAdminList)

    const [user, setUser] = useState({ username: '', password: '' })
    const [admin, setAdmin] = useState({ username: '', password: '' })

    const [listOfHaliSaha, setListOfHaliSaha] = useState(dummyHaliSaha)

    const [adminPanelMode, setAdminPanelMode] = useState("display")

    const [popupState, setPopupState] = useState(false)
    const [popupInfo, setPopupInfo] = useState("")


    const signUpHandler = (user) => {
        setUserList([...userList, user])

    }
    const loginHandler = (user) => {
        setUser(user)
    }
    const adminLoginHandler = (admin) => {
        setAdmin(admin)
    }

    const userLogoutHandler = () => {
        setUser({ username: '', password: '' })
    }
    const adminLogoutHandler = () => {
        setAdmin({ username: '', password: '' })
        displayModeToggler()
    }

    const onAddReservationHandler = (element) => {
        let templist = listOfHaliSaha.filter((x) => x.id !== element.id)
        setListOfHaliSaha([...templist, element])

    }

    const displayModeToggler = () => {
        setAdminPanelMode("display")
    }
    const detailModeToggler = () => {
        setAdminPanelMode("detail")
    }

    const createModeToggler = () => {
        setAdminPanelMode("create")
    }
    const editModeToggler = () => {
        setAdminPanelMode("edit")
    }

    const createHaliSahaHandler = (haliSaha) => {
        setListOfHaliSaha([...listOfHaliSaha, haliSaha])


    }
    const updateHaliSahaHandler = (haliSaha) => {
        let tempList = listOfHaliSaha.filter(x => x.id !== haliSaha.id)
        setListOfHaliSaha([...tempList, haliSaha])

    }

    const deleteHaliSahaHandler = (haliSaha) => {
        let tempList = listOfHaliSaha.filter(x => x.id !== haliSaha.id)
        setListOfHaliSaha(tempList)

    }



    const popupHandler = () => {
        setPopupState(!popupState)
        setPopupInfo("")
    }

    const triggerPopup = (info) => {
        setPopupInfo(info)
        setPopupState(!popupState)
    }


    return (
        <div className="App">
            <Header
                user={user}
                userLogoutHandler={userLogoutHandler}
                loginHandler={loginHandler}
                signUpHandler={signUpHandler}
                userList={userList}

                adminLoginHandler={adminLoginHandler}
                adminLogoutHandler={adminLogoutHandler}
                admin={admin}
                adminList={adminList}

                createModeToggler={createModeToggler}

                triggerPopup={triggerPopup}

            />

            {!admin.username &&
                <Home
                    user={user}
                    listOfHaliSaha={listOfHaliSaha}
                    onAddReservationHandler={onAddReservationHandler}
                    triggerPopup={triggerPopup} />}

            {admin.username &&
                <AdminPanel
                    admin={admin}

                    listOfHaliSaha={listOfHaliSaha}

                    createHaliSahaHandler={createHaliSahaHandler}
                    updateHaliSahaHandler={updateHaliSahaHandler}
                    deleteHaliSahaHandler={deleteHaliSahaHandler}

                    adminPanelMode={adminPanelMode}

                    editModeToggler={editModeToggler}
                    detailModeToggler={detailModeToggler}
                    displayModeToggler={displayModeToggler}
                    createModeToggler={createModeToggler}
                />
            }


            <Popup
                info={popupInfo}
                popupStateHandler={popupHandler}
                show={popupState} />





        </div>
    );
}


export default App;