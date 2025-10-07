document.addEventListener('DOMContentLoaded', function() {
    const tocContainer = document.getElementById('table-of-contents');
    const contentDiv = document.getElementById('text-to-read');

    if (!tocContainer || !contentDiv) {
        return; // Exit if TOC container or content div not found
    }

    const headings = contentDiv.querySelectorAll('h2, h3');
    let tocList = document.createElement('ul');
    tocList.className = 'toc-list';

    headings.forEach((heading, index) => {
        // Ensure each heading has an ID
        if (!heading.id) {
            heading.id = 'section-' + index; // Generate a unique ID
        }

        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = '#' + heading.id;
        link.textContent = heading.textContent;

        if (heading.tagName === 'H3') {
            listItem.classList.add('toc-h3');
        } else {
            listItem.classList.add('toc-h2');
        }

        listItem.appendChild(link);
        tocList.appendChild(listItem);
    });

    tocContainer.appendChild(tocList);
});
