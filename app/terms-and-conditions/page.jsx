import Newsletter from '../components/Newsletter/Newsletter';
import TermConditionBanner from './components/privacyPolicyBanner';
import TermCondition from './components/privacyPolicy';



export default function Privacy() {
  return (
    <main>
      <TermConditionBanner />
      <TermCondition />
      <Newsletter />
    </main>
  )
}
