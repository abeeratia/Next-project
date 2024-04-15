import Link from "next/link";
import React from "react";

function Projectlayout({ children }) {
  return (
    <div>
      <div className="row">
        <div className="col-md-3">
          <Link href="/project/desktop">desktop</Link>
          <br/>
          <Link href="/project/web">web</Link>
        </div>

        <div className="col-md-9">{children}</div>
      </div>
    </div>
  );
}

export default Projectlayout;
