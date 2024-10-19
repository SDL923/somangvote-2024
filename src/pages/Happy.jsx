import React from 'react';
import styled from 'styled-components';
import image1 from '../../public/images/happy1.jpg';
import image2 from '../../public/images/happy2.jpg';
import image3 from '../../public/images/happy3.jpg';
import image4 from '../../public/images/happy4.jpg';
import image5 from '../../public/images/happy5.jpg';
import image6 from '../../public/images/happy6.jpg';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #f0f0f0;
`;

const Image = styled.img`
  width: 300px;
  margin: 10px 0;
  object-fit: cover;
`;

const Happy = () => {
  return (
    <PageContainer>
      <Image src={image1} alt="Happy Image 1" />
      <Image src={image2} alt="Happy Image 2" />
      <Image src={image3} alt="Happy Image 3" />
      <Image src={image4} alt="Happy Image 4" />
      <Image src={image5} alt="Happy Image 5" />
      <Image src={image6} alt="Happy Image 6" />
    </PageContainer>
  );
};

export default Happy;
