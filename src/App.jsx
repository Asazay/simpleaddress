import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('');
    const [state, setState] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [phone, setPhone] = useState('')
    const [addressBook, setAddressBook] = useState({})

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

        if(phone && !newAddressBook[phone]){
            newAddressBook[phone] = newAddress

            setAddressBook(newAddressBook)
            setName('')
            setAddress('')
            setCity('')
            setState('')
            setZipCode('')
            setPhone('')
        }

        else alert('A contact with that number already exists. Try again.')
    }

    const deleteContact = (phoneNumber) => {
        const newAddressBook = {...addressBook}
        if(newAddressBook && newAddressBook[phoneNumber]) {
            delete newAddressBook[phoneNumber]

            setAddressBook(newAddressBook)
        }
    }

    return (
        <>
            <h1>Simple Frontend Address Book App</h1>
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
                            <li key={contact.phone} style={{border: 'solid black 3px', margin: '5px'}}>
                                <div>
                                    name: {contact.name}<br/>
                                    address: {contact.address}<br/>
                                    city: {contact.city}<br/>
                                    state: {contact.state}<br/>
                                    zip code: {contact.zipCode}<br/>
                                    phone number: {contact.phone}
                                </div>
                                <button onClick={() => deleteContact(contact.phone)}>Delete Contact</button>
                            </li>
                        )
                    })}
                </ol>
            </div>
        </>
    )
}

export default App
