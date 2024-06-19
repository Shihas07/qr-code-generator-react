import React, { useState } from "react";
import QRCode from "react-qr-code";
import "./qr.css"

export default function Qrcode() {
  const [code, setCode] = useState("");

  return (
    <div>
      <div className="input">
        <input
          type="text"
          placeholder="enter eg"
          onChange={(e) => setCode(e.target.value)}
        />
      </div>
      <div style={{ background: "white", padding: "16px" }}>
        <QRCode value={code} />
      </div>
    </div>
  );
}
