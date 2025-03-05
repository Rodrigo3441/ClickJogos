// Recupera o valor da pesquisa da URL
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const pesquisa = urlParams.get('q');  // 'q' é o nome do parâmetro no formulário

// Exibe o nome da pesquisa no título da página
document.getElementById('nomepesquisado').textContent = pesquisa;

// Lista de jogos (exemplo)
const jogos = [
    { nome: "Super Mario Flash", imagem: "categorias/jogos-do-mario/pg1/2.png", descricao: "O verdadeiro flash do Mario Bros", link: "jogos/supermarioflash.html" },
    { nome: "Konkey Dong", imagem: "categorias/jogos-do-mario/pg1/9.png", descricao: "Acerte barris em Mario e Luigi", link: "jogos/konkeydong.html" },
	{ nome: "Mario Box Jump", imagem: "categorias/jogos-do-mario/pg1/10.png", descricao: "Lance Mario até seu destino", link: "jogos/marioboxjump.html" },
	{ nome: "Super Mario Save Santa", imagem: "categorias/jogos-do-mario/pg1/11.png", descricao: "O bigodudo salva o barbudo", link: "jogos/supermariosavesanta.html" },
	{ nome: "Mario Battle Kart", imagem: "categorias/jogos-do-mario/pg1/12.png", descricao: "Batalhas iradas a bordo do kart", link: "jogos/mariobattlekart.html" },
	{ nome: "Mario Ice Treasure", imagem: "categorias/jogos-do-mario/pg1/13.png", descricao: "Crie uma rota segura para Mario", link: "jogos/marioicetreasure.html" },
	{ nome: "Mario Flash 4", imagem: "categorias/jogos-do-mario/pg1/14.png", descricao: "A aventura de Mario não termina", link: "jogos/marioflash4.html" },
	{ nome: "Mario In Trouble", imagem: "categorias/jogos-do-mario/pg1/15.png", descricao: "Suba até o topo da masmorra de lava", link: "jogos/mariointrouble.html" },
	{ nome: "Mario Maze", imagem: "categorias/jogos-do-mario/pg1/16.png", descricao: "Pegue as moedas dos labirintos", link: "jogos/mariomaze.html" },
	{ nome: "Mario Bike Challenge", imagem: "categorias/jogos-do-mario/pg1/17.png", descricao: "Vença as corridas com o Mario", link: "jogos/mariobikechallenge.html" },
	{ nome: "Toon Enduro Challenge", imagem: "categorias/jogos-do-mario/pg1/18.png", descricao: "Vença corridas de moto com o Mario", link: "jogos/toonendurochallenge.html" },
	{ nome: "Mario Jetski Race", imagem: "categorias/jogos-do-mario/pg1/19.png", descricao: "Corrida de Jet Ski em 3D com o Mario", link: "jogos/mariojetskirace.html" },
	{ nome: "Mario Sewing", imagem: "categorias/jogos-do-mario/pg1/20.png", descricao: "Borde Mario e toda sua turma", link: "jogos/nomedojogoaquimariosewing.html" },
	{ nome: "Mario Mini Moto", imagem: "categorias/jogos-do-mario/pg1/21.png", descricao: "Corridas de moto com Mario e amigos", link: "jogos/mariominimoto.html" },
	{ nome: "Mario Cart 2", imagem: "categorias/jogos-do-mario/pg1/22.png", descricao: "Corra em carrinhos de supermercado", link: "jogos/mariocart2.html" },
	{ nome: "Mario Lost in Space", imagem: "categorias/jogos-do-mario/pg1/23.png", descricao: "Pouse nas bases com um jet-pack", link: "jogos/mariolostinspace.html" },
	{ nome: "Rambo Bros", imagem: "categorias/jogos-do-mario/pg1/24.png", descricao: "Elimine inimigos com armas potentes", link: "jogos/rambobros.html" },
	{ nome: "Monolith's Mario World 2", imagem: "categorias/jogos-do-mario/pg1/25.png", descricao: "Novos estágios no clássico Mario Bros", link: "jogos/monolithsmarioworld2.html" },
	{ nome: "Mario BMX 3", imagem: "categorias/jogos-do-mario/pg1/26.png", descricao: "Ande de bike com amigos do Mario", link: "jogos/mariobmx3.html" },
	{ nome: "New Super Mario 2", imagem: "categorias/jogos-do-mario/pg1/27.png", descricao: "Pule em cima dos inimigos do Mario", link: "jogos/newsupermario2.html" },
  { nome: "Mario Street Fight", imagem: "categorias/jogos-do-mario/pg1/28.png", descricao: "Mistura de Mario e Street Fighter", link: "jogos/mariostreetfight.html" },
  { nome: "Mario BMX Adventure", imagem: "categorias/jogos-do-mario/pg1/29.png", descricao: "Realize manobras de bike com o Mario", link: "jogos/mariobmxadventure.html" },
  { nome: "Mario Rob Cheese", imagem: "categorias/jogos-do-mario/pg1/30.png", descricao: "Pegue o queijo antes do seu inimigo", link: "jogos/mariorobcheese.html" },
  { nome: "Mario Princess Kiss", imagem: "categorias/jogos-do-mario/pg1/31.png", descricao: "Alcance a princesa Peach no cenário", link: "jogos/marioprincesskiss.html" },
  { nome: "Mario & Luigi RPG Wariance", imagem: "categorias/jogos-do-mario/pg1/32.png", descricao: "Um RPG com a turma do Mario Bros", link: "jogos/mario&luigirpgwariance.html" },
  { nome: "Mario Tractor 4", imagem: "categorias/jogos-do-mario/pg1/33.png", descricao: "Carregue as moedas pelo cenário", link: "jogos/mariotractor4.html" },
  { nome: "Mario Beach Resort Mini Golf", imagem: "categorias/jogos-do-mario/pg1/34.png", descricao: "Acerte a bola de golfe no cano verde", link: "jogos/mariobeachresortminigolf.html" },
  { nome: "Mario Find Princess", imagem: "categorias/jogos-do-mario/pg1/35.png", descricao: "Empurre Mario com seu canhão", link: "jogos/mariofindprincess.html" },
  { nome: "Mario Motocross Mania 2", imagem: "categorias/jogos-do-mario/pg1/36.png", descricao: "Motocross com o famoso Super Mario", link: "jogos/mariomotocrossmania2.html" },
  { nome: "Mario Zombie Bomber", imagem: "categorias/jogos-do-mario/pg1/37.png", descricao: "Atire bombas em zumbis do mal", link: "jogos/mariozombiebomber.html" },
  { nome: "Mario Cloud Adventure", imagem: "categorias/jogos-do-mario/pg1/38.png", descricao: "Use nuvens para pular plataformas", link: "jogos/mariocloudadventure.html" },
  { nome: "Luigi Restaurants", imagem: "categorias/jogos-do-mario/pg1/39.png", descricao: "Sirva comida no restaurante do Luigi", link: "jogos/luigirestaurant.html" },
  { nome: "Mario Gun", imagem: "categorias/jogos-do-mario/pg1/40.png", descricao: "Use uma bazooka e destrua inimigos", link: "jogos/mariogun.html" },
  { nome: "Peach DressUp HD", imagem: "categorias/jogos-do-mario/pg1/41.png", descricao: "Mude o look da princesa Peach", link: "jogos/peachdressuphd.html" },
  { nome: "Mario Skypop Action", imagem: "categorias/jogos-do-mario/pg1/42.png", descricao: "Pilote um avião com o Super Mario", link: "jogos/marioskypopaction.html" },
  { nome: "Super Mario Bros Stars Scramble 3", imagem: "categorias/jogos-do-mario/pg1/43.png", descricao: "Ajude o Super Mario a pegar estrelas", link: "jogos/supermariostarscramble3.html" },
  { nome: "Mario Kaboom", imagem: "categorias/jogos-do-mario/pg1/44.png", descricao: "Lance o Super Mario de um canhão", link: "jogos/mariokaboom.html" },
  { nome: "Super Mario Save Peach", imagem: "categorias/jogos-do-mario/pg2/1.png", descricao: "A princesa Peach foi capturada", link: "jogos/supermariosavepeach.html" },
  { nome: "Mario BMX 2", imagem: "categorias/jogos-do-mario/pg2/5.png", descricao: "Uma volta de bicicleta com o Mario", link: "jogos/mariobmx2.html" },
  
  { nome: "Mario Kart Racing 2", imagem: "categorias/jogos-do-mario/pg2/2.png", descricao: "Uma corrida de kart com o Mario", link: "jogos/mariokartracing2.html" },
  { nome: "Mario Bomber 4", imagem: "categorias/jogos-do-mario/pg2/6.png", descricao: "Um Bomberman do Mario", link: "jogos/mariobomber4.html" },
  
  { nome: "Donkey Kong 2", imagem: "categorias/jogos-do-mario/pg2/3.png", descricao: "Resgate a princesa Peach", link: "jogos/donkeykong2.html" },
  { nome: "Super Mario Truck 3", imagem: "categorias/jogos-do-mario/pg2/7.png", descricao: "Carregue itens no caminhão", link: "jogos/supermariotruck3.html" },
  
  { nome: "Mario Minicross Challenge", imagem: "categorias/jogos-do-mario/pg2/4.png", descricao: "Vença o campeonato de motos", link: "jogos/mariominicrosschallenge.html" },
  { nome: "Tato Bros", imagem: "categorias/jogos-do-mario/pg2/8.png", descricao: "Evite os obstáculos com o Mario", link: "jogos/tatobros.html" },
  
  { nome: "Gunner Vario", imagem: "categorias/jogos-do-mario/pg2/9.png", descricao: "Proteja a torre do Mr. Vario", link: "jogos/gunnervario.html" },
  { nome: "Rambo Mario Bike", imagem: "categorias/jogos-do-mario/pg2/10.png", descricao: "Ande de moto com o Mario Rambo", link: "jogos/rambomariobike.html" },
  
  { nome: "Super Mario Bombastic", imagem: "categorias/jogos-do-mario/pg2/11.png", descricao: "Mario pega sua bazooka", link: "jogos/supermariobombastic.html" },
  { nome: "Mario & Sonic Jet Adventure", imagem: "categorias/jogos-do-mario/pg2/12.png", descricao: "Voe para longe com o Mario e o Sonic", link: "jogos/mario&sonicjetadventure.html" },
  
  { nome: "Mario Tractor 2", imagem: "categorias/jogos-do-mario/pg2/13.png", descricao: "Dirija um trator com Mario e sua turma", link: "jogos/mariotractor2.html" },
  { nome: "Mario Toss", imagem: "categorias/jogos-do-mario/pg2/14.png", descricao: "Mande o bebê Mario para o espaço", link: "jogos/mariotoss.html" },
  
  { nome: "Mario Kart Parking", imagem: "categorias/jogos-do-mario/pg2/15.png", descricao: "Estacione o kart do Mario", link: "jogos/mariokartparking.html" },
  { nome: "Super Mario Save Yoshi", imagem: "categorias/jogos-do-mario/pg2/16.png", descricao: "Liberte Yoshi do perigo", link: "jogos/supermariosaveyoshi.html" },
  
  { nome: "The Adventure of Super Mario Castle", imagem: "categorias/jogos-do-mario/pg2/17.png", descricao: "Uma super aventura do Mario no castelo", link: "jogos/theadventureofsupermariocastle.html" },
  { nome: "Super Mario Remix 3", imagem: "categorias/jogos-do-mario/pg2/18.png", descricao: "Mais Mario e mais ação", link: "jogos/supermarioremix3.html" },
  
  { nome: "Mario Destroyer", imagem: "categorias/jogos-do-mario/pg2/19.png", descricao: "Destrua os inimigos de Mario", link: "jogos/mariodestroyer.html" },
  { nome: "Mr. Vario", imagem: "categorias/jogos-do-mario/pg2/20.png", descricao: "Jogue o Sr. Vario para bem longe", link: "jogos/mrvario.html" },
  
  { nome: "Mario Block Jump 2", imagem: "categorias/jogos-do-mario/pg2/21.png", descricao: "Guie Mario até a princesa Peach", link: "jogos/marioblockjump2.html" },
  { nome: "Mario Truck 2", imagem: "categorias/jogos-do-mario/pg2/22.png", descricao: "Leve as cargas com o Mario", link: "jogos/mariotruck2.html" },
  
  { nome: "Mario ATV in Sonic Land", imagem: "categorias/jogos-do-mario/pg2/23.png", descricao: "Moto do Mario em um cenário do Sonic", link: "jogos/marioatvinsonicland.html" },
  { nome: "Run Run Mario", imagem: "categorias/jogos-do-mario/pg2/24.png", descricao: "Mario sai para uma corridinha", link: "jogos/runrunmario.html" },
  
  { nome: "Mario Dark Dungeon", imagem: "categorias/jogos-do-mario/pg2/25.png", descricao: "Suba a torre sombria com Mario", link: "jogos/mariodarkdungeon.html" },
  { nome: "Mario & Sonic Doll", imagem: "categorias/jogos-do-mario/pg2/26.png", descricao: "Mario pega o arco e flecha", link: "jogos/mario&sonicdoll.html" },
  { nome: "Mario Tractor", imagem: "categorias/jogos-do-mario/pg2/27.png", descricao: "Mario pega moedas de trator", link: "jogos/mariotractor.html" },
  { nome: "Mario Vs Sonic Racing", imagem: "categorias/jogos-do-mario/pg2/28.png", descricao: "Uma corrida entre Sonic e Mario", link: "jogos/mariovssonicracing.html" },
  { nome: "Mario Tricky Stunt", imagem: "categorias/jogos-do-mario/pg2/29.png", descricao: "Mario faz piruetas e mortais", link: "jogos/mariotrickystunt.html" },
  { nome: "The Adventure of Super Mario Land", imagem: "categorias/jogos-do-mario/pg2/30.png", descricao: "Novas fases e mais Mario", link: "jogos/theadventureofsupermarioland.html" },
  { nome: "Mario Puzzle Swap", imagem: "categorias/jogos-do-mario/pg2/31.png", descricao: "Forme trincas com Mario e Luigi", link: "jogos/mariopuzzleswap.html" },
  { nome: "Mario First Love", imagem: "categorias/jogos-do-mario/pg2/32.png", descricao: "Pegue corações para Mario", link: "jogos/mariofirstlove.html" },
  { nome: "Super Mario Bazooka", imagem: "categorias/jogos-do-mario/pg2/33.png", descricao: "Mario desce bomba em todos", link: "jogos/supermariobazooka.html" },
  { nome: "Super Mario Invaders", imagem: "categorias/jogos-do-mario/pg2/34.png", descricao: "Mario enfrenta os invasores", link: "jogos/supermarioinvaders.html" },
  { nome: "Super Mario Hopscotch", imagem: "categorias/jogos-do-mario/pg2/35.png", descricao: "Não deixe Mario tocar o chão", link: "jogos/supermariohopscotch.html" },
  { nome: "Infinite Mario Bros", imagem: "categorias/jogos-do-mario/pg2/36.png", descricao: "Infinitos desafios pro bigodudo", link: "jogos/infinitemariobros.html" },
  { nome: "Mario Truck", imagem: "categorias/jogos-do-mario/pg2/37.png", descricao: "Mario leva frutas para a princesa", link: "jogos/mariotruck.html" },
  { nome: "Mario Across the World", imagem: "categorias/jogos-do-mario/pg2/38.png", descricao: "Mario pega a estrada de moto", link: "jogos/marioacrosstheworld.html" },
  { nome: "Jet Ski Mario", imagem: "categorias/jogos-do-mario/pg2/39.png", descricao: "O bigodudo acelera no mar", link: "jogos/jetskimario.html" },
  { nome: "Baby Mario", imagem: "categorias/jogos-do-mario/pg2/40.png", descricao: "A jornada do Baby Mario", link: "jogos/babymario.html" },
  { nome: "Mario Adventures", imagem: "categorias/jogos-do-mario/pg2/41.png", descricao: "O bigodudo não tira folga", link: "jogos/marioadventures.html" },
  { nome: "The Simpsons in Mario World", imagem: "categorias/jogos-do-mario/pg2/42.png", descricao: "Homer e Bart no mundo do Mario", link: "jogos/thesimpsonsinmarioworld.html" },
  { nome: "Mario Kart Racing", imagem: "categorias/jogos-do-mario/pg2/43.png", descricao: "Dirija um kart com o Super Mario", link: "jogos/mariokartracing.html" },
  { nome: "Mario Kick-Ass", imagem: "categorias/jogos-do-mario/pg2/44.png", descricao: "Dê porrada em inimigos do Mario", link: "jogos/mariokickass.html" },
  { nome: "Mario Helicopter", imagem: "categorias/jogos-do-mario/pg3/1.png", descricao: "Pilote o helicóptero na terra do Mario", link: "jogos/mariohelicopter.html" },
{ nome: "Mario Item Catch", imagem: "categorias/jogos-do-mario/pg3/5.png", descricao: "Mario tem que pegar tudo o que puder", link: "jogos/marioitemcatch.html" },

{ nome: "Mario Motocross Mania", imagem: "categorias/jogos-do-mario/pg3/2.png", descricao: "Manobras motocross com o Mario", link: "jogos/mariomotocrossmania.html" },
{ nome: "Super Mario Coins", imagem: "categorias/jogos-do-mario/pg3/6.png", descricao: "Recolha todas as moedas possíveis", link: "jogos/supermariocoins.html" },

{ nome: "Super Mario Racing 2", imagem: "categorias/jogos-do-mario/pg3/3.png", descricao: "Mario em uma corrida por Peach", link: "jogos/supermarioracing2.html" },
{ nome: "Mario Ice Skating", imagem: "categorias/jogos-do-mario/pg3/7.png", descricao: "Mario mandando muito no snowboard", link: "jogos/marioiceskating.html" },

{ nome: "Mario & Friends Tower Defense", imagem: "categorias/jogos-do-mario/pg3/4.png", descricao: "Defenda o castelo com Mario", link: "jogos/mario&friendstowerdefense.html" },
{ nome: "Mario and Yoshi Adventure", imagem: "categorias/jogos-do-mario/pg3/8.png", descricao: "Aventuras com o Mario e o Yoshi", link: "jogos/marioandyoshiadventure.html" },

{ nome: "Luigi Motor Cross", imagem: "categorias/jogos-do-mario/pg3/9.png", descricao: "Motocross com o Luigi", link: "jogos/luigimotorcross.html" },
{ nome: "Marionic", imagem: "categorias/jogos-do-mario/pg3/10.png", descricao: "O Mario com fantasia do Sonic", link: "jogos/marionic.html" },

{ nome: "Sniper Mario", imagem: "categorias/jogos-do-mario/pg3/11.png", descricao: "Acerte inimigos com uma sniper", link: "jogos/snipermario.html" },
{ nome: "Super Mario ATV", imagem: "categorias/jogos-do-mario/pg3/12.png", descricao: "Ajude o Mario a fazer manobras", link: "jogos/supermarioatv.html" },

{ nome: "Mario ATV", imagem: "categorias/jogos-do-mario/pg3/13.png", descricao: "Dirija um quadriciclo com o Mario", link: "jogos/marioatv.html" },
{ nome: "Super Mario Truck", imagem: "categorias/jogos-do-mario/pg3/14.png", descricao: "Leve itens no caminhão do Mario", link: "jogos/supermariotruck.html" },

{ nome: "Mario Bros in Sonic World", imagem: "categorias/jogos-do-mario/pg3/15.png", descricao: "O famoso Mario no mundo do Sonic", link: "jogos/mariobrosinsonicworld.html" },
{ nome: "Mario Zone", imagem: "categorias/jogos-do-mario/pg3/16.png", descricao: "Suba plataformas com o Mario", link: "jogos/mariozone.html" },

{ nome: "Mario Zeppelin", imagem: "categorias/jogos-do-mario/pg3/17.png", descricao: "Pegue moedas de Zeppelin", link: "jogos/mariozeppelin.html" },
{ nome: "Mario Bros Motocross", imagem: "categorias/jogos-do-mario/pg3/18.png", descricao: "Manobras radicais com o Mario", link: "jogos/mariobrosmotocross.html" },

{ nome: "Super Mario Galaxy", imagem: "categorias/jogos-do-mario/pg3/19.png", descricao: "Destrua os clones do Bowser", link: "jogos/supermariogalaxy.html" },
{ nome: "Mario Parkour", imagem: "categorias/jogos-do-mario/pg3/20.png", descricao: "Pule obstáculos com o Mario", link: "jogos/marioparkour.html" },

{ nome: "Mario Ride", imagem: "categorias/jogos-do-mario/pg3/21.png", descricao: "Pule obstáculos no cenário", link: "jogos/marioride.html" },
{ nome: "Super Mario Jump", imagem: "categorias/jogos-do-mario/pg3/22.png", descricao: "Pegue o máximo de moedas", link: "jogos/supermariojump.html" },

{ nome: "Mario War", imagem: "categorias/jogos-do-mario/pg3/23.png", descricao: "Proteja a princesa Peach", link: "jogos/mariowar.html" },
{ nome: "Snowy Mario", imagem: "categorias/jogos-do-mario/pg3/24.png", descricao: "Salve a Peach na neve", link: "jogos/snowymario.html" },

{ nome: "Princess Peach Adventurs", imagem: "categorias/jogos-do-mario/pg3/25.png", descricao: "Uma nova aventura com a Peach", link: "jogos/princesspeachadventurs.html" },
{ nome: "Super Mario BP Oil Spills", imagem: "categorias/jogos-do-mario/pg3/26.png", descricao: "Evite o vazamento de petróleo", link: "jogos/supermariobpoilspills.html" },
  { nome: "Mario Play", imagem: "categorias/jogos-do-mario/pg3/27.png", descricao: "Sobreviva com o Super Mario", link: "jogos/marioplay.html" },
  { nome: "Super Mario Save Luigi", imagem: "categorias/jogos-do-mario/pg3/28.png", descricao: "Salve o Luigi do Bowser", link: "jogos/supermariosavelugi.html" },
  { nome: "Mario Puzzler", imagem: "categorias/jogos-do-mario/pg3/29.png", descricao: "Quebra-cabeça do Super Mario", link: "jogos/mariopuzzler.html" },
  { nome: "Super Mario Bros Star Scramble 2 - GhostHouse", imagem: "categorias/jogos-do-mario/pg3/30.png", descricao: "Pegue estrelas e volte à porta", link: "jogos/supermariostarscramble2ghostisland.html" },
  { nome: "Mario Bros Motobike", imagem: "categorias/jogos-do-mario/pg3/31.png", descricao: "Mario e sua nova Scooter", link: "jogos/mariobrosmotobike.html" },
  { nome: "Fantastic Trio", imagem: "categorias/jogos-do-mario/pg3/32.png", descricao: "Plataformas com Mario e Sonic", link: "jogos/fantastictrio.html" },
  { nome: "Hardest Mario", imagem: "categorias/jogos-do-mario/pg3/33.png", descricao: "O jogo mais difícil do Mario", link: "jogos/hardestmario.html" },
  { nome: "Mario Bros Princess Dressup", imagem: "categorias/jogos-do-mario/pg3/34.png", descricao: "Vista a princesa Peach", link: "jogos/mariobrosprincessdressup.html" },
  { nome: "Jump Mario 3", imagem: "categorias/jogos-do-mario/pg3/35.png", descricao: "Pule obstáculos rapidamente", link: "jogos/jumpmario3.html" },
  { nome: "Super Mario World Flash", imagem: "categorias/jogos-do-mario/pg3/36.png", descricao: "Corra e pule com o Super Mario", link: "jogos/supermarioworldflash.html" },
  { nome: "Mario Jeux", imagem: "categorias/jogos-do-mario/pg3/37.png", descricao: "Mais aventuras com o Mario!", link: "jogos/mariojeux.html" },
  { nome: "Bordando o Mario", imagem: "categorias/jogos-do-mario/pg3/38.png", descricao: "Faça tricô com imagens do Mario", link: "jogos/bordandoomario.html" },
  { nome: "Super Angelo", imagem: "categorias/jogos-do-mario/pg3/39.png", descricao: "Mario conseguiu um novo fã", link: "jogos/superangelo.html" },
  { nome: "Mario DS", imagem: "categorias/jogos-do-mario/pg3/40.png", descricao: "Pegue moedas e mate inimigos", link: "jogos/mariods.html" },
  { nome: "New Mario Flash", imagem: "categorias/jogos-do-mario/pg3/41.png", descricao: "Novas aventuras do Mario Bros", link: "jogos/newmarioflash.html" },
  { nome: "Super Mario Boat Bonanza", imagem: "categorias/jogos-do-mario/pg3/42.png", descricao: "Evite obstáculos com um barco", link: "jogos/supermarioboatbonanza.html" },
  { nome: "Wario Bike Escape", imagem: "categorias/jogos-do-mario/pg3/43.png", descricao: "Fuja de moto com o Wario", link: "jogos/wariobikeescape.html" },
  { nome: "Free Super Mario Bros", imagem: "categorias/jogos-do-mario/pg3/44.png", descricao: "Novas aventuras com o Mario", link: "jogos/freesupermariobros.html" },
{ nome: "Super Mario Bomber", imagem: "categorias/jogos-do-mario/pg4/1.png", descricao: "Mario Bros ao estilo Bomberman", link: "jogos/supermariobomber.html" },
  { nome: "Enough Plumbers", imagem: "categorias/jogos-do-mario/pg4/5.png", descricao: "O clone dos clones do Mario Bros", link: "jogos/enoughplumbers.html" },
  { nome: "Mario Defender", imagem: "categorias/jogos-do-mario/pg4/2.png", descricao: "Defenda o castelo da Peach", link: "jogos/mariodefender.html" },
  { nome: "New Super Mario Flash", imagem: "categorias/jogos-do-mario/pg4/6.png", descricao: "Mario Bros com novos gráficos", link: "jogos/newsupermarioflash.html" },
  { nome: "Super Mario Cross", imagem: "categorias/jogos-do-mario/pg4/3.png", descricao: "Motocross com o Super Mario", link: "jogos/supermariocross.html" },
  { nome: "Super Mario Bros Crossover", imagem: "categorias/jogos-do-mario/pg4/7.png", descricao: "Mario e personagens clássicos", link: "jogos/supermariobroscrossover.html" },
  { nome: "Super Mario Bros Star Scramble 2", imagem: "categorias/jogos-do-mario/pg4/4.png", descricao: "Pegue todas as estrelas", link: "jogos/supermariostarscramble2.html" },
  { nome: "Mario Jungle Adventure", imagem: "categorias/jogos-do-mario/pg4/8.png", descricao: "Ajude o Mario pela floresta", link: "jogos/mariojungleadventure.html" },
  { nome: "Super Mario Ice Tower", imagem: "categorias/jogos-do-mario/pg4/9.png", descricao: "Suba a torre com o Super Mario", link: "jogos/supermarioicetower.html" },
  { nome: "Mario Tower Coins", imagem: "categorias/jogos-do-mario/pg4/10.png", descricao: "Pegue moedas com o Mario", link: "jogos/mariotowercoins.html" },
  { nome: "Super Mario Bros Star Scramble", imagem: "categorias/jogos-do-mario/pg4/11.png", descricao: "Pegue estrelas com Super Mario", link: "jogos/supermariostarscramble.html" },
  { nome: "Mario Super", imagem: "categorias/jogos-do-mario/pg4/12.png", descricao: "O encanador está de volta!", link: "jogos/mariosuper.html" },
  { nome: "Unfair Mario", imagem: "categorias/jogos-do-mario/pg4/13.png", descricao: "Obstáculos cheios de armadilhas", link: "jogos/unfairmario.html" },
  { nome: "Mario Mushroom Match", imagem: "categorias/jogos-do-mario/pg4/14.png", descricao: "Junte os cogumelos idênticos", link: "jogos/mariomushroommatch.html" },
  { nome: "Jump Mario 2", imagem: "categorias/jogos-do-mario/pg4/15.png", descricao: "Pule plataformas com o Mario", link: "jogos/jumpmario2.html" },
  { nome: "Tuper Tario Tros", imagem: "categorias/jogos-do-mario/pg4/16.png", descricao: "Super Mario com modificações", link: "jogos/tupertariotros.html" },
  { nome: "Mario Assault", imagem: "categorias/jogos-do-mario/pg4/17.png", descricao: "Mario com uma arma de plasma", link: "jogos/marioassault.html" },
  { nome: "Super Mario Flash Halloween Version", imagem: "categorias/jogos-do-mario/pg4/18.png", descricao: "O Mario também no Halloween", link: "jogos/supermarioflashhalloweenversion.html" },
  { nome: "Mario's Adventure", imagem: "categorias/jogos-do-mario/pg4/19.png", descricao: "Mario em mais uma super aventura", link: "jogos/mariosadventure.html" },
  { nome: "Super Mario Moto", imagem: "categorias/jogos-do-mario/pg4/20.png", descricao: "Mario Bros muito mais radical", link: "jogos/supermariomoto.html" },
  { nome: "Mario Space Age 2", imagem: "categorias/jogos-do-mario/pg4/21.png", descricao: "Super Mario no espaço", link: "jogos/mariospaceage2.html" },
  { nome: "Mario Ghosthouse", imagem: "categorias/jogos-do-mario/pg4/22.png", descricao: "Mario na casa mal assombrada", link: "jogos/marioghosthouse.html" },
  { nome: "Super Mario Bros Deluxe", imagem: "categorias/jogos-do-mario/pg4/23.png", descricao: "Mario e aventuras do Game Boy", link: "jogos/supermariobrosdeluxe.html" },
  { nome: "Peach's Pitch", imagem: "categorias/jogos-do-mario/pg4/24.png", descricao: "Aventuras com a princesa do Mario", link: "jogos/peachspitch.html" },
  { nome: "Super Mario Sunshine 64 Full", imagem: "categorias/jogos-do-mario/pg4/25.png", descricao: "Versão completa do ótimo game", link: "jogos/supermariosunshine64full.html" },
  { nome: "Mario Combat Deluxe", imagem: "categorias/jogos-do-mario/pg4/26.png", descricao: "Agora o Mario ficou nervoso!", link: "jogos/mariocombatdeluxe.html" },
  { nome: "Super Mario Defence", imagem: "categorias/jogos-do-mario/pg4/27.png", descricao: "Defenda a torre do Browser", link: "jogos/supermariodefence.html" },
  { nome: "Gangster Bros", imagem: "categorias/jogos-do-mario/pg4/28.png", descricao: "Basta de pular em tartarugas", link: "jogos/gangsterbros.html" },
  { nome: "Super Mario World Flash 2", imagem: "categorias/jogos-do-mario/pg4/29.png", descricao: "Mais aventuras do Mario em flash", link: "jogos/supermarioworldflash2.html" },
  { nome: "Mario Video Poker", imagem: "categorias/jogos-do-mario/pg4/30.png", descricao: "Máquina de poker do Mario", link: "jogos/mariovideopoker.html" },
  { nome: "Mario Arena", imagem: "categorias/jogos-do-mario/pg4/31.png", descricao: "Pule nos Goombas e Koopas", link: "jogos/marioarena.html" },
  { nome: "Super Mario 63", imagem: "categorias/jogos-do-mario/pg4/32.png", descricao: "Mario em mais uma aventura", link: "jogos/supermario63.html" },
  { nome: "Mario Combat", imagem: "categorias/jogos-do-mario/pg4/33.png", descricao: "Dê muita porrada nas tartarugas", link: "jogos/mariocombat.html" },
  { nome: "Sonic In Mario World 2", imagem: "categorias/jogos-do-mario/pg4/34.png", descricao: "Sonic e Mario no mesmo mundo", link: "jogos/sonicinmarioworld2.html" },
  { nome: "Super Mario Flash 2.0", imagem: "categorias/jogos-do-mario/pg4/35.png", descricao: "Versão atualizada do Mario Bros", link: "jogos/supermarioflash20.html" },
  { nome: "Paper Mario World", imagem: "categorias/jogos-do-mario/pg4/36.png", descricao: "Resgate a princesa Peach", link: "jogos/papermarioworld.html" },
  { nome: "Super Smash Flash", imagem: "categorias/jogos-do-mario/pg4/37.png", descricao: "Lute com Mario, Link e mais", link: "jogos/supersmashflash.html" },
  { nome: "Super Bandit Bros", imagem: "categorias/jogos-do-mario/pg4/38.png", descricao: "Pegue todas as moedas e itens", link: "jogos/superbanditbros.html" },
  { nome: "Boss Bash", imagem: "categorias/jogos-do-mario/pg4/39.png", descricao: "Tente destruir todos os chefões", link: "jogos/bossrush.html" },
  { nome: "Peta's Super Chicksisters", imagem: "categorias/jogos-do-mario/pg4/40.png", descricao: "Resgate a princesa Pamela Anderson", link: "jogos/petassuperchicksisters.html" },
  { nome: "Super Mario Bounce", imagem: "categorias/jogos-do-mario/pg4/41.png", descricao: "Não pare de pular com o Mario", link: "jogos/supermariobounce.html" },
  { nome: "Donkey Kong", imagem: "categorias/jogos-do-mario/pg4/42.png", descricao: "Ajude Mario a salvar a princesa", link: "jogos/donkeykong.html" },
  { nome: "Super Mushroom Mario", imagem: "categorias/jogos-do-mario/pg4/43.png", descricao: "Capture cogumelos ao invés de moedas", link: "jogos/supermushroommario.html" },
  { nome: "Super Marco", imagem: "categorias/jogos-do-mario/pg4/44.png", descricao: "Jogue Metal Slug no Mario", link: "jogos/supermarco.html" },
  { nome: "Mario Adventure 2", imagem: "categorias/jogos-do-mario/pg5/1.png", descricao: "Mais ação com o Mário", link: "jogos/marioadventure2.html" },
{ nome: "Luigi's Revenge Interactive", imagem: "categorias/jogos-do-mario/pg5/5.png", descricao: "Mais ação com o irmão do Mario!", link: "jogos/luigisrevangeinteractive.html" },
{ nome: "Super Mario Hardcore", imagem: "categorias/jogos-do-mario/pg5/2.png", descricao: "Acabe com todos os Koopas!", link: "jogos/supermariohardcore.html" },
{ nome: "Super Mario Power Coins", imagem: "categorias/jogos-do-mario/pg5/6.png", descricao: "Pegue as moedas com o Mário!", link: "jogos/supermariopowercoins.html" },
{ nome: "Monolith's Mario World", imagem: "categorias/jogos-do-mario/pg5/3.png", descricao: "Ache o Bowser e resgate a princesa!", link: "jogos/monolithsmarioworld.html" },
{ nome: "Super Mario Time Attack Remix", imagem: "categorias/jogos-do-mario/pg5/7.png", descricao: "Ajude Mário a chegar até a Peach", link: "jogos/supermariotimeattackremix.html" },
{ nome: "Super Mario Sunshine 64", imagem: "categorias/jogos-do-mario/pg5/4.png", descricao: "Mais uma aventura com Mario!", link: "jogos/supermariosunshine64.html" },
{ nome: "Super Mario Remix", imagem: "categorias/jogos-do-mario/pg5/8.png", descricao: "Jogue 3 mini jogos com Mario!", link: "jogos/supermarioremix.html" },
{ nome: "Mario's Time Attack", imagem: "categorias/jogos-do-mario/pg5/9.png", descricao: "Salve a princesa pegando as estrelas", link: "jogos/mariostimeattack.html" },
{ nome: "Super Mario Revived", imagem: "categorias/jogos-do-mario/pg5/10.png", descricao: "O clássico Super Mario", link: "jogos/supermariorevived.html" },
{ nome: "Super Mario Rampage", imagem: "categorias/jogos-do-mario/pg5/11.png", descricao: "Massacre inimigos com o Mario", link: "jogos/supermariorampage.html" },
{ nome: "Mario Starcatcher 2", imagem: "categorias/jogos-do-mario/pg5/12.png", descricao: "Pegue as estrelas com Mario", link: "jogos/mariostarcatcher2.html" },
{ nome: "Mario Kart Xtreme", imagem: "categorias/jogos-do-mario/pg5/13.png", descricao: "Atropele tudo com o Mario", link: "jogos/mariokartxtreme.html" },
{ nome: "Mario World", imagem: "categorias/jogos-do-mario/pg5/14.png", descricao: "Ajude Mario a proteger o castelo", link: "jogos/marioworld.html" },
{ nome: "Freight Train Mania", imagem: "categorias/jogos-de-trens/9.png", descricao: "Tranporte a carga pela ferrovia", link: "jogos/freighttrainmania.html" },
{ nome: "Dynamite Train", imagem: "categorias/jogos-de-trens/6.png", descricao: "Plante dinamites e destrua as pontes", link: "jogos/dynamitetrain.html" },
{ nome: "Railroad Shuting...", imagem: "categorias/jogos-de-trens/11.png", descricao: "Deixe os vagões nas áreas demarcadas", link: "jogos/railroadshutingpuzzle2.html" },
{ nome: "Viaduct Designer", imagem: "categorias/jogos-de-trens/5.png", descricao: "Construa pontes no caminho do trem", link: "jogos/viaductdesigner.html" },
{ nome: "West Train", imagem: "categorias/jogos-de-trens/13.png", descricao: "Decida o caminho do trem", link: "jogos/westtrain.html" },
{ nome: "Train Mania", imagem: "categorias/jogos-de-trens/14.png", descricao: "Leve a carga com o trem", link: "jogos/trainmania.html" },
{ nome: "Coal Express 5", imagem: "categorias/jogos-de-trens/15.png", descricao: "Leve cargas em cima do trem", link: "jogos/coalexpress5.html" },
{ nome: "Epic Rail", imagem: "categorias/jogos-de-trens/3.png", descricao: "Controle a direção dos trens", link: "jogos/epicrail.html" },
{ nome: "Dora Train Express", imagem: "categorias/jogos-de-trens/8.png", descricao: "Seja maquinista no trem da Dora", link: "jogos/doratrainexpress.html" },
{ nome: "Off the Rails", imagem: "categorias/jogos-de-trens/18.png", descricao: "Pegue as moedas pelo trilho", link: "jogos/offtherails.html" },
{ nome: "Paper Train - Lev...", imagem: "categorias/jogos-de-trens/19.png", descricao: "Controle todos os trens", link: "jogos/papertrain-levelpack.html" },
{ nome: "Choologic", imagem: "categorias/jogos-de-trens/20.png", descricao: "Leve os trens até as estações", link: "jogos/choologic.html" },
{ nome: "Coal Express 4", imagem: "categorias/jogos-de-trens/21.png", descricao: "Ande de trem nas nuvens", link: "jogos/coalexpress4.html" },
{ nome: "Paper Train", imagem: "categorias/jogos-de-trens/22.png", descricao: "Não deixe os trens baterem", link: "jogos/papertrain.html" },
{ nome: "Railroad Shuting...", imagem: "categorias/jogos-de-trens/23.png", descricao: "Leve os vagões pelo trilho", link: "jogos/railroadshutingpuzzle.html" },
{ nome: "Run-Away Train", imagem: "categorias/jogos-de-trens/24.png", descricao: "Evite obstáculos com o trem", link: "jogos/run-awaytrain.html" },
{ nome: "Coal Express 3", imagem: "categorias/jogos-de-trens/25.png", descricao: "Leve cargas pelo trilho de trem", link: "jogos/coalexpress3.html" },
{ nome: "Unstopabble", imagem: "categorias/jogos-de-trens/1.png", descricao: "Construa o trilho do trem urbano", link: "jogos/unstopabble.html" },
{ nome: "Coal Express 2", imagem: "categorias/jogos-de-trens/27.png", descricao: "Leve a carga com um trem", link: "jogos/coalexpress2.html" },
{ nome: "Coal Express", imagem: "categorias/jogos-de-trens/28.png", descricao: "Empilhe as caixas no trem", link: "jogos/coalexpress.html" },
{ nome: "Railroad Rampage", imagem: "categorias/jogos-de-trens/29.png", descricao: "Mate inimigos ao estilo Faroeste", link: "jogos/railroadrampage.html" },
{ nome: "Park My Train", imagem: "categorias/jogos-de-trens/30.png", descricao: "Estacione o trem corretamente", link: "jogos/parkmytrain.html" },
{ nome: "Trains", imagem: "categorias/jogos-de-trens/31.png", descricao: "Conduza trens pelos trilhos certos", link: "jogos/trains.html" },
{ nome: "Railway Valley", imagem: "categorias/jogos-de-trens/32.png", descricao: "Entre no comércio ferroviário", link: "jogos/railwayvalley.html" },
{ nome: "Mini Train", imagem: "categorias/jogos-de-trens/33.png", descricao: "Monte o caminho do trem", link: "jogos/minitrain.html" },
  { nome: "Train Traffic Con...", imagem: "categorias/jogos-de-trens/34.png", descricao: "Controle o trânsito nas estações", link: "jogos/traintrafficcontrol.html" },
  { nome: "Rail of War", imagem: "categorias/jogos-de-trens/35.png", descricao: "Equipe o seu trem para a guerra", link: "jogos/railofwar.html" },
  { nome: "Gogo Train", imagem: "categorias/jogos-de-trens/36.png", descricao: "Ajude o trem a chegar na estação", link: "jogos/gogotrain.html" },
  { nome: "10 Seconds", imagem: "categorias/jogos-de-trens/37.png", descricao: "Leve rapidamente o trem até o terminal", link: "jogos/10seconds.html" },
  { nome: "Express Train", imagem: "categorias/jogos-de-trens/38.png", descricao: "Guie o trem até seu ponto final", link: "jogos/expresstrain.html" },
  { nome: "The Polar Express", imagem: "categorias/jogos-de-trens/39.png", descricao: "Aventure-se nesse expresso na neve!", link: "jogos/thepolarexpress.html" }


];

