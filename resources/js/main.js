const changeLanguage = () => {
    var x = document.querySelectorAll('.js-language-select');
    x.forEach(e1 => {
        e1.className.split(' ').forEach(e2 => {
            if (e2 === 'active') {
                e1.classList.remove('active');
            }
            else {
                e1.classList.add('active');
            }
        })
    })

};


