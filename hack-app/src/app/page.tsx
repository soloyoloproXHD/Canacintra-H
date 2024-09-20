"use client";

import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Home() {
  const openModal = () => {
    const modal = document.getElementById('my_modal_1') as HTMLDialogElement | null;
    if (modal) {
      modal.showModal();
    }
  };

  return (
    <div className="flex justify-between items-center w-full min-h-screen">
      <div className="w-1/3 p-10">
        <div className="max-w-md relative flex flex-col p-4 rounded-md text-black bg-white">
          <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">
            Welcome back to <span className="text-[#7747ff]">App</span>
          </div>
          <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">
            Log in to your account
          </div>
          <form className="flex flex-col gap-3">
            <div className="block relative">
              {/* <label htmlFor="email" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Email</label> */}
              {/* <input type="text" id="email" className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"> */}
            </div>
            <div className="block relative">
              {/* <label htmlFor="password" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Password</label> */}
              {/* <input type="text" id="password" className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"> */}
            </div>
            <div>
              <a className="text-sm text-[#7747ff]" href="#">
                Forgot your password?
              </a>
            </div>
            <button type="submit" className="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal">
              Submit
            </button>
          </form>
          <div className="text-sm text-center mt-[1.6rem]">
            Don’t have an account yet? <a className="text-sm text-[#7747ff]" href="#">Sign up for free!</a>
          </div>
        </div>
      </div>
      <div className="w-2/3">
        <p>Hola</p>
        <button className="btn" onClick={openModal}>open modal</button>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Press ESC key or click the button below to close</p>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
}