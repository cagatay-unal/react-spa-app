import React, {Fragment} from "react";
import styled from "styled-components";
import Button from "./components/Button";
import SelectService from "./components/SelectService";

const servicesList = [
  {
    'serviceId': 1,
    'serviceGroup': 'Dış mekan',
    'serviceGroupItems': [
      { 'serviceGroupItemId': 1, 'serviceGroupItem': 'bahçe'},
      { 'serviceGroupItemId': 2, 'serviceGroupItem': 'bina'},
      { 'serviceGroupItemId': 3, 'serviceGroupItem': 'dış kapı'},
    ]
  },
  {
    'serviceId': 2,
    'serviceGroup': 'İç mekan',
    'serviceGroupItems': [
      { 'serviceGroupItemId': 1, 'serviceGroupItem': 'duvar'},
      { 'serviceGroupItemId': 2, 'serviceGroupItem': 'dekor'},
      { 'serviceGroupItemId': 3, 'serviceGroupItem': 'parke'},
    ]
  },
  {
    'serviceId': 3,
    'serviceGroup': 'Mutfak',
    'serviceGroupItems': [
      { 'serviceGroupItemId': 1, 'serviceGroupItem': 'masa'},
      { 'serviceGroupItemId': 2, 'serviceGroupItem': 'beyaz eşya'},
      { 'serviceGroupItemId': 3, 'serviceGroupItem': 'süs'},
    ]
  }
]

const App = () => {
  return(
    <Fragment>
      <SectionWrapper>
        <h1>Single Page Application</h1>
        <SelectService services={servicesList} />
      </SectionWrapper>
      <SectionWrapper>
        <p>inner - 2</p>
      </SectionWrapper>
      <StickyRouterWrapper>
        <div className="sticky-router-inner">
          <Button btnText="devam" btnClass="btn-primary" />
        </div>
      </StickyRouterWrapper>
    </Fragment>
  );
}

const SectionWrapper = styled.section`
  height: 100vh;
  padding: 0 12px;
`;

const StickyRouterWrapper = styled.div`
  position: sticky;
  width: 100%;
  bottom: 0;
  display: inline-flex;
  background-color: var(--greenTone2);
  box-shadow: 0 2px 16px var(--greenTone1);

  & > .sticky-router-inner{
    width: 100%;
    padding: 12px;
  }
`;

export default App;