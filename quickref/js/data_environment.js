data_environment_obscurance = [
    {
        title: "Parcialmente obscurecida",
        icon: "bleeding-eye",
        subtitle: "Desvantagem em Percepção",
        description: "Meia-luz, nevoeiro ou folhagem moderada",
        reference: "PHB, pg. 183.",
        bullets: [
            "As criaturas têm desvantagem em testes de Sabedoria (Percepção) que dependam de visão."
        ]
    },
    {
        title: "Totalmente obscurecida",
        icon: "lightning-tear",
        subtitle: "Efetivamente Cego",
        description: "Escuridão, neblina ou folhagem densa",
        reference: "PHB, pg. 183.",
        bullets: [
            "Uma criatura sofre efetivamente da condição <b>Cego</b> ao tentar enxergar nessa área."
        ]
    }
]

data_environment_light = [
    {
        title: "Luz plena",
        icon: "star-pupil",
        subtitle: "Visão normal",
        description: "Luz plena permite que a maioria das criaturas enxergue normalmente",
        reference: "PHB, pg. 183.",
        bullets: [
            "Até mesmo dias sombrios fornecem luz plena. Da mesma forma, tochas, lanternas, fogueiras e outras fontes de iluminação também o fazem, dentro do raio específico."
        ]
    },
    {
        title: "Meia-luz",
        icon: "semi-closed-eye",
        subtitle: "Parcialmente obscurecida",
        description: "Meia-luz, também chamada de penumbra",
        reference: "PHB, pg. 183.",
        bullets: [
            "Cria uma área <b>parcialmente obscurecida</b>.",
            "Uma região de meia-luz costuma ser um limite entre uma fonte de luz plena, como uma tocha e a escuridão circundante.",
            "A iluminação suave do crepúsculo e da aurora também contam como meia-luz. Uma lua cheia particularmente brilhante pode banhar a terra com meia-luz."
        ]
    },
    {
        title: "Escuridão",
        icon: "worried-eyes",
        subtitle: "Totalmente obscurecida",
        description: "Escuridão cria uma área totalmente obscurecida",
        reference: "PHB, pg. 183.",
        bullets: [
            "Cria uma área <b>totalmente obscurecida</b>.",
            "Personagens enfrentam escuridão ao ar livre durante a noite (até mesmo em noites de luar), dentro dos limites de uma masmorra ou câmara subterrânea sem iluminação, ou em áreas de escuridão mágica."
        ]
    }
]

data_environment_vision = [
    {
        title: "Percepção às cegas",
        icon: "one-eyed",
        subtitle: "Percepção sem depender da visão",
        description: "Note os arredores sem depender da visão, dentro de um raio específico",
        reference: "PHB, pg. 183.",
        bullets: [
            "Criaturas sem olhos, como gosmas, e criaturas com ecolocalização ou com sentidos mais aguçados, como morcegos e dragões verdadeiros, têm este sentido."
        ]
    },
    {
        title: "Visão no escuro",
        icon: "semi-closed-eye",
        subtitle: "Visão limitada na escuridão",
        description: "Uma criatura com visão no escuro pode ver melhor no escuro ou em condições de baixa luz, dentro de uma distância específica",
        reference: "PHB, pg. 185.",
        bullets: [
            "Dentro de uma disntância específica, uma criatura com visão no escuro pode <b>enxergar na escuridão como se fosse meia-luz</b>, de modo que áreas de escuridão são apenas parcialmente obscurecidas para ela.",
            "Entretando, a criatura não consegue distinguir cores na escuridão, apenas tons de cinza.",
            "Muitas criaturas em mundos de D&D, especialmente aquelas que vivem no subsolo, possuem visão no escuro."
        ]
    },
    {
        title: "Visão Verdadeira",
        icon: "eye-shield",
        subtitle: "Enxergar na escuridão",
        description: "Uma criatura com visão verdadeira pode enxergar tudo em sua forma verdadeira, independente do ambiente",
        reference: "PHB, pg. 185.",
        bullets: [
            "Uma criatura com visão verdadeira pode, dentro de uma distância específica, enxergar na escuridão normal e mágica, enxergar criaturas e objetos invisíveis, detectar ilusões visuais automaticamente e ser bem-sucedida em salvaguardas contra elas, bem como perceber a forma original de um metamorfo ou de uma criatura que esteja transformada por magia.",
            "Além disso, a criatura pode enxergar o Plano Etéreo."
        ]
    }
]

