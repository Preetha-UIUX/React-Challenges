import { useState } from "react"

const NameInput = ({ setNameList }) => {
    const [name, setName] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleKeyPress = (event) => {
        if(event.key === 'Enter') {
            event.preventDefault();
            if(name.trim()) {
                setNameList((prevList) => [...prevList, name]);
                setName('')
            }
        }
    } 
  return (
    <div>
        <input 
            type="text"
            id="nameInput"
            placeholder="Enter Name"
            value={name}
            onChange={handleNameChange}
            onKeyDown={handleKeyPress}
        />
    </div>
  )
}

export default NameInput
