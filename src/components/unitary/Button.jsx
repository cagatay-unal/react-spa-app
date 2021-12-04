import React, { useState } from "react";
import styled from "styled-components";

const Button = (props) => {

    const [state, setState] = useState({
        btnText: props.btnText,
        btnClass: props.btnClass
    });

    return(
        <UIButton className={`btn ${state.btnClass}`}>{state.btnText}</UIButton>
    );
}

const UIButton = styled.button`
    &.btn{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 16px;
        border: none;
        border-radius: 6px;
        font-weight: 700;
        text-transform: uppercase;
        color: white;

        &-primary{
            background-color: var(--primaryYellow);
        }
        &-secondary{
            background-color: var(--primaryGreen);
        }
    }

`;

export default Button;