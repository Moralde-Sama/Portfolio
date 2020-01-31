import * as React from 'react';
import Heading from '../Heading';

export interface IIndexComponentProps {
}

export interface IIndexComponentState {
}

export default class IndexComponent extends React.Component<IIndexComponentProps, IIndexComponentState> {
  constructor(props: IIndexComponentProps) {
    super(props);
    this.state = {
    }
  }

  public render() {
    return (
      <React.Fragment>
          <Heading />
      </React.Fragment>
    );
  }
}
