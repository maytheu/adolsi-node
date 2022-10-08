import { BankAccVerify } from "./bankAccVerify";
import { Base } from "./base";
import { applyMixins } from "./utils";

class Typicode extends Base {}
interface Typicode extends BankAccVerify {}

applyMixins(Typicode, [BankAccVerify]);

export default Typicode