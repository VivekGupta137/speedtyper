import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Context } from "../Store";

const TextInput = () => {
    const [state, dispatch] = useContext(Context);
    const {
        register,
        handleSubmit,
        watch,
        setFocus,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);

    useEffect(() => {
        setFocus("livetext");
    }, []);

    watch((data) => {
        dispatch({ type: "SET_TEXT", payload: data.livetext });
    });

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)}>
            <textarea
                className="w-96 border-4 focus:outline-none focus:border-green-400 rounded-md p-1 "
                defaultValue=""
                {...register("livetext")}
            />
        </form>
    );
};

export default TextInput;
