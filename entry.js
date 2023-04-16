(function() {
    const logPrefix = 'Google Search Autoreject: ';

    document.querySelectorAll('button').forEach(function (btn) {
        var match = false;

        if (btn.id == 'W0wltc') {
            console.log(logPrefix, 'button identified by id', btn);
            match = true;
        }

        if (! match && ['Respinge tot'].includes(btn.innerText.trim())) {
            console.log(logPrefix, 'button identified by text', btn);
            match = true;
        }

        if (match) {
            console.log(logPrefix, 'button click', btn);
             btn.click();
        }
    });
})();
