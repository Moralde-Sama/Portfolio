import * as React from 'react';
import Card, { CardShapes } from './Card';
import style from '../css/header.module.css';

export interface IHeadingProps {
}

export default class Heading extends React.PureComponent<IHeadingProps> {
  public render() {
    return (
      <div className={style.headingContainer}>
        <Card shape={CardShapes.rectangle}>
            <h1 className={style.headingName}>I'm Emmanuel Paul G Moralde</h1>
        </Card>
        <br />
        <Card shape={CardShapes.rectangle}>
            <h1 className={style.headingRole}>Junior Web Developer</h1>
        </Card>
      </div>
    );
  }
}
