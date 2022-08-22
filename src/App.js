import { useEffect, useState } from "react";
import Map from "./components/Map";
import Header from "./components/Header";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [address, setAddress] = useState("");
  const [error, setError] = useState(false);
  const [IPDATA, setIPDATA] = useState({});
  useEffect(() => {
    IP();
  }, []);
  const fetchData = (e) => {
    e.preventDefault();
    IP();
  };
  const IP = (ipAddress = address) => {
    setIsLoading(true);
    setError(false);
    setIPDATA({});
    const axios = require("axios");
    const options = {
      method: "GET",
      url: "https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation",
      params: {
        ip: ipAddress,
        apikey: `${process.env.REACT_APP_API_KEY}`,
      },
      headers: {
        "X-RapidAPI-Key": `${process.env.REACT_APP_RAPID_API_KEY}`,
        "X-RapidAPI-Host":
          "find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setIPDATA(response.data);
        setIsLoading(false);
      })
      .catch(function (error) {
        setIsLoading(false);
        setError(error.response.data.Message);
        console.error(error.response.data.Message);
      });
  };

  return (
    <main>
      <Header
        fetchData={fetchData}
        IPDATA={IPDATA}
        address={address}
        setAddress={setAddress}
        isLoading={isLoading}
        error={error}
      />
      {isLoading ? (
        <div className="loading"></div>
      ) : error ? (
        <div className="error">{error}</div>
      ) : (
        <Map IPDATA={IPDATA} />
      )}
    </main>
  );
}

export default App;
