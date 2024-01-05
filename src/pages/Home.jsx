import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5'>
      <nav className='flex justify-between'>
        <h2 className='mb-1 text-3xl font-extrabold leading-tight text-indigo-700'>
          Automata.
        </h2>
        <Link
          to={''}
          className='flex border-2 border-indigo-700 p-2 gap-2 rounded-md bg-indigo-700'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='#eab308'
            className='w-6 h-6'
          >
            <path
              fillRule='evenodd'
              d='M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z'
              clipRule='evenodd'
            />
          </svg>
          <a className='text-sm font-bold text-primary-1 text-white'>Login</a>
        </Link>
      </nav>

      <p className='mb-12 text-lg text-gray-500'>
        Automation Framework for TestCase Management and End-to-End (E2E)
        Testing.
      </p>
      <div className='w-full'>
        <div className='flex flex-col w-full mb-10 sm:flex-row'>
          <div className='w-full mb-10 sm:mb-0 sm:w-1/2'>
            <div className='relative h-full ml-0 mr-0 sm:mr-10'>
              <span className='absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg'></span>
              <div className='relative h-full p-5 bg-white border-2 border-purple-500 rounded-lg'>
                <div className='flex items-center -mt-1'>
                  <h3 className='my-2 ml-3 text-lg font-bold text-gray-800 uppercase'>
                    Test case Management
                  </h3>
                </div>
                <p className='mt-3 mb-1 text-xs font-medium text-purple-500 uppercase'>
                  ------------
                </p>
                <p className='mb-2 text-gray-600'>
                  Create, organize, and manage test cases to ensure
                  comprehensive and effective testing of software applications.
                  Document test cases, track its execution, and managing the
                  overall testing process.
                </p>
              </div>
            </div>
          </div>
          <div className='w-full sm:w-1/2'>
            <div className='relative h-full ml-0 md:mr-10'>
              <span className='absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg'></span>
              <div className='relative h-full p-5 bg-white border-2 border-purple-500 rounded-lg'>
                <div className='flex items-center -mt-1'>
                  <h3 className='my-2 ml-3 text-lg font-bold text-gray-800 uppercase'>
                    E2E Testing
                  </h3>
                </div>
                <p className='mt-3 mb-1 text-xs font-medium text-purple-500 uppercase'>
                  ------------
                </p>
                <p className='mb-2 text-gray-600'>
                  Evaluate the functionality and performance of an entire
                  application from start to finish. Test all integrated
                  components and validating that the application works as
                  intended in real-world scenarios.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col w-full mb-5 sm:flex-row font-mono'>
          <div className='w-full mb-10 sm:mb-0 sm:w-1/2'>
            <div className='relative h-full ml-0 mr-0 sm:mr-10'>
              <span className='absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg'></span>
              <div className='relative h-full p-5 bg-white border border-yellow-400 rounded-lg'>
                <div className='flex items-center -mt-1'>
                  <h3 className='my-2 ml-3 text-lg font-bold text-gray-800'>
                    1. Test Case Design
                  </h3>
                </div>
                <p className='mt-3 mb-1 text-xs font-medium text-yellow-400 uppercase'>
                  ------------
                </p>
                <p className='mb-2 text-gray-600'>
                  Create detailed test cases with clear steps, data, and
                  expected outcomes..
                </p>
              </div>
            </div>
          </div>
          <div className='w-full mb-10 sm:mb-0 sm:w-1/2'>
            <div className='relative h-full ml-0 mr-0 sm:mr-10'>
              <span className='absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg'></span>
              <div className='relative h-full p-5 bg-white border border-yellow-400 rounded-lg'>
                <div className='flex items-center -mt-1'>
                  <h3 className='my-2 ml-3 text-lg font-bold text-gray-800'>
                    2. Test Case Execution
                  </h3>
                </div>
                <p className='mt-3 mb-1 text-xs font-medium text-yellow-400 uppercase'>
                  ------------
                </p>
                <p className='mb-2 text-gray-600'>
                  Follow a systematic approach to execute test cases, ensuring
                  thorough coverage.
                </p>
              </div>
            </div>
          </div>
          <div className='w-full sm:w-1/2'>
            <div className='relative h-full ml-0 md:mr-10'>
              <span className='absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-500 rounded-lg'></span>
              <div className='relative h-full p-5 bg-white border border-yellow-500 rounded-lg'>
                <div className='flex items-center -mt-1'>
                  <h3 className='my-2 ml-3 text-lg font-bold text-gray-800'>
                    3. Workflow Validation
                  </h3>
                </div>
                <p className='mt-3 mb-1 text-xs font-medium text-yellow-500 uppercase'>
                  ------------
                </p>
                <p className='mb-2 text-gray-600'>
                  Manage and validate your testing workflow from planning to
                  execution and defect resolution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
