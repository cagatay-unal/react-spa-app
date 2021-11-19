import React from "react";
import styled from "styled-components";

const SpecialOfferBanner = (props) => {

    return(
        <UISpecialOfferBannerWrapper className="special-offer-banner-wrapper">
            <div className="special-offer-banner-inner">
                <span>Tüm hizmeler bu ay için <strong>%25</strong> indirimli !</span>
            </div>
        </UISpecialOfferBannerWrapper>
    )
}

const UISpecialOfferBannerWrapper = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 12px 0;
    
    background: rgb(255,9,53);
    background: linear-gradient(90deg, #ff512f 0%, #dd2476 100%);
    

    & span{
        font-size: 14px;
        font-weight: 500;
        color: white;
    
        & > strong{
            color: var(--primaryYellow);
        }
    }
`;

export default SpecialOfferBanner;