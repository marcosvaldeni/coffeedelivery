import { zodResolver } from '@hookform/resolvers/zod';
import zod from 'zod';
import { useNavigate } from 'react-router-dom';
import {
   Bank,
   CreditCard, 
   CurrencyDollar, 
   MapPinLine, 
   Money,
   SmileySad, 
  } from "phosphor-react";
import { 
  AddressHeaer, 
  CheckBox, 
  CheckBoxContainer, 
  Container, 
  Empty, 
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
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

import { IAddress } from '../../models/Address';
import { idgem } from '../../util/idgem';

interface SubmitProps {
  street: string;
  number: string;
  district: string;
  city: string;
  uf: string;
  cep: string;
  pay: string;
}

const PurchaseFormDataSchema = zod.object({
  street: zod.string().min(5, 'Informe o logradouro'),
  city: zod.string().min(2, 'Informe Cidade'),
  district: zod.string().min(2, 'Informe o Bairro'),
  uf: zod.string().min(2, 'Informe o Estado'),
  cep: zod.string().min(9, 'Informe o Estado'),
  number: zod.string().min(1, 'Informe o Numero'),
  pay: zod.string(),
  complement: zod.string(),
});

type PurchaseFormData = zod.infer<typeof PurchaseFormDataSchema>

export function Checkout() {
  const { register, handleSubmit, watch, setValue, formState: {errors} } = useForm<PurchaseFormData>({
    resolver: zodResolver(PurchaseFormDataSchema),
    defaultValues: {
      street: '',
      city: '',
      district: '',
      uf: '',
      number: '',
      pay: '',
      complement: '',
      cep: ''
    }
  });
  const { coffeesList, addNewPurchase, clearProducts } = useContext(CartContext);

  const navigate = useNavigate()

  function handleFormSubmit({ 
    street, 
    city, 
    district, 
    number, 
    cep,
    pay,
    uf
  }: SubmitProps) {

    const address: IAddress = {
      street, 
      city, 
      district, 
      number, 
      cep,
      uf
    };

    addNewPurchase({ 
      id: idgem(),
      address,
      payment: pay,
      coffeesList,
    });

    clearProducts();

    navigate('/success');
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
      {coffeesList.length
        ? <>
            <section>
              <h1>Complete seu pedido</h1>
              <Container>

                <AddressHeaer>
                  <MapPinLine size={24} />
                  <div>
                    <Title>Endereço de Entrega</Title>
                    <Subtitle>Informe o endereço onde deseja receber seu pedido</Subtitle>
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
                      <Title>Pagamento</Title>
                      <Subtitle>O pagamento é feito na entrega. Escolha a forma que deseja pagar</Subtitle>
                    </div>
                </PaymentHeaer>
                <CheckBoxContainer> 
                  <CheckBox>
                      <input {...register('pay')} type="radio" id="credit" value="Cartão de Crédito" />
                    <label htmlFor="credit">
                      <CreditCard size={20} />
                      cartão de crédito
                    </label>
                  </CheckBox>
                  <CheckBox>
                    <input {...register('pay')} type="radio" id="debit" value="Cartão de Débito" />
                    <label htmlFor="debit">
                      <Bank size={20} />
                      cartão de débito
                    </label>
                  </CheckBox>
                  <CheckBox>
                  <input {...register('pay')} type="radio" id="cash" value="Dinheiro" />
                    <label htmlFor="cash">
                      <Money size={20} />
                      dinheiro
                    </label>
                  </CheckBox>
                </CheckBoxContainer>

              </Container>
            </section>
          <Total />
        </>
        : <Empty>
            <h1>Carrinho Vazio...</h1>
            <SmileySad size={64} />
          </Empty>
      }

    </Main>
  );
}
