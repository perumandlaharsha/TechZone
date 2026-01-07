import servicesData from "./servicesData";

export const Services = () => {
  return (
    <>
      <div className="bg-gray-900">
        <div className="text-center font-bold opacity-70">
          <p className="text-3xl">Our Advantages</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:px-6 lg:px-16">
          {servicesData.map((item) => (
            <div className="flex gap-4 mt-30 mb-20" key={item.id}>
              <div className="text-5xl text-red-600">{item.icon}</div>
              <div>
                <p className="text-xl font-bold">{item.title}</p>
                <p className="font-light opacity-65">{item.info}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};