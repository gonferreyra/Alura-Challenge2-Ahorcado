function drawLines(mistakes) {
  switch (mistakes) {
    case 1:
      board.strokeStyle = '#0A3871';
      board.lineWidth = 10;
      board.beginPath();
      board.moveTo(175, 225);
      board.lineTo(5, 225);
      board.moveTo(40, 225);
      board.lineTo(25, 5);
      board.lineTo(100, 5);
      board.lineTo(100, 25);
      board.stroke();
    case 2:
      board.lineWidth = 5;
      board.beginPath();
      board.arc(100, 50, 25, 0, Math.PI * 2, true);
      board.closePath();
      board.stroke();
      break;

    case 3:
      board.beginPath();
      board.moveTo(100, 75);
      board.lineTo(100, 140);
      board.stroke();
      break;

    case 4:
      board.beginPath();
      board.moveTo(100, 85);
      board.lineTo(60, 100);
      board.stroke();
      break;

    case 5:
      board.beginPath();
      board.moveTo(100, 85);
      board.lineTo(140, 100);
      board.stroke();
      break;

    case 6:
      board.beginPath();
      board.moveTo(100, 140);
      board.lineTo(80, 190);
      board.stroke();
      break;

    case 7:
      board.beginPath();
      board.moveTo(82, 190);
      board.lineTo(70, 185);
      board.stroke();
      break;

    case 8:
      board.beginPath();
      board.moveTo(100, 140);
      board.lineTo(125, 190);
      board.stroke();
      break;

    case 9:
      board.beginPath();
      board.moveTo(122, 190);
      board.lineTo(135, 185);
      board.stroke();
      break;
    default:
      break;
  }
}

