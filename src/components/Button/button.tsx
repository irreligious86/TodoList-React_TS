import React from "react";

type PropsType = {
    callback: () => void
    name: string
}

export const Button = (props: PropsType) => {

    const onClickHandler = () => {
        {
            props.callback()
        }
    }

    return (
        <button
            onClick={onClickHandler}
        >{props.name}</button>
    )
}