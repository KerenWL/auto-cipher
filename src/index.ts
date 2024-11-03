import clipboard from "clipboardy"
import { CaesarCipher } from "./ciphers/caesar";
import { GiovanniCipher } from "./ciphers/giovanni";
import { KeywordCipher } from "./ciphers/keyword";
import { RailfenceCipher } from "./ciphers/railfence";

const caesar = new CaesarCipher(3)
const keyword = new KeywordCipher("METHODS")
const giovanni = new GiovanniCipher("METHODS", "c")
const railfence = new RailfenceCipher()

const INPUT = process.argv.slice(2).join(' ')
console.log("Generating ciphers for input: " + INPUT)

clipboard.writeSync(`${caesar.encode(INPUT)}\t${keyword.encode(INPUT)}\t${giovanni.encode(INPUT)}\t${railfence.encode(INPUT)}`)
