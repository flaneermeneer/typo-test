var btnAfzender = document.querySelector('button')
var P = document.querySelector('.displaytekst')
var Tekst = ''


btnAfzender.addEventListener('click', function () {

    var Input = document.querySelector('input').value

    if (!Input) {

        console.log('geen input')
        
        P.textContent = "Tik ff wat in dan"

    } else {
        P.textContent = Tekst + Input


    }


})
//a s