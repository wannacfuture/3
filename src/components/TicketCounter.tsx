import React from "react";
import { HStack, Button, Input, useNumberInput } from "@chakra-ui/react";

export interface TicketCounterProps {
  defaultValue: number;
}

export const TicketCounter: React.FC<TicketCounterProps> = ({
  defaultValue,
}) => {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      min: 0,
      max: 9999,
      defaultValue: defaultValue,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  return (
    <HStack width="152px" height="47px">
      <Button
        {...dec}
        width="24px"
        height="24px"
        padding="0px!important"
        backgroundColor="white"
        fontSize="24px"
      >
        -
      </Button>
      <Input
        border="none"
        padding="0px!important"
        {...input}
        margin="0px!important"
        textAlign="center"
        width="40px"
        height="24px"
      />
      <Button
        {...inc}
        width="24px"
        height="24px"
        padding="0px!important"
        backgroundColor="white"
        fontSize="24px"
        marginLeft="0px!important"
      >
        +
      </Button>
    </HStack>
  );
};
