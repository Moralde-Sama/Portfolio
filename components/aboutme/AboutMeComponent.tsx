import * as React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Card, { CardShapes } from '../Card';
import { OwnerInfo } from '../../pages/api/owner';

const AboutMeWrapper = styled.div`
  width: 99%;
  height: 78vh;
  margin-top: 12rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: white;
`;

export interface IAboutMeProps {
  ownerInfo: OwnerInfo;
}

export interface IAboutMeState {
}

export default class AboutMe extends React.Component<IAboutMeProps, IAboutMeState> {
  constructor(props: IAboutMeProps) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    console.log(this.props.ownerInfo);
  }

  public render() {
    return (
      <AboutMeWrapper>
        <Grid container spacing={1} style={{marginBottom: '4rem'}}>
          <Grid container item xs={12} spacing={3} justify='center'>
            <Card shape={CardShapes.rectangle}>
              <Title>About Me</Title>
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid container item xs={6} spacing={3}>
            <Card shape={CardShapes.rectangle} style="padding: 2rem; margin: 2rem;">

            </Card>
          </Grid>
          <Grid container item xs={6} spacing={3}>
            <Card shape={CardShapes.rectangle} style="padding: 2rem; margin: 2rem;">
              
            </Card>
          </Grid>
        </Grid>
      </AboutMeWrapper>
    );
  }
}
