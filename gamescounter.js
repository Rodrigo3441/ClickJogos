const username = 'Oozaru341';
        const repo = 'Clickjogos-Pagegames-counter';

        // Função para contar as páginas HTML
        function contarPaginas() {
            fetch(`https://api.github.com/repos/${username}/${repo}/contents/`, {
                headers: {
                    Accept: 'application/vnd.github.v3+json'
                }
            })
            .then(response => response.json())
            .then(data => {
                const paginasHTML = data.filter(file => file.name.endsWith('.html'));
                document.getElementById("numero").textContent = paginasHTML.length;
            })
            .catch(error => {
                console.error(error);
                document.getElementById("numero").textContent = "Erro na contagem de páginas";
            });
        }

        contarPaginas(); // Chama a função para contar as páginas