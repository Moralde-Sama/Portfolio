import * as React from 'react';
import Card, { CardShapes } from './Card';
import styled from 'styled-components';

const SocialMediaWrapper = styled.div`
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    z-index: 2;
    width: 10rem;
    height: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const CardWrapper = styled.div`
  margin: .5rem;
`;

const CardImage = styled.img`
  width: 3rem;
  height: 3rem;
`;

export default class SocialMediaAccounts extends React.PureComponent<any> {
  public render() {
    return (
      <SocialMediaWrapper>
        <CardWrapper>
          <Card shape={CardShapes.circle}>
            <CardImage src='https://moralde-sama.github.io/assets/img/gmail.png' />
          </Card>
        </CardWrapper>
        <CardWrapper>
          <Card shape={CardShapes.circle}>
            <CardImage src='https://moralde-sama.github.io/assets/img/linkin.png' />
          </Card>
        </CardWrapper>
      </SocialMediaWrapper>
    );
  }
}
