data_condition = [
    {
        title: "Agarrado",
        icon: "grab",
        reference: "PHB, pg. 290.",
        bullets: [
            "O deslocamento de uma criatura agarrada se torna 0, e ela não poderá se beneficiar de qualquer bônus para o seu deslocamento.",
            "A condição termina se o agarrador estiver incapacitado.",
            "A condição também se encerra se um efeito remover a criatura agarrada do alcance do agarrador ou do efeito de agarramento, como quando uma criatura é arremesada pelo efeito da magia <i>onda trovejante</i>."
        ]
    },    
    {
        title: "Amedrontado",
        icon: "sharp-smile",
        reference: "PHB, pg. 290.",
        bullets: [
            "Uma criatura amedrontada tem desvantagem em testes de atributo e jogadas de ataque enquanto a fonte de seu medo estiver em sua linha de visão.",
            "A criatura não pode se mover por vontade própria para perto da fonte de seu medo."
        ]
    },
    {
        title: "Atordoado",
        icon: "internal-injury",
        reference: "PHB, pg. 290.",
        bullets: [
            "Uma creatura atordoada está incapacitada, não pode se mover e só é capaz de balbuciar.",
            "A criatura falha automaticamente em salvaguardas de Força e Destreza.",
            "Jogadas de ataque contra a criatura têm vantagem."
        ]
    },
    {
        title: "Caído",
        icon: "crawl",
        reference: "PHB, pg. 290.",
        bullets: [
            "Uma criatura caída tem como única opção de movimento rastejar, a não ser que se levante, encerrando assim a condição.",
            "A criatura tem desvantagem em jogadas de ataque.",
            "Uma jogada de ataque contra a criatura tem vantagem se o atacante estiver a até 1,5 metro da criatura. De qualquer outra forma, a jogada de ataque tem desvantagem."
        ]
    },
    {
        title: "Cego",
        icon: "one-eyed",
        reference: "PHB, pg. 290.",
        bullets: [
            "Uma criatura cega não pode ver e falha automaticamente em qualquer teste de atributo que dependa da visão.",
            "Jogadas de ataque da criatura têm desvantagem.",
            "Jogadas de ataque contra a criatura têm vantagem."
        ]
    },
    {
        title: "Contido",
        icon: "imprisoned",
        reference: "PHB, pg. 291.",
        bullets: [
            "O deslocamento de uma criatura contida se torna 0, e ela não pode se beneficiar de qualquer bõnus para seu deslocamento.",
            "Jogadas de ataque contra a criatura têm vantagem e as jogadas de ataque da criatura têm desvantagem.",
            "A criatura tem desvantagem em salvaguardas de Destreza."
        ]
    },
    {
        title: "Enfeitiçado",
        icon: "smitten",
        reference: "PHB, pg. 291.",
        bullets: [
            "Uma criatura enfeitiçada não pode atacar quem a enfeitiçou ou atingir quem te enfeitiçou ou atingir quem a enfeitiçou com ataques usando atributos ou efeitos mágicos.",
            "Quem enfeitiçou tem vantagem em qualquer teste de atributo para interagir socialmente com a criatura enfeitiçada."
        ]
    },
    {
        title: "Envenenado",
        icon: "deathcab",
        reference: "PHB, pg. 291.",
        bullets: [
            "Uma criatura envenenada tem desvantagem em jogadas de ataque e testes de atributo."
        ]
    },
    {
        title: "Exaustão",
        icon: "crawl",
        description: "Exaustão é medida em seis níveis",
        reference: "PHB, pg. 291.",
        bullets: [
            "<table><tr><th>Nível</th><th></th><th></th><th style='text-align:left'>Efeito</th></tr><tr><td>1</td><td></td><td></td><td>Desvantagem em testes de atributo</td></tr><tr><td>2</td><td></td><td></td><td>Deslocamento reduzido pela metade</td></tr><tr><td>3</td><td></td><td></td><td>Desvantagem em jogadas de ataque e salvaguardas</td></tr><tr><td>4</td><td></td><td></td><td>Pontos de vida máximos reduzidos pela metade</td></tr><tr><td>5</td><td></td><td></td><td>Deslocamento reduzido a 0</td></tr><tr><td>6</td><td></td><td></td><td>Morte</td></tr></table>",
            "Uma criatura sofre os efeitos de seu nível de exaustão atual e de todos os níveis anteriores.",
            "Terminar um descanso longo reduz o nível de exaustão de uma criatura em um nível, considerando que ela também tenha ingerido comida e água.",
            "Além disso, ser ressuscitado dos mortos reduz o nível de exaustão de uma criatura em um."
        ]
    },
    {
        title: "Incapacitado",
        icon: "internal-injury",
        reference: "PHB, pg. 292.",
        bullets: [
            "Uma criatura incapacitada não pode realizar ações ou reações."
        ]
    },
    {
        title: "Inconsciente",
        icon: "coma",
        reference: "PHB, pg. 292.",
        bullets: [
            "Uma criatura inconsciente está incapacitada, não pode se mover ou falar e não está ciente dos arredores.",
            "A criatura larga qualquer coisa que esteja segurando e fica caída.",
            "A criatura falha automaticamente em salvaguardas de Força e Destreza.",
            "As jogadas de ataque contra a criatura têm vantagem.",
            "Qualquer ataque bem-sucedido contra a criatura é um acerto crítico se o atacante estiver a até 1,5 metro dela.",
        ]
    },
    {
        title: "Invisível",
        icon: "invisible",
        description: "Você não pode ser visto sem a ajuda de magia ou sentido especial",
        reference: "PHB, pg. 292.",
        bullets: [
            "Para proósitos de se esconder, considera-se qua a criatura está em área totalmente obscurecida.",
            "A localização da criatura pode ser detectada, seja por qualquer som que ela emita ou rastros visuais que deixe.",
            "As jogadas de ataque contra a criatura têm desvantagem, e as jogadas de ataque da criatura têm vantagem."
        ]
    },
    {
        title: "Morrendo",
        icon: "dead-head",
        description: "Quando seus pontos de vida chegam a 0, você morre ou fica inconsciente",
        reference: "PHB, pg. 197.",
        bullets: [
            "Se os danos reduzirem seus pontos de vida a 0, mas não matá-lo instantaneamente, você fica inconsciente e está morrendo.",
            "Recuperando qualquer quantidade de pontos de vida, volta à consciência.",
            "Sempre que iniciar seu turno sem pontos de vida, você deve realizar uma salvaguarda especial, chamada salvaguarda contra morte. Jogue 1d20 e não adicione nenhum modificador.",
            "Se o resultado for igual ou maior que 10, você obtém sucesso. Caso contrário, você falha.",
            "Com três sucessos, sua situação fica estável.",
            "Com três falhas, você morre.",
            "Um resultado de 1, conta como duas falhas.",
            "Um 20 lhe devolve 1 ponto de vida.",
            "É possivel ser estabilizado por um aliado com um teste de Sabedoria com CD 10 (Medicina)",
            "Uma criatura estabilizada que não seja curada recupera 1 ponto de vida após 1d4 horas."
        ]
    },
    {
        title: "Paralisado",
        icon: "internal-injury",
        bullets: [
            "Uma criatura paralisada está incapacitada e não pode se mover ou falar.",
            "A criatura automaticamente falha em salvaguardas de Força e Destreza.",
            "As jogadas de ataque contra a criatura têm vantagem.",
            "Qualquer ataque bem-sucedido contra a criatura é um acerto crítico se o atacante estiver a até 1,5 metro dela."
        ]
    },
    {
        title: "Petrificado",
        icon: "stone-pile",
        description: "Você está transformado, juntamente com todos os objetos não mágicos que estiver vestindo ou carregando, em uma substância sólida e inanimada (geralmente pedra)",
        reference: "PHB, pg. 292.",
        bullets: [
            "Seu peso aumenta em dez vezes e ela para de envelhecer.",
            "A criatura está incapacitada, não pode se mover ou falar, e não está ciente dos seus arredores.",
            "As jogadas de ataque contra a criatura têm vantagem.",
            "A criatura automaticamente falha em salvaguardas de Força e Destreza.",
            "A criatura tem resistência contra todos os tipos de dano.",
            "A criatura é imune a veneno e doenças, embora um veneno ou doença que já esteja em seu sistema seja apenas suspenso, e não neutralizado."
        ]
    },
    {
        title: "Surdo",
        icon: "elf-ear",
        reference: "PHB, pg. 290.",
        bullets: [
            "Uma criatura surda não pode ouvir e falha automaticamente em qualquer teste de atributo que dependa da audição."
        ]
    }
]
