import { NextPage } from 'next';
import AboutMeComponent from '../components/aboutme/AboutMeComponent';

const Index: NextPage<{ userAgent: string }> = ({ userAgent }) => (
  <AboutMeComponent />
);

Index.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
  return { userAgent };
};

export default Index;