import { useState } from 'react';
import './App.css'
import NameInput from './components/NameInput'
import DisplayName from './components/DisplayName';
import RandomNamePicker from './components/RandomNamePicker';
import DisplayPickedNames from './components/DisplayPickedNames';

function App() {
  const [nameList, setNameList] = useState([]);
  const [pickedList, setPickedList] = useState([]);

  return (
    <div>
      <h2>Raffle Draw</h2>
      <NameInput nameList={nameList} setNameList={setNameList}/>
      <DisplayName nameList={nameList}/>
      <RandomNamePicker nameList={nameList} setNameList={setNameList} pickedList={pickedList} setPickedList={setPickedList} />
      <DisplayPickedNames pickedList={pickedList}/>
    </div>
  )
}

export default App
