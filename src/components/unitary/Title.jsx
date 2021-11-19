import React, { useState } from "react";
import styled from "styled-components";

const Title = (props) => {

    const [size] = useState(props.size);
    const [title] = useState(props.title);
    const [subtitle] = useState(props.subtitle);

    return(
        <UITitle className="title-wrapper">
            <div className="title-inner">
                {
                    title &&
                    <div className="title"> 
                        { size === 'h1' && <h1>{title}</h1> }
                        { size === 'h2' && <h2>{title}</h2> }
                        { size === 'h3' && <h3>{title}</h3> }
                        { size === 'h4' && <h4>{title}</h4> }
                        { size === 'h5' && <h5>{title}</h5> }
                        { size === 'h6' && <h6>{title}</h6> }
                    </div>
                }
                {
                    subtitle &&
                    <div className="subtitle">
                        <p>{subtitle}</p>
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