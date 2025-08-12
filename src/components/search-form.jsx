import { useForm } from 'react-hook-form'
import TextField from '@mui/material/TextField'

export default function SearchForm({ dataFunc }){
    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitted, isSubmitting},
    } = useForm();

    return (
        <form action="/" 
            className={`border-2 p-2 w-75 md:w-100 justify-self-center m-2
                    grid grid-cols-2
                `}
        >
            <TextField id="standard-basic" label="github-username" variant="standard" 
                {...register("username", {
                    required: {value: true, message: "username cannot be empty"}
                    
                })}
            />
        </form>
    )
}