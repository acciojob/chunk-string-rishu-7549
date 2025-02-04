function stringChop(str, size) {
  // your code here
	 if (!str || typeof str !== "string") return [];
	let result = [];
	for (let index = 0; index < str.length; index += size) {
		result.push(str.slice(index, index+size));
	}
	return result;
}

// Do not change the code below
// const str = prompt("Enter String.");
// const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));


