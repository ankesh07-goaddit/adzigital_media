const Work = () => {
  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32">
        <div className="relative overflow-hidden bg-cover bg-no-repeat bg-[50%] bg-[url('https://mdbcdn.b-cdn.net/img/new/textures/full/154.jpg')] h-[500px]"></div>
        <div className="container mx-auto px-6 md:px-12 xl:px-32">
          <div className="text-center">
            <div className="mt-[-170px] block rounded-lg bg-[hsla(0,0%,100%,0.55)] bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:py-16 md:px-12">
              <h1 className="mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
                The best offer on the market <br />
                <span className="text-red-400 dark:text-red-400">
                  for your business
                </span>
              </h1>
              <a
                className="mb-2 inline-block rounded bg-red-700 px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-red-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-red-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(220,76,100,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] md:mr-2 md:mb-0"
                data-te-ripple-init
                data-te-ripple-color="light"
                href="#!"
                role="button"
              >
                Get started
              </a>
              <a
                className="inline-block rounded px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-red transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-red-600 focus:text-red-600 focus:outline-none focus:ring-0 active:text-red-700 dark:hover:bg-neutral-700 dark:hover:bg-opacity-40"
                data-te-ripple-init
                data-te-ripple-color="light"
                href="#!"
                role="button"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
