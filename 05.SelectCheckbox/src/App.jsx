import { useState } from "react";
import "./App.css";
import styled from "styled-components";

const initialState = [
  {
    id: 1,
    label: "Dogs",
    checked: false,
  },
  {
    id: 2,
    label: "Cats",
    checked: false,
  },
  {
    id: 3,
    label: "Cows",
    checked: false,
  },
  {
    id: 4,
    label: "Deers",
    checked: false,
  },
];

function App() {
  const [checkboxes, setCheckboxes] = useState(initialState);

  const handleCheckboxChange = (id) => {
    setCheckboxes((prevCheckbox) =>
      prevCheckbox.map((checkbox) =>
        checkbox.id === id
          ? { ...checkbox, checked: !checkbox.checked }
          : checkbox
      )
    );
  };

  const handleSelectAll = () => {
    const allCheckBox = checkboxes.every((checkbox) => checkbox.checked)
    setCheckboxes((prevCheckbox) =>
      prevCheckbox.map((checkbox) => (
        {
          ...checkbox,
          checked: !allCheckBox
        }
      ))
    )
  }

  return (
    <Container>
      <CheckboxContainer>
        {checkboxes.map((checkbox) => (
          <CheckboxLabel key={checkbox.id}>
            <input
              type="checkbox"
              checked={checkbox.checked}
              onClick={() => handleCheckboxChange(checkbox.id)}
            />
            {checkbox.label}
          </CheckboxLabel>
        ))}
      </CheckboxContainer>
      <SelectAllButton onClick={handleSelectAll}>
        Select All
      </SelectAllButton>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin: 24px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const SelectAllButton = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  border: none;
  border-radius: 4px;
  background-color: #333;
  color: #fff;
  cursor: pointer;
  margin-top: 24px;

  &:hover {
    opacity: 0.8;
  }
`;
