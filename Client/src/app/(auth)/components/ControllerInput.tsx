"use client";
import { Input, InputProps } from "@nextui-org/react";
import React, { FC } from "react";
import { Controller } from "react-hook-form";

type ControllerInputProps = {
  control: any;
  name: any;
  allowWhiteSpace?: boolean;
} & InputProps;
const ControllerInput: FC<ControllerInputProps> = ({
  control,
  name,
  allowWhiteSpace = false,
  ...props
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <Input
          value={value}
          onBlur={onBlur}
          onValueChange={(text) =>
            onChange(allowWhiteSpace ? text : text.replace(/\s/g, ""))
          }
          isInvalid={error ? true : false}
          errorMessage={error && error?.message}
          {...props}
        />
      )}
    />
  );
};

export default ControllerInput;
