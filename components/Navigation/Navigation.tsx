import * as React from 'react';
import styled from 'styled-components';
import NavigationItem from './NavigationItem';

export enum NavigationItems {
    Home = 'Home',
    AboutMe = 'About Me',
    Projects = 'Projects',
    Resume = 'Resume',
    WorkExperience = 'Work Experience'
}

export interface INavigationProps {
    selectedItem: NavigationItems;
}

const NavTitles: string[] = [
    "Home",
    "About Me",
    "Projects",
    "Resume",
    "Work Experience"
]

const NavigationList = styled.ul`
    list-style: none;
    float: right;
    margin-top: 3rem;
`;

export default class Navigation extends React.Component<INavigationProps> {

    isNavItemSelected(title: string): boolean {
        if (title === this.props.selectedItem)
            return true;
        else
            return false;
    }

    public render() {
        const RenderNavigationItem = () => {
            let navigationItem: any = [];
            for (let index in NavTitles) {
                navigationItem.push(
                    <NavigationItem 
                        key={NavTitles[index]} 
                        title={NavTitles[index]} 
                        selected={this.isNavItemSelected(NavTitles[index])} />
                );
            }
            return navigationItem;
        }
        return (
        <NavigationList>
            <RenderNavigationItem />
        </NavigationList>
        );
    }
}
