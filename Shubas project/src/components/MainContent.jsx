import React from 'react'

const MainContent = () => {
  return (
    <>
     <main className="max-w-[87rem] mx-auto  py-6 flex flex-col lg:flex-row gap-6">
        {/* Medicine Details */}
        <section className="flex-1 max-w-full lg:max-w-[65%]">
          <button className="flex items-center space-x-2 text-xs font-semibold mb-4 text-[#1E1E1E]">
            <i className="fas fa-chevron-left text-sm"></i>
            <span className="font-bold">Paracetamol/acetaminophen</span>
          </button>

          <div className="bg-[#f9fafb] border border-[#F7FCFA] rounded-md text-center py-4 mb-4 text-sm font-semibold">
            Medicine Details
          </div>

          <article className="bg-[#f9fafb] border border-[#F7FCFA] rounded-md p-6 text-[13px] leading-tight">
            <h2 className="font-bold text-[1rem] mb-2">
              About UDILIV 300MG TABLET 15'S
            </h2>
            <p className="mb-6 text-[15px] leading-[-1]">
              UDILIV 300MG TABLET 15'S (UDCA) is a naturally occurring bile acid
              derived from the bear bile, and it is also produced synthetically.
              It has been used for several decades as a therapeutic agent to
              manage various liver disorders. UDCA is primarily known for its
              hepatoprotective properties and is used in the treatment of
              gallstones, primary biliary cholangitis (PBC), and other
              cholestatic liver conditions. This bile acid works by reducing
              cholesterol absorption, improving bile flow, and exerting
              anti-inflammatory effects, thereby promoting liver health.
            </p>

            <h2 className="font-bold text-[1rem] mb-2">
              Uses of UDILIV 300MG TABLET 15'S
            </h2>
            <ul className="list-disc list-inside mb-6 text-[15px] leading-[-1]">
              <li>Helps in dissolving gallstones.</li>
              <li>
                Used in the treatment of primary biliary cholangitis (PBC).
              </li>
              <li>Manages cholestatic liver disorders.</li>
              <li>Prevents gallstone formation.</li>
              <li>Improves liver function.</li>
            </ul>

            <h2 className="font-bold text-[1rem] mb-2">
              How UDILIV 300MG TABLET 15ts Works
            </h2>
            <ul className="list-disc list-inside mb-6 text-[15px] leading-[-1]">
              <li>
                Dosage for children: The dosage of UDILIV 300MG TABLET 15'S for
                children depends on their body weight and the specific liver
                disorder being treated. It is typically prescribed by a
                pediatrician or gastroenterologist who will determine the
                appropriate dosage.
              </li>
              <li>
                Dosage for Adults: The recommended dosage of UDILIV 300MG TABLET
                15'S for adults varies depending on the indication. For
                gallstone dissolution, the usual dose is 8-10 mg/kg body weight
                per day, divided into two to three doses. In the treatment of
                primary biliary cholangitis (PBC), the typical dose ranges from
                13-15 mg/kg body weight per day, also divided into multiple
                doses. However, dosages may differ based on individual patient
                factors, and it is essential to follow the specific instructions
                provided by a healthcare professional.
              </li>
            </ul>

            <h2 className="font-bold text-[1rem] mb-2">
              Side Effects Of UDILIV 300MG TABLET 15'S
            </h2>
            <div className="inline-block bg-[#F0F0F0] rounded-md px-3 py-1 mb-3 text-[1rem] font-normal">
              Common Side Effects of UDILIV 300MG TABLET 15'S
            </div>
            <ul className="list-disc list-inside space-y-1 text-[1rem]">
              <li>Diarrhea</li>
              <li>Abdominal discomfort</li>
              <li>Nausea</li>
              <li>Vomiting</li>
              <li>Hair loss (rare)</li>
            </ul>
          </article>
        </section>

        {/* Alternative Medicine List */}
        <aside className="w-full max-w-full lg:max-w-[32%]">
          <h3 className="text-base font-semibold mb-3">
            Generic Medicine Alternative
          </h3>
          <div className="space-y-3">
            {Array(6)
              .fill()
              .map((_, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center bg-[#f9fafb] border border-[#E6E6E6] rounded-md py-3 px-6" // ✅ Added padding for spacing
                >
                  {/* LEFT: Image + Text */}
                  <div className="flex items-center space-x-3">
                    <img
                      src="https://5.imimg.com/data5/SELLER/Default/2023/9/348511754/YQ/AL/ZV/84447629/kritfen-p-2-tablet-125x125.jpg"
                      alt="Medicine"
                      className="w-12 h-12 flex-shrink-0"
                    />
                    <div className="text-[11px] leading-tight">
                      <p className="font-semibold text-[12px] mb-0.5">
                        DOLOWIN PLUS TAB
                      </p>
                      <p className="text-[#7B7B7B] mb-0.5">
                        Micro Labs Limited
                      </p>
                      <p className="text-[#7B7B7B] mb-0.5">Paracetamol 650</p>
                      <p className="text-[11px]">
                        <span className="line-through text-[#7B7B7B] text-[0.5rem] mr-1">
                          Rs. 95
                        </span>
                        <span className="font-semibold">Rs. 34</span>
                        <span className="ml-2 bg-[#B6E9A7] text-[#2B7A0B] rounded px-1.5 py-0.5 text-[9px] font-semibold">
                          75% less Price
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* RIGHT: Add Button */}
                  <button className="border border-[#1E1E1E] rounded-full px-5 py-2 text-xs font-semibold hover:bg-[#1E1E1E] hover:text-white transition">
                    + Add
                  </button>
                </div>
              ))}
          </div>
        </aside>
      </main> 
    </>
  )
}

export default MainContent
