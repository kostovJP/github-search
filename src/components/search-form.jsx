import { useForm } from 'react-hook-form'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';

export default function SearchForm({ dataFunc }){
    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitted, isSubmitting},
    } = useForm();

    const formSubmission = (evt) => {
        dataFunc(evt.username);
        console.log(evt.username);
    }
    return (
        <form action="/" 
            className={`border-none p-2 w-75 md:w-100 justify-self-center m-2
                    grid grid-cols-3 gap-2 bg-gray-200 rounded-l shadow-sm shadow-neutral-500
                `}
            onSubmit={handleSubmit(formSubmission)}
        >
            <TextField id="standard-basic" label="github-username" variant="standard" 
                {...register("username", {
                    required: {value: true, message: "*username cannot be empty"},
                    maxLength: {value: 15, message: "*useranme cannot exceed 15 characters"},
                    minLength: {value: 2, message: "*username must be atleast 2 characters long"},
                })}
                className='col-span-2'
            />
            <span className='flex justify-center'><Button variant="contained" type="submit">search</Button></span>
            {errors.username && 
                <p className='text-[12px] text-red-500 col-span-3'>{errors.username.message}</p>
            }
        </form>
    )
}