import * as CheckboxPrimitive from "@radix-ui/react-checkbox";

import { Check } from "phosphor-react";

export interface ICheckBoxProps extends CheckboxPrimitive.CheckboxProps {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}
export function Checkbox(props: ICheckBoxProps) {
  return (
    <CheckboxPrimitive.Root
      checked={props.checked}
      onCheckedChange={props.onCheckedChange}
      className="flex gap-2 w-6 h-6 p-[2px] bg-gray-800 rounded"
      {...props}
    >
      <CheckboxPrimitive.Indicator asChild>
        <Check weight="bold" className="h-5 w-5 text-cyan-500" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}
