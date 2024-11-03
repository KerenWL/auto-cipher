import type { Cipher } from "../cipher"
import { ALPHABET, modulo } from "../libs"

function generateCipherAlphabet(keyword: string, keyletter?: string) {
	keyword = keyword.toUpperCase()

	const unique_keyword = [...new Set(keyword.split(''))]
	let new_alphabet = unique_keyword.join('') + ALPHABET.split('').filter(x => !unique_keyword.includes(x)).join('')

	if( keyletter ) {
		keyletter = keyletter.toUpperCase()
		if( keyletter.length !== 1 ) throw new Error("Invalid keyletter")

		const shift_amount = ALPHABET.indexOf(keyletter)
		new_alphabet = new_alphabet.split('').map((_,i,a) => a[modulo(i-shift_amount,ALPHABET.length)]).join('')
	}

	return new_alphabet
}

export class GiovanniCipher implements Cipher {
	private Alphabet: string;

	constructor(keyword: string, keyletter: string) {
		this.Alphabet = generateCipherAlphabet(keyword, keyletter)
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
