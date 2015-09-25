(function () {
  'use strict';

  describe('main spec', function () {
    it('4 x 4 ', function () {
      var out = window.MineSweeper(4, 4, ['*...', '....', '.*..', '....']);
      expect(out).to.be.equal(['*100', '2210', '1*10', '1110']);
    });
  });

})();
