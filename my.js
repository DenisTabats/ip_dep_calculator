function square() {
    let out = document.getElementById('korni');

    let a = Number(document.getElementById('A').value) || 0;
    let b = Number(document.getElementById('B').value) || 0;
    let c = Number(document.getElementById('C').value) || 0;

    if (a === 0) {
        if (b === 0) {
            out.innerHTML = c === 0 ? 'Тождество 0 = 0 — корень любое число.' : 'Корней нет.';
        } else {
            out.innerHTML = 'a = 0, уравнение линейное, один корень:<br><b>x = ' + (-c / b).toFixed(2) + '</b>';
        }
        return;
    }

    let d = b * b - 4 * a * c;

    if (d > 0) {
        let s = Math.sqrt(d);
        let x1 = (-b + s) / (2 * a);
        let x2 = (-b - s) / (2 * a);
        out.innerHTML = 'D = ' + d.toFixed(2) + ' (D > 0) — два корня:<br>' +
                        '<b>x₁ = ' + x1.toFixed(2) + '</b><br>' +
                        '<b>x₂ = ' + x2.toFixed(2) + '</b>';
    } else if (d === 0) {
        out.innerHTML = 'D = 0 — один корень:<br><b>x = ' + (-b / (2 * a)).toFixed(2) + '</b>';
    } else {
        out.innerHTML = 'D = ' + d.toFixed(2) + ' (D < 0) — действительных корней нет.';
    }
}

function calculate() {
    let form = document.forms.calculator;

    let initial  = Number(form.money.value);
    let interest = Number(form.stavka.value) / 100;
    let years    = Number(form.months.value) / 12;

    let result = Math.round(initial * (1 + interest) ** years);

    document.getElementById('mon-before').textContent = initial;
    document.getElementById('mon-after').textContent  = result;

    let h = 100 * result / initial;
    document.getElementById('gist').style.height = Math.round(h) + 'px';
}

let f = document.forms.calculator;
f.money.oninput  = calculate;
f.months.onchange = calculate;
f.stavka.oninput = calculate;

calculate();