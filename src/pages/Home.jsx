import React, { useRef } from 'react';
import Header from '../components/Header.jsx';
import Body from '../components/Body.jsx';
import Footer from '../components/Footer.jsx';
import styled from 'styled-components';
import bannerImage from '../../public/images/logobanner.png';

const Home = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const candidatesSectionRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Header 
        onHomeClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        onAboutClick={() => scrollToSection(aboutRef)}
        onCandidatesClick={() => scrollToSection(candidatesSectionRef)}
      />
      <BannerContainer ref={homeRef}>
        <Image src={bannerImage} alt="2024 소망대학부 총회" />
        <TextOverlay>
          <Title>2025<br/>소망대학부 총회<br/>8인 프로필</Title>
          <Button onClick={() => scrollToSection(candidatesSectionRef)}>
            8인 후보 바로 보러가기
          </Button>
        </TextOverlay>
      </BannerContainer>
      <ScrollSpan ref={aboutRef}><br/></ScrollSpan>
      <Body candidatesSectionRef={candidatesSectionRef} />
    </>
  );
};

const BannerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  margin-top: 70px;
`;

const Image = styled.img`
  width: 100%;
  height: 500px;
`;

const TextOverlay = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;
  color: white;
`;

const Title = styled.h1`
  width: 100%;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  line-height: 1.8;
`;

const Button = styled.button`
  margin-top: 40px;
  padding: 10px 20px;
  background-color: transparent;
  color: white;
  border: 2px solid white;
  border-radius: 25px;
  font-size: 1rem;
  cursor: pointer;
`;

const Section = styled.section`
  padding: 2rem;
  text-align: center;
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
`;

const SmallName = styled.span`
  font-size: 0.9rem;
  color: #666;
`;

const ScrollSpan = styled.span`
  margin-bottom: 50px;
`;

export default Home;