import styled from 'styled-components';

export const CertificateContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 20px;
`;

export const CardContainer = styled.div`
  flex: 1;
  width: 100%;
  background: #E8E8E8;
  border-radius: 0 0 10px 10px;
  border: 1px black solid;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 41px;
`;

export const TitleBar = styled.div`
  width: 50%;
  height: 40px;
  position: absolute;
  background: #3452F2;
  border: 1px #3452F2 solid;
  border-top-left-radius: 10px;
`;

export const NumberBar = styled.div`
  width: 50%;
  height: 40px;
  left: 50%;
  background: #E8E8E8;
  position: absolute;
  display: flex;
  border-top-right-radius: 10px;
  border: 1px #3452F2 solid;
  align-items: center;
`;

export const CertificateTitle = styled.div`
  left: 11px;
  top: 7px;
  position: absolute;
  color: white;
  font-size: 20px;
  font-weight: 600;
`;

export const CertificateNumber = styled.text`
  color: black;
  font-size: 15px;
  font-weight: 600;
`;

export const CardText = styled.text`
  padding: 5px 15px;
  color: black;
  font-size: 17px;
  font-weight: bold;
`;
