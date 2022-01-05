import React, { useEffect } from "react";

import useViewModel from "./SpacecraftListViewModel";

export default function SpacecraftList() {
  const { spacecrafts, error, getSpacecrafts } = useViewModel();

  useEffect(() => {
    getSpacecrafts();
  }, []);

  if (error && error !== "") {
    return <p>Boom! {error}</p>;
  }
  return (
    <ul>
      {spacecrafts.map((item, i) => (
        <li key={i}>{item.name}</li>
      ))}
    </ul>
  );
}
