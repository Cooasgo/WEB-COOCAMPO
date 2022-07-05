import { useEffect, useRef } from 'react';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useField } from '@unform/core';

interface PropsInput {
  name: string;
  label: string;
  type: string;
  id: string;
}

export function InputUnform({ name, label, type, id, ...rest }: PropsInput) {
  const inputRef = useRef();

  const { fieldName, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <FormControl>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <Input ref={inputRef} id={id} type={type} {...rest} />
    </FormControl>
  );
}
