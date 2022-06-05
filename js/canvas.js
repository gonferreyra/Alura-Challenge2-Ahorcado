// Variable
const board = canvasHangman.getContext("2d");

function drawLines(mistakes) {
  switch (mistakes) {
    case 1:
      board.lineWidth = 5;
      board.beginPath();
      board.arc(100, 50, 25, 0, Math.PI * 2, true);
      board.closePath();
      board.stroke();
      break;

    case 2:
      board.beginPath();
      board.moveTo(100, 75);
      board.lineTo(100, 140);
      board.stroke();
      break;

    case 3:
      board.beginPath();
      board.moveTo(100, 85);
      board.lineTo(60, 100);
      board.stroke();
      break;

    case 4:
      board.beginPath();
      board.moveTo(100, 85);
      board.lineTo(140, 100);
      board.stroke();
      break;

    case 5:
      board.beginPath();
      board.moveTo(100, 140);
      board.lineTo(80, 190);
      board.stroke();
      break;

    case 6:
      board.beginPath();
      board.moveTo(82, 190);
      board.lineTo(70, 185);
      board.stroke();
      break;

    case 7:
      board.beginPath();
      board.moveTo(100, 140);
      board.lineTo(125, 190);
      board.stroke();
      break;

    case 8:
      board.beginPath();
      board.moveTo(122, 190);
      board.lineTo(135, 185);
      board.stroke();
      break;
    default:
      break;
  }
};