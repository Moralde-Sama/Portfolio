import * as React from 'react';
import styled from 'styled-components';

interface ICardContainerProps {
  circle: boolean;
}

const CardContainer = styled.div<ICardContainerProps>`
  border-radius: ${props => props.circle ? '50%' : '3rem'};
  background-color: ${props => props.theme.primary};
  box-shadow: .9rem .9rem 10px rgba(0,0,0, .4),
      -.2rem -.2rem 10px rgba(255,255,255, .2);
  padding: ${props => props.circle ? '2rem' : '1rem 2.5rem'};
  margin: .5rem;
`;

export enum CardShapes {
  rectangle = "rectangle",
  circle = "circle"
}

export interface ICardProps {
  shape: CardShapes
}

export default class Card extends React.PureComponent<ICardProps> {

  RenderCard = (props: Readonly<ICardProps> & Readonly<{children?: React.ReactNode}>) => {
    let isCircle: boolean;
    switch (props.shape) {
      case CardShapes.circle:
        isCircle = true;
        break;
      case CardShapes.rectangle:
        isCircle = false;
        break;
      default:
        isCircle = false;;
        break;
    }

    return (
      <CardContainer circle={isCircle}>
        {this.props.children}
      </CardContainer>
    );
  }
  public render() {
    return (
      <this.RenderCard shape={this.props.shape} children={this.props.children} />
    );
  }
}
