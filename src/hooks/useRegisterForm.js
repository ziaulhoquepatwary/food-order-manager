import { useState } from "react";
import { useForm } from "react-hook-form";

export const TOTAL_STEPS = 3;

export function useRegisterForm() {
    const [step, setStep] = useState(0);
    const [isSuccess, setIsSuccess] = useState(false);

    const methods = useForm({
        mode: "onTouched",
        defaultValues: {
            // Step 1
            fullName: "",
            email: "",
            phone: "",
            password: "",
            confirmPassword: "",

            // Step 2
            experienceLevel: "",
            specialty: "",
            yearsExp: 0,
            bio: "",

            // Step 3
            photoFile: null,
        },
    });


    const onNext = async () => {
        const fieldsPerStep = [
            ["fullName", "email", "phone", "password", "confirmPassword"],
            ["experienceLevel", "specialty"],
            [],
        ];

        const isValid = await methods.trigger(fieldsPerStep[step]);
        if (isValid) setStep((s) => s + 1); // valid হলেই পরের step এ যাবে
    };

    const onBack = () => setStep((s) => Math.max(0, s - 1));

    const onSubmit = methods.handleSubmit((data) => {
        console.log("📦 Form Data to send to API:", data);
        setIsSuccess(true);
    });

    return { methods, step, isSuccess, onNext, onBack, onSubmit };

}