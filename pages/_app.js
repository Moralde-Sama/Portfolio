import * as React from 'react';
import '../css/style.css';
import { ThemeProvider } from 'styled-components';
import NavigationBar from '../components/Navigation/NavigationBar';
import App from 'next/app';

const theme = {
  primary: "#202020",
  secondary: "white"
}

const NavItems = {
  Home: 'Home',
  AboutMe: 'About Me',
  Projects: 'Projects',
  Resume: 'Resume',
  WorkExperience: 'Work Experience'
}

export default class Portfolio extends App {
  state = {
    selectedNavItem: NavItems.Home
  }

  onClickNavHandler = (title) => {
    let selectedItem;
    switch (title) {
      case NavItems.Home:
        selectedItem = NavItems.Home
        break;
      case NavItems.AboutMe:
        selectedItem = NavItems.AboutMe
        break;
      case NavItems.Projects:
        selectedItem = NavItems.Projects
        break;
      case NavItems.Resume:
        selectedItem = NavItems.Resume
        break;
      default:
        selectedItem = NavItems.WorkExperience
        break;
    }

    this.setState({
      selectedNavItem: selectedItem
    });
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <NavigationBar selectedNavItem={this.state.selectedNavItem} onClickNav={this.onClickNavHandler} />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}


// This default export is required in a new `pages/_app.js` file.
// export default function MyApp({ Component, pageProps }) {
//   return (
//     <ThemeProvider theme={theme}>
//       <NavigationBar selectedNavItem={NavigationItems.Home}/>
//       <Component {...pageProps} />
//     </ThemeProvider>
//   )
// }