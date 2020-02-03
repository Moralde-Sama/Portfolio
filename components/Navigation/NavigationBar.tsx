import * as React from 'react';
import styled from 'styled-components';
import NavigationList, { NavigationItems } from './Navigation';

export interface INavigationBarProps {
  selectedNavItem: NavigationItems
  onClickNav: (title: string) => void;
}

const NavContainer = styled.div`
    position: fixed;
    top: 0;
    height: 8rem;
    width: 100%;
    padding: 0 4rem;
`;

export default class NavigationBar extends React.Component<INavigationBarProps> {
  public render() {
    return (
      <NavContainer>
          <NavigationList selectedItem={this.props.selectedNavItem} onClickNav={this.props.onClickNav}/>
      </NavContainer>
    );
  }
}
