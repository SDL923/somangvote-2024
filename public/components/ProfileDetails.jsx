import React from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  width: 80%;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #E8F5E8;
  border-radius: 15px;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 80%;
  object-fit: cover;
  margin-bottom: 20px;
`;

const Name = styled.h2`
  font-size: 1.6rem;
  margin: 0;
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

const ProfileDetails = ({ profile }) => (
    <>
        <ProfileContainer>
            <ProfileImage src={profile.imageUrl} alt={`${profile.name}'s profile`} />
            <Name>{profile.grade} {profile.name}</Name>
            <Subtitle>{profile.department}</Subtitle>
        </ProfileContainer> 

        <TextContainer>
          <SectionTitle><HighlightedText>후보가 된 소감</HighlightedText></SectionTitle>
          <Description>{profile.feeling}</Description>
        </TextContainer>

        <TextContainer>
          <SectionTitle><HighlightedText>나의 하나님에 대해서 한 문장으로 표현하면?</HighlightedText></SectionTitle>
          <Description>{profile.aboutGod}</Description>
        </TextContainer>

        <button onClick={() => window.history.back()}>뒤로가기</button>
    </>
);

export default ProfileDetails;
