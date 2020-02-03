import * as React from 'react';
import styled from 'styled-components';
import Card, { CardShapes } from '../Card';

const AboutMeWrapper = styled.div`
  width: 100%;
  height: 78vh;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

interface IColumn {
  centerContent?: boolean;
  padding?: string;
}

const Column6 = styled.div<IColumn>`
  width: 50%;
  height: 100%;
  padding: ${props => props.padding ?? ''};
  display: ${props => props.centerContent ? 'flex' : 'block'};
  justify-content: ${props => props.centerContent ? 'center' : ''};
  align-contents: ${props => props.centerContent ? 'center' : ''};
`;

const Column12 = styled.div<IColumn>`
  width: 100%;
  height: 100%;
  display: ${props => props.centerContent ? 'flex' : 'block'};
  justify-content: ${props => props.centerContent ? 'center' : ''};
  align-contents: ${props => props.centerContent ? 'center' : ''};
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: white;
`;

export interface IAboutMeProps {
}

export interface IAboutMeState {
}

export default class AboutMe extends React.Component<IAboutMeProps, IAboutMeState> {
  constructor(props: IAboutMeProps) {
    super(props);
    this.state = {
    }
  }

  public render() {
    return (
      <AboutMeWrapper>
        <Row style={{marginTop: '11rem'}}>
          <Column12 centerContent={true}>
            <Card shape={CardShapes.rectangle}>
              <Title>About Me</Title>
            </Card>
          </Column12>
        </Row>
        <Row style={{height: '100%'}}>
          <Column6 padding={`2rem;`}>
            <Card shape={CardShapes.rectangle}>
              
            </Card>
          </Column6>
          <Column6 padding={`2rem;`}>
          
          </Column6>
        </Row>
      </AboutMeWrapper>
    );
  }
}
