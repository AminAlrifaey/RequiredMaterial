document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-btn');
    const subjectsGrid = document.getElementById('subjectsGrid');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            tab.classList.add('active');

            // Apply filter
            const filter = tab.dataset.filter;
            if (filter === 'specialist') {
                subjectsGrid.classList.remove('filter-non-specialist');
            } else {
                subjectsGrid.classList.add('filter-non-specialist');
            }
        });
    });
});
