import { useState } from "react";

export const useForm = (initialState) => {
    const [form,setForm] = useState(initialState);

    const onChange = (event) => {
        const { name, value } = event.target;
        setForm({...form, [name]: value});
        console.log(event.target.value)
    }


    const onChangeRadio = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
        console.log(initialState)

    }

    const cleanFields = () => {
        setForm(initialState)
    }

    return { form, setForm, onChange, cleanFields, onChangeRadio }
}