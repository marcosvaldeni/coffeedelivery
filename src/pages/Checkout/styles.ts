import styled, { css } from 'styled-components';

interface Err {
  err?: boolean;
}

export const Main = styled.form`
  max-width: 1120px;
  margin: 0 auto;
  margin-top: 2.5rem;
  padding: 0 10px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  > section {

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
      width: 58%;
    }
  }
`;

export const Empty = styled.div`
  width: 100%;
  height: 32rem;
  padding: 2.5rem;
  border-radius: 6px;
  background: ${props => props.theme['base-card']};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: ${props => props.theme['base-label']};

  h1 {
    font-size: 3rem;
    color: ${props => props.theme['base-label']};

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

export const Container = styled.div<Err>`
  max-width: 575px;
  margin-top: 1rem;
  padding: 2.5rem;
  border: 3px solid ${props => props.err ? 
    props.theme['red-500']  : props.theme['base-card']
  };
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
    grid-column: span 12;
  }

  input:nth-child(2)  {
    grid-column: span 12;
  }

  input:nth-child(3)  {
    grid-column: span 12;
  }

  input:nth-child(4)  {
    grid-column: span 12;
  }

  input:nth-child(5)  {
    grid-column: span 12;
  }

  input:nth-child(6)  {
    grid-column: span 7;
  }

  input:nth-child(7)  {
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

export const FieldInput = styled.input<Err>`
  padding: 0.75rem;
  border: 1px solid ${props => props.err ? 
    props.theme['red-500']  : props.theme['base-button']
  };
  border-radius: 4px;
  background: ${props => props.err ? 
    props.theme['red-100'] : props.theme['base-button']
  }
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

  input[type='radio'] {
    cursor: pointer;
    display: none;
  }

  input[type='radio']:checked + label {
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


