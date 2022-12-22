$(document).ready(function(){
    $("form").on("submit", function(e){
        e.preventDefault();

        adicionaTarefa();
    })

    $("ul").on("click","li",function(){
        $(this).css("text-decoration", "line-through");
    })
})

function adicionaTarefa(){
    const nomeDaTarefa = $("#input-nome-tarefa").val();
    const novaTarefa = $(`<li></li>`);
    $(novaTarefa).append(nomeDaTarefa);
    $("#lista-de-tarefas").append(novaTarefa);
    
    $("#input-nome-tarefa").val("");
}