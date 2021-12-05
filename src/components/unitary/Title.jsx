import React, { useState } from "react";
import styled from "styled-components";

const Title = (props) => {

    const [state] = useState({
        size: props.size,
        title: props.title,
        subtitle: props.subtitle
    });

    return(
        <UITitle className="title-wrapper">
            <div className="title-inner">
                {
                    state.title &&
                    <div className="title"> 
                        { state.size === 'h1' && <h1>{state.title}</h1> }
                        { state.size === 'h2' && <h2>{state.title}</h2> }
                        { state.size === 'h3' && <h3>{state.title}</h3> }
                        { state.size === 'h4' && <h4>{state.title}</h4> }
                        { state.size === 'h5' && <h5>{state.title}</h5> }
                        { state.size === 'h6' && <h6>{state.title}</h6> }
                    </div>
                }
                {
                    state.subtitle &&
                    <div className="subtitle">
                        <p>{state.subtitle}</p>
                    </div>
                }
            </div>
        </UITitle>
    )
}

const UITitle = styled.div`
    margin-bottom: 24px;

    & > .title-inner{
        & > .title{
            margin-bottom: 4px;

            & > h1,
            & > h2,
            & > h3,
            & > h4,
            & > h5,
            & > h6{
                margin: 0;
            }
        }
        & > .subtitle{
            & > p{
                margin: 0;
                font-size: 14px;
            }
        }
    }
`;

export default Title;