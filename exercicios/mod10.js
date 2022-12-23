$(document).ready(function(){
    $("#telefone").mask("(00) 00000-0000",{placeholder: "(00) 00000-0000"});
    $("#CPF").mask("000.000.000-00",{placeholder: "000.000.000-00"});
    $("#CEP").mask("00.000-000",{placeholder: "00.000-000"});

    $("form").validate({
        rules: {
            nomeCompleto:{
                required: true
            },
            email:{
                required: true,
                email: true
            },
            telefone:{
                required: true
            }
        },
        messages:{
            nomeCompleto: 'Por favor, insira o seu nome.'
        }
    })
});
