var a = 0;
var b = 0;
var version = 'Developer Preview 0.3.8';
function addMonster (value) {
  for(var i = 1; i <= value; i++) {
    monster = document.createElement('div');
    monster.id = a++;
    monster.setAttribute('onclick', 'remove('+b+++')');
    monster.setAttribute('class', 'husky');
    //Need rewrite
    monster.style.left = Math.floor( ( Math.random( ) * 95 ) + 1) +"%";
    monster.style.top = 5 + Math.floor( ( Math.random( ) * 5 ) + 1 ) + "%";
    //End rewrite
    document.body.appendChild(monster);
  }
}
function remove ( id ) {
  monster = document.getElementById(id);
  monster.parentNode.removeChild(monster);
  addPoints();
  addMonster(1);
}
function addPoints ( ) {
  score = parseInt(document.getElementById("points").innerHTML);
  level = document.getElementById("level").innerHTML;
  points = score + 10;
	if(points % 100 == 0) { // co 100 zabitych nowy level
		levelUp(parseInt(level) + 1);
	}
  document.getElementById('points').innerHTML = points;
}
function levelUp (num) {
	document.getElementById('level').innerHTML = num;
  
  addMonster(1);
}
/* Sample achievment system */
function achievment( level, points ) {
  if( points >= 100 ) {
    //Killer I
  } else if( points >= 200 ) {
    //Killer II
  } else if( points >= 300 ) {
    //Killer III
  }
  if( level >= 1) {
    //Farmer I
  } else if( level >= 2 ) {
    //Farmer II
  } else if( level >= 3 ) {
    //Farmer III
  }
}
