import { useState } from "react";
import arrow from "../assets/vector.svg";

function Collapse({ title, paragraph, width = "100%", height = "auto" }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="collapse"
      style={{ width, minHeight: height, borderRadius: "5px" }}
    >
      <div className="collapse__header">
        <span className="collapse__title">{title}</span>
        <img
          src={arrow}
          alt="Toggle"
          className={`collapse__arrow${open ? " open" : ""}`}
          onClick={() => setOpen((prev) => !prev)}
        />
      </div>
      <div
        className={`collapse__content${open ? " open" : ""}`}
        style={{
          maxHeight: open ? "500px" : "0",
          padding: open ? "10px 20px 10px 10px" : "0 20px 0 10px",
        }}
      >
        <p>{paragraph}</p>
      </div>
    </div>
  );
}

export default Collapse;