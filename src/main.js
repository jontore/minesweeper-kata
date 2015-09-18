(function () {
  'use strict';

  var isMine = R.curry(function(map, x, y) {
    if (x < 0 || y < 0 || (y + 1) > map.length || (x + 1) > map[0].length) {
      return 0;
    }

    return map[y][x] === '*' ? 1 : 0;
  });

  var countNeighboursMine = function(map, x, y) {
    var isYours = isMine(map);
    return isYours(x - 1, y - 1) + isYours(x - 1, y) + isYours(x - 1, y + 1)
         + isYours(x    , y - 1) +                     isYours(x    , y + 1)
         + isYours(x + 1, y - 1) + isYours(x + 1, y) + isYours(x + 1, y + 1);
  };

  window.MineSweeper = function (n, m, map) {
    if (m !== map[0].length || n !== map.length) {
      throw new Error('Wait what that does not match');
    }

    map = map.map(R.split(''));
    return map.map(function(mines, y) {
      return mines
        .map(function(min, x) {
          return isMine(map, x, y) ? '*' : countNeighboursMine(map, x, y);
        })
        .join('');
    });
  };

  window.MineSweeper.render = function (map) {
    var el = document.createElement('table');
    var template = map.map(function (row) {
      return '<tr>' + row.split('').map(function (mineCount) {
        return '<td class="hidden">' + mineCount + '</td>';
      }).join('')
      + '</tr>';
    }).join('');

    el.innerHTML = template;
    return el;
  };
})();
