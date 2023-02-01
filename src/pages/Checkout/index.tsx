import { zodResolver } from '@hookform/resolvers/zod';
import zod from 'zod';
import {
   Bank,
   CreditCard, 
   CurrencyDollar, 
   MapPinLine, 
   Minus, 
   Money, 
   Plus, 
   Trash } from "phosphor-react";
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
  PaymentHeaer, 
  PBaseContainer, 
  PContainer, 
  PTotalContainer, 
  Subtitle, 
  Title, 
  Total
} from "./styles";

import cafe from '../../assets/imgs/traditional.png';
import { useForm } from "react-hook-form";
import { useState } from "react";
import { api } from '../../service/api';

const formValidationSchema = zod.object({
  street: zod.string().min(5, 'Informe o logradouro'),
  city: zod.string().min(2, 'Informe Cidade'),
  district: zod.string().min(2, 'Informe o Bairro'),
  uf: zod.string().min(2, 'Informe o Estado'),
  cep: zod.string().min(9, 'Informe o Estado'),
  number: zod.string().min(2, 'Informe o Numero'),
});

export function Checkout() {
  const { register, handleSubmit, watch, setValue, formState: {errors} } = useForm({
    resolver: zodResolver(formValidationSchema)
  });

  function handleFormSubmit(data: any) {

  }
  
  async function handleCepOnBlur() {
    const cep = watch('cep');

    if (cep.length >= 8) {
      const formatedCep = `${cep.replace(/[^0-9]/g, '').slice(0, 5)}-${cep.replace(/[^0-9]/g, '').slice(-3)}`;
      console.log(formatedCep);
      

      const { address, city, district, state } = await (await api.get(`${formatedCep}.json`)).data;

      setValue('street', address);
      setValue('uf', state);
      setValue('district', district);
      setValue('city', city);
    }
  }

  return (
    <Main onSubmit={handleSubmit(handleFormSubmit)}>
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
            <FieldInput id="cep"
            err={!!errors?.cep}
            {...register('cep', {
              onBlur: () => handleCepOnBlur()
            })} 
            type="text" 
            placeholder="CEP" 
          />
            <FieldInput err={!!errors?.street} id="street" {...register('street')} type="text" placeholder="Rua" />
            <FieldInput err={!!errors?.number} id="number" {...register('number')} type="text" placeholder="Numero" />
            <FieldInput id="complement" {...register('complement')} type="text" placeholder="Complemento" />
            <FieldInput err={!!errors?.district} id="district" {...register('district')} type="text" placeholder="Bairro" />
            <FieldInput err={!!errors?.city} id="city" {...register('city')} type="text" placeholder="Cidade" />
            <FieldInput err={!!errors?.uf} id="uf" {...register('uf')} type="text" placeholder="UF" />
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

          <PContainer>
            <p>Total de itens:</p>
            <p>R$ 29,70</p>
          </PContainer>
          <PBaseContainer>
            <p>Entrega</p>
            <p>R$ 3,50</p>
          </PBaseContainer>
          <PTotalContainer>
            <p>Total</p>
            <p>R$ 33,20</p>
          </PTotalContainer>

          <Button type="submit">Confirm order</Button>
        </div>
      </Total>
    </Main>
  );
}
