import { FileStack, MessageCircle, Palette, Presentation } from "lucide-react";

const Process = () => {
    return ( 
        <section className="mt-16 flex justify-center flex-col mx-auto mb-10 py-12" id="timeline">
        <div className="mx-auto w-full max-w-screen-xl px-6 lg:px-20"><div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Lorem Ipsum</h2>
            <p className="mt-3 text-gray-500 text-lg text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <ol className="relative border-s border-gray-200 dark:border-gray-700">
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -start-1.5 border border-white dark:bg-puple-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-white dark:text-gray-500">1st step</time>
              <div className="flex items-center gap-2">
                <MessageCircle className="text-white" />
                <h3 className="text-lg font-semibold text-white">Lorem Ipsum</h3>
              </div>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -start-1.5 border border-white"></div>
              <time className="mb-1 text-sm font-normal leading-none text-white dark:text-gray-500">Lorem Ipsum</time>
              <div className="flex items-center gap-2">
                <Palette className="text-white" />
                <h3 className="text-lg font-semibold text-white">Lorem Ipsum</h3>
              </div>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -start-1.5 border border-white"></div>
              <time className="mb-1 text-sm font-normal leading-none text-white dark:text-gray-500">Lorem Ipsum</time>
              <div className="flex items-center gap-2">
                <Presentation className="text-white" />
                <h3 className="text-lg font-semibold text-white">Lorem Ipsum</h3>
              </div>
              <p className="text-base font-normal text-gray-500 dark:text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </li>
            <li className="ms-4 mb-10">
              <div className="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -start-1.5 border border-white"></div>
              <time className="mb-1 text-sm font-normal leading-none text-white dark:text-gray-500">Lorem Ipsum</time>
              <div className="flex items-center gap-2">
                <FileStack className="text-white" />
                <h3 className="text-lg font-semibold text-white">Lorem Ipsum</h3>
              </div>
              <p className="text-base font-normal text-gray-500 dark:text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </li>
          </ol>
        </div>
      </div>
      </section>
     );
}
 
export default Process;