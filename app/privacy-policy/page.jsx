import Newsletter from '../components/Newsletter/Newsletter';
import PrivacyPolicy from './components/privacyPolicy';
import PrivacyPolicyBanner from './components/privacyPolicyBanner';



export default function Privacy() {
  return (
    <main>
      <PrivacyPolicyBanner />
      <PrivacyPolicy />
      <Newsletter />
    </main>
  )
}
