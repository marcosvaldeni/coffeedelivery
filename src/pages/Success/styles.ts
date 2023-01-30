import styled from 'styled-components';

export const Main = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 10px;

    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 100%;
      max-width: 32rem;
      margin-top: 4rem;
    }

  @media (min-width: 575px) {
    padding: 0 20px;
  }

  @media (min-width: 992px) {
    align-items: flex-start;

    img {
      width: 100%;
      max-width: initial;
      margin-top: 2rem;
      min-width: 450px;
    }
  }

`;

export const MainContainer = styled.div`
  @media (min-width: 992px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }
`;

export const Title = styled.h1`
  margin-top: 5rem;
  font-size: 2rem;
  color: ${props => props.theme['primary-900']};
`;

export const SubTitle = styled.p`
  margin-top: 4px;
  font-size: 1.25rem;
  color: ${props => props.theme['base-subtitle']};
`;

export const InfoContainer = styled.div`
  width: 100%;
  max-width: 32rem;
  margin-top: 2.5rem;
  padding: 1px;
  background: linear-gradient(290.03deg, #A480EF 0%, #DCB959 100%);
  border-radius: 6px 36px;

  @media (min-width: 992px) {
    width: 100%;
    max-width: initial;
    min-width: 26rem;
  }
`;

export const Container = styled.div`
  padding: 1.5rem;
  background: ${pros => pros.theme.background}; 
  border-radius: 6px 36px;
`;

export const InfoDiv = styled.div`
  display: flex;
  gap: 0.5rem;

  & + & {
    margin-top: 2rem;
  }
`;

const BaseIcon = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  svg {
    font-size: 1.5rem;
    color: white;
  }
`;

export const IconMap = styled(BaseIcon)`
  background-color: ${props => props.theme['secondary-500']};
`;

export const IconTime = styled(BaseIcon)`
  background-color: ${props => props.theme['primary-500']};
`;

export const IconCurrency = styled(BaseIcon)`
  background-color: ${props => props.theme['primary-900']};
`;