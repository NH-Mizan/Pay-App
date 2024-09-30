function hiddenAllSection(id) {
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-money-form').classList.add('hidden');
    document.getElementById('list-history').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}
document.getElementById('btn-show-add-money').addEventListener('click', function () {


    document.getElementById('btn-show-cash-out-money').classList.remove('btn-secondary')
    document.getElementById('btn-show-add-money').classList.add('btn-secondary')
    hiddenAllSection('add-money-form')
})
document.getElementById('btn-show-cash-out-money').addEventListener('click', function () {


    document.getElementById('btn-show-add-money').classList.remove('btn-secondary')
    document.getElementById('btn-show-cash-out-money').classList.add('btn-secondary')
    hiddenAllSection('cash-out-money-form')


})
document.getElementById('btn-show-history').addEventListener('click', function () {
    hiddenAllSection('list-history')
})

document.getElementById('home-return').addEventListener('click', function () {
    window.location.href = "index.html"
})



// add money section js----------------

document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();


    const addMoneyInput = document.getElementById('input-add-money').value;
    const addPinNumber = document.getElementById('input-pin-number').value;

    if(isNaN(addMoneyInput)){
        alert('Faild Cash Out ');
        return
    }
    if (addPinNumber === '1234') {
        const balance = document.getElementById('balance').innerText;


        const addMoney = parseFloat(addMoneyInput);
        const addBalance = parseFloat(balance);

        const newBalance = addBalance + addMoney;

        document.getElementById('balance').innerHTML = newBalance;



        // add to history
        const p = document.createElement('p');
        p.innerText = `Added : ${addMoney} Tk.   Balance : ${newBalance}`;
        document.getElementById('History-container').appendChild(p);
        p.classList.add('bg-green-300')
        

    } else {
        alert('Faild Add Money')
    }
})


// cash out section js-------------------


document.getElementById('btn-cash-out').addEventListener('click', function (event) {
    event.preventDefault();

    const cashOutInput = document.getElementById('input-cash-out-money').value;
    const cashOutPin = document.getElementById('input-pin-cash-out').value;
    if(isNaN(cashOutInput)){
        alert('Faild Cash Out ');
        return;
    }

    if (cashOutPin === '1234') {
        const balance = document.getElementById('balance').innerText;
        const cashMoney = parseFloat(cashOutInput);
        const cashBalance = parseFloat(balance);
        const newBalance = cashBalance - cashMoney;
        document.getElementById('balance').innerHTML = newBalance;

        if(cashMoney > balance){
            alert('You do not enough money')
            return;
        }

        // cash out history
        const p = document.createElement('p');
        p.innerText = `Cash-Out : ${cashOutInput} Tk.   Balance : ${newBalance}`;
        document.getElementById('History-container').appendChild(p);
        p.classList.add('bg-red-300')

    } else {
        alert('Faild Cash Out Money')
    }
})