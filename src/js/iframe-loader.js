const loadIframeOnObserve = (element, src, title, className) => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                observer.disconnect();

                const loadingEl = document.createElement('div');
                loadingEl.innerText = 'Loading...';
                loadingEl.className = 'flex align-center justify-center h-100';

                const iframeEl = document.createElement('iframe');
                iframeEl.title = title;
                iframeEl.src = src;
                iframeEl.className = className;
                iframeEl.style.display = 'none';

                element.appendChild(loadingEl);
                element.appendChild(iframeEl);

                iframeEl.addEventListener('load', () => {
                    element.removeChild(loadingEl);
                    iframeEl.style.display = 'block';
                });
            }
        });
    }, {
        rootMargin: '200px',
    });
    observer.observe(element);
};
