function verificar(){
   
    var data = new Date()
    var ano = data.getFullYear()
    
    var fano = window.document.getElementById("txtano")
    var res = window.document.getElementById("res")


    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert("ERRO! Verifique a data e tente novamente ")
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ``

        var img = document.createElement("img")
        img.setAttribute("id", "foto")

        if(fsex[0].checked){
            genero = `Homem`
            if(idade >= 0 && idade < 12){
                // criança
                img.setAttribute("src","mmenino.png") 
            }else if(idade < 21){
                // jovem
                img.setAttribute('src','mjovem.png') 
            }else if(idade < 65){
                // adulto
                img.setAttribute('src','madulto.png')
            }else{
                // Idoso
                img.setAttribute('src','msenhor.png')
            }

        }else if(fsex[1].checked){
            genero = "Mulher"

            if(idade >= 0 && idade < 12){
                // criança
                img.setAttribute('src','fmenina.png')
            }else if(idade < 21){
                // jovem
                img.setAttribute('src','fjovem.png')
            }else if(idade < 65){
                // adulto
                img.setAttribute('src','fadulta.png')
            }else{
                // Idoso
                img.setAttribute("src","fsenhora.png")
            }
            }
    }   
    
    res.style.textAlign = "center"
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img) 


}