import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksWrapper,
  FooterLinksContainer,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIconLink,
  WebsiteRights,
  SocialIcons,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/">How it works</FooterLink>
              <FooterLink to="/">Testimonials</FooterLink>
              <FooterLink to="/">Careers</FooterLink>
              <FooterLink to="/">Privacy policy</FooterLink>
              <FooterLink to="/">T's & C's</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/">How it works</FooterLink>
              <FooterLink to="/">Testimonials</FooterLink>
              <FooterLink to="/">Careers</FooterLink>
              <FooterLink to="/">Privacy policy</FooterLink>
              <FooterLink to="/">T's & C's</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/">How it works</FooterLink>
              <FooterLink to="/">Testimonials</FooterLink>
              <FooterLink to="/">Careers</FooterLink>
              <FooterLink to="/">Privacy policy</FooterLink>
              <FooterLink to="/">T's & C's</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink>
                <a href="http://www.facebook.com">Facebook</a>
              </FooterLink>
              <FooterLink to="/">Testimonials</FooterLink>
              <FooterLink to="/">Careers</FooterLink>
              <FooterLink to="/">Privacy policy</FooterLink>
              <FooterLink to="/">T's & C's</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/" onClick={toggleHome}>
            Logo
          </SocialLogo>
          <WebsiteRights>
            Copyright stuff etc {new Date().getFullYear()} All rights reserved.
          </WebsiteRights>
          <SocialIcons>
            <SocialIconLink
              href="//www.facebook.com"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink
              href="//www.instagram.com"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href="//www.youtube.com"
              target="_blank"
              aria-label="Youtube"
            >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink
              href="//www.twitter.com"
              target="_blank"
              aria-label="Twitter"
            >
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink
              href="//www.linkedin.com"
              target="_blank"
              aria-label="Linkedin"
            >
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
