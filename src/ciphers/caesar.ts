import type { Cipher } from "../cipher"
import { ALPHABET, modulo } from "../libs"

function generateCipherAlphabet(shift: number) {
	return ALPHABET.split('').map((_,i,a) => a[modulo(i+shift,ALPHABET.length)]).join('')
}

export class CaesarCipher implements Cipher {
	private Alphabet: string;

	constructor(shift: number) {
		this.Alphabet = generateCipherAlphabet(shift)
	}	

	encode(input: string): string {
		return input.toUpperCase().split('').map(l => {
			if( ALPHABET.indexOf(l) > -1 ) return this.Alphabet[ALPHABET.indexOf(l)]
			return l
		}).join('')
	}

	decode(input: string): string {
		return input.toUpperCase().split('').map(l => {
			if( ALPHABET.indexOf(l) > -1 ) return ALPHABET[this.Alphabet.indexOf(l)] 
			return l
		}).join('')
	}
}
