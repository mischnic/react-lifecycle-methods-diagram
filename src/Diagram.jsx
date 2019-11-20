import React, { useEffect, useState } from "react";

const diagramVersions = {
  16.3: import("./versions/16.3")
};

export default function Diagram({ advanced, reactVersion }) {
  const [diagramElements, setDiagramElements] = useState();

  function loadDiagramElements() {
    diagramVersions[reactVersion].then(setDiagramElements);
  }

  useEffect(loadDiagramElements, [reactVersion]);

  if (!diagramElements) {
    return null;
  }

  const { Mounting, Updating, Unmounting } = diagramElements;

  return (
    <>
      <h2 className="hidden">Component lifecycle</h2>
      <Mounting advanced={advanced} />
      <Updating advanced={advanced} />
      <Unmounting advanced={advanced} />
    </>
  );
}
