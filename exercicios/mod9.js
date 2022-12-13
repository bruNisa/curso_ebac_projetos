$(document).ready(function(){
    $("form").on("submit", function(e){
        e.preventDefault();

        const nomeDaTarefa = $("#input-nome-tarefa").val();
        const novaTarefa = $(`<li id="${Math.random().toFixed(3) *1000}">${nomeDaTarefa}</li>`);
        $("#lista-de-tarefas").append(novaTarefa);
        console.log(novaTarefa);
        $("#input-nome-tarefa").val("");
    })

    /*
    $("#lista-de-tarefas li").click(function(this){
        
        console.log($(this).css("extDecorationLineThrough"));
        $("#lista-de-tarefas li").last().addClass( "selected highlight" );
        console.log( $("#lista-de-tarefas li").ready(function(e){

        })
    })
    */

    $("#lista-de-tarefas li").click(function(){
        console.log("classe");
        let classe = this.className;
        let ident = $(this).attr("id");
        console.log("classe");
        console.log(ident);
    })


})