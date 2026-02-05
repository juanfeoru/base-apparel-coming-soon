import CoomingSection from './components/CoomingSection';
import Header from './components/Header';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <div className='background flex flex-col gap-12 lg:bg-[url(./assets/icons/bg-pattern-desktop.svg)] lg:bg-cover lg:bg-center lg:bg-no-repeat min-h-dvh'>
      <Header />

      <main className='flex flex-col-reverse lg:flex-row lg:h-screen'>
        <CoomingSection />
        <HeroSection />
      </main>
    </div>
  );
}

export default App;
