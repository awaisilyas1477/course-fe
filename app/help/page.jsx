import Testimonials from '../components/Testimonials/index';
import Newsletter from '../components/Newsletter/Newsletter';
import { AboutStatment } from './components/aboutStatment';
import  HowCanWeHelp  from './components/howCanWeHelp';
import HelpBanner from './components/helpBanner';
import Faqs from '../components/Faqs';
import PricingSection from '../components/pricingSection/PricingSection';


export default function About() {
  return (
    <main>
      <HelpBanner />
      <HowCanWeHelp />
      <AboutStatment />
      <PricingSection />
      <Faqs />
      <Testimonials />
      
      <Newsletter />
    </main>
  )
}
