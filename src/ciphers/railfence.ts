import type { Cipher } from "../cipher"

export class RailfenceCipher implements Cipher {
	constructor() {
	}	

	encode(input: string): string {
		input = input.toUpperCase().replace(/\s/g,'')

		const even = input.split('').filter((_, i) => i % 2 === 0).join('')
		const odd = input.split('').filter((_, i) => i % 2 !== 0).join('')

		return even + odd
	}

	decode(input: string): string {
		const input_half = Math.ceil(input.length / 2)
		const text = new Array(input.length).fill('')

		for(let i = 0; i < input.length; i++) {
			if( i < input_half ) {
				const top_index = i * 2
				text[top_index] = input[i]
			}
			else {
				const bottom_index = ((i - input_half) * 2)
				text[bottom_index + 1] = input[i]
			}
		}
		
		return text.join('')
	}
}
