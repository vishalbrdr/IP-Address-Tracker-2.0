import Arrow from "../images/icon-arrow.svg";

const Header = ({
  fetchData,
  IPDATA,
  address,
  setAddress,
  isLoading,
  error,
}) => {
  const handleChange = (e) => {
    const value = e.target.value;
    setAddress(value);
  };
  const { city, state, zipCode, timezone, org, ip, country, network } = IPDATA;
  return (
    <div className="header">
      <h1>IP Address Tracker</h1>
      <form onSubmit={fetchData} className="input-box">
        <input
          placeholder="Search for any IP address or domain"
          type="text"
          value={address}
          onChange={handleChange}
        />
        <button type="submit">
          <span className="hidden">Search</span>
          <img src={Arrow} alt="arrow" />
        </button>
      </form>
      {!isLoading && !error && (
        <div className="result">
          <div className="item">
            <div className="item-label">ip address</div>
            <div className="item-value">{network}</div>
          </div>
          <div className="item">
            <div className="item-label">location</div>
            <div className="item-value">
              {`${city !== null ? city : ""} ${
                state !== null ? state : country
              }`}{" "}
              <span>{zipCode !== null && zipCode}</span>
            </div>
          </div>
          <div className="item">
            <div className="item-label">timezone</div>
            <div className="item-value">{timezone}</div>
          </div>
          <div className="item">
            <div className="item-label">isp</div>
            <div className="item-value">{org ? org : "unknown"}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
