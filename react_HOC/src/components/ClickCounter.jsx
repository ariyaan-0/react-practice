import React from "react";
import WithCounter from "./HOC/WithCounter";

const ClickCounter=(props) => {
    const {count, incrementCount} = props;

    return(
        <>
            <button type="button" onClick={incrementCount}>Clicked {count} times</button>
        </>
    )
}

export default WithCounter(ClickCounter)