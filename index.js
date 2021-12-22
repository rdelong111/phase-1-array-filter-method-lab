function findMatching(x, s) {
	return x.filter(matS => matS.toUpperCase() === s.toUpperCase());
}

function fuzzyMatch(x, s) {
	return x.filter(matS => matS.indexOf(s) === 0);
}

function matchName(x, s) {
	return x.filter(nameprop => nameprop.name === s);
}