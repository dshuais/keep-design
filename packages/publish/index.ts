import run from "../utils/run";
import { pkgPath } from "../utils/paths";
import { series } from "gulp";

export const publishComponent = async () => {
  console.log(`${pkgPath}\\keepDesign`);

  run("release-it", `${pkgPath}\\keepDesign`)
}

export default series(async () => publishComponent());
