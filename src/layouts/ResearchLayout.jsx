import { Outlet } from "react-router-dom";

import "../styles/pages/Research.css";

export default function ResearchLayout() {

  return (

    <div className="research-layout">

      <Outlet />

    </div>

  );

}