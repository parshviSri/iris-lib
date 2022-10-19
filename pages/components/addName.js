import React from 'react';

const AddName = () => {
    return (
      <div className='w-2/5 my-7 h-6 mx-4'>
        <input
          className=" shadow appearance-none border rounded w-full py-2 px-3 text-white-700 focus:border-blue-500 focus:outline-none"
          id="username"
          type="text"
          placeholder="Your Avatar name"
          onChange={(event) => {
            setUserReg({ ...userReg, name: event.target.value });
          }}
        />
      </div>
    );
}

export default AddName;
