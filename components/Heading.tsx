import * as React from 'react';
import styled from 'styled-components';
import Card, { CardShapes } from './Card';

const HeadingWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const HeadingName = styled.h1`
  font-size: 3rem;
  color: white;
  letter-spacing: 2px;
`;

const HeadingRole = styled.h1`
  font-size: 2rem;
  color: white;
  letter-spacing: 2px;
`;

export interface IHeadingProps {
}

export default class Heading extends React.PureComponent<IHeadingProps> {
  public render() {
    return (
      <HeadingWrapper>
        <Card shape={CardShapes.rectangle}>
            <HeadingName>I'm Emmanuel Paul G Moralde</HeadingName>
        </Card>
        <br />
        <Card shape={CardShapes.rectangle}>
            <HeadingRole>Junior Web Developer</HeadingRole>
        </Card>
      </HeadingWrapper>
    );
  }
}
