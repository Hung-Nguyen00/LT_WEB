const first_value = document.querySelector('.first_value'),
    second_value = document.querySelector('.second_value'),
    third_value = document.querySelector('.third_value'),
    run = document.querySelector('.run'),
    result = document.querySelector('.result');

run.addEventListener('click', () => {
    var a = first_value.value,
        b = second_value.value,
        c = third_value.value;
    result.textContent = "";
    if (a === "" || c === "" || b === "") {
        result.style.color = "red";
        result.textContent = "Not empty";
    } else if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
        let denta = (b * b) - (4 * a * c);
        let out_put = document.createElement('p');
        console.log(denta);
        if (denta < 0) {
            result.style.color = "red";
            result.textContent = "Phương trình vô nghiệm";
        } else if (denta === 0) {
            let x = (-b) / 2 * a;
            result.style.color = "green";
            result.textContent = "Phương trình có nghiệp kép x1 = x2 = " + x;
        } else {
            let x1 = (-b + Math.sqrt(denta)) / 2 * a;
            let x2 = (-b - Math.sqrt(denta)) / 2 * a;
            result.style.color = "green";
            result.textContent = "X1: " + x1.toFixed(2) + " || " + "X2: " + x2.toFixed(2);
        }
    }
})

// ---------------------pagination

const paginate_parent = document.querySelector('.paginate-parent'),
    paginate = document.querySelector('.paginate'),
    totalItems = document.querySelectorAll('.item');

paginate.addEventListener('click', (e) => {
    if (e.target.classList.contains('paginate-item') && !e.target.classList.contains('active')) {
        paginate.querySelector('.active').classList.remove('active');

        e.target.classList.add('active');
        const target = e.target.getAttribute('data-attr')
        totalItems.forEach((item) => {
            if (target === item.getAttribute('data-attr') && target !== 'drop-menu') {
                item.style.display = "block";
            } else if (target === item.getAttribute('data-attr') && target === 'drop-menu') {
                item.style.display = "flex";
            } else {
                item.style.display = "none";
            }
        })
    }
})