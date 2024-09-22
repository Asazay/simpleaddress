import {useState} from 'react'
import './App.css'

function App() {
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('');
    const [state, setState] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [phone, setPhone] = useState('')
    const [addressBook, setAddressBook] = useState({})

    const [oldPhone, setOldPhone] = useState('')
    const [updateName, setUpdateName] = useState('')
    const [updateAddress, setUpdateAddress] = useState('')
    const [updateCity, setUpdateCity] = useState('');
    const [updateState, setUpdateState] = useState('')
    const [updateZipCode, setUpdateZipCode] = useState('')
    const [updatePhone, setUpdatePhone] = useState('')

    const addAddress = () => {
        const newAddress = {
            name,
            address,
            city,
            state,
            zipCode,
            phone,
        }

        const newAddressBook = {...addressBook}

        if (phone && !newAddressBook[phone]) {
            newAddressBook[phone] = newAddress

            setAddressBook(newAddressBook)
            setName('')
            setAddress('')
            setCity('')
            setState('')
            setZipCode('')
            setPhone('')
        } else alert('A contact with that number already exists. Try again.')
    }

    const deleteContact = (phoneNumber) => {
        const newAddressBook = {...addressBook}
        if (newAddressBook && newAddressBook[phoneNumber]) {
            delete newAddressBook[phoneNumber]

            setAddressBook(newAddressBook)
        }
    }

    const updateContact = (contact) => {
        console.log(contact)
        const newAddressBook = {...addressBook}
        if(contact && newAddressBook && oldPhone){
            newAddressBook[contact.oldPhone] = {
                name: contact.updateName,
                address: contact.updateAddress,
                city: contact.updateCity,
                state: contact.updateState,
                zipCode: contact.updateZipCode,
                phone: contact.updatePhone

            }
            setAddressBook(newAddressBook)
            toggleUpdate()
        }

    }

    const toggleUpdate = (contact) => {
        // const theContact = document.getElementById(contact.phone);
        document.getElementById('update').classList.toggle('show');
        if(contact){
            setUpdateName(contact.name)
            setUpdateAddress(contact.address)
            setUpdateCity(contact.city)
            setUpdateState(contact.state)
            setUpdateZipCode(contact.zipCode)
            setUpdatePhone(contact.phone)
            setOldPhone(contact.phone)
        }
    }

    return (
        <>
            <h1>Simple Frontend Address Book App</h1>
            <h4 style={{marginTop: 0}}>By Asazay Luvaiku</h4>
            <div>
                <div>
                    <label>
                        Name:
                    </label>
                    <input value={name} onChange={e => setName(e.target.value)}/>
                </div>
                <div>
                    <label>Address: </label>
                    <input value={address} onChange={e => setAddress(e.target.value)}/>
                </div>
                <div>
                    <label>City: </label>
                    <input value={city} onChange={e => setCity(e.target.value)}/>
                </div>
                <div>
                    <label>State: </label>
                    <input value={state} onChange={e => setState(e.target.value)}/>
                </div>
                <div>
                    <label>Zip code: </label>
                    <input value={zipCode} onChange={e => setZipCode(e.target.value)}/>
                </div>
                <div>
                    <label>Phone: </label>
                    <input value={phone} onChange={e => setPhone(e.target.value)}/>
                </div>
            </div>
            <button onClick={() => addAddress()}>Add to Address Book</button>
            <div style={{backgroundColor: '#555555', padding: '10px', margin: '10px'}}>
                <h2>Address Book</h2>
                <ol>
                    {addressBook && Object.values(addressBook).length > 0 && Object.values(addressBook).map(contact => {
                        return (
                            <li key={contact.phone} id={contact.phone} style={{border: 'solid black 3px', margin: '5px'}}>
                                <div>
                                    Name: {contact.name}<br/>
                                    Address: {contact.address}<br/>
                                    City: {contact.city}<br/>
                                    State: {contact.state}<br/>
                                    Zip code: {contact.zipCode}<br/>
                                    Phone: {contact.phone}
                                </div>
                                <button onClick={() => deleteContact(contact.phone)}>Delete Contact</button>
                                <button onClick={() => toggleUpdate(contact)}>Update Contact</button>
                            </li>
                        )
                    })}
                </ol>
            </div>
            <div id='update'
                 className="update-contact">
                <div className="popup-box">
                    <h2 style={{color: 'white'}}>Update Contact</h2>
                    <div className="form-container">
                        <div>
                            <label>
                                Name:
                            </label>
                            <input value={updateName} onChange={e => setUpdateName(e.target.value)}/>
                        </div>
                        <div>
                            <label>Address: </label>
                            <input value={updateAddress} onChange={e => setUpdateAddress(e.target.value)}/>
                        </div>
                        <div>
                            <label>City: </label>
                            <input value={updateCity} onChange={e => setUpdateCity(e.target.value)}/>
                        </div>
                        <div>
                            <label>State: </label>
                            <input value={updateState} onChange={e => setUpdateState(e.target.value)}/>
                        </div>
                        <div>
                            <label>Zip code: </label>
                            <input value={updateZipCode} onChange={e => setUpdateZipCode(e.target.value)}/>
                        </div>
                        <div>
                            <label>Phone: </label>
                            <input value={updatePhone} onChange={e => setUpdatePhone(e.target.value)}/>
                        </div>

                        <button onClick={() => updateContact({
                            oldPhone,
                            updateName,
                            updateAddress,
                            updateCity,
                            updateState,
                            updateZipCode,
                            updatePhone
                        })} className="btn-submit"
                                type="submit">
                            Submit
                        </button>
                    </div>

                    <button className="btn-close-popup"
                            onClick={() => toggleUpdate()}>
                        Close
                    </button>
                </div>
            </div>
        </>
    )
}

export default App
