import { ReactElement } from 'react';
import { Tooltip as TooltipChakra } from '@chakra-ui/react';

interface Props {
  children: ReactElement;
  label: string;
}

export function Tooltip({ children, label }: Props) {
  return (
    <TooltipChakra
      placement="right"
      // hasArrow
      p="5"
      borderLeftRadius="9"
      borderRightRadius="27"
      label={label}
      left="-2"
    >
      {children}
    </TooltipChakra>
  );
}
