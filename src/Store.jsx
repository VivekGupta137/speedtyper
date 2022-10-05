import React, { createContext, useReducer } from "react";
import Reducer from "./Reducer";

const initialState = {
    text: "",
    letter: "",
    paragraph:
        "However, deers have begun to rent pears over the past few months, specifically for rabbits associated with their bees! However, snails have begun to rent pears over the past few months, specifically for ants associated with their alligators. However, kiwis have begun to rent prunes over the past few months, specifically for kiwis associated with their prunes.",
};

const Store = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    );
};

export const Context = createContext(initialState);
export default Store;
