import React from "react";

const Contact = () => {
  return (
    <div
      className="h-screen bg-primary-bg pt-[80px] flex flex-col justify-center items-center"
      name="contact"
    >
      <div className="container mx-auto px-4 text-center flex items-center justify-center flex-col pt-4">
        <p className="text-center text-xl text-butcol mb-12">
          Join Our Family Now!
        </p>
      </div>
      <div>
        <form action="" className="flex flex-col gap-8">
          <div className="flex flex-row gap-4">
            <div className="w-72">
              <div className="relative h-10 w-full min-w-[200px]">
                <input
                  type="Name"
                  className="peer h-full w-full rounded-[7px] border border-text border-t-text bg-transparent px-3 py-2.5 font-sans text-sm font-normal  !text-text outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-text focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight !text-text transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-text before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-text after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-text peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-text peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-text peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Name
                </label>
              </div>
            </div>
            <div className="w-72">
              <div className="relative h-10 w-full min-w-[200px]">
                <input
                  type="email"
                  className="peer h-full w-full rounded-[7px] border border-text border-t-text bg-transparent px-3 py-2.5 font-sans text-sm font-normal  !text-text outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-text focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight !text-text transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-text before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-text after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-text peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-text peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-text peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Email Address
                </label>
              </div>
            </div>
          </div>

          <div class="w-150">
            <div class="relative w-full min-w-[200px]">
              <textarea
                class="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-text border-t-text bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-text outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-text focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-transparent"
                placeholder=" "
              ></textarea>
              <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-text transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-text peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Message
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="text-text  hover:text-text border border-butcol hover:bg-butcol focus:ring-4 focus:outline-none focus:ring-butcol font-light rounded-2xl text-lg px-16 py-3.5 text-center dark:border-butcol dark:text-text dark:hover:text-text dark:hover:bg-butcol dark:focus:ring-butcol "
          >
            Let's Connect
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
