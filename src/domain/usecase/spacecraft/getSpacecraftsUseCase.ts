import SpacecraftAdapter from "../../../data/adapter/SpaceCraftSource";
import { Spacecraft } from "../../model/Spacecraft";

interface GetSpacecraftsUseCaseResult {
  spacecrafts: Array<Spacecraft>;
  error?: string;
}

const getSpacecraftsUseCase =
  async (): Promise<GetSpacecraftsUseCaseResult> => {
    console.log("loading...");
    try {
      const adapter = new SpacecraftAdapter();
      const data = await adapter.load();
      return { spacecrafts: data.spacecrafts };
    } catch (err) {
      return { spacecrafts: [], error: `${err}` };
    }
  };

export default getSpacecraftsUseCase;
