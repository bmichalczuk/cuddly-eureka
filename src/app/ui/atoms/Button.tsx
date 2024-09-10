import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	className?: string;
}

export const Button = ({ children, className, ...props }: ButtonProps) => {
	return (
		<button
			className={`mt-2  rounded-md border bg-slate-700 px-20 py-4 text-white hover:bg-slate-500 focus:bg-slate-500 disabled:cursor-wait disabled:bg-slate-300 ${className}`}
			{...props}
		>
			{children}
		</button>
	);
};
