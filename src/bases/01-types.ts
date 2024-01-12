export let name: string = 'Bill';

export const age: number = 20;

export const isValid: boolean = true;

name = "Patrick";


export const templateString = ` Esto es un string multilinea 
que puede tener

" dobles
'simple
inyectar valores ${name}
expresiones ${1+1}
nuemors: ${age}
bollernasos: ${isValid}`

console.log( templateString )