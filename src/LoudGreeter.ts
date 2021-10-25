import { Greeter } from "./Greeter";

export class LoudGreeter extends Greeter {
  extra: string = "!";
  greet(name: string) {
    return `${super.greet(name)}${this.extra}`;
  }
  addVolume(): void {
    this.extra += "!";
  }
}
