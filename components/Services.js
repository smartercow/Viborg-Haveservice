import { useState, useEffect } from "react";
import { getServices } from "../pages/api/aboutus";

const Services = () => {
  const [services, setServices] = useState();
  const [loading, setLoading] = useState(false);
  const [fejl, setFejl] = useState(false);

  useEffect(() => {
    setLoading(true);
    setServices();
    getServices()
      .then((data) => {
        if (data) {
          //console.log(data);

          setServices(data);
          setFejl(false);
        } else {
          //console.log("fejl");

          setServices(true);
          setServices();
        }
      })
      .finally(() => {
        setLoading(false);
      });

    //console.log(setServices);
  }, []);

  return (
    <div className="bg-lime-600 text-white py-10 mt-10">
      <div className="flex justify-center flex-col items-center">
        <h1 className="text-3xl font-bold">Vores ydelser</h1>
        <hr className=" w-10 border-b-2 mt-4" />
        <br />
        <p>Herunder en oversigt over alle vores services</p>
        <p>
          Hvis du måtte have flere spørgesmål, er du velkommen til at kontakte
          os
        </p>
      </div>
      <div className="flex gap-10 mt-8 px-5 flex-col lg:flex-row">
      {services &&
        services.map((serv, i) => (
          
            <div className="" key={i}>
              <div className="flex justify-center">
                <img
                  src={`http://localhost:5023/images/${serv.image}`}
                  alt=""
                  className="rounded-full border-2 border-lime-500 p-[4px] md:ring-4 ring-lime-500 ring-inset max-h-40"
                />
              </div>
              <h2 className="text-center text-lg font-bold">{serv.title}</h2>
              <p className="text-center">{serv.content}</p>
            </div>
          
        ))}
        </div>
    </div>
  );
};

export default Services;
