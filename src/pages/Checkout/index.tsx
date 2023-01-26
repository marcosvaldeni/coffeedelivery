import { Bank, CreditCard, CurrencyDollar, MapPinLine, Minus, Money, Plus, PlusMinus, Trash } from "phosphor-react";
import { 
  AddressHeaer, 
  Button, 
  CheckBox, 
  CheckBoxContainer, 
  CoffeeTatalCardActions, 
  CoffeeTotalCard, 
  Container, 
  FieldInput, 
  FieldsContainer, 
  Main, 
  P, 
  PaymentHeaer, 
  PBase, 
  PTotal, 
  Subtitle, 
  Title, 
  Total
} from "./styles";

import cafe from '../../assets/imgs/traditional_espresso.png';

export function Checkout() {
  return (
    <Main>
      <section>
        <h1>Complete your order</h1>
        <Container>

          <AddressHeaer>
            <MapPinLine size={24} />
            <div>
              <Title>Delivery address</Title>
              <Subtitle>Enter the address where you want to receive your order</Subtitle>
            </div>
          </AddressHeaer>

          <FieldsContainer>
            <FieldInput type="text" placeholder="CEP" />
            <FieldInput type="text" placeholder="Rua" />
            <FieldInput type="text" placeholder="Number" />
            <FieldInput type="text" placeholder="Complement" />
            <FieldInput type="text" placeholder="Bairro" />
            <FieldInput type="text" placeholder="Cidade" />
            <FieldInput type="text" placeholder="UF" />
          </FieldsContainer>

        </Container>

        <Container>
          <PaymentHeaer>
            <CurrencyDollar size={24} />
              <div>
                <Title>Payment</Title>
                <Subtitle>Payment is made on delivery. Choose the way you want to pay</Subtitle>
              </div>
          </PaymentHeaer>
          <CheckBoxContainer> 
            <CheckBox>
                <input type="checkbox" id="credit" />
              <label htmlFor="credit">
                <CreditCard size={20} />
                Credit card
              </label>
            </CheckBox>
            <CheckBox>
              <input type="checkbox" id="debit" />
              <label htmlFor="debit">
                <Bank size={20} />
                Debit card
              </label>
            </CheckBox>
            <CheckBox>
            <input type="checkbox" id="cash" />
              <label htmlFor="cash">
                <Money size={20} />
                Cash
              </label>
            </CheckBox>
          </CheckBoxContainer>

        </Container>
      </section>

      <Total>
        <h3>Selected coffees</h3>

        <div>
          <CoffeeTotalCard>
            <img src={cafe} alt="" />
            <CoffeeTatalCardActions>
              <p>Expresso Tradicional</p>
              <div>
                <div>
                  <Minus size={20} />
                  <span>1</span>
                  <Plus size={20} />
                </div>

                <span>
                  <Trash size={20} />
                  REMOVER
                </span>
              </div>
            </CoffeeTatalCardActions>
            <p>R$ 9,90</p>
          </CoffeeTotalCard>

          <CoffeeTotalCard>
            <img src={cafe} alt="" />
            <CoffeeTatalCardActions>
              <p>Expresso Tradicional</p>
              <div>
                <div>
                  <Minus size={20} />
                  <span>1</span>
                  <Plus size={20} />
                </div>

                <span>
                  <Trash size={20} />
                  REMOVER
                </span>
              </div>
            </CoffeeTatalCardActions>
            <p>R$ 9,90</p>
          </CoffeeTotalCard>

          <P>
            <p>Total de itens:</p>
            <p>R$ 29,70</p>
          </P>
          <PBase>
            <p>Entrega</p>
            <p>R$ 3,50</p>
          </PBase>
          <PTotal>
            <p>Total</p>
            <p>R$ 33,20</p>
          </PTotal>

          <Button>Confirm order</Button>
        </div>
      </Total>
    </Main>
  );
}
