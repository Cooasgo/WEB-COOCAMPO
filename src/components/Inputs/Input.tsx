import { useEffect, useRef } from 'react';
import { FormControl, FormLabel, Input, Tooltip } from '@chakra-ui/react';
import { useField } from '@unform/core';

interface PropsInput {
  name: string;
  label: string;
  type: string;
  id: string;
}

export function InputUnform({ name, label, type, id, ...rest }: PropsInput) {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
      <Tooltip hasArrow label={error} bg="#c53030">
        <FormControl>
          <FormLabel htmlFor={id}>{label}</FormLabel>
          <Input ref={inputRef} id={id} type={type} isInvalid={!!error} {...rest} />
        </FormControl>
      </Tooltip>
  );
}
