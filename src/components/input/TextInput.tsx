import { ReactNode } from "react";

type Props = {
  clasName?: string;
  text: string;
  icon: ReactNode;
};

export default function TextInput({ clasName, text, icon }: Props) {
  return (
    <div
      className={`group relative flex flex-col rounded-3xl text-black ${clasName}`}
    >
      <label
        htmlFor=""
        className="absolute top-1/2 -translate-y-8 translate-x-12"
      >
        {text}
      </label>
      <input
        type="text"
        placeholder="Enter Your Username"
        className="h-24 rounded-2xl bg-gray-300 pl-12 pt-6 text-xl"
      />
      <div className="absolute top-1/2 -translate-y-1/2 translate-x-1/2 text-gray-500">
        {icon}
      </div>
    </div>
  );
}
