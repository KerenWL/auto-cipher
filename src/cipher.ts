export interface Cipher {
	encode(input: string): string;
	decode(input: string): string;
}
