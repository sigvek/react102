import * as sortingType from './sortingTypes';

export function authorsFormattedForDropdown(authors) {
  return authors.map(author => {
    return {
      value: author.id,
      text: author.firstName + ' ' + author.lastName
    };
  });
}

export function sortfunctionsByType(sortType) {
  switch (sortType) {
    case sortingType.SORT_BY_CATEGORY:
      return (a, b) => { return a.category > b.category; };

      case sortingType.SORT_BY_TITLE:
      return (a, b) => { return a.title > b.title; };

    default:
      return (a, b) => { return a.title > b.title; };
  }
}
