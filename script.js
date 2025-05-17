document.addEventListener('DOMContentLoaded', function () {
    const grid = document.querySelector('.grid');
    new Masonry(grid, {
      itemSelector: '.card',
      columnWidth: '.card',
      percentPosition: true,
      gutter: 20
    });
  });
  