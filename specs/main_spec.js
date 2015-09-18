(function () {
  'use strict';

  describe('main spec', function () {
    it('4 x 4 ', function () {
      var out = window.MineSweeper(4, 4, ['*...', '....', '.*..', '....']);
      expect(out).to.be.deep.equal(['*100', '2210', '1*10', '1110']);
    });

    it('4 x 4 ', function () {
      var out = window.MineSweeper(4, 4, ['..*.', '....', '.*..', '....']);
      expect(out).to.be.deep.equal(['01*1', '1221', '1*10', '1110']);
    });

    it('5 x 2', function () {
      var out = window.MineSweeper(5, 2, ['..', '..', '.*', '..', '..']);
      expect(out).to.be.deep.equal(['00', '11', '1*', '11', '00']);
    });

    context('2 x 2', function () {
      it('support only one mine', function () {
        var out = window.MineSweeper(2, 2, ['.*', '..']);
        expect(out).to.be.deep.equal(['1*', '11']);
      });

      it('support only zero mine', function () {
        var out = window.MineSweeper(2, 2, ['..', '..']);
        expect(out).to.be.deep.equal(['00', '00']);
      });
    });

    context('on argument mismatch', function () {
      it('should throw an error if the row dimensions of the map are not the dimensions of the data', function() {
          (function() { window.MineSweeper(2, 3, ['.*', '..']); }).should.throw();
      });

      it('should throw an error if the column dimensions of the map are not the dimensions of the data', function() {
          (function() { window.MineSweeper(4, 2, ['.*', '..']); }).should.throw();
      });

    });

    context('view', function() {
      it('should render a table', function() {
        var out = window.MineSweeper.render(['00', '00']);
        out.querySelectorAll('tr').should.have.length(2);
        out.querySelectorAll('td').should.have.length(4);
        out.querySelectorAll('.hidden').should.have.length(4);
      });
    });
  });
})();
