
const DisplayName = ({ nameList }) => {
  return (
    <div id="nameList">
      {
        nameList.map((name,index) => (
            <span className="name" key={index}>{name}</span>
        ))
      }
    </div>
  )
}

export default DisplayName
