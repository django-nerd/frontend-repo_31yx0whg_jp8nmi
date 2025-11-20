import Hero from './components/Hero'
import TraditionalVsAnyTale from './components/TraditionalVsAnyTale'
import Benefits from './components/Benefits'
import HowItWorks from './components/HowItWorks'
import Examples from './components/Examples'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Hero />
      <TraditionalVsAnyTale />
      <Benefits />
      <HowItWorks />
      <Examples />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
