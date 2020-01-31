import * as React from 'react';
import style from  '../css/card.module.css';

export enum CardShapes {
  rectangle = "rectangle",
  circle = "circle"
}

export interface ICardProps {
  shape: string
}

export default class Card extends React.PureComponent<ICardProps> {

  RenderCard = (props: Readonly<ICardProps> & Readonly<{children?: React.ReactNode}>) => {
    let className: string;
    switch (props.shape) {
      case 'circle':
        className = style.card_circle;
        break;
      case 'rectangle':
        className = style.card_rectangle;
        break;
      default:
        className = '';
        break;
    }

    return (
      <div className={className}>
          {props.children}
      </div>
    );
  }
  public render() {
    return (
      <this.RenderCard shape={this.props.shape} children={this.props.children} />
    );
  }
}
