import React, { Fragment, useState } from "react";
import styled from "styled-components";
import Button from "./components/unitary/Button";
import Counter from "./components/structural/Counter";
import SelectService from "./components/structural/SelectService";
import SpecialOfferBanner from "./components/structural/SpecialOfferBanner";
import Title from "./components/unitary/Title";
import ImageUpload from "./components/structural/ImageUpload";

const servicesList = [
  {
    'serviceId': 1,
    'serviceGroup': 'Antreler',
    'serviceGroupItems': [
      { 'serviceGroupItemId': 1, 'serviceGroupItem': 'Duvar Düzenlemeleri'},
      { 'serviceGroupItemId': 2, 'serviceGroupItem': 'Mobilyalar'},
      { 'serviceGroupItemId': 3, 'serviceGroupItem': 'Raf Sistemleri'},
    ]
  },
  {
    'serviceId': 2,
    'serviceGroup': 'Mutfaklar',
    'serviceGroupItems': [
      { 'serviceGroupItemId': 1, 'serviceGroupItem': 'ENHET Mutfaklar'},
      { 'serviceGroupItemId': 2, 'serviceGroupItem': 'METOD Mutfaklar'},
      { 'serviceGroupItemId': 3, 'serviceGroupItem': 'Tezgah Tasarımları'},
    ]
  },
  {
    'serviceId': 3,
    'serviceGroup': 'Banyolar',
    'serviceGroupItems': [
      { 'serviceGroupItemId': 1, 'serviceGroupItem': 'Banyo Mobilyaları'},
      { 'serviceGroupItemId': 2, 'serviceGroupItem': 'Banyo Aksesuarları'},
      { 'serviceGroupItemId': 3, 'serviceGroupItem': 'Banyo Yüzey Tasarımları'},
    ]
  },
  {
    'serviceId': 4,
    'serviceGroup': 'Oturma Odaları',
    'serviceGroupItems': [
      { 'serviceGroupItemId': 1, 'serviceGroupItem': 'Oturma Odası Konseptleri'},
      { 'serviceGroupItemId': 2, 'serviceGroupItem': 'Kanepeler'},
      { 'serviceGroupItemId': 3, 'serviceGroupItem': 'Vitrin ve Konsollar'},
    ]
  }
]

const App = () => {
  return(
    <Fragment>
      <SectionWrapper>
        <div className="section-inner full-section">
          <SpecialOfferBanner />
        </div>
        <div className="section-inner">
          <SelectService services={servicesList} />    
        </div>
        <div className="section-inner space-bottom-4">
          <Title size="h4" title="Toplam uzunluk kaç metre ?" subtitle="zorunlu subtitle" /> 
          <Counter counterType="meter" />
        </div>
        <div className="section-inner space-bottom-4">
          <Title size="h4" title="Kaç parça (adet) ?" /> 
          <Counter counterType="quantity" />
        </div>
        <div className="section-inner">
          <Title size="h4" title="Fotoğraf eklemek ister misin ?" />
          <ImageUpload />
        </div>
      </SectionWrapper>
      <StickyRouterWrapper className="sticky-router-wrapper">
        <div className="sticky-router-inner">
          <Button btnText="devam" btnClass="btn-primary" />
        </div>
      </StickyRouterWrapper>
    </Fragment>
  );
}

const SectionWrapper = styled.section`
  height: 100vh;

  & > .section-inner:not(.full-section){
    padding: 0 12px;
  }

  & > .section-inner.space-bottom-4{
    margin-bottom: 24%;
  }

  & .select-service-wrapper{
    margin: 24px 0;
  }
`;

const StickyRouterWrapper = styled.div`
  position: sticky;
  width: 100%;
  bottom: 0;
  display: inline-flex;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);

  & > .sticky-router-inner{
    width: 100%;
    padding: 12px;
  }
`;

export default App;