"use client"

import { XCircleIcon, WarningIcon } from "@phosphor-icons/react"
import {
    forwardRef,
    cloneElement,
    isValidElement,
    type ComponentProps,
    type ReactNode,
    type ReactElement
} from "react"
import { cn } from "@/lib/utils"

interface InputProps extends ComponentProps<"input"> {
    icon?: ReactNode
    error?: string
    onClear?: () => void
    wrapperClassName?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ icon, error, onClear, id, value, wrapperClassName, ...props }, ref) => {
        const hasError = !!error
        const hasValue = !!value

        const iconColor = hasError
            ? "var(--color-error-base)"
            : hasValue
              ? "var(--color-purple-light)"
              : "var(--color-gray-500)"
        const styledIcon = isValidElement(icon)
            ? cloneElement(icon as ReactElement<{ color?: string }>, { color: iconColor })
            : icon

        return (
            <fieldset className={cn("flex flex-col gap-2", wrapperClassName)}>
                <label htmlFor={id} className="sr-only">
                    {props.placeholder}
                </label>
                <div className="focus-within:border-purple-base flex items-center gap-2 rounded-md border border-gray-300 px-4 py-3 text-gray-700">
                    {styledIcon && (
                        <span className="shrink-0" aria-hidden="true">
                            {styledIcon}
                        </span>
                    )}
                    <input
                        ref={ref}
                        id={id}
                        value={value}
                        aria-invalid={hasError}
                        aria-describedby={hasError ? `${id}-error` : undefined}
                        className="min-w-0 flex-1 border-0 bg-transparent placeholder:text-gray-500 focus:outline-none"
                        {...props}
                    />
                    {hasValue && onClear && (
                        <button
                            type="button"
                            aria-label={`Limpar campo ${props.placeholder?.toLowerCase()}`}
                            onClick={onClear}
                            className="shrink-0 cursor-pointer"
                        >
                            <XCircleIcon
                                width={20}
                                height={20}
                                color="var(--color-gray-400)"
                                weight="fill"
                                aria-hidden="true"
                            />
                        </button>
                    )}
                </div>
                {hasError && (
                    <p id={`${id}-error`} role="alert" className="flex items-center gap-2">
                        <WarningIcon
                            width={20}
                            height={20}
                            color="var(--color-error-light)"
                            className="hover shrink-0"
                            aria-hidden="true"
                        />
                        <span className="text-error-light text-[12px]">{error}</span>
                    </p>
                )}
            </fieldset>
        )
    }
)
