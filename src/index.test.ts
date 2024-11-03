import { expect, test } from "bun:test"
import { CaesarCipher } from "./ciphers/caesar";
import { GiovanniCipher } from "./ciphers/giovanni";
import { KeywordCipher } from "./ciphers/keyword";
import { RailfenceCipher } from "./ciphers/railfence";

test("Caesar Cipher", () =>{
	const cipher = new CaesarCipher(1)
	const input = "DEFEND THE EAST WALL OF THE CASTLE"
	const encoded = "EFGFOE UIF FBTU XBMM PG UIF DBTUMF"

	const output = cipher.encode(input)
	expect(output).toBe(encoded)
	expect(cipher.decode(output)).toBe(input)
})

test("Keyword Cipher", () => {
	const cipher = new KeywordCipher("College")
	const input = "UNIVERSITY"
	const encoded = "UMFVGRSFTY"

	const output = cipher.encode(input)
	expect(output).toBe(encoded)
	expect(cipher.decode(output)).toBe(input)
})

test("Giovanni Cipher", () => {
	const cipher = new GiovanniCipher("College", "p")
	const input = "UNIVERSITY"
	const encoded = "AYTBPLETGH"

	const output = cipher.encode(input)
	expect(output).toBe(encoded)
	expect(cipher.decode(output)).toBe(input)
})

test("Rail Fence Cipher (Even)", () => {
	const cipher = new RailfenceCipher()
	const input = "ABCD"
	const encoded = "ACBD"

	const output = cipher.encode(input)
	expect(output).toBe(encoded)
	expect(cipher.decode(output)).toBe(input)
})
test("Rail Fence Cipher (Odd)", () => {
	const cipher = new RailfenceCipher()
	const input = "ABCDE"
	const encoded = "ACEBD"

	const output = cipher.encode(input)
	expect(output).toBe(encoded)
	expect(cipher.decode(output)).toBe(input)
})

test("Rail Fence Cipher", () => {
	const cipher = new RailfenceCipher()
	const input = "MEET ME AFTER THE TOGA PARTY"
	const encoded = "MEMATRHTGPRYETEFETEOAAT"

	const output = cipher.encode(input)
	expect(output).toBe(encoded)
	expect(cipher.decode(output)).toBe(input.replace(/\s/g,''))
})
