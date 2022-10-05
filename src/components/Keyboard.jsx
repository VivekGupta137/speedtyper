import { useContext, useEffect } from "react";
import { Context } from "../Store";

const Keyboard = () => {
    const [state, dispatch] = useContext(Context);
    // useEffect(() => {
    //     dispatch({ type: "SET_TEXT", payload: "tesstings1" });
    // }, []);
    return <div>Keyboard component working: {JSON.stringify(state)}</div>;
};

export default Keyboard;
