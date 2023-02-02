import { CurrencyDollar, MapPin, Timer, } from "phosphor-react";
import { 
  Container, 
  IconCurrency, 
  IconMap, 
  IconTime, 
  InfoContainer, 
  InfoDiv, 
  Main, 
  MainContainer, 
  SubTitle, 
  Title 
} from "./styles";

import inllustration from '../../assets/illustration.svg';
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { useNavigate } from "react-router-dom";

export function Success() {
  const { purchase } = useContext(CartContext);

  const navigate = useNavigate()

  if(purchase) {
    navigate('/');
  }

  return (
    <Main>
      <Title>Uhu! Pedido confirmado</Title>
      <SubTitle>Agora é só aguardar que logo o café chegará até você</SubTitle>

      <MainContainer>

        <InfoContainer>
          <Container>
            <InfoDiv>
              <IconMap>
                <MapPin weight="fill" />
              </IconMap>
              <div>
                <p>Entrega em <strong>{purchase?.address.street}, {purchase?.address.number}</strong></p>
                <p>{purchase?.address.district} - {purchase?.address.city}, {purchase?.address.uf}</p>
              </div>
            </InfoDiv>

            <InfoDiv>
              <IconTime>
                <Timer weight="fill" />
              </IconTime>
              <div>
                <p>Previsão de entrega</p>
                <p><strong>20 min - 30 min</strong></p>
              </div>
            </InfoDiv>

            <InfoDiv>
              <IconCurrency>
                <CurrencyDollar weight="fill" />
              </IconCurrency>
              <div>
                <p>Pagamento na entrega</p>
                <p><strong>{purchase?.payment}</strong></p>
              </div>
            </InfoDiv>

          </Container>
        </InfoContainer>

        <img src={inllustration} alt="" />

      </MainContainer>

    </Main>
  );
}
