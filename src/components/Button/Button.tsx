import React, {useState} from "react";
import {FilterValuesType} from "../../App";

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