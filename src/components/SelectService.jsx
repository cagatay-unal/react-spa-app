import React, { useState, useEffect } from "react";
import styled from "styled-components";

const SelectService = (props) => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        setServices(props.services);
    }, []);

    console.log({services});
    return(
        <UISelectServiceWrapper>
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
    border: none;
    border-radius: 6px;
    outline: none;
`;

export default SelectService;