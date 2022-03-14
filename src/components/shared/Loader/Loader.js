// import React from 'react';
import './Loader.scss';

// const Loader = () => {
//   return (
//     <div className='loader-container'>
//       <h1>Loading...</h1>
//     </div>
//   );
// };

// export default Loader;

import React from 'react';

const SpinnerPage = () => {
  return (
    <>
      <div className='loader-container'>
        <div className='spinner-grow text-danger' role='status'>
          <span className='sr-only'>Loading...</span>
        </div>
        <div className='spinner-grow text-danger' role='status'>
          <span className='sr-only'>Loading...</span>
        </div>
        <div className='spinner-grow text-danger' role='status'>
          <span className='sr-only'>Loading...</span>
        </div>
        {/* <div className='spinner-grow text-danger' role='status'>
          <span className='sr-only'>Loading...</span>
        </div>
        <div className='spinner-grow text-danger' role='status'>
          <span className='sr-only'>Loading...</span>
        </div> */}
      </div>
    </>
  );
};

export default SpinnerPage;
