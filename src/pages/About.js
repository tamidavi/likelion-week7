import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Topic = styled.div`
  margin-top: 0;
  margin-bottom: 10px;
  font-family: "맑은 고딕", sans-serif;
  background-color: black;
`;

const ServiceTitle_1 = styled.div`
  text-align: center;
  font-size: 15px;
  font-weight: 700;
  color: #ff5e00;
  padding: 5px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ServiceTitle_2 = styled.div`
  font-size: 36px;
  font-weight: 600;
  color: white;
  display: flex;
  justify-content: center;
  font-family: "맑은 고딕", sans-serif;
  padding-top: -10px;
`;

const ServiceLine = styled.div`
  /* Service_line 컴포넌트의 스타일을 여기에 작성하세요 */
`;

const Service_detail_1 = styled.h1`
  font-size: 30px;
  color: black;
`;

const Service_detail_2 = styled.h1`
  font-size: 30px;
  color: black;
`;

const Service_detail_3 = styled.h1`
  font-size: 30px;
  color: black;
`;

const Service_detail_4 = styled.h1`
  font-size: 30px;
  color: black;
`;

const About = () => {
  return (
    <Topic>
      <ServiceTitle_1>BRAND SERVICE</ServiceTitle_1>
      <ServiceTitle_2>내일의 세상을 만드는 LIKELION 서비스</ServiceTitle_2>
    </Topic>
  );
};

const Service_1 = () => {
  return (
    <ServiceLine>
      <Service_detail_1>Techit</Service_detail_1>
      <Service_detail_2>SYLTARE</Service_detail_2>
    </ServiceLine>
  );
};

const Service_2 = () => {
  return (
    <ServiceLine>
      <Service_detail_3>MODERN LION</Service_detail_3>
      <Service_detail_4>Meta Kongz</Service_detail_4>
    </ServiceLine>
  );
};

export default About;
