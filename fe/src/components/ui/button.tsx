import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean;
    children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ children, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";

        return (
            <div className="p-0.5 bg-linear-to-r from-[#D57C17] to-[#956836] rounded-full overflow-hidden">
                <Comp
                    ref={ref}
                    {...props}
                    className="bg-black p-1 sm:px-1 md:px-8 text-white rounded-full w-full h-full sm:font-bold cursor-pointer text-xs md:text-xl"
                >
                    {children}
                </Comp>
            </div>
        );
    }
);

Button.displayName = "Button";

export { Button };
