import { useState } from "react";

const RandomNamePicker = ({ nameList, setNameList, pickedList, setPickedList }) => {
    const [pickedName, setPickedName] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleRandomName = () => {
        if (nameList.length === 0) return

        const randomIndex = Math.floor(Math.random() * nameList.length);
        const randomName = nameList[randomIndex];

        // Remove the picked name from nameList (filter by name, not index)
        setNameList((prevList) => prevList.filter((name) => name !== randomName));
        // Add the picked name to pickedList
        setPickedList((prevList) => [...prevList, randomName]);

        setPickedName(randomName);
        setIsModalOpen(true);

    }
  return (
    <div>
      <button id="pick" onClick={handleRandomName}>Pick a Name</button>
      {
        isModalOpen && (
            <div className="nameDialog">
                <h2>{pickedName}</h2>
                <button onClick={() => setIsModalOpen(false)}>Close Modal</button>
            </div>
        )
      }
    </div>
  )
}

export default RandomNamePicker
