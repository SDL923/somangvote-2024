import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 80%;
  margin: 20px auto;
  padding: 20px;
  background-color: #E8F5E8; /* 배경색 적용 */
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative; /* 아이콘을 상단에 배치하기 위한 relative */
`;

const BackIcon = styled.i`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 24px;
  cursor: pointer;
  color: #333;
`;

const ProfileContainer = styled.div`
  width: 300px;
  height: 300px;
  position: relative;
  overflow: hidden;
  clip-path: circle(150px at center); /* 구멍을 중앙에 뚫음 */
`;

const Slider = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  transform: translateX(${(props) => -props.currentIndex * 100}%); /* 슬라이드 애니메이션 */
  transition: transform 0.5s ease-in-out; /* 부드러운 전환 효과 */
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Name = styled.h2`
  font-size: 1.6rem;
  margin-top: 20px;
  margin-bottom: 10px;
  color: #4a4a4a;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #9e9e9e;
  margin-top: 5px;
`;

const TextContainer = styled.div`
  width: 85%;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
`;

const SectionTitle = styled.h3`
  width: 100%;
  margin: 0;
  font-size: 1.1rem;
  font-weight: bold;
  text-align: left;
  color: #333;
`;

const HighlightedText = styled.span`
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  display: inline;
  box-shadow: inset 0 -10px #FFEB3B;
  color: #252525;
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #555;
  text-align: left;
  margin: 10px 0 0 0;
`;

const ProfileDetails = ({ profile }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageUrls = profile.imageUrls; // 두 개 이상의 이미지를 담은 배열

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 3000); // 3초마다 이미지 변경

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 제거
  }, [imageUrls.length]);

  return (
    <>
      <Wrapper>
        {/* 뒤로가기 아이콘을 Font Awesome 클래스 사용 */}
        <BackIcon className="fas fa-arrow-left" onClick={() => window.history.back()} />
        <ProfileContainer>
          <Slider currentIndex={currentIndex}>
            {imageUrls.map((imageUrl, index) => (
              <ProfileImage key={index} src={imageUrl} alt={`${profile.name}'s profile`} />
            ))}
          </Slider>
        </ProfileContainer>

        <Name>{profile.grade} {profile.name}</Name>
        <Subtitle>{profile.department}</Subtitle>
      </Wrapper>

      <TextContainer>
        <SectionTitle><HighlightedText>후보가 된 소감</HighlightedText></SectionTitle>
        <Description>{profile.feeling}</Description>
      </TextContainer>

      <TextContainer>
        <SectionTitle><HighlightedText>나의 하나님에 대해서 한 문장으로 표현하면?</HighlightedText></SectionTitle>
        <Description>{profile.aboutGod}</Description>
      </TextContainer>

      <TextContainer>
        <SectionTitle><HighlightedText>개인적으로 의미가 있는 말씀 구절과 그 이유</HighlightedText></SectionTitle>
        <Description>{profile.verse}</Description>
      </TextContainer>

      <TextContainer>
        <SectionTitle><HighlightedText>나의 비전</HighlightedText></SectionTitle>
        <Description>{profile.vision}</Description>
      </TextContainer>

      <TextContainer>
        <SectionTitle><HighlightedText>나에게 대학부란</HighlightedText></SectionTitle>
        <Description>{profile.tome}</Description>
      </TextContainer>

      <TextContainer>
        <SectionTitle><HighlightedText>내가 생각하는 리더십</HighlightedText></SectionTitle>
        <Description>{profile.leadership}</Description>
      </TextContainer>

      <TextContainer>
        <SectionTitle><HighlightedText>대학부에 대해 품고 있는 비전</HighlightedText></SectionTitle>
        <Description>{profile.vision2}</Description>
      </TextContainer>
    </>
  );
};

export default ProfileDetails;
