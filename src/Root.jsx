import React, { useEffect, useState } from "react";

import T from "./i18n";

import Diagram from "./Diagram";

export default function Root() {
  return (
    <div>
      <h1>
        <T>React lifecycle methods diagram</T>
      </h1>
      <Diagram reactVersion={"16.3"} />
    </div>
  );
}
