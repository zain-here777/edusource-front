import Banner from './landingpage/Banner';
import EduSource from './landingpage/EduSource';
import StoreModel from './landingpage/StoreModel';
import CampusStore from './landingpage/CampusStore';
import Growth from './landingpage/Growth';
import Demo from './landingpage/Demo';
import AnimatedSection from './AnimatedSection';

const HomePage = () => {
  return (
    <>
      <Banner />
      <AnimatedSection delay={0}>
        <EduSource/>
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <StoreModel />
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
        <CampusStore />
      </AnimatedSection>
      <AnimatedSection delay={0.3}>
        <Growth/>
      </AnimatedSection>
      <AnimatedSection delay={0.4}>
        <Demo/>
      </AnimatedSection>
    </>
  );
};

export default HomePage;
