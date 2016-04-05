var btn = document.getElementById('calculate');
	btn.addEventListener('click', renderResult, false);

function renderResult(e) {
	e.target.removeEventListener(e.type, renderResult);
	var firstRow = document.getElementById('firstRow').children,
		secondRow = document.getElementById('secondRow').children,
		thirdRow = document.getElementById('thirdRow').children,
		firstCol = document.getElementsByClassName('firstColumn'),
		secondCol = document.getElementsByClassName('secondColumn'),
		thirdCol = document.getElementsByClassName('thirdColumn'),
		tbody = document.getElementsByTagName('tbody')[0],
		tr = document.createElement('tr');

	document.getElementById('firstRow').appendChild(createTd(getSum(firstRow)));
	document.getElementById('secondRow').appendChild(createTd(getSum(secondRow)));
	document.getElementById('thirdRow').appendChild(createTd(getSum(thirdRow)));
	tr.appendChild(createTd(getSum(firstCol, true)));
	tr.appendChild(createTd(getSum(secondCol, true)));
	tr.appendChild(createTd(getSum(thirdCol, true)));
	tbody.insertBefore(tr, tbody.lastChild);

}
function createTd(val) {
	var td = document.createElement('td'),
	input = document.createElement('input'); 
	input.value = val;
	td.appendChild(input);
	return td;
}
function getSum (row, isInput = false) {
	var len = row.length,
	result = 0,
	val;
	for (var i = 0; i < len; i++) {
		if (isInput) {
			val = row[i].value;
		} else {
			val = row[i].getElementsByTagName('input')[0].value;
		}
		if (!val || !Number.isInteger(Number(val))) {
			return 'Not a valid number';
		}
		result += Number(val);
	}
	return result;
}