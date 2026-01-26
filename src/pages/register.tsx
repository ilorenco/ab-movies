import { EnvelopeIcon, PasswordIcon, UserIcon } from "@phosphor-icons/react"
import { useForm, useWatch } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Input } from "../components/input"
import { Button } from "../components/button"

const registerSchema = z.object({
    name: z.string().min(1, "Nome é obrigatório").min(3, "Nome deve ter pelo menos 3 caracteres"),
    email: z.string().min(1, "E-mail é obrigatório").email("E-mail inválido"),
    password: z
        .string()
        .min(1, "Senha é obrigatória")
        .min(6, "Senha deve ter pelo menos 6 caracteres")
})

type RegisterForm = z.infer<typeof registerSchema>

export function Register() {
    const {
        register,
        handleSubmit,
        control,
        setValue,
        formState: { errors }
    } = useForm<RegisterForm>({
        resolver: zodResolver(registerSchema)
    })

    const nameValue = useWatch({ control, name: "name" })
    const emailValue = useWatch({ control, name: "email" })
    const passwordValue = useWatch({ control, name: "password" })

    function onSubmit(data: RegisterForm) {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <h1 className="font-rammetto-one text-2xl text-[#E5E2E9]">Crie sua conta</h1>
            <Input
                id="name"
                type="text"
                placeholder="Nome"
                autoComplete="off"
                icon={<UserIcon width={20} height={20} />}
                error={errors.name?.message}
                value={nameValue}
                onClear={() => setValue("name", "")}
                {...register("name")}
            />
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
            <Button type="submit">Criar conta</Button>
        </form>
    )
}
