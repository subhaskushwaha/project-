import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

const FaqAndRatings = () => {
  return (
    <div className="bg-white text-gray-900 font-sans p-4 sm:p-6 md:p-10">
      <section className="max-w-[95%] mx-auto space-y-6">
        {/* FAQ Section */}
        <details
          className="border border-gray-200 rounded-md  "
          open
        >
          <summary className="cursor-pointer bg-[#f9fafb] text-black text-xl font-bold p-4 select-none">
            Frequently asked questions for Paracetamol
          </summary>
          <div className="p-4 mt-4 text-sm text-gray-900 bg-[#f9fafb] space-y-2 leading-relaxed">
            <h3 className="font-medium text-lg">Paracetamol</h3>
            <div className="leading-tight text-gray-700 font-medium" >
              <p >
                Q. What if I vomit after taking Paracetamol?
                <br />
                If you vomit in less than 30 minutes after having a dose of
                Paracetamol tablets or syrup, retake the same dose again. If you
                vomit after 30 minutes of a dose, you do not need to take
                another one until the next standard dose.
              </p>
              <p>
                Q. When will I feel better after taking the Paracetamol?
                <br />
                Usually, you will start feeling better after about half an hour
                of taking a Paracetamol.
              </p>
              <p>
                Q. How often can I take the Paracetamol?
                <br />
                You should only take four doses of Paracetamol in 24 hours.
                There should be a gap of at least 4 hours between two doses. Do
                not take Paracetamol for more than 3 days without consulting a
                doctor first.
              </p>
              <p>
                Q. Does Paracetamol make babies sleepy?
                <br />
                No, Paracetamol does not make babies sleepy. It is a
                pain-relieving medicine that is also used to control high fever.
              </p>
              <p>
              Q. Is Paracetamol safe for children?
                <br />
                Paracetamol is considered safe for children only when used as
                directed by the doctor.
              </p>
              <p>
                Q. Is Paracetamol an antibiotic?
                <br />
                No, Paracetamol is not an antibiotic. It works as a painkiller
                and fever-reducing medicine.
              </p>
              <p>
                Q. Can I take Paracetamol and ibuprofen together?
                <br />
                Ibuprofen and Paracetamol are safe medicines, but both should
                not be used together. Consult your doctor if you are not sure.
              </p>
              <p>
                Q. How long does a Paracetamol take to work?
                <br />
                Paracetamol takes around 30-45 min to start working and show its
                effects. It is advised to take this medicine for the duration
                suggested by the doctor. Consult your doctor if you experience
                any bothersome side effects.
              </p>
              <p>
              
                  Q. What are the serious side effects of taking an excess of
                  the Paracetamol?
                
                <br />
                Overdose of Paracetamol may cause severe life-threatening liver
                injury. Taking more than the prescribed dose may also cause
                kidney injury, decreased platelet count, and even coma. Early
                symptoms of an overdose include nausea, vomiting, and general
                tiredness. Immediately consult a doctor or reach an emergency in
                case of a suspected overdose.
              </p>
            </div>
          </div>
        </details>

        {/* Ratings & Reviews Section */}
        <section>
          <h2 className="font-semibold text-lg mb-4">Ratings &amp; Review</h2>

          <div className="space-y-6">
            {/* Review 1 */}
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <div className="flex text-yellow-400 text-base">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FontAwesomeIcon
                      key={star}
                      icon={star <= 4 ? solidStar : regularStar}
                      className="mr-0.5"
                    />
                  ))}
                </div>
                <span className="text-gray-500 text-xs font-medium bg-gray-200 rounded-md px-2 py-0.5">
                  4.0
                </span>
              </div>
              <p className="text-base leading-relaxed mb-1">
                "the medicine is good it is bit costly when compared with the
                exact generic medicine"
              </p>
              <p className="text-base leading-relaxed">
                "the medicine is good it is bit costly when compared with the
                exact generic medicine"
              </p>
            </div>

            {/* Review 2 */}
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <div className="flex text-yellow-400 text-base">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FontAwesomeIcon
                      key={star}
                      icon={star <= 3 ? solidStar : regularStar}
                      className="mr-0.5"
                    />
                  ))}
                </div>
                <span className="text-gray-500 text-xs font-medium bg-gray-200 rounded-md px-2 py-0.5">
                  3.0
                </span>
              </div>
              <p className="text-base leading-relaxed mb-1">
                "the medicine is good it is bit costly when compared with the
                exact generic medicine"
              </p>
              <p className="text-base leading-relaxed">
                "the medicine is good it is bit costly when compared with the
                exact generic medicine"
              </p>
            </div>

            {/* Review 3 */}
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <div className="flex text-yellow-400 text-base">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FontAwesomeIcon
                      key={star}
                      icon={solidStar}
                      className="mr-0.5"
                    />
                  ))}
                </div>
                <span className="text-gray-500 text-xs font-medium bg-gray-200 rounded-md px-2 py-0.5">
                  5.0
                </span>
              </div>
              <p className="text-base leading-relaxed mb-1">
                "the medicine is good it is bit costly when compared with the
                exact generic medicine"
              </p>
              <p className="text-base leading-relaxed">
                "the medicine is good it is bit costly when compared with the
                exact generic medicine"
              </p>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default FaqAndRatings;
