$(function(){
	var winCellIndex =[

	// horizontal
	[0,1,2],[3,4,5],[6,7,8],
	// vertical
	[0,3,6],[1,4,7],[2,5,8],
	// diagonal
	[0,4,8],[2,4,6]

	]

	var selectedCells = {
		'x':[],
		'o':[]
	}

	var player = 'x';
	$(".gm-game__wrap").on("click",'.gm-game__cell:not(".cell-x, .cell-o")',oneStep);
	function oneStep(event){
		var $cell = $(event.currentTarget);
		$cell.addClass('gm-game__cell-' + player + ' offset-' + player);

		var indexCell = $(".gm-game__wrap .gm-game__cell").index($cell);

		var selectedCellsPlayer = selectedCells[player];

		selectedCellsPlayer.push(indexCell);

		checkWinner(selectedCellsPlayer);

		// console.log(selectedCells);

		if(player === 'x'){
			player = "o";
		} else {
			player = "x";
		}




		// console.log($cell);
	}
	function checkWinner(selectedCellsPlayer){
		for(var i = 0; i < winCellIndex.length; i++) {
			var allWinCells = true;

			for(var j = 0; j < winCellIndex[i].length; j++) {

				if($.inArray(winCellIndex[i][j], selectedCellsPlayer) === -1) {
					allWinCells = false;
				}

			}

			if(allWinCells){
				alert("Player " + player + " win!!!");
				$(".gm-game__wrap").off("click");

				// $(".gm-game__cell").each(function(ind, elem) {
				// 	if($.inArray(ind,winCellIndex[i]) !== -1) {
				// 		var cl = "win";
				// 		if( i <= 2)
				// 			cl += "0";
				// 		else if( i >= 3 && i<= 5)
				// 			cl += "1";
				// 		else
				// 			cl += ($.inArray(0, )) ? "2" : "3";
				// 	}
				// 	cl += " offset-"+player;
				// 	$(this).addClass(cl);
				// });

				break;
			}
			if(!allWinCells && $('.gm-game__cell:not(".cell-x, .cell-o")').length === 0) {
				alert("Ходов больше нет!");
				$(".gm-game__wrap").off("click");
				break;
			}

		}
	}

});