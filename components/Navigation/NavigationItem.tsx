import * as React from 'react';
import styled from 'styled-components';

export interface INavigationItemProps {
    title: string;
    selected: boolean;
}

const NavItem = styled.li`
    display: inline-block;
    padding: 1rem;
    &:not(:last-child) {
        margin-right: 3rem;
    }
`;

const NavButton = styled.button`
    border: none;
    background: none;
    outline: none;
    color: white;
    font-size: 2.2rem;
    font-weight: bold;
`;

const NavSelected = styled(NavButton)`
    background-color: ${props => props.theme.primary};
    box-shadow: .9rem .9rem 10px rgba(0,0,0, .4),
    -.2rem -.2rem 10px rgba(255,255,255, .2);
    padding: 1rem 2.5rem;
    border-radius: 3rem;
`;

export default class NavigationItem extends React.PureComponent<INavigationItemProps> {
    renderNavigationItem = () => {
        if (this.props.selected)
            return <NavSelected>{this.props.title}</NavSelected>
        else
            return <NavButton>{this.props.title}</NavButton>
    }

    public render() {
        return (
            <NavItem>
                <this.renderNavigationItem />
            </NavItem>
        );
    }
}
