import React from 'react';

const CompareMedicine = () => {
  const renderStarRating = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          aria-hidden="true"
          className={`w-5 h-5 ${i <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.287 3.974c.3.922-.755 1.688-1.54 1.118l-3.39-2.462a1 1 0 00-1.175 0l-3.39 2.462c-.784.57-1.838-.196-1.539-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.045 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z" />
        </svg>
      );
    }
    return stars;
  };

  const MedicineCard = ({ discountText }) => {
    return (
      <article className="rounded-xl bg-white border border-[#ededed] p-3 flex flex-col gap-4 shadow-sm">
        <div className="rounded-xl bg-[#f3edff] p-8 flex justify-center items-center">
          <img
            alt="Blue medicine blister pack with 20 round pills arranged in 4 rows and 5 columns"
            className="w-[200px] h-[140px] object-contain"
            height="140"
            loading="lazy"
            src="https://storage.googleapis.com/a1aa/image/65d53403-d51a-4419-8675-f627cb33663b.jpg"
            width="200"
          />
        </div>
        <h2 className="font-semibold text-2xl leading-6">Dolo 650 mg</h2>
        <p className=" text-gray-500 text-sm font-normal leading-4">
          By MICRO LABS LIMITED
        </p>
        <div className="text-xs leading-4 text-gray-900/70 space-y-2">
          <p>
            <span className="font-extrabold">Generic Name:</span>
            <br />
            Paracetamol 650 mg
          </p>
          <p className='mt-6'>
            <span className='font-semibold'>Average Price:</span>
            <br />
            Rs 120
          </p>
        </div>
        <div className="mt-2">
          <div className="inline-flex items-center justify-between bg-gray-200 rounded-md px-5 py-2 w-full  font-semibold text-sm">
            <span className='font-normal'>{discountText}</span>
            <span className="font-bold text-xl">Rs. 34</span>
          </div>
        </div>
        <div className="mt-4 border-t border-[#b9b9b9] pt-4 text-xs leading-4 text-gray-900/90 space-y-2">
          <p>
            Chemical formation:
            <br />
            <span className=" inline-block font-bold mt-1 mb-4">CH02 || CH02</span>
          </p>
          <p className=' text-sm'>Ratings & Review</p>
          <div className="flex items-center  gap-1">
            {renderStarRating(4)}
            <span className="ml-3 bg-gray-300 rounded-md px-3 py-1 text-xs font-semibold">
              4.0
            </span>
          </div>
          <p className="mt-2 text-xs leading-5">
            "the medicine is good it is bit costly when compared with the exact generic medicine"
          </p>
          <p className="mt-4 text-xs leading-5">
            "the medicine is good it is bit costly when compared with the exact generic medicine"
          </p>
        </div>
      </article>
    );
  };

  return (
    <main className="max-w-[90%] mx-auto py-10">
      <section>
        <h1 className="font-extrabold text-lg leading-6 mb-1">Compare medicine</h1>
        <p className="text-xs leading-4 text-gray-900/70 mb-8 max-w-[320px]">
          Compare medicines price composition to make your decision
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <MedicineCard  discountText="Original Price" />
          <MedicineCard discountText="15% Off" />
          <MedicineCard discountText="15% Off" />
          <MedicineCard discountText="15% Off" />
        </div>
      </section>
    </main>
  );
};

export default CompareMedicine;