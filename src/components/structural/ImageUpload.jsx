import React from "react";
import styled from "styled-components";

const ImageUpload = () => {
    return(
        <UIImageUpload>
            <div className="image-upload-inner">
                <div className="image-upload-action">
                    <button className="image-upload-action-button" type="button"><i className="fas fa-camera"></i></button>
                </div>
            </div>
        </UIImageUpload>
    )
}

const UIImageUpload = styled.div`
    
    & > .image-upload-inner{
        
        & > .image-upload-action{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;

            & > .image-upload-action-button{
                width: 48px;
                height: 48px;
                border: 1px solid #eee;
                border-radius: 50% 50%;
                
                & > i{
                    color: var(--greenDark);
                }
            }
        }
    }
`;

export default ImageUpload;