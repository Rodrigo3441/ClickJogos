<?php
$directory = 'caminho/para/sua/pasta'; // Substitua pelo caminho da pasta onde estão os arquivos HTML
$files = glob($directory . '/*.html');
$numPages = count($files);

echo "Total de páginas HTML na pasta: " . $numPages;
?>
