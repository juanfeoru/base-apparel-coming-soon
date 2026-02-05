import logo from '../assets/icons/logo.svg';

export default function Header() {
  return (
    <header className='mt-8 ml-8 lg:m-0 lg:absolute lg:top-12 lg:ml-24 xl:ml-48'>
      <img
        src={logo}
        alt='Base Apparel logo'
        className='w-28 lg:w-40 xl:w-48'
        width='158'
        height='33'
      />
    </header>
  );
}
