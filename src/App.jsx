import Banner from "./components/Banner"
import CallForPapers from "./components/CallForPapers"
import CommitteeSection from "./components/CommitteeSection"
import ConferenceInfo from "./components/ConferenceInfo"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Registrations from "./components/Registrations"
import ScheduleSection from "./components/ScheduleSection"
import Speakers from "./components/Speakers"
import Topics from "./components/Topics"

const App = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <ScheduleSection/>
      <Topics/>
      <CommitteeSection/>
      <CallForPapers/>
      <Speakers/>
      <Registrations/>
      <ConferenceInfo/>
      <Footer/>
    </div>
  )
}
export default App