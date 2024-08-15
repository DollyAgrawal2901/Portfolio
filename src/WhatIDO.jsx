export default function WhatIDO() {
  return (
    <>
       {/* <div className="py-16 bg-gray">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">
          What I do
        </h2>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto text-center">
          At present, I'm pursuing my final year of B-Tech in Silver Oak
          uNiversity. I am proficient in react components, hooks, props, portals
          and router. I have basic Understanding of Java and Python. I am open
          to more opportunities and eager to learn more.{" "}
        </p>
        </div>
      </div> */}

<div className="flex justify-center items-center mt-16 ">
    <div className="bg-slate-400 text-black text-center p-8 rounded-lg shadow-slate-500 shadow-2xl mb-9 w-8/12">
      <h2 className="text-3xl font-bold mb-2">What I do</h2>
      <div className="flex justify-center">
          <div className="w-32 h-1 bg-slate-600"></div>
        </div>
      <p className="text-lg p-4">At present, I'm pursuing my final year of B-Tech in Silver Oak
          uNiversity. I am proficient in react components, hooks, props, portals
          and router. I have basic Understanding of Java and Python. I am open
          to more opportunities and eager to learn more.</p>
          <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <div className="text-yellow-500 text-4xl">
                <i className="fas fa-code"></i>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Web Development</h3>
              <p className="mt-2 text-base text-gray-500">
                Create responsive and modern websites.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <div className="text-yellow-500 text-4xl">
                <i className="fas fa-paint-brush"></i>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">UX/UI Design</h3>
              <p className="mt-2 text-base text-gray-500">
                Design user interfaces that are intuitive and engaging.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <div className="text-yellow-500 text-4xl">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Mobile Design</h3>
              <p className="mt-2 text-base text-gray-500">
                Develop mobile-friendly interfaces and experiences.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <div className="text-yellow-500 text-4xl">
                <i className="fas fa-bullhorn"></i>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Marketing</h3>
              <p className="mt-2 text-base text-gray-500">
                Create marketing strategies to enhance brand visibility.
              </p>
            </div>
          </div>
        </div>
    </div>
    
  </div>
       

    </>
  );
}
