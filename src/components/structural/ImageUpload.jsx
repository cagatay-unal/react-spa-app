import React, { useState } from "react";
import styled from "styled-components";

const ImageUpload = () => {

    const [file, setFile] = useState(null);
    const [uploadedImage, setUploadedImage] = useState();

    const handleUploadInput = () => {
        document.querySelector('#imageUploadInputElement').click();
    }

    const handleUploadFile = (e) => {
        setFile(e.target.files[0]);
        setUploadedImage(URL.createObjectURL(e.target.files[0]));
    }

    return(
        <UIImageUpload>
            <div className="image-upload-inner">
                <div className="image-upload-action">
                    {
                        file != null ? <img src={uploadedImage} alt="" /> : <button className="image-upload-action-button" type="button" onClick={ handleUploadInput }><i className="fas fa-camera"></i></button>
                    }
                    <input type="file" id="imageUploadInputElement" onChange={ handleUploadFile } accept="jpg,png" />
                </div>
            </div>
        </UIImageUpload>
    )
}

const UIImageUpload = styled.div`
    
    & > .image-upload-inner{
        
        & > .image-upload-action{
            width: 100%;
            height: 150px;
            max-height: 150px;        
            display: flex;
            align-items: center;
            justify-content: center;

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
    }
`;

export default ImageUpload;