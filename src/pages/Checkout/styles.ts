import styled from 'styled-components';

export const Main = styled.form`
  max-width: 1120px;
  margin: 0 auto;
  margin-top: 2.5rem;
  padding: 0 10px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  /* align-items: flex-start; */
  /* justify-content: space-between; */
  gap: 2rem;

  > section {
    /* width: 58%; */

    > h1 {
      font-size: 1.125rem;
      color: ${props => props.theme['base-subtitle']};
    }
  }
  
  @media (min-width: 992px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;

    > section {
      /* width: 58%; */
      width: 58%;
    }
  }
`;

const HeaderBase = styled.div`
  display: flex;

  > div {
    margin-top: 2px;
    margin-left: 0.5rem;
  }
`;

export const AddressHeaer = styled(HeaderBase)`
  svg {
    color: ${props => props.theme['primary-900']};
  }
`;

export const Container = styled.div`
  max-width: 575px;//
  margin-top: 1rem;
  padding: 2.5rem;
  border-radius: 6px;
  background: ${props => props.theme['base-card']};

  @media (min-width: 992px) {
    max-width: initial;
  }
`;

export const Title = styled.p`
  color: ${props => props.theme['base-subtitle']};
`;

export const Subtitle = styled.p`
  margin-top: 2px;
  font-size: 0.875rem;
`;

export const FieldsContainer = styled.div`
  margin-top: 2rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(12, 1fr);

  input:nth-child(1)  {
    /* grid-column: span 4; */
    grid-column: span 12;
  }

  input:nth-child(2)  {
    grid-column: span 12;
  }

  input:nth-child(3)  {
    /* grid-column: span 4; */
    grid-column: span 12;
  }

  input:nth-child(4)  {
    /* grid-column: span 8; */
    grid-column: span 12;
  }

  input:nth-child(5)  {
    /* grid-column: span 4; */
    grid-column: span 12;
  }

  input:nth-child(6)  {
    /* grid-column: span 6; */
    grid-column: span 7;
  }

  input:nth-child(7)  {
    /* grid-column: span 2; */
    grid-column: span 5;
  }
    
  @media (min-width: 575px) {
    input:nth-child(1)  {
      grid-column: span 4;
    }

    input:nth-child(3)  {
      grid-column: span 4;
    }

    input:nth-child(4)  {
      grid-column: span 8;
    }

    input:nth-child(5)  {
      grid-column: span 4;
    }

    input:nth-child(6)  {
      grid-column: span 6;
    }

    input:nth-child(7)  {
      grid-column: span 2;
    }
  }
`;

export const FieldInput = styled.input`
  padding: 0.75rem;
  border: 1px solid ${props => props.theme['base-button']};
  border-radius: 4px;
  background: ${props => props.theme['base-input']};
`;

export const PaymentHeaer = styled(HeaderBase)`
  svg {
    color: ${props => props.theme['secondary-900']};
  }
`;

export const CheckBoxContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  flex-direction: column;

  @media (min-width: 575px) {
    flex-direction: row;
  }

  @media (min-width: 992px) {
    flex-direction: initial;
  }
`;

export const CheckBox = styled.div`
  display: flex;
  flex: 1;

  label {
    /* margin-right: 1rem; */
    padding: 0.8rem 0.2rem;
    background: ${props => props.theme['base-button']};
    cursor: pointer;
    border-radius: 4px;
    border: 1px solid ${props => props.theme['base-button']};

    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    svg {
      color: ${props => props.theme['secondary-500']};
    }
  }

  label:hover {
    color: ${props => props.theme['base-subtitle']};
    background: ${props => props.theme['base-hover']};
    border: 1px solid ${props => props.theme['base-button']};
  }

  input[type='checkbox'] {
    cursor: pointer;
    display: none;
  }

  input[type='checkbox']:checked + label {
    border: 1px solid ${props => props.theme['secondary-500']};
    background: ${props => props.theme['secondary-100']};
  }

  & + & {
    margin-top: 1rem;
  }

  @media (min-width: 575px) {
    margin-right: initial;

    & + & {
      margin-top: initial;
    }
  }

  @media (min-width: 992px) {
    margin-right: initial;
  }

`;

export const Total = styled.aside`
  width: 100%;
  max-width: 475px;
  margin-bottom: 9rem;
  flex: 1;

  > div {
    width: 100%;
    margin-top: 1rem;
    padding: 1.5rem;
    background: ${props => props.theme['base-card']};
    border-radius: 6px 36px;
  }

  @media (min-width: 575px) {
    > div {
      padding: 2.5rem;
    }
  }

  @media (min-width: 992px) {
    width: initial;
    max-width: initial;
  }
`;

export const CoffeeTotalCard = styled.div`
  padding-bottom: 2rem;
  border-bottom: 1px solid ${props => props.theme['base-button']};
  display: flex;
  justify-content: space-between;
  gap: 1ren;

  > img {
    margin-left: -1rem;
    height: 4rem;
  }

  > p {
    font-weight: 700;
  }

  & + & {
    padding-top: 1.5rem;
  } 
`;

export const CoffeeTatalCardActions = styled.div`
  /* margin-right: 8%; */

  svg {
    color: ${props => props.theme['secondary-500']};
    cursor: pointer;
  }
  
  svg:hover {
    color: ${props => props.theme['secondary-900']};
  }

  > div {
    margin-top: 0.875rem;
    display: flex;
    gap: 0.25rem;

    > div {
      padding: 0.5rem;
      background: ${props => props.theme['base-button']};
      border-radius: 6px;
      line-height: 70%;

      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    > span {
      padding: 0 0.5rem;
      border-radius: 6px;
      background: ${props => props.theme['base-button']};
      font-size: 0.75rem;
      line-height: 70%;
      cursor: pointer;

      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    > span:hover {
      > svg {
        color: ${props => props.theme['secondary-900']};
      }
    }
  }

  @media (min-width: 992px) {
    margin-right: 8%;
  }
`;

export const PBase = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.875rem;
  margin-top: 0.75rem;
`;

export const P = styled(PBase)`
  margin-top: 1.5rem;
`;

export const PTotal = styled(PBase)`
    font-size: 1rem;
    font-weight: 700;
`;

export const Button = styled.button`
  width: 100%;
  margin-top: 1.5rem;
  padding: 0.75rem;
  border-radius: 6px;
  border: none;
  background: ${props => props.theme['primary-500']};
  color: ${props => props.theme.white};
  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: 700;
`;
