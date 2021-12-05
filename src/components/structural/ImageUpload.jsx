import React, { useState } from "react";
import styled from "styled-components";

const ImageUpload = () => {

    const [state, setState] = useState({
        file: null, 
        uploadedImage: '', 
        isUploaded: false,
        errorStatus: false
    });

    const handleUploadInput = () => {
        document.querySelector('#imageUploadInputElement').click();
    }

    const handleUploadFile = (e) => {
        let fileObject = e.target.files[0];
        
        if (fileObject.type === 'image/png' || fileObject.type === 'image/jpeg') {
            setState(state => ({ ...state, file: fileObject }))
            setState(state => ({ ...state, uploadedImage: URL.createObjectURL(fileObject) }))
            setState(state => ({ ...state, isUploaded: true }));    
            setState(state => ({...state, errorStatus: false}));
        }else{
            setState(state => ({...state, errorStatus: true}));
        }        
    }

    return(
        <UIImageUpload>
            <div className="image-upload-inner">
                <div className={`image-upload-action ${ state.isUploaded ? 'height-edge' : ''}`}>
                    {
                        state.isUploaded ? <img src={state.uploadedImage} alt="" /> : <button className="image-upload-action-button" type="button" onClick={ handleUploadInput }><i className="fas fa-camera"></i></button>
                    }
                    <input type="file" id="imageUploadInputElement" onChange={ handleUploadFile } accept="jpg, png" />
                    {
                        state.errorStatus && <p className="warning-error">Resim yükle</p>
                    }
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
            flex-direction: column;

            & > img{
                width: 100%;
                height: 100%;
                border-radius: 6px;
                box-shadow: 0 2px 4px rgba(0,0,0,0.4);
                object-fit: cover;
            }

            & > input[type="file"]{
                display: none;
            }

            & > .image-upload-action-button{
                width: 48px;
                height: 48px;
                border: 1px solid #eee;
                border-radius: 50% 50%;
                cursor: pointer;
                
                & > i{
                    color: var(--greenDark);
                }
            }
        }

        & > .image-upload-action.height-edge{
            height: 150px;
            max-height: 150px;
        }
    }
`;

export default ImageUpload;