import { EnvelopeIcon, PasswordIcon } from "@phosphor-icons/react"
import { useForm, useWatch } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Input } from "../components/input"
import { Button } from "../components/button"

const loginSchema = z.object({
    email: z.string().min(1, "E-mail é obrigatório").email("E-mail inválido"),
    password: z
        .string()
        .min(1, "Senha é obrigatória")
        .min(6, "Senha deve ter pelo menos 6 caracteres")
})

type LoginForm = z.infer<typeof loginSchema>

export function Login() {
    const {
        register,
        handleSubmit,
        control,
        setValue,
        formState: { errors }
    } = useForm<LoginForm>({
        resolver: zodResolver(loginSchema)
    })

    const emailValue = useWatch({ control, name: "email" })
    const passwordValue = useWatch({ control, name: "password" })

    function onSubmit(data: LoginForm) {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <h1 className="font-rammetto-one text-2xl text-[#E5E2E9]">Acesse sua conta</h1>
            <Input
                id="email"
                type="email"
                placeholder="E-mail"
                autoComplete="off"
                icon={<EnvelopeIcon width={20} height={20} />}
                error={errors.email?.message}
                value={emailValue}
                onClear={() => setValue("email", "")}
                {...register("email")}
            />
            <Input
                id="password"
                type="password"
                placeholder="Senha"
                autoComplete="off"
                icon={<PasswordIcon width={20} height={20} />}
                error={errors.password?.message}
                value={passwordValue}
                onClear={() => setValue("password", "")}
                {...register("password")}
            />
            <Button type="submit">Entrar</Button>
        </form>
    )
}
