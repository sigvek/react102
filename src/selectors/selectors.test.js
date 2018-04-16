import expect from 'expect';
import { authorsFormattedForDropdown } from './selectors';

describe('Author Selectors', () => {
  describe('authorsFormattedForDropdown', () => {
    it('should return author data formatted for use in a dropdown.', () => {
      const authors = [
        {id: 'cory-house', firstName: 'Cory', lastName: 'House'},
        {id: 'sigve-k', firstName: 'Sigve', lastName: 'Kringstad'}
      ];

      const expected = [
        {value: 'cory-house', text: 'Cory House'},
        {value: 'sigve-k', text: 'Sigve Kringstad'}
      ];

      expect(authorsFormattedForDropdown(authors)).toEqual(expected);
    });
  });
});
