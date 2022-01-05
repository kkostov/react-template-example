import React, { useEffect } from "react";

import useViewModel from "./SpacecraftListViewModel";

export default function SpacecraftList() {
  const { spacecrafts, error, showError, getSpacecrafts } = useViewModel();

  useEffect(() => {
    getSpacecrafts();
  }, []);

  if (showError) {
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
