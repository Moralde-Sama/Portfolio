import { NextPage } from 'next';
import AboutMeComponent from '../components/aboutme/AboutMeComponent';
import { OwnerInfo } from './api/owner';
import fetch from 'isomorphic-unfetch';

const AboutMe: NextPage<{ ownerInfo: OwnerInfo }> = ({ ownerInfo }) => (
  <AboutMeComponent ownerInfo={ownerInfo}/>
);

AboutMe.getInitialProps = async () => {
  // const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
  // return { userAgent };
  const ownerInfo = await fetch('http://localhost:3000/api/owner');
  const result = await ownerInfo.json();
  console.log(result);
  return result;
};

export default AboutMe;