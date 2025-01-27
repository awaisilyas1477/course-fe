import Banner from './components/Banner/index';
import Companies from './components/Companies/Companies';
import Courses from './components/Courses/index';
import Mentor from './components/Mentor/index';
import Testimonials from './components/Testimonials/index';
import WhyChoose from './components/whyChooseELearning/whyChoose';
import DownloadButtons from './components/downloadButtons/downloadButtons';
import PricingSection from './components/pricingSection/PricingSection';
import Newsletter from './components/Newsletter/Newsletter';
import Faqs from './components/Faqs/index';



export default function Home() {
  return (
    <main>
      <Banner />
      <Companies />
      <WhyChoose />
      <Courses />
      <Mentor />
      <PricingSection />
      <Faqs />
      <Testimonials />
      <DownloadButtons />

      <Newsletter />
    </main>
  )
}
