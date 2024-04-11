window.onscroll = () => getScrollPosition();

const getScrollPosition = () => {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        document.getElementById('body').className = 'scrolled';
    } else {
        document.getElementById('body').className = '';
    }
}