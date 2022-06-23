import { React, useState, useEffect } from 'react'
import "./Editor.css"

function CreationPanel(props) {
    const { displayModeToggler, admin, addHaliSahaHandler } = props


    const [haliSahaName, setHaliSahaName] = useState('')
    const [contactNumber, setcontactNumber] = useState('')
    const [address, setAddress] = useState('')

    const [price, setPrice] = useState("");



    const haliSahaNameHandler = (e) => {
        setHaliSahaName(
            e.target.value
        )
    }
    const addressHandler = (e) => {
        setAddress(
            e.target.value
        )
    }
    const contactNumberHandler = (e) => {
        setcontactNumber(
            e.target.value
        )
    }

    const priceHandler = (e) => {
        setPrice(
            e.target.value
        )
    }

    const haliSahaGenerator = () => {
        return {
            id: Math.random().toString(),
            name: haliSahaName,
            address: address,
            tel: contactNumber,
            chosenDates: [],
            price:parseFloat(price),
            admin: { username: admin.username }
        }
    }

    const createHaliSahaHandler = () => {
        let haliSaha = haliSahaGenerator()
        console.log(haliSaha)
        addHaliSahaHandler(haliSaha)
    }




    return (
        <div className='container'>
            <form onSubmit={createHaliSahaHandler} className="form-wrapper" >
                <label >Halı Saha Adı</label>
                <input className='form-input' onChange={haliSahaNameHandler} type={"text"} required  />

                <label>Adresi</label>
                <input className='form-input'  onChange={addressHandler} type={"text"}  required/>

                <label>İletişim Numarası</label>
                <input className='form-input' onChange={contactNumberHandler} type={"number"} required />

                <label>Fiyat</label>
                <input className='form-input' type={"number"} onChange={priceHandler}required/>

                <input type={'submit'} className='button-confirm' value={"Kaydet"}/>
                <button className='button-cancel' onClick={displayModeToggler}>İptal</button>
            </form>


        </div>
    )
}

export default CreationPanel