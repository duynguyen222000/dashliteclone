import { AdminDashboard } from "./components/AdminDashboard";
import { Application } from "./components/Application";
import { BannerIntro } from "./components/BannerIntro";
import { Conceptual } from "./components/Conceptual";
import { FeatureOverview } from "./components/FeatureOverview";
import { Footer } from "./components/Footer";
import { GetVersion } from "./components/GetVersion";
import { Header } from "./components/Header";
import { IntroSection } from "./components/IntroSection";
import { PurchaseAndBuilding } from "./components/PurchaseAndBuilding";
import { Roadmap } from "./components/Roadmap";
import { StoryBehind } from "./components/StoryBehind";

function App() {
  return (
    <div className="App">
      <Header />
      <BannerIntro />
      <IntroSection />
      <Conceptual />
      <AdminDashboard />
      <GetVersion />
      <FeatureOverview />
      <Application />
      <StoryBehind />
      <Roadmap />
      <PurchaseAndBuilding />
      <Footer />
    </div>
  );
}

export default App;
