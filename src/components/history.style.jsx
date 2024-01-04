import styled from 'styled-components';

export const CertificateContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const CardContainer = styled.div`
  top: 41px;
  position: absolute;
  width: 410px;
  height: 100px;
  background: #E8E8E8;
  border-radius:0 0 10px 10px;
  border: 1px black solid;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TitleBar = styled.div`
  width: 198px;
  height: 41px;
  position: absolute;
  background: #3452F2;
  border-top-left-radius: 10px;
`;

export const CertificateTitle = styled.div`
  left: 11px;
  top: 7px;
  position: absolute;
  color: white;
  font-size: 20px;
  font-weight: 600;
`;

export const NumberBar = styled.div`
  width: 212px;
  height: 41px;
  left: 198px;
  position: absolute;
  display: flex;
  border-top-right-radius: 10px;
  border: 1px #3452F2 solid;
`;


export const CertificateNumber = styled.text`
  color: black;
  font-size: 15px;
  font-weight: 600;
`;

export const CardText = styled.text`
  padding : 5px 15px;
  color: black;
  font-size: 17px;
  font-weight: bold;
`;
