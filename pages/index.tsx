import { NextPage } from 'next';
import IndexComponent from '../components/Index/IndexComponent';

const Index: NextPage<{ userAgent: string }> = ({ userAgent }) => (
  <IndexComponent />
);

Index.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
  return { userAgent };
};

export default Index;