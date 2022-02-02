import React from "react";
import Icon1 from "../../images/car.svg";
import Icon2 from "../../images/mobile.svg";
import Icon3 from "../../images/pay.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesSectionElements";
const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Reduce Expenses</ServicesH2>
          <ServicesP>No Fees. No NFTs. Just good vibes.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Reduce Expenses</ServicesH2>
          <ServicesP>No Fees. No NFTs. Just good vibes.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Reduce Expenses</ServicesH2>
          <ServicesP>No Fees. No NFTs. Just good vibes.</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
