(() => {
	// set up the puzzle pieces and boards
	const puzzleButtons = document.querySelectorAll('#buttonHolder img'),
		puzzlePieces = document.querySelectorAll('.puzzle-pieces img'),
		dropZones = document.querySelectorAll('.drop-zone'),
				gameBoard = document.querySelector('.puzzle-board');

	const pieceNames = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

	function changeImageSet() {
		//change all the image elements on the page -> draggable image sources,
		pieceNames.forEach((piece, index) => {
			puzzlePieces[index].src = `images/${piece + this.dataset.puzzleref}.jpg`;
			puzzlePieces[index].id = `${piece + this.dataset.puzzleref}.jpg`;
		});

		// and set the drop zone background
		gameBoard.style.backgroundImage = `url(images/backGround${this.dataset.puzzleref}.jpg)`;
		//debugger;
	}

	function allowDrag(event) {
		console.log('started dragging');

		event.dataTransfer.setData("text/plain", this.id);
	}
	function allowDragOver(event) {
		event.preventDefault();
		console.log('drag over');
	}
	function allowDrop(event) {

		console.log('dropped');

		let currentImage = event.dataTransfer.getData("text/plain");

		event.target.appendChild(document.querySelector(`#${currentImage}`));

	}


	// add event handling here -> how is the user going to use our app?
	// what triggers do we need

	// click on the bottom buttons to change the puzzle image we're working with
	puzzleButtons.forEach(button => button.addEventListener('click', changeImageSet));
	puzzlePieces.forEach(piece => piece.addEventListener('dragstart', allowDrag));

	dropZones.forEach(zone => {
		zone.addEventListener('dragover', allowDragOver);
		zone.addEventListener('drop', allowDrop);
	});

	//calling a function to focus on load
changeImageSet.call(puzzleButtons[0]);

})();
