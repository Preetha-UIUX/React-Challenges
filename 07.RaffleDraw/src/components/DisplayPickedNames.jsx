
const DisplayPickedNames = ({pickedList}) => {
  return (
    <div id="pickedList">
      {
        pickedList.map((pickedName, index) => (
            <span className="name" key={index}>{pickedName}</span>
        ))
      }
    </div>
  )
}

export default DisplayPickedNames
