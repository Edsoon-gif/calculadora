function InsertToDisplay(data) {
    document.querySelector('#display').value += data;
}

function clean() {
    const display = document.querySelector('#display');
    display.value = '';
}

function back() {
    const display = document.querySelector('#display');
    display.value = display.value.slice(0, -1);
}

function btnResult() {
    const display = document.querySelector('#display');
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'error';
    }
}
