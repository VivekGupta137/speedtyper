import { useContext, useEffect } from "react";
import { Context } from "../Store";
import TextInput from "./TextInput";

const Text = () => {
    const [state, dispatch] = useContext(Context);
    let paragraph = state.paragraph;
    let text = state.text;
    let focussed = true;

    let comparePara = () => {
        let pidx = 0;
        for (let idx = 0; idx < text.length; idx++) {
            const char = text[idx];
            if (paragraph[idx] == char) {
                pidx++;
            } else break;
        }

        // console.log(
        //     paragraph.substring(0, pidx),
        //     "|",
        //     paragraph.substring(pidx, text.length),
        //     "|",
        //     paragraph.substring(text.length)
        // );

        return (
            <div>
                <span className="bg-green-300 text-slate-700">
                    {paragraph.substring(0, pidx)}
                </span>
                <span className="bg-red-300 line-through text-slate-700">
                    {paragraph.substring(pidx, text.length)}
                </span>
                <span>{paragraph.substring(text.length)}</span>
            </div>
        );
    };

    return (
        <div className="relative w-96">
            <div className="border-4 rounded-lg  p-2 text-slate-400">
                {comparePara()}
            </div>
            {!focussed && (
                <div className="absolute top-[50%] left-[50%] rounded-md p-4 bg-slate-200 translate-x-[-50%] translate-y-[-50%] cursor-pointer ">
                    Click to Focus
                </div>
            )}
        </div>
    );
};

export default Text;
