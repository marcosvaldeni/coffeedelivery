import { zodResolver } from '@hookform/resolvers/zod';
import zod from 'zod';
import {
   Bank,
   CreditCard, 
   CurrencyDollar, 
   MapPinLine, 
   Money, 
  } from "phosphor-react";
import { 
  AddressHeaer, 
  CheckBox, 
  CheckBoxContainer, 
  Container, 
  FieldInput, 
  FieldsContainer, 
  Main, 
  PaymentHeaer, 
  Subtitle, 
  Title, 
} from "./styles";

import { useForm } from "react-hook-form";
import { api } from '../../service/api';
import { Total } from '../../components/Total';

const formValidationSchema = zod.object({
  street: zod.string().min(5, 'Informe o logradouro'),
  city: zod.string().min(2, 'Informe Cidade'),
  district: zod.string().min(2, 'Informe o Bairro'),
  uf: zod.string().min(2, 'Informe o Estado'),
  cep: zod.string().min(9, 'Informe o Estado'),
  number: zod.string().min(1, 'Informe o Numero'),
  pay: zod.string(),
});

export function Checkout() {
  const { register, handleSubmit, watch, setValue, formState: {errors} } = useForm({
    resolver: zodResolver(formValidationSchema)
  });

  function handleFormSubmit(data: any) {
    console.log(data);
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

        <Container err={!!errors?.pay}>
          <PaymentHeaer>
            <CurrencyDollar size={24} />
              <div>
                <Title>Payment</Title>
                <Subtitle>Payment is made on delivery. Choose the way you want to pay</Subtitle>
              </div>
          </PaymentHeaer>
          <CheckBoxContainer> 
            <CheckBox>
                <input {...register('pay')} type="radio" id="credit" value="credit" />
              <label htmlFor="credit">
                <CreditCard size={20} />
                Credit card
              </label>
            </CheckBox>
            <CheckBox>
              <input {...register('pay')} type="radio" id="debit" value="debit" />
              <label htmlFor="debit">
                <Bank size={20} />
                Debit card
              </label>
            </CheckBox>
            <CheckBox>
            <input {...register('pay')} type="radio" id="cash" value="cash" />
              <label htmlFor="cash">
                <Money size={20} />
                Cash
              </label>
            </CheckBox>
          </CheckBoxContainer>

        </Container>
      </section>
      
      <Total />

    </Main>
  );
}
