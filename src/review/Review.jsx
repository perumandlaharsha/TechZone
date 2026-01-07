import reviewsData from "./reviewsData";

export const Review = () => {
  return (
    <>
      {reviewsData.map((item) => (
        <div key={item.id} className="mt-10 ml-20 mb-10">
          <p className="font-bold m-3">{item.name}</p>
          <div className="flex ml-3">
            {Array(item.rateCount)
              .fill(0)
              .map((_, i) => (
                <span key={i} className="text-red-500 text-sm">
                  ★
                </span>
              ))}
              <div className="border ml-2 mr-2"></div>
              <div className="opacity-60">{item.date}</div>
          </div>
          <p className="text-lg opacity-70">{item.review}</p>
        </div>
      ))}
    </>
  );
};