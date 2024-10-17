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
    font-weight: bold;
  }

  td {
    vertical-align: middle;
  }
/* 
  button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 5px;
    &:hover {
      background-color: #0056b3;
    }
  } */

  /* .youtube-icon {
    background-color: red;
    padding: 5px 10px;
    border-radius: 5px;
    color: white;
    display: inline-block;
    font-size: 1.2rem;
  } */
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
    width: 80%;
    margin: 10px auto;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title1 = styled.div`
    margin-bottom: 15px;
    font-size: 18px;
    font-weight: bold;
`;

const Content = styled.div`
    font-size: 15px;
    font-weight: bold;
    color: #b5b5b5;
`;

const Body = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetch('/profiles.json')
      .then((response) => response.json())
      .then((data) => setProfiles(data));
  }, []);

  return (
    <>
        <Section>
            <Title1>2025 소망대학부 2차 총회 안내</Title1>
            <Content>너희가 나를 택한것이 아니요<br/>내가 너희를 택하여 세웠나니</Content>
        </Section>

        <Section>
            <Title1>2025 소망대학부 2차 총회 안내</Title1>
            <Content>너희가 나를 택한것이 아니요<br/>내가 너희를 택하여 세웠나니</Content>
        </Section>

        <TableContainer>
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
    </>
  );
};

export default Body;
