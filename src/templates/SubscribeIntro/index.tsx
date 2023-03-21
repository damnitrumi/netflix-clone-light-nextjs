import { IntroBanner } from "components/IntroComponents/IntroBanner";
import { IntroCard1 } from "components/IntroComponents/IntroCard1";
import { IntroCard2 } from "components/IntroComponents/IntroCard2";
import { IntroCard3 } from "components/IntroComponents/IntroCard3";
import { IntroCard4 } from "components/IntroComponents/IntroCard4";
import { IntroCard5 } from "components/IntroComponents/IntroCard5";
import { IntroFooter } from "components/IntroComponents/IntroFooter";
import { IntroHeader } from "components/IntroComponents/IntroHeader";
import { IntroSubscription } from "components/IntroComponents/IntroSubscription";
import { useEffect } from "react";
import * as Styled from "./styles";

export const SubscribeIntro = () => {
  useEffect(() => {
    alert(
      "Clique em Entrar -> Na próxima página, clique em Entrar -> Para 'deslogar', passe o mouse sobre a imagem do lado superior direito > Sair da Netflix",
    );
  }, []);
  return (
    <Styled.Wrapper>
      <IntroBanner />
      <IntroHeader />
      <IntroSubscription />
      <IntroCard1 />
      <IntroCard2 />
      <IntroCard3 />
      <IntroCard4 />
      <IntroCard5 />
      <IntroFooter />
    </Styled.Wrapper>
  );
};
