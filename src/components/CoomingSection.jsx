import iconArrow from '../assets/icons/icon-arrow.svg';
import iconError from '../assets/icons/icon-error.svg';
import { useEmailForm } from '../hooks/useEmailForm';

export default function CoomingSection() {
  const { email, error, handleChange, handleBlur, handleSubmit } =
    useEmailForm();

  return (
    <section className='m-8 text-center lg:w-480 lg:flex lg:items-center lg:text-left xl:w-600'>
      <div className='lg:flex lg:flex-col lg:justify-center lg:max-w-lg lg:mx-auto'>
        <h1 className='text-4xl mt-6 uppercase text-gray-900 font-semibold tracking-[11px] md:text-5xl lg:text-6xl xl:text-7xl'>
          <span className='text-pink-400 font-light'>We're</span>
          <br />
          coming <br />
          soon
        </h1>
        <p className='text-pink-400 text-sm mt-6 md:text-base lg:text-lg'>
          Hello fellow shoppers! We're currently building our new fashion store.
          Add your email below to stay up-to-date with announcements and our
          launch deals.
        </p>

        <form
          className='my-4 mt-6 relative overflow-visible w-full mx-auto'
          onSubmit={handleSubmit}
          noValidate
        >
          <div className='relative'>
            <input
              type='email'
              placeholder='Email Address'
              aria-invalid={!!error}
              value={email}
              onChange={handleChange}
              onBlur={() => email && handleBlur()}
              className={`w-full p-3 pl-6 rounded-3xl border border-pink-400/50 outline-none text-sm placeholder:text-pink-400/50 lg:p-4 lg:rounded-4xl lg:text-base lg:pl-8
                ${error && 'border-2 border-red-500 focus:border-red-400'}`}
            />
            {error && (
              <img
                src={iconError}
                alt=''
                className='absolute top-1/2 right-16 -translate-y-1/2 lg:right-28 lg:w-7 lg:h-7'
                width='24'
                height='24'
              />
            )}
            <button
              type='submit'
              className='submit absolute right-0 top-0 bottom-0 w-14 rounded-3xl cursor-pointer flex justify-center shadow-xl shadow-gray-900/20 items-center hover:z-10 hover:scale-110 ease-out duration-300 lg:w-24 lg:rounded-4xl'
            >
              <img src={iconArrow} alt='' />
            </button>
          </div>
          {error && (
            <p className='pt-4 text-red-500 text-sm font-semibold lg:ml-8'>
              {error}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
