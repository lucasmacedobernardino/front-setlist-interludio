import React from 'react'

function Modal() {
  return (
      <>
          <dialog
              className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
              <div className="bg-white m-auto p-8">
                  <div className="flex flex-col items-center">
                      <h3>Modal content</h3>
                      <br/>
                      <button type="button" className="bg-red-500 text-white p-2 ">Close Modal</button>
                  </div>

              </div>
          </dialog>
      </>
  );
}

export default Modal;