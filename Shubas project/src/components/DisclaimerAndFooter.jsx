import React from 'react';

const DisclaimerAndFooter = () => {
  return (
    <div className="bg-white text-black font-sans">
      <main className="max-w-[90%] mx-auto px-2 py-5">
        <section className="mb-15">
          <p className="font-bold text-xl leading-6 mb-2">Disclaimer:</p>
          <p className="text-base leading-6 ">
            The contents here is for informational purposes only and not intended to be a substitute for professional medical advice, diagnosis, or treatment. Please seek the advice of a physician or other qualified health provider with any questions you may have regarding a medical condition. Medkart on any information and subsequent action or inaction is solely at the user's risk, and we do not assume any responsibility for the same. The content on the Platform should not be considered or used as a substitute for professional and qualified medical advice. Please consult your doctor for any query pertaining to medicines, tests and/or diseases, as we support, and do not replace the doctor-patient relationship.
          </p>
        </section>
        <section>
          <div className="bg-white rounded-xl border border-gray-300 shadow-2xl flex justify-around items-center py-6 px-4 max-w-6xl mx-auto mb-10">
            <div className="flex flex-col items-center text-center max-w-[120px]">
              <img
                alt="Illustration of a smartphone with a hand holding a coin near it representing safe and secured payment"
                className="mb-2"
                height="40"
                src="https://storage.googleapis.com/a1aa/image/d7a0849e-87e6-4edd-de61-01abdff4f490.jpg"
                width="40"
              />
              <p className="text-xs leading-5">
                Safe and Secured
                <br />
                Payment
              </p>
            </div>
            <div className="flex flex-col items-center text-center max-w-[120px]">
              <img
                alt="Illustration of two hands holding a shield with a checkmark representing 100% authentic products"
                className="mb-2"
                height="40"
                src="https://storage.googleapis.com/a1aa/image/ca7a9314-5059-4eec-1e07-3fc8f193eff6.jpg"
                width="40"
              />
              <p className="text-xs leading-5">
                100% Authentic
                <br />
                Products
              </p>
            </div>
            <div className="flex flex-col items-center text-center max-w-[120px]">
              <img
                alt="Illustration of a thumbs up with stars around it representing 6 lac plus happy customers"
                className="mb-2"
                height="40"
                src="https://storage.googleapis.com/a1aa/image/e6933af5-c725-4381-4ab1-c8c08aa7e0ea.jpg"
                width="40"
              />
              <p className="text-xs leading-5">
                6 lac + Happy
                <br />
                Customers
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row md:justify-between md:items-start gap-10 md:gap-0">
          <div className="md:max-w-xs">
            <img
              alt="Medingen logo with hexagonal shape and letters M I G inside"
              className="mb-3"
              height="48"
              src="https://storage.googleapis.com/a1aa/image/ddd19a3b-04be-4a2a-d65e-d27ef7b159a3.jpg"
              width="48"
            />
            <p className="font-bold text-base mb-3">Medingen</p>
            <p className="text-xs leading-5 max-w-[280px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at urna et leo rhoncus mattis. Maecenas vel scelerisque nunc.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-8 text-xs leading-6 max-w-lg w-full">
            <div>
              <p className="font-semibold mb-4">Website</p>
              <ul className="space-y-3 text-[#919191]">
                <li>Home</li>
                <li>Features</li>
                <li>How it works</li>
                <li>Whats our customers say?</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-4">Follow Us</p>
              <ul className="space-y-3 text-[#919191]">
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Youtube</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-4">More</p>
              <ul className="space-y-3 text-[#919191]">
                <li>Help Center</li>
                <li>Become Member</li>
                <li>Events</li>
                <li>Terms &amp; Conditions</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-[#1e1e1e] text-center mb-10 text-sm py-3">
          @2024 Medingen. All Rights Reserved
        </div>
        <div className='bg-black w-full  h-1'></div>
      </footer>
    </div>
  );
};

export default DisclaimerAndFooter;