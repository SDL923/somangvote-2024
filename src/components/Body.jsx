import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const TableContainer = styled.div`
  margin: 20px;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;  
  margin-top: 20px;

  th, td {
    border-bottom: 1px solid #ddd;
    padding: 8px;
    text-align: center;
  }

  th {
    background-color: #f2f2f2;
    font-weight: lighter;
  }

  td {
    vertical-align: middle;
  }
`;

const ButtonBlue = styled.button`
    background-color: #007bff;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 5px;
    &:hover {
      background-color: #0056b3;
    }
`;

const ButtonRed = styled.button`
    background-color: red;
    color: white;
    border: none;
    padding: 6px 20px;
    cursor: pointer;
    border-radius: 5px;
    &:hover {
      background-color: #0056b3;
    }
`;

const Section = styled.div`
    width: 85%;
    margin: 60px auto;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    font-family: "Nanum Pen Script", cursive;
    font-weight: 500;
    font-size: 25px;
`;

const Section2 = styled.div`
    width: 85%;
    margin: 50px auto;
    padding: 15px;
    font-size: 16px;
    font-family: "Nanum Gothic", sans-serif;
    line-height: 1.5;
`;

const Title1 = styled.div`
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
`;

const Content = styled.div`
    color: #b5b5b5;
`;

const SmallName = styled.div`
    width: 100%;
    margin-top: 10px;
    text-align: right;
    font-family: "Nanum Gothic", sans-serif;
    font-size: 12px;
    font-weight: bold;
    color: #b5b5b5;
`;

const Title2 = styled.div`
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 25px;
    text-align: center;
`;

const Content2 = styled.div`
    text-align: center;
    color: #b5b5b5;
`;

const Footer = styled.div`
    width: 100%;
    margin-top: 100px;
    margin-bottom: 20px;
    text-align: center;
    font-size: 12px;
`;

const Body = ({ aboutSectionRef, candidatesSectionRef }) => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetch('/profiles.json')
      .then((response) => response.json())
      .then((data) => setProfiles(data));
  }, []);

  return (
    <>
        <Section ref={aboutSectionRef}>
            <Content>
              이는 너희가 흠이 없고 순전하여 어그러지고 거스르는 세대 가운데서 하나님의 흠 없는 자녀로 세상에서 그들 가운데 빛들로 나타내며
              <br/><SmallName>빌립보서 2장 15절</SmallName>
            </Content>
        </Section>

        <Section2>
            <Title1>2025 소망대학부 2차 총회 안내</Title1>
            <Content>2025년 소망대학부를 위한 2차 총회가 10월 27일 예배 후에 진행됩니다.<br/>기도로 함께 준비해주세요.</Content>
        </Section2>

        <Section2>
            <Title1>2025 소망대학부 선거관리위원회</Title1>
            <Content>선거관리위원회는 선거관리위원장(18이해윤)의 위촉을 받은 7명으로 구성되어 선거 관련 업무를 담당합니다.<br/><br/>선거관리위원: 18이해윤 18김근지 18백주혜 18지영선 18최다윤 20이현진 21김서현 21신윤호</Content>
        </Section2>

        <TableContainer ref={candidatesSectionRef}>
        <Title2>CANDIDATES</Title2>
        <Content2>후보는 학번과 이름 순으로 정렬하였습니다.</Content2>
        <StyledTable>
            <thead>
            <tr>
                <th>학번</th>
                <th>이름</th>
                <th>프로필</th>
                <th>연설</th>
            </tr>
            </thead>
            <tbody>
            {profiles.map((profile) => (
                <tr key={profile.id}>
                <td>{profile.grade}</td>
                <td>{profile.name}</td>
                <td>
                    <Link to={`/profile/${profile.id}`}>
                    <ButtonBlue>보러가기</ButtonBlue>
                    </Link>
                </td>
                <td>
                    <ButtonRed><i className="fa-brands fa-youtube"></i></ButtonRed>
                </td>
                </tr>
            ))}
            </tbody>
        </StyledTable>
        </TableContainer>
        <Footer>소망교회 대학부</Footer>
    </>
  );
};

export default Body;
