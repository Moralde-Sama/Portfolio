import * as React from 'react';
import Heading from '../Heading';
import SocialMediaAccounts from '../SocialMediaAccounts';
import NavigationBar from '../Navigation/NavigationBar';
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
        <NavigationBar selectedNavItem={this.state.selectedNavItem}/>
        <Heading />
        <SocialMediaAccounts />
      </React.Fragment>
    );
  }
}
