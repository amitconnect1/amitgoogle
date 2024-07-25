import { useEffect } from "react";
import ReactGA from "react-ga4";

export default function ContactPage() {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: "/contact",
      title: "Contact page is viewed",
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
      You are in Current Page currently
      <button
        onClick={() => {
          ReactGA.event({
            category: "Contact event",
            action: "onclick",
            label: "contact event button clicked", // optional
          });
          alert("Sent Successfully");
        }}
      >
        Click to send home event
      </button>
    </div>
  );
}
