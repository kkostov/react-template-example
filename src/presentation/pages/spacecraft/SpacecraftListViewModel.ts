import { useState } from "react";
import { Spacecraft } from "../../../domain/model/Spacecraft";
import getSpaceCraftsUseCase from "../../../domain/usecase/spacecraft/getSpacecraftsUseCase";

export default function SpacecraftListViewModel() {
  const [showError, setShowError] = useState(false);
  const [error, setError] = useState("");
  const [spacecrafts, setSpacecrafts] = useState<Array<Spacecraft>>([]);

  async function getSpacecrafts() {
    const result = await getSpaceCraftsUseCase();
    setError(result.error ?? "");
    setShowError(!!result.error);
    setSpacecrafts(result.spacecrafts);
  }

  return {
    error,
    showError,
    spacecrafts,
    getSpacecrafts,
  };
}
