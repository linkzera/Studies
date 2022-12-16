import { InputHTMLAttributes, ReactNode } from "react";

import { Slot } from "@radix-ui/react-slot";

export interface ITextInputRoot {
  children: ReactNode;
}

function TextInputRoot(props: ITextInputRoot) {
  return (
    <div className="flex items-center gap-3 py-3 px-4 bg-gray-800 rounded w-full h-12 focus-within:ring-2 ring-cyan-300 ">
      {props.children}
    </div>
  );
}
export interface ITextInputIcon {
  children: ReactNode;
}
function TextInputIcon(props: ITextInputIcon) {
  return <Slot className="w-6 h-6 text-gray-400">{props.children}</Slot>;
}

export interface ITextInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: ITextInputProps) {
  return (
    <input
      className="bg-transparent flex-1 text-gray-100 placeholder:text-gray-400 text-xs outline-none"
      {...props}
    />
  );
}

TextInputIcon.displayName = "TextInput.Icon";
TextInputRoot.displayName = "TextInput.Root";
TextInputInput.displayName = "TextInput.Input";

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
