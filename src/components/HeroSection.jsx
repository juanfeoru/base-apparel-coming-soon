import heroDesktop from '../assets/images/hero-desktop.jpg';
import heroMobile from '../assets/images/hero-mobile.jpg';

export default function HeroSection() {
  return (
    <section>
      <picture>
        <source srcSet={heroDesktop} media='(min-width: 768px)' />
        <img
          srcSet={heroMobile}
          alt='Model wearing orange clothing'
          className='w-screen h-full object-cover'
        />
      </picture>
    </section>
  );
}
