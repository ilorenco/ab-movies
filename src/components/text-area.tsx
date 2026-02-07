import { XCircleIcon, WarningIcon } from "@phosphor-icons/react"
import { forwardRef, type ComponentProps } from "react"

interface TextAreaProps extends ComponentProps<"textarea"> {
    error?: string
    onClear?: () => void
    label?: string
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
    ({ error, onClear, id, value, label, ...props }, ref) => {
        const hasError = !!error
        const hasValue = !!value

        return (
            <fieldset className="flex flex-col gap-2">
                {label && (
                    <label
                        htmlFor={id}
                        className="font-nunito-sans text-sm font-semibold text-gray-600"
                    >
                        {label}
                    </label>
                )}
                {!label && (
                    <label htmlFor={id} className="sr-only">
                        {props.placeholder}
                    </label>
                )}
                <div className="focus-within:border-purple-base relative flex flex-col gap-2 rounded-md border border-gray-300 px-4 py-3 text-gray-700">
                    <textarea
                        ref={ref}
                        id={id}
                        value={value}
                        aria-invalid={hasError}
                        aria-describedby={hasError ? `${id}-error` : undefined}
                        className="min-h-[176px] resize-none border-0 bg-transparent placeholder:text-gray-500 focus:outline-none"
                        {...props}
                    />
                    {hasValue && onClear && (
                        <button
                            type="button"
                            aria-label={`Limpar campo ${props.placeholder?.toLowerCase()}`}
                            onClick={onClear}
                            className="absolute top-3 right-3 shrink-0 cursor-pointer"
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
                            className="shrink-0"
                            aria-hidden="true"
                        />
                        <span className="text-error-light text-[12px]">{error}</span>
                    </p>
                )}
            </fieldset>
        )
    }
)
