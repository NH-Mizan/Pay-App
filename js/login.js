document.getElementById('btn-login').addEventListener('click', function(event){
    console.log('btn-click');
    event.preventDefault();

    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber);
    const pinNumber = document.getElementById('pin-number').value;
    if(phoneNumber ==='01783156390' && pinNumber === '1234'){
         window.location.href='home.html'
    }else{
        alert('Rong Information vai')
    }
    

})




