import React, { useState } from "react";
import { useRouter } from "next/navigation";

const AgeVerification = () => {
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();

  const handleClose = () => {
    router.push("/not-eligible");
  };

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-opacity-60 z-50 backdrop-blur-md">
        <div className="text-gray-500 p-6 rounded-2xl shadow-lg w-96 text-center relative border border-gray-600">
          <button className="absolute top-2 right-3 text-2xl text-gray-500 hover:text-white" onClick={handleClose}>
            &times;
          </button>
          <h2 className="text-2xl font-bold mb-3">ARE YOU 18+ ?</h2>
          <p className="mb-4 text-gray-500">
            To continue, confirm you are 18 or older and agree to our{" "}
            <a href="#" className="text-blue-400 hover:underline">
              terms of use
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-400 hover:underline">
              privacy policy
            </a>
            .
          </p>
          <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded-full mb-3" onClick={() => setIsOpen(false)}>
            Yes, I'm 18 or older and Agree
          </button>
          <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded-full" onClick={handleClose}>
            NO
          </button>
        </div>
      </div>
    )
  );
};

export default AgeVerification;
