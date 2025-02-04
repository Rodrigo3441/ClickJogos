<?php
header("Content-Type: application/json");

// Pasta onde os arquivos dos jogos estão
$pasta = "jogos/";

// Obtém todos os arquivos .html dentro da pasta
$arquivos = glob($pasta . "*.html");

$jogos = [];

// Processa cada arquivo encontrado
foreach ($arquivos as $arquivo) {
    $nomeArquivo = basename($arquivo, ".html"); // Remove a extensão .html
    $nomeFormatado = str_replace("-", " ", ucfirst($nomeArquivo)); // Formata o nome (substitui - por espaço)
    
    // Adiciona o jogo à lista
    $jogos[] = [
        "nome" => $nomeFormatado,
        "url" => $arquivo
    ];
}

// Retorna os jogos em formato JSON
echo json_encode($jogos, JSON_UNESCAPED_UNICODE);
?>
