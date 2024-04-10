window.onscroll = () => getScrollPosition();

const getScrollPosition = () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById('body').className = 'scrolled';
    } else {
        document.getElementById('body').className = '';
    }
}