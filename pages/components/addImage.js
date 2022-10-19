/* eslint-disable @next/next/no-img-element */
import React from 'react';

const AddImage = () => {
    return (
      <div className="flex justify-end ">
        <div>
          <img
            src="/thunder.png"
            alt="..."
            className="shadow border rounded-full

"
            width={60}
            height={60}
          />
          <div>
            <input type="file" className="hidden" id="profile" />
            <label htmlFor="profile" className="text-black text-sm">
               Avatar
            </label>
          </div>
        </div>
      </div>
    );
}

export default AddImage;
