import Testimonials from '../components/Testimonials/index';
import Newsletter from '../components/Newsletter/Newsletter';
import AboutBanner from './components/aboutBanner';
import { AboutStatment } from './components/aboutStatment';
import  OurStory  from './components/ourStory';
import  AboutCEO  from './components/aboutCEO';


export default function About() {
  return (
    <main>
      <AboutBanner />
      <OurStory />
      <AboutStatment />
      <AboutCEO />
      <Testimonials />
      <Newsletter />
    </main>
  )
}
