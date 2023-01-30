import { CurrencyDollar, Info, MapPin, Money, Timer } from "phosphor-react";
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

export function Success() {
  return (
    <Main>
      <Title>Huh! confirmed order</Title>
      <SubTitle>Now just wait for the coffee to come to you soon</SubTitle>

      <MainContainer>

        <InfoContainer>
          <Container>
            <InfoDiv>
              <IconMap>
                <MapPin weight="fill" />
              </IconMap>
              <div>
                <p>Delivery at Rua João Daniel Martinelli, 102</p>
                <p>Farrapos - Porto Alegre, RS</p>
              </div>
            </InfoDiv>

            <InfoDiv>
              <IconTime>
                <Timer weight="fill" />
              </IconTime>
              <div>
                <p>Delivery forecast</p>
                <p>20 min - 30 min</p>
              </div>
            </InfoDiv>

            <InfoDiv>
              <IconCurrency>
                <CurrencyDollar weight="fill" />
              </IconCurrency>
              <div>
                <p>Payment on delivery</p>
                <p>Credit card</p>
              </div>
            </InfoDiv>

          </Container>
        </InfoContainer>

        <img src={inllustration} alt="" />

      </MainContainer>

    </Main>
  );
}