data_environment_cover = [
    {
        title: "Cobertura parcial",
        icon: "broken-shield",
        subtitle: "Parede baixa, mobiliário, criaturas",
        description: "Uma alvo terá cobertura parcial se um obstáculo bloquear, pelo menos, metade do seu corpo",
        reference: "PHB, pg. 196.",
        bullets: [
            "O obstáculo pode ser uma parede baixa, uma peça grande de mobiliário, um troco de árvore fino ou uma criatura, seja ela inimiga ou aliada.",
            "Um alvo com cobertura parcial recebe um <b>bônus de +2 na sua CA e salvaguardas de Destreza</b>.",
            "Se um alvo estiver atrás de múltiplas coberturas, apenas a de maior grau de proteção é aplicada"
        ]
    },
    {
        title: "Cobertura de três quartos",
        icon: "cracked-shield",
        subtitle: "Grade levadiça, seteira",
        description: "Um alvo terá três quartos de cobertura quando aproximadamente três quartos do seu corpo estiverem encobertos por um obstáculo",
        reference: "PHB, pg. 196.",
        bullets: [
            "O obstáculo pode ser uma grade levadiça, uma seteira ou um tronco de árvore grosso.",
            "Um alvo com cobertura de três quartos (3/4) recebe um <b>bônus de +5 na sua CA e salvaguardas de Destreza</b>.",
            "Se um alvo estiver atrás de múltiplas coberturas, apenas a de maior grau de proteção é aplicada"
        ]
    },
    {
        title: "Cobertura total",
        icon: "shield",
        subtitle: "Completamente coberto",
        description: "Um alvo terá cobertura total se estiver completamente coberto por um obstáculo",
        reference: "PHB, pg. 196.",
        bullets: [
            "Um alvo com cobertura total <b>não pode ser atingido diretamente</b> por um ataque ou pela maioria das magias, embora algumas magias possam alcançar o alvo, envolvendo-o em sua área de efeito.",
            "Se um alvo estiver atrás de múltiplas coberturas, apenas a de maior grau de proteção é aplicada"
        ]
    }
]

data_environment_other = [
    {
        title: "Queda",
        icon: "falling",
        subtitle: "Queda de uma grande altura",
        description: "Uma queda de uma grande altura que pode causar danos de concussão",
        reference: "PHB, pg. 183.",
        bullets: [
            "Uma criatura sofre 1d6 de dano de concussão para cada 3m de queda.",
            "O dano máximo de uma queda é de até 20d6 (equivalente a 60 metros).",
            "Após a queda, a criatura ficará caida no chão, a menos que ela evite sofrer o dano da queda.",
            "O jogador pode tentar realizar um teste de Força (Atletismo) ou Destreza (Acrobacia) para evitar uma queda (segurando-se em algo ou mantendo-se equilibrado), realizar um salto ou acrobacia de forma bem-sucedida ou permanecer de pé em uma situação complicada."
        ]
    },
    {
        title: "Asfixia",
        icon: "drowning",
        subtitle: "Não conseguir respirar",
        description: "Capacidade de uma criatura ficar sem respirar durante um período",
        reference: "PHB, pg. 183.",
        bullets: [
            "Uma criatura pode segurar sua respiração por um número de minutos igual a 1 + seu modificador de Constituição (mínimo de 30 segundos).",
            "Quando uma criatura ficar sem respirar, ela pode sobreviver por um número de rodadas igual ao seu modificador de Constituição (mínimo 1 rodada).",
            "No início do seu próximo turno, ela cai a 0 pontos de vida e está morrendo.",
            "Se você não puder respirar ou estiver sufocando, você não pode recuperar pontos de vida ou se estabilizar até poder respirar novamente."
        ]
    }
]
