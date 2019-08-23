var sidebar = document.getElementById('sidebar');
if (sidebar) {
    // Add outer classes to ul's
    sidebar.querySelectorAll('ul.children').forEach(function(el) {
        console.log(el);
        el.classList.add('uk-nav-sub');
    });

    // Add active classes if necessary
    let activePage = sidebar.querySelector('li.current_page_item');
    if (activePage) {
        activePage.classList.add('uk-active');
    }
}