const jogosPorPagina = 36;
let paginaAtual = 1;

// Função para embaralhar o array de jogos
function embaralharArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Índice aleatório
        [array[i], array[j]] = [array[j], array[i]]; // Troca os elementos
    }
}

// Filtrar os jogos com base na pesquisa
const resultados = jogos.filter(jogo => jogo.nome.toLowerCase().includes(pesquisa.toLowerCase()));

// Embaralhar os resultados
embaralharArray(resultados);

// Elementos HTML
const resultsDiv = document.getElementById('results');
const noResultsDiv = document.getElementById('no-results');
const paginacaoDiv = document.getElementById('paginacao');

// Exibir os resultados da página atual
function exibirPagina(pagina) {
    resultsDiv.innerHTML = ''; // Limpar área de resultados
    paginacaoDiv.style.display = 'none'; // Ocultar a paginação por padrão

    const inicio = (pagina - 1) * jogosPorPagina;
    const fim = inicio + jogosPorPagina;
    const jogosPagina = resultados.slice(inicio, fim);

    if (jogosPagina.length > 0) {
        noResultsDiv.style.display = 'none'; // Esconde "Nenhum resultado encontrado"
        jogosPagina.forEach(jogo => {
            const jogoElement = document.createElement('ul');
            jogoElement.innerHTML = `
                <li><a href="${jogo.link}" title="${jogo.nome}"><img class="imggames" src="${jogo.imagem}" alt="${jogo.nome}"></a></li>
                <li class="description">
                    <a href="${jogo.link}" title="${jogo.nome}"><h3><u><b>${jogo.nome}</b></u></h3></a>
                    <p class="description">${jogo.descricao}</p>
                </li>
            `;
            resultsDiv.appendChild(jogoElement);
        });

        // Verificar se a paginação deve ser exibida
        if (resultados.length > jogosPorPagina) {
            paginacaoDiv.style.display = 'block'; // Exibe a paginação
            atualizarPaginacao();
        }
    } else {
        noResultsDiv.style.display = 'block'; // Exibe "Nenhum resultado encontrado"
    }
}

