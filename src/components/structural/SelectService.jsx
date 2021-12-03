import React, { useState } from "react";
import styled from "styled-components";

const SelectService = (props) => {

    const [services] = useState(props.services);
    const [selectedService, setSelectedService] = useState(null);
    
    return(
        <UISelectServiceWrapper className="select-service-wrapper" onChange={ (e) => setSelectedService(e.target.value) }>
             <option value="" selected>Select for Service</option>
             {
                 services.map((serviceItem) => {
                     return(
                         <optgroup key={serviceItem.serviceId} label={serviceItem.serviceGroup}>
                             {
                                 serviceItem.serviceGroupItems.map((serviceGroupItem) => {
                                     return(
                                         <option key={serviceGroupItem.serviceGroupItemId} value={serviceGroupItem.serviceGroupItem}>{serviceGroupItem.serviceGroupItem}</option>
                                     )
                                 })
                             }
                         </optgroup>
                     )
                 })
             }
        </UISelectServiceWrapper>
    );
}

const UISelectServiceWrapper = styled.select`
    width: 100%;
    padding: 8px 12px;
    background-color: #f8f8f8;
    border: none;
    border-radius: 6px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    text-transform: capitalize;
    outline: none;
`;

export default SelectService;