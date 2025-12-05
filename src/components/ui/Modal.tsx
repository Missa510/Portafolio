import type { HTMLProps, ReactNode } from "react";

interface Props extends HTMLProps<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title: string;
  description?: string;
}

export default function Modal(props: Props) {
  if (!props.isOpen) {
    return null;
  }

  return (
    <section className="animate-open-modal duration-200 fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" {...props}>
      <div className="relative w-full max-w-md rounded-lg bg-slate-900 text-white p-6 shadow-lg" onClick={(e) => e.stopPropagation()}>
          <h2 className="text-xl font-bold">{props.title}</h2>
        <div className="flex justify-between items-center mb-4">
          {props.description ?? 
          <span className="text-lg text-stone-300">
            {props.description}
          </span>}
          <button
            className="text-gray-500 hover:text-gray-800 text-2xl"
            onClick={props.onClose}
          >
            &times;
          </button>
        </div>
        {props.children}
      </div>
    </section>
  );
}