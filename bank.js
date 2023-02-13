

// Path: dashboard.html
document.getElementById("depo").addEventListener("click", function () {
    const depo = document.getElementById("dipo_amount");
    const depoValue = parseFloat(depo.value);
    const depoCurrentTotal = document.getElementById("dipo_value");
    const depoCurrentTotalValue = parseFloat(depoCurrentTotal.innerText);
    depoCurrentTotal.innerText = depoValue + depoCurrentTotalValue;
    const balance = document.getElementById("balance_value");
    const bValue = parseFloat(balance.innerText);
    balance.innerText = bValue + depoValue;
    depo.value = '';
});
document.getElementById("with_btn").addEventListener("click", function () {
    const withdrow = document.getElementById("withdrow");
    const withdrowValue = parseFloat(withdrow.value);
    const withdrowCurrentTotal = document.getElementById("with_value");
    const withdrowCurrentTotalValue = parseFloat(withdrowCurrentTotal.innerText);
    withdrowCurrentTotal.innerText = withdrowValue;
    const balance = document.getElementById("balance_value");
    const bValue = parseFloat(balance.innerText);
    balance.innerText = bValue - withdrowValue;
    withdrow.value = '';
});


