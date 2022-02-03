import React, { useState } from "react";
import Video from "../../videos/video2.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  Center,
} from "./HeroElements";
import { Button } from "../ButtonElement";

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <Center>
        <HeroContent>
          <HeroH1>Your Money. Made Simple.</HeroH1>
          <HeroP>
            Connect your Ethereum wallet to send and recieve with ease.
          </HeroP>
          <HeroBtnWrapper>
            <Button
              to="signup"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary={true}
              dark={true}
            >
              Get Started {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </Center>
    </HeroContainer>
  );
};

export default HeroSection;
