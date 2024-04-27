import { cn } from "@/lib/utils/cn";
import React, { forwardRef } from "react";
import { Handle } from "./Item/Handle";
import { Remove } from "./Item/Remove";

export interface Props {
  children: React.ReactNode;
  columns?: number;
  label?: string;
  style?: React.CSSProperties;
  horizontal?: boolean;
  hover?: boolean;
  handleProps?: React.HTMLAttributes<any>;
  scrollable?: boolean;
  shadow?: boolean;
  placeholder?: boolean;
  unstyled?: boolean;
  onClick?(): void;
  onRemove?(): void;
}

export const Container = forwardRef<HTMLDivElement, Props>(
  (
    {
      children,
      columns = 1,
      handleProps,
      horizontal,
      onClick,
      onRemove,
      label,
      style,
      placeholder,
      ...props
    },
    ref
  ) => {
    const Component = onClick ? "button" : "div";

    return (
      <Component
        {...props}
        ref={ref}
        style={
          {
            ...style,
            "--columns": columns,
          } as React.CSSProperties
        }
        tabIndex={onClick ? 0 : undefined}
        onClick={onClick}
        className={cn(
          "flex flex-col overflow-hidden box-border appearance-none  outline-none min-w-[350px] m-3 rounded min-h-[200px] text-sm border border-border transition-all  bg-muted ",
          {
            "w-full": horizontal,
            "justify-center items-center cursor-pointer hover:border-dashed bg-transparent":
              placeholder,
          }
        )}
      >
        {label ? (
          <div className="flex px-1 py-5 pr-2 items-center justify-between bg-card border-b border-border">
            {label}
            <div className="flex items-center gap-1">
              {onRemove ? <Remove onClick={onRemove} /> : undefined}
              <Handle {...handleProps} />
            </div>
          </div>
        ) : null}
        {<ul>{children}</ul>}
      </Component>
    );
  }
);
