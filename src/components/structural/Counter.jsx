import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Counter = (props) => {

    const [state, setState] = useState({
        counterType: props.counterType,
        count: 1
    });

    useEffect(() => {
        
    }, [state.count])

    return(
        <UICounterWrapper className="counter-wrapper">
            <div className="counter-inner">
                <div className="counter-inner-item">
                    <button className="counter-action-button" type="button" onClick={() => setState({ ...state, count: state.count - 1 }) }><i className="fas fa-minus"></i></button>
                </div>
                <div className="counter-inner-item counter-content">
                    <span>{state.count}</span>
                    <span>{ state.counterType === 'meter' ? 'metre' : state.counterType === 'quantity' ? 'adet' : null}</span>
                </div>
                <div className="counter-inner-item">
                    <button className="counter-action-button" type="button" onClick={() => setState({ ...state, count: state.count + 1 }) }><i className="fas fa-plus"></i></button>
                </div>
            </div>
        </UICounterWrapper>
    )
}

const UICounterWrapper = styled.div`
    & > .counter-inner{
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        & .counter-action-button{
            width: 48px;
            height: 48px;
            border: 1px solid #eee;
            border-radius: 50% 50%;
            
            & > i{
                color: var(--greenDark);
            }
        }

        & .counter-content{
            display: inline-flex;
            flex-direction: column;
            text-align: center;

            & > span{
                font-size: 16px;

                &:first-child{
                    font-size: 32px;
                }
            }
        }
    }
`;

export default Counter;