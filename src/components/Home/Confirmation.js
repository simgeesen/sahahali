import React, { useState } from 'react';
import './Confirmation.css'

const Confirmation = ({ confPanelHandler, user, chosenDates, onConfirmationHandler,triggerPopup}) => {

    const hours = Array.from(Array(24).keys())
    const formatDate = (date) => {
        const year = date.getFullYear()
        const month = date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
        const day = date.getDay() < 10 ? `0${date.getDay() + 1}` : date.getDay() + 1
        return `${year}-${month}-${day}`
    }
    const today = formatDate(new Date(Date.now()))
    const [inputDate, setInputDate] = useState(today)
    const map = new Map()

    const isUserActive = () => {
        return !!user.username
    }
    //returns reservedHours of specific day
    const timeParser = (date) => {
        let reservedHours = []
        chosenDates.map((x) => {
            return x.time.forEach((y) => {
                if (x.date === date) {
                    reservedHours.push(y)
                }
            })
        })
        return reservedHours
    }

    const [reserved, setReserved] = useState(timeParser(today))
    const [inputCheckbox, setInputCheckbox] = useState(map)


    //set date state
    const dateHandler = (e) => {
        setInputDate(e.target.value)
        setReserved(timeParser(e.target.value))

    }


    const submitValues = () => {
        if (!inputCheckbox.size < 1) {
            const chosenHours = [...inputCheckbox.entries()]
                .filter((x) => x["1"] === true)
                .map(([k]) => k);
            const element = {
                time: chosenHours,
                date: inputDate,
                username: user.username
            }
            // if (element.time.length >= 1) reservationHandler(haliSahaId,element)
            chosenDates.push(element)
            setReserved(chosenDates)
            onConfirmationHandler(reserved)
            confPanelHandler()
            triggerPopup(`${element.date} tarihli ${chosenHours}:00 saatine alındı`)
        } else triggerPopup('En az 1 seçim yapmanız gerek')

    }

    //created for handling list element
    const liHandler = (e) => {

        const { id } = e.target
        if (!reserved.includes(id)) {
            const elem = inputCheckbox.get(id)
            if (elem === true || elem === false) {
                setInputCheckbox(new Map(inputCheckbox.set(id, !elem)))
            } else {
                setInputCheckbox(new Map(new Map(inputCheckbox.set(id, true))))
            }
        }


    }


    return (
        <div className={'confirmation-container'}>
            <hr className={"rounded"} />
            <label className={'confirmation-input-label'}>Tarih Seçin</label>
            <input className={'confirmation-date-picker'} type="date" onChange={dateHandler} value={inputDate}
                min={today} max={'2022-12-31'} />
            <hr className={"rounded"} />
            <label className={'confirmation-input-label'}>Saat Seçin</label>
            <ol className={'confirmation-ol'}>
                {hours.map((hour) =>
                    <li className={'confirmation-li'} key={hour} onClick={liHandler} id={hour.toString()}>
                        <label className={'confirmation-checkbox-label'}>{hour}:00</label>
                        <input className={'confirmation-checkbox'}   /*onChange={hourHandler}*/
                            type={'checkbox'}
                            disabled={reserved.includes(hour.toString())}
                            id={hour.toString()}
                            checked={inputCheckbox.get(hour.toString())}
                        />
                    </li>
                )}
            </ol>
            <hr className={"rounded"} />

            <div className={'confirmation-btn-wrapper'}>

                <button className={'confirmation-submit-btn'} disabled={!isUserActive()} onClick={submitValues}>
                    {isUserActive() ? 'Onayla' : 'Giriş Yap'}
                </button>


            </div>
        </div>
    );
};

export default Confirmation;
