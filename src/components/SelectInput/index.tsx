import React from 'react';
import {
  Container
} from './styles'

interface IsSelectInputProps {
  options: {
    value: string | number;
    label: string | number;
  }[],
}

const SelectInput: React.FC<IsSelectInputProps> = ({ options }) => {
  return(
    <Container>
      <select>
        {
          options.map(option => (
            <option value={option.value}>{option.label}</option>
          ))
        }
      </select>
    </Container>
  );
}

export default SelectInput;
