function expandSearch() {
    var container = document.getElementById('search-container');
    var searchBar = document.getElementById('search-bar');
    if (container.classList.contains('expanded')) {
        container.classList.remove('expanded');
    } else {
        container.classList.add('expanded');
        searchBar.focus();
    }}