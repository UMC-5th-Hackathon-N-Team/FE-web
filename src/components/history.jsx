import React from 'react';
import * as S from './history.style';

function History({ date, donation_id, donation_type, donor_center }) {

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
          <S.CardText>{`혈액원명  ${donor_center}`}</S.CardText>
        </S.CardContainer>
      </S.CertificateContainer>
  );
}

export default History;
