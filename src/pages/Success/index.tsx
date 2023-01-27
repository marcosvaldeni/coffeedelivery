import { MapPin, Money, Timer } from "phosphor-react";

export function Success() {
  return (
    <div>
      <h1>Huh! confirmed order</h1>
      <p>Now just wait for the coffee to come to you soon</p>

      <div>
        <div>
          <div>
            <div>
              <MapPin />
            </div>
            <div>
              <p>Delivery at Rua João Daniel Martinelli, 102</p>
              <p>Farrapos - Porto Alegre, RS</p>
            </div>
          </div>

          <div>
            <div>
              <MapPin />
            </div>
            <div>
              <p>Delivery at Rua João Daniel Martinelli, 102</p>
              <p>Farrapos - Porto Alegre, RS</p>
            </div>
          </div>

          <div>
            <div>
              <Timer />
            </div>
            <div>
              <p>Delivery forecast</p>
              <p>20 min - 30 min</p>
            </div>
          </div>

          <div>
            <div>
              <Money />
            </div>
            <div>
              <p>Payment on delivery</p>
              <p>Credit card</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}