// Atualizar os botões da paginação
function atualizarPaginacao() {
    const totalPaginas = Math.ceil(resultados.length / jogosPorPagina);
    paginacaoDiv.innerHTML = '';

    // Botão "Anterior"
    const anterior = document.createElement('a');
    anterior.innerHTML = `<span>&nbsp; <img alt="" src="categorias/pagination/leftoff.png"> anterior&nbsp;</span>`;

    if (paginaAtual === 1) {
        anterior.classList.add('botaooff'); // Desativado na página 1
    } else {
        anterior.classList.add('botaoon');
        anterior.href = "#";
        anterior.onclick = (event) => {
            event.preventDefault();
            paginaAtual--;
            exibirPagina(paginaAtual);
            window.scrollTo(0, 0);
        };
    }

    paginacaoDiv.appendChild(anterior);

    // Botões numéricos das páginas
    for (let i = 1; i <= totalPaginas; i++) {
        const paginaLink = document.createElement('a');
        paginaLink.innerHTML = `<span>${i}</span>`;

        if (i === paginaAtual) {
            paginaLink.classList.add('botaooff'); // Página atual (não clicável)
        } else {
            paginaLink.classList.add('botaoon');
            paginaLink.href = "#";
            paginaLink.onclick = (event) => {
                event.preventDefault();
                paginaAtual = i;
                exibirPagina(i);
                window.scrollTo(0, 0);
            };
        }

        paginacaoDiv.appendChild(paginaLink);
    }

    // Botão "Próximo"
    const proximo = document.createElement('a');
    proximo.innerHTML = `<span>&nbsp; próximo <img alt="" src="categorias/pagination/rightoff.png"> &nbsp;</span>`;

    if (paginaAtual === totalPaginas || totalPaginas === 0) {
        proximo.classList.add('botaooff'); // Desativado na última página
    } else {
        proximo.classList.add('botaoon');
        proximo.href = "#";
        proximo.onclick = (event) => {
            event.preventDefault();
            paginaAtual++;
            exibirPagina(paginaAtual);
            window.scrollTo(0, 0);
        };
    }

    paginacaoDiv.appendChild(proximo);
}

// Exibir a primeira página ao carregar
exibirPagina(paginaAtual);
