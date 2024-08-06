import React from 'react';

const LogoutModal = ({  onCloseYes,onCloseNo,show }) => {
  return (
    <div className={`fixed inset-0 z-50 bg-gray-600 bg-opacity-50 flex justify-center items-center ${show ? ' ' : 'opacity-0'} transition-opacity duration-300`}>
      <div className={`bg-white rounded-lg p-6 w-1/3 transform ${show ? 'translate-y-0' : 'translate-y-full'} transition-transform duration-300 ease-in-out`}>
        <h2 className="text-xl font-bold mb-4">Do you want to logout?</h2>
        <div className="flex justify-end">
          <button 
            onClick={onCloseYes} 
            className="bg-red-500 text-white px-4 py-2 rounded mr-2 hover:bg-red-600 transition duration-200">
            Yes
          </button>
          <button 
            onClick={onCloseNo} 
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition duration-200">
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
