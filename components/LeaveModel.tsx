import SmBgPurple from "@/Buttons/SmBgPurple";
import React from "react";
import Image from "next/image";

const LeaveModel = ({
  showModal = false,
  setShowModal,
}: {
  showModal?: boolean;
  setShowModal: (a: boolean) => void;
}) => {
  return (
    <div>
      <div
        id="default-modal"
        tabIndex={-1}
        aria-hidden="true"
        className={`${
          showModal ? "flex" : "hidden"
        } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full animate__animated animate__fadeInUp`}
      >
        <div className="relative ">
          <div className="relative bg-white p-4 rounded-lg shadow w-full">
            <div className="flex items-center justify-between rounded-t">
              <span></span>
              <button
                type="button"
                onClick={() => setShowModal(!showModal)}
                className="text-black bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
                data-modal-hide="default-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <div className="p-4 flex-center flex-col">
              <Image src="/img/logout.svg" alt="" height={20} width={20} />
              <span className="text-base font-medium text-black text-center mt-2">
                Are You Leaving ?
              </span>
              <span className="mt-2">Are you sure want to logout ?</span>
              <span className="mt-1">All your unsaved data will be lost</span>
            </div>
            <div className="flex-center py-2 gap-4 w-full">
              <SmBgPurple
                buttonText="Cancel"
                extraClasses="text-white bg-gray-400"
                onClick={() => setShowModal(!showModal)}
              />
              <SmBgPurple
                buttonText="Yes"
                extraClasses="text-white bg-drk-pk px-6"
                onClick={() => setShowModal(!showModal)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaveModel;
