import { useEffect } from "react";
import ReactGA from "react-ga4";

export default function Homepage() {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: "/homepage",
      title: "Homepage is viewed",
    });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "40px",
      }}
    >
      You are in Home Page currently
      <button
        onClick={() => {
          ReactGA.event({
            category: "Homepage event",
            action: "onclick",
            label: "event button clicked", // optional
          });
          alert("Sent Successfully");
        }}
      >
        Click to send home event
      </button>
    </div>
  );
}
