import { React, useState } from 'react'
import AcceptPopup from '../UI/AcceptPopup'
import Info from '../UI/Info'
import "./AdminPanel.css"
import CreationPanel from './CreationPanel'
import Display from './Display'
import Editor from './Editor'

function AdminPanel(props) {

    const displayMode = "display"
    const detailMode = "detail"
    const createMode = "create"
    const editMode = "edit"

    const { admin,
        listOfHaliSaha,
        adminPanelMode,
        createHaliSahaHandler,
        updateHaliSahaHandler,
        deleteHaliSahaHandler,
        displayModeToggler,
        detailModeToggler,
        editModeToggler
    } = props


    const [acceptPopupState, setAcceptPopupState] = useState(false)
    const [acceptPopupInfo, setAcceptPopupInfo] = useState("")

    const [chosenElement, setChosenElement] = useState({})

    const infoPanelToggler = () => {
        displayModeToggler()
    }

    const chosenElementHandler = (element) => {
        setChosenElement(element)
        detailModeToggler()
    }

    const acceptPopupHandler = () => {
        setAcceptPopupState(!acceptPopupState)
        setAcceptPopupInfo("")
    }
    const triggerAcceptablePopup = (info) => {
        setAcceptPopupInfo(info)
        setAcceptPopupState(!acceptPopupState)
    }

    const filteredHaliSahaByAdmin = listOfHaliSaha
        .filter(haliSaha =>
            haliSaha.admin.username === admin.username);


    const isHaliSahaPresent = (haliSaha) => {
        console.log(haliSaha);
        return listOfHaliSaha.some(e => e.name === haliSaha.name)
    }

    const addHaliSahaHandler = (haliSaha) => {
        if (isHaliSahaPresent(haliSaha)) {
            alert("Bu isimde bir halı saha mevcut")
        }
        else {
            createHaliSahaHandler(haliSaha)
            displayModeToggler()
        }
    }

    const editHaliSahaHandler = (haliSaha) => {
        updateHaliSahaHandler(haliSaha)
        displayModeToggler()

    }

    const removeHaliSahaCheckHandler = () => {
        triggerAcceptablePopup(
            chosenElement.name +
            " silinecek"
        )

    }
    const removeHaliSahaHandler = () => {
        deleteHaliSahaHandler(chosenElement)
        acceptPopupHandler()
        displayModeToggler()
    }

    return (
        <div className='admin-container'>

            {adminPanelMode === displayMode &&
                <Display
                    listOfHaliSaha={filteredHaliSahaByAdmin}
                    chosenElementHandler={chosenElementHandler}
                    detailModeToggler={detailModeToggler}
                />


            }

            {adminPanelMode === createMode &&
                <CreationPanel
                    admin={props.admin}

                    addHaliSahaHandler={addHaliSahaHandler}

                    displayModeToggler={displayModeToggler} />}

            {adminPanelMode === detailMode &&
                <div className='admin-info-container'>
                    <Info
                        chosenElement={chosenElement}
                        infoPanelToggler={infoPanelToggler}
                    />
                    <div className='btn-wrapper'>
                        <button className='button-confirm' onClick={editModeToggler}>Düzenle</button>
                        <button className='button-cancel' onClick={removeHaliSahaCheckHandler} >Sil</button>
                    </div>
                </div>
            }

            {adminPanelMode === editMode &&
                <Editor
                    editHaliSahaHandler={editHaliSahaHandler}
                    displayModeToggler={detailModeToggler}
                    admin={admin}
                    chosenElement={chosenElement}

                />
            }

            <AcceptPopup
                info={acceptPopupInfo}
                popupStateHandler={acceptPopupHandler}
                show={acceptPopupState}

                confirmHandler={removeHaliSahaHandler}
                cancelHandler={acceptPopupHandler}


            />
        </div>
    )
}

export default AdminPanel