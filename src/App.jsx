import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Keyboard from "./components/Keyboard";
import Speedometer from "./components/Speedometer";

import Text from "./components/Text";
import TextInput from "./components/TextInput";

function App() {
    // const [count, setCount] = useState(0);

    return (
        <div className="flex flex-col items-center gap-1 ">
            <Text />
            <TextInput />
            <Speedometer />
            <Keyboard />
        </div>
    );
}

export default App;
