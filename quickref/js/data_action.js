data_action = [
    {
        title: "Atacar",
        icon: "crossed-swords",
        subtitle: "Corpo a corpo ou à distância",
        description: "Golpear com uma espada, disparando com um arco ou lutando com os próprios punhos",
        reference: "PHB, pgs. 192,194-195.",
        bullets: [
            "Determinadas características, como <i>Ataque Extra</i> do guerreiro, permitem que você faça mais de um taque com esta ação. Cada um desses ataques é uma rolagem e podem focar criaturas diferentes. Você pode mover-se entre os ataques.",
            "Ao realizar a ação Ataque com uma arma de combate corpo a corpo leve, você pode usar sua ação bônus para atacar com outra arma de combate corpo a corpo leve, que estiver empunhando com a outra mão (Veja <i>Combate com duas armas</i> em Ação bônus).",
            "Você pode substituir um dos seus ataques corpo a corpo com um <i>Agarrão</i> ou um <i>Empurrão</i>.",
            "Algumas condições dão vantagem no ataque: ataques contra alvos cegos, paralisados, petrificados, contidos, atordoados ou inconscientes; ataques corpo a corpo contra alvos caídos; ataques realizados por atacantes invisíveis ou escondidos.",
            "Algumas condições dão desvatagem no ataque: ataques contra alvos invisíveis ou escondidos; ataques à distância contra alvos caídos; ataques realizados por atacantes cegos, assustados, envenenados ou contidos."
        ]
    },
    {
        title: "Agarrar",
        icon: "grab",
        subtitle: "Ataque corpo a corpo especial",
        description: "Tenta agarrar uma criatura ou engalfinhar-se com ela",
        reference: "PHB, pg. 195.",
        bullets: [
            "Pode usar uma ação <i>Atacar</i> para realizar um ataque corpo a corpo especial, um agarramento. Se for capaz de fazer múltiplos ataques com a ação Atacar, este ataque pode substituir um deles.",
            "O alvo do agarramento não pode ter um tamanho maior do que uma categoria acima da sua, e deve estar dentro do seu alcance.",
            "Usando pelo menos uma mão livre, você tenta capturar o alvo, realizando uma jogada de agarrar: um teste de Força (Atletismo) ou Destreza (Acrobacia) do alvo (à escolha dele).",
            "Se você obtiver sucesso, o alvo estará submetido à condição de agarrado (O deslocamento da criatura se torna 0)."
        ]
    },
    {
        title: "Empurrar",
        icon: "hand",
        subtitle: "Ataque corpo a corpo especial",
        description: "Empurra uma criatura, seja com a intenção de derrubá-la ou de empurrá-la para longe de você",
        reference: "PHB, pg. 195.",
        bullets: [
            "Usando a ação <i>Ataque</i>, você pode realizar um ataque corpo a corpo especial para empurrar uma criatura. Se for capaz de realizar múltiplos ataques com a ação Atacar, este ataque pode substituir um deles.",
            "O alvo não pode ser mais do que uma categoria de tamanho maior que você e deve estar dentro do seu alcance.",
            "Você realiza um teste de Força (Atletismo), resistido por um teste de Força (Atletismo) ou Destreza (Acrobacia) do alvo (ele pode escolher qual).",
            "Se você vencer a disputa, você pode deixá-lo caído (derrubá-lo) ou empurrá-lo a até 1,5 metro de distância."
        ]
    },
    {
        title: "Conjurar magia",
        icon: "magic-swirl",
        subtitle: "Tempo de conjuração de 1 ação",
        description: "Conjura uma magia com o tempo de conjuração de 1 ação",
        reference: "PHB, pg. 192, 202-204.",
        bullets: [
            "Não é possivel conjurar uma magia com sua ação e uma magia diferente com sua ação bônus no mesmo turno, exceto se a ação for usada para conjurar um truque.",
            "O alvo de uma magia precisa estar dentro do alcance dela. Para mirar em algo, você precisa ter um caminho livre até o alvo, então não pode estar atrás de uma cobertura total.",
            "Magias com componentes materiais não consomem o material, a não ser que esteja explicitamente especificado. A não ser que o custo do material seja especificado, você pode assumir que o custo é insignificante e o material está simplesmente disponível em uma bolsa de componentes.",
            "Algumas magias exigem que se mantenha concentração a fim de mantê-las ativas. Se você perder a concentração, este tipo de magia se encerra. Você prederá a concentração em uma magia se conjurar outra magia que exija concentração ou se ficar encapacitado ou morrer. Sempre que você sofrer dano enquanto estiver se concentrando em uma magia, deverá realizar uma salvaguarda de contituição para manter a concentração. A CD é igual a 10 ou a metade do dano que você sofreu, o que for maior."
        ]
    },
    {
        title: "Correr",
        icon: "sprint",
        subtitle: "Dobra Deslocamento",
        description: "Ganha movimento extra no seu turno",
        reference: "PHB, pg. 192.",
        bullets: [
            "O aumento é igual ao seu deslocamento após a aplicação de quaisquer modificadores."
        ]
    },
    {
        title: "Desengajar",
        icon: "journey",
        subtitle: "Previne ataques de oportunidade",
        description: "Seu movimento não provoca ataques de oportunidade durante o restante do turno",
        reference: "PHB, pg. 192.",
        bullets: [
        ]
    },
    {
        title: "Esquivar",
        icon: "aura",
        subtitle: "Aumentar defesas",
        description: "Você se concentra inteiramente em evitar ataques",
        reference: "PHB, pg. 192.",
        bullets: [
            "Até o início do seu próximo turno, qualquer jogada de ataque feita contra você terá desvantagem, caso você possa ver o atacante; e suas salvaguardas de Destreza serão feitas com vantagem.",
            "Você perde este benefício se estiver incapacitado ou se o seu deslocamento cair para 0."
        ]
    },
    {
        title: "Escapar",
        icon: "manacles",
        subtitle: "Escapando de um Agarramento",
        description: "Escapando de um Agarramento",
        reference: "PHB, pg. 195.",
        bullets: [
            "Para escapar de um agarramento, você precisa ser bem-sucedido em um teste de Força (Atletismo) ou Destreza (Acrobacia) resistido por um teste de Força (Atletismo) do agarrador.",
            "Escapar de outras condições que o restringem (como algemas) podem requerer um teste de Destreza ou Força, especificado na condição."
        ]
    },
    {
        title: "Ajudar",
        icon: "telepathy",
        subtitle: "Concende vantagem para um aliado",
        description: "Concende vantagem em teste de atributo ou ataque para uma criatura aliada",
        reference: "PHB, pg. 192.",
        bullets: [
            "A criatura que você está auxiliando ganha vantagem no próximo teste de atributo que fizer, em prol da tarefa na qual você a está ajudando.",
            "Também é possivél ajudar uma criatura aliada a atacar outra criatura alvo que esteja a até 1,5 metro de distância de você.",
            "A vantagem dura até o início do seu próximo turno."
        ]
    },
    {
        title: "Usar Objeto",
        icon: "snatch",
        subtitle: "Interagir, usar uma habilidade especial",
        description: "Interagir com um segundo objeto ou usar habilidade especial de um objeto",
        reference: "PHB, pg. 193.",
        bullets: [
            "Você pode interagir com um objeto sem curso durante seu turno (como desembainhar uma espada ou abrir uma porta). Se você quiser interagir com um segundo objeto, use esta ação.",
            "Quando um objeto exigir uma ação sua para ser usado, você deve executar esta ação."
        ]
    },
    {
        title: "Usar escudo",
        icon: "round-shield",
        subtitle: "Equipar ou desequipar um escudo",
        description: "Equipar ou desequipar um escudo",
        reference: "PHB, pgs. 144-146.",
        bullets: [
            "Um escudo sempre leva 1 ação para equipar e desequipar.",
            "Amaduras levam minutos para equipar e desequipar."
        ]
    },
    {
        title: "Esconder-se",
        icon: "hood",
        subtitle: "",
        description: "Tentar se esconder",
        reference: "PHB, pg. 177, 192.",
        bullets: [
            "Você não pode se esconder de uma criatura que possa vê-lo claramente. Você precisa estar em cobertura total, estar em uma area totalmente obscurecida, estar invisível, ou bloquear a visão do seu inimigo.",
            "Você revela sua posição ao fazer barulho (como gritar um aviso ou derrubar um vaso).",
            "Ao tentar se econder, realize um teste de Destreza (Furtividade). Até você ser descoberto ou se revelar, o resoltado do teste será resistido pelo resultado de um teste de Sabedoria (Percepção) feito por qualquer criatura que esteja à procura de sinais da sua presença.",
            "Uma criatura pode nota-lo mesmo que não esteja procurando por você caso o valor de sua Sabedoria passiva (Percepção) seja maior que seu teste de Destreza (Furtividade).",
            "Fora de combate, você também pode realizar um teste de Destreza (Furtividade) ao tentar se esconder de seus inimigos, esgueirar-se por guardas, escapar sem ser notado, surpreender alguém, ou seguir alguém sem ser visto ou ouvido."
        ]
    },
    {
        title: "Procurar",
        icon: "magnifying-glass",
        subtitle: "",
        description: "Dedique sua atenção a encontrar algo",
        reference: "PHB, pg. 193.",
        bullets: [
            "Dependendo da natureza da sua procura, o DM pode solicitar que você faça um teste de Sabedoria (Percepção) ou um teste de Inteligência (Investigação)."
        ]
    },
    {
        title: "Preparar",
        icon: "stopwatch",
        subtitle: "Escolha gatilho e ação",
        description: "Escolha um gatilho e uma reação em resposta",
        reference: "PHB, pgs. 192-193.",
        bullets: [
            "Primeiro, você decide qual circunstância disparará sua reação.",
            "Em seguida, escolhe a ação que realizará em resposta a esse gatilho (ou escolhe mover-se o equivalente ao seu deslocamento).",
            "Quando a circunstância-gatilho ocorre, você pode agir imediatamente depois dela, ou pode ignorá-la.",
            "Ao preparar uma magia, você a conjura normalmente, mas retém sua energia, que será liberada com a sua reação, quando o gatilho for disparado. Para estar preparada, uma magia precisa ter o tempo de conjuração de 1 ação, e mantê-la preparada exige concentração."
        ]
    },
    {
        title: "Usar habilidades de classe",
        icon: "embrassed-energy",
        subtitle: "Algumas habilidades exigem ações",
        description: "Use um talento racial ou habilidade de classe que exige 1 ação",
        reference: "Veja a página da sua classe e raça para mais informações.",
        bullets: [

        ]
    },
    {
        title: "Estabilizando uma criatura",
        icon: "first-aid",
        subtitle: "Prestar primeiros socorros",
        description: "Uma criatura estabilizada não precisa fazer salvaguardas contra morte",
        reference: "PHB, pg. 197.",
        bullets: [
            "Faça um teste de Sabedoria com CD 10 (Medicina)",
            "Se você obtiver sucesso, a criatura fica <b>estável</b> e não precisa fazer salvaguardas contra morte",
            "Uma criatura estabilizada que não seja curada recupera 1 ponto de vida após 1d4 horas"
        ]
    },
    {
        title: "Improvisar",
        icon: "juggler",
        subtitle: "Qualquer ação fora dessa lista",
        description: "Realizar qualquer ação que você imaginar",
        reference: "PHB, pg. 193.",
        bullets: [
            "Quando você descreve uma ação que não está detalhada em lugar algum nas regras, o DM decide se ela é possível e que tipo de jogada é preciso fazer, se necessário, para determinar seu sucesso ou falha."
        ]
    }
]
