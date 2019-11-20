import React, { useEffect, useState } from "react";

import T from "./i18n";

import DiagramWithLegend from "./DiagramWithLegend";


function getLocalStorage(key, defaultValue) {
  return key in localStorage ? localStorage[key] : defaultValue;
}

function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(getLocalStorage(key, defaultValue));
  useEffect(() => {
    try {
      localStorage[key] = value;
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("Failed to safe settings.");
    }
  }, [value]);
  return [value, setValue];
}
function useLocalStorageFlag(key, defaultValue) {
  const [value, setValue] = useLocalStorage(key, defaultValue);
  const valueBoolean = typeof value === "boolean" ? value : value === "true";
  function onChange(valueOrFunction) {
    setValue(
      typeof valueOrFunction === "function"
        ? valueOrFunction(valueBoolean)
        : valueOrFunction
    );
  }
  return [valueBoolean, onChange];
}

const latestReactVersion = "16.3";

export default function Root() {
  const [advanced, setAdvanced] = useLocalStorageFlag("showAdvanced", false);
  // const [locale, setLocale] = useLocalStorage('locale', userLocale);
  const [reactVersion, setReactVersion] = useLocalStorage(
    "reactVersion",
    latestReactVersion
  );

  function toggleAdvanced() {
    setAdvanced(prevAdvanced => !prevAdvanced);
  }

  function toggleLocale(event) {
    // const { value } = event.target;
    // setLocale(value);
  }

  function toggleReactVersion(event) {
    const { value } = event.target;
    setReactVersion(value);
  }

  // useEffect(() => {
  //   setLocaleToDocument(locale);
  // }, [locale]);

  return (
    <div>
      <h1>
        <T>React lifecycle methods diagram</T>
      </h1>
      <DiagramWithLegend advanced={advanced} reactVersion={reactVersion} />
    </div>
  );
}
