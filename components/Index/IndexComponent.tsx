import * as React from 'react';
import Heading from '../Heading';
import SocialMediaAccounts from '../SocialMediaAccounts';
import { NavigationItems } from '../Navigation/Navigation';

export interface IIndexComponentProps {
}

export interface IIndexComponentState {
  selectedNavItem: NavigationItems;
}

export default class IndexComponent extends React.Component<IIndexComponentProps, IIndexComponentState> {
  constructor(props: IIndexComponentProps) {
    super(props);
    this.state = {
      selectedNavItem: NavigationItems.Home
    }
  }

  public render() {
    return (
      <React.Fragment>
        <Heading />
        <SocialMediaAccounts />
      </React.Fragment>
    );
  }
}
