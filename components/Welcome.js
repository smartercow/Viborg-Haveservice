import { useState, useEffect } from "react";
import { getAbout, getServices } from "../pages/api/aboutus";
import parse from "html-react-parser"

const Welcome = () => {
  const [welcome, setWelcome] = useState();
  const [welServ, setWelServ] = useState();
  const [loading, setLoading] = useState(false);
  const [fejl, setFejl] = useState(false);

  useEffect(() => {
    setLoading(true);
    setWelcome();
    getAbout()
      .then((data) => {
        if (data) {
          //console.log(data);

          setWelcome(data);
          setFejl(false);
        } else {
          //console.log("fejl");

          setWelcome(true);
          setAirT();
        }
      })
      .finally(() => {
        setLoading(false);
      });

    console.log(setWelcome);
  }, []);

  useEffect(() => {
    setLoading(true);
    setWelServ();
    getServices()
      .then((data) => {
        if (data) {
          //console.log(data);

          setWelServ(data);
          setFejl(false);
        } else {
          //console.log("fejl");

          setFejl(true);
          setWelServ();
        }
      })
      .finally(() => {
        setLoading(false);
      });

    //console.log(setWelServ);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-2 px-5 mt-5 relative gap-4 text-gray-700">
      <div className="welcomehome">
        <h1 className="text-2xl">
          Velkommen til{" "}
          <span className="font-bold text-lime-600">
            Viborg <br /> Haveservice
          </span>
        </h1>
        <hr className="border-lime-600 w-10 border-b-2 mt-1" />

        <br />

        {welcome && <>{parse(welcome.content)}</>}

        <br />

        <a
          href="#_"
          class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-lime-600 border border-lime-700 rounded-md shadow-sm hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500 absolute md:bottom-0 md:left-5 right-0 bottom-0 max-w-xs pr-5"
          data-rounded="rounded-md"
          data-primary="blue-600"
          data-primary-reset="{}"
        >
          Se alle ydelser
        </a>
      </div>

      <div className="flex gap-4 flex-col md:flex-row">
        <div className="">
          {welServ && (
            <div className="flex gap-2 md:gap-0 md:flex-col">
              <img src={`http://localhost:5023/images/${welServ[1].image}`} className="w-60 v"/>
              <br />
              <div className="">
                <h2 className="text-lg font-bold">{welServ[1].title}</h2>
                <br />
                <p>{welServ[1].content}</p>
              </div>
            </div>
          )}
        </div>
        <div className="">
          {welServ && (
            <div className="flex gap-2 md:gap-0 md:flex-col">
              <img src={`http://localhost:5023/images/${welServ[0].image}`} className="w-60 object-cover"/>
              <br />
              <div>
                <h2 className="text-lg font-bold">{welServ[0].title}</h2>
                <br />
                <p>{welServ[0].content}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Welcome;
