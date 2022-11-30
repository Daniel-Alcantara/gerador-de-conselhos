$( document ).ready(function() {
    
    $( ".button_gender" ).click(function() {
        $.ajax({
            url: "https://api.adviceslip.com/advice",
            type: "GET",
        }).done(function (response) {
            var frase = JSON.parse(response)
            var numero_frase = frase.slip.id
            frase = frase.slip.advice
            console.log(frase)
            console.log(numero_frase) 

            $(".container_frase").text(frase)
            $(".container_frase").css("color", "white")
            $(".container_frase").css("margin-bottom", "2rem")

            $(".container_numero").text("ADVICE #" + numero_frase)
        })
    })
})