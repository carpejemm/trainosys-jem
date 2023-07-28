import React, { ChangeEvent, useState } from'react';

const DataBindingComponent: React.FC = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [age, setAge] = useState<number>(0);

  const handleFirstNameChanged = (e: ChangeEvent<HTMLInputElement>): void => {
    setFirstName(e.target.value)
  }

  return (
    <div>
      <input 
        type="text" 
        value={firstName}
        onChange={(e) => handleFirstNameChanged(e)} 
      />
    </div>
  )
}

export default DataBindingComponent;