import * as React from 'react';
import Link from 'next/link';
import styled, {keyframes} from 'styled-components';

const NavActive = keyframes`
    from {
        box-shadow: 0 0 0 rgba(0,0,0, .4),
        0 0 0 rgba(255,255,255, .2);
    }
    to {
        box-shadow: .9rem .9rem 10px rgba(0,0,0, .4),
        -.2rem -.2rem 10px rgba(255,255,255, .2);
    }
`;

const NavInActive = keyframes`
    from {
        box-shadow: .9rem .9rem 10px rgba(0,0,0, .4),
        -.2rem -.2rem 10px rgba(255,255,255, .2);
    }
    to {
        box-shadow: 0 0 0 rgba(0,0,0, .4),
        0 0 0 rgba(255,255,255, .2);
    }
`;

const NavItem = styled.li`
    display: inline-block;
    padding: 1rem;
    &:not(:last-child) {
        margin-right: .5rem;
    }
`;

const NavButton = styled.a`
    border-radius: 3rem;
    border: none;
    background: none;
    outline: none;
    color: white;
    font-size: 2.2rem;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;
    padding: 1rem 2.5rem;
    background-color: ${props => props.theme.primary};
    animation: ${NavInActive} 1s;
`;

const NavSelected = styled(NavButton)`
    box-shadow: .9rem .9rem 10px rgba(0,0,0, .4),
    -.2rem -.2rem 10px rgba(255,255,255, .2);
    animation: ${NavActive} 1s;
`;

export interface INavigationItemProps {
    title: string;
    selected: boolean;
    onClick: (title: string) => void;
}

export default class NavigationItem extends React.PureComponent<INavigationItemProps> {

    renderNavigationItem = () => {
        const href = this.props.title === "Home" ? '/' : this.props.title.toLowerCase().replace(/\s/g, '');
        if (this.props.selected) 
            return <NavSelected style={{cursor: 'default'}}>{this.props.title}</NavSelected>
        else {
            return (
                <Link href={href} passHref>
                    <NavButton onClick={() => this.props.onClick(this.props.title)}>
                        {this.props.title}
                    </NavButton>
                </Link>
            )
        }
            
    }

    public render() {
        return (
            <NavItem>
                <this.renderNavigationItem />
            </NavItem>
        );
    }
}
