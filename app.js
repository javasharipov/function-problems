{
	// masala 1 method 1
	function greet() {
		let name = 'yormat'
		console.log(`HI ${name}`)
	}

	greet()
}
{
	// masala 1 method 2

	const greet = function () {
		let name = 'javohir'
		console.log(`${name} Hi `)
	}
	greet()
}

{
	const greet = () => {
		let name = 'Javohir'
		console.log(`${name} how are you`)
	}
	greet()
}

{
	// masala 2 method 1
	function rangeArray() {
		let result = []
		let a = 3,
			b = 8
		for (i = a; i <= b; i++) {
			result.push(i)
		}
		return result
	}
	console.log(rangeArray(3, 8))
}

{
	// masala 2 method 2
	const rangeArray = function () {
		let result = []
		let a = 3,
			b = 10
		for (i = a; i <= b; i++) {
			result.push(i)
		}
		return result
	}
	console.log(rangeArray(3, 10))
}

{
	// masala 2 method 3
	const rangeArray = () => {
		let result = []
		let a = 5,
			b = 12
		for (i = a; i <= b; i++) {
			result.push(i)
		}
		return result
	}
	console.log(rangeArray(3, 10))
}

{
	// masala 3 method 1
	function trueOrFalse(bool) {
		return bool ? 1 : 0
	}
	console.log(trueOrFalse(false), trueOrFalse(false))
}

{
	// masala 3 method 2
	const trueOrFalse = function (bool) {
		return bool ? 1 : 0
	}
	console.log(trueOrFalse(false), trueOrFalse(true))
}

{
	// masala 3 method 3
	const trueOrFalse = bool => {
		return bool ? 1 : 0
	}
	console.log(trueOrFalse(true), trueOrFalse(true))
}

{
	// masala 4 method 4
	function firstLetterName(name) {
		return name.charAt(0)
	}
	console.log(firstLetterName('Javohir'))
}

{
	// masala 4 method 2
	const firstLetterName = function (name) {
		return name.charAt(0)
	}
	console.log(firstLetterName('Javohir'))
}

{
	// masala 4 method 3
	const firstLetterName = name => {
		return name.charAt(0)
	}
	console.log(firstLetterName('Javohir'))
}

{
	// masala 5 method 1
	function sum(...numbers) {
		let total = 0
		for (let number of numbers) {
			total += number
		}
		return total
	}

	console.log(sum(5, 3, 7))
}

{
	// masala 5 method 2
	const sum = (...numbers) => {
		return numbers.reduce((total, number) => total + number, 0)
	}

	console.log(sum(5, 3, 7))
	// XUddi shu masalani you tube dan ko`rib qildim
}
