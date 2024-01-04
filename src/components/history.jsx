import React from 'react';
import * as S from './history.style';

function History({ date, donation_id, donation_type }) {
  date = "2021.12.23";
  donation_id = "01-02-374923 ";
  donation_type = "전혈 500ml ";

  return (
      <S.CertificateContainer>
        <S.TitleBar />
        <S.CertificateTitle>헌혈증서</S.CertificateTitle>
        <S.NumberBar>
        <S.CertificateNumber>{`증서 번호 ${donation_id}`}</S.CertificateNumber>
        </S.NumberBar>
        <S.CardContainer>
          <S.CardText>{`헌혈 날짜 ${date}`}</S.CardText>
          <S.CardText>{`헌혈 종류 ${donation_type}`}</S.CardText>
        </S.CardContainer>
      </S.CertificateContainer>
  );
}

export default History;
