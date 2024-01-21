"use client";
import {
  Radio,
  RadioProps,
  VisuallyHidden,
  cn,
  useRadio,
} from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import { MdEditLocationAlt } from "react-icons/md";
import { TbEdit } from "react-icons/tb";
type Props = {
  children: React.ReactNode;
  edit: boolean;
  icon: string;
} & RadioProps;
export const CustomRadio = (props: Props) => {
  const {
    Component,
    children,
    isSelected,
    description,
    getBaseProps,
    getWrapperProps,
    getInputProps,
    getLabelProps,
    getLabelWrapperProps,
    getControlProps,
  } = useRadio(props);

  return (
    <Component
      {...getBaseProps()}
      className={cn(
        "group hover:opacity-70 active:opacity-50 tap-highlight-transparent",
        "max-w-[900px] cursor-pointer border-2 border-default rounded-lg gap-4 p-4",
        "data-[selected=true]:border-primary"
      )}
    >
      <div className="flex flex-row justify-between items-center">
        <div className=" flex flex-row items-center justify-star gap-x-2">
          <VisuallyHidden>
            <input {...getInputProps()} />
          </VisuallyHidden>
          <span {...getWrapperProps()}>
            <span {...getControlProps()} />
          </span>
          <div {...getLabelWrapperProps()}>
            {children && <span {...getLabelProps()}>{children}</span>}
            {description && (
              <span className="text-small text-foreground opacity-70">
                {description}
              </span>
            )}
          </div>
        </div>
        {props.edit ? (
          <div className=" flex flex-row gap-[10px] justify-center items-center">
            <button className=" font-semibold">
              <TbEdit className=" text-gray-500" size={24} />
            </button>
          </div>
        ) : (
          <div>
            <Image height={60} width={60} alt="" src={props.icon} />
          </div>
        )}
      </div>
    </Component>
  );
};
export default CustomRadio;
