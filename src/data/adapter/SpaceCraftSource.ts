import {
  SpaceCraftAdapter,
  SpaceCraftResult,
} from "../../domain/interfaces/SpaceCraftAdapter";

export default class SpaceCraftSource implements SpaceCraftAdapter {
  async load(): Promise<SpaceCraftResult> {
    const response = await fetch(
      "http://stapi.co/api/v1/rest/spacecraft/search"
    );
    return await response.json();
  }
}
