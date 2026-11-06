// Gerado por publicar_site.py — não editar à mão.
window.NUCLEO = {
 "nome": "Núcleo de Automação de Processo",
 "slogan": "Automação fiscal e contábil para escritórios de contabilidade",
 "email": "alansantos.fiscal@gmail.com",
 "whatsapp": "",
 "download": {
  "publico": true,
  "url": "https://drive.usercontent.google.com/download?id=14DuTO0s3I8kVtsSwUHiaVWa8WkWQsjMG&export=download&confirm=t",
  "versao": "2026.11.05.1517",
  "data": "05/11/2026 15:17",
  "sha256": "6a58cceadfdc2ecc625bfa894e571e8d6e78221f5e59656d57ed4618d3650552"
 },
 "versoes": [
  {
   "versao": "2026.11.05.1517",
   "data": "05/11/2026 15:17",
   "titulo": "Correção: categorias de Cadastros (Leads, Clientes, Fornecedores, Parceiros, Equipe) desapareciam do menu ao reabrir o Núcleo",
   "itens": [
    "Uma categoria criada em Leads (ou em Clientes, Fornecedores, Parceiros, Equipe) ficava salva certinho, mas o botão dela no menu só aparecia dentro da mesma sessão — ao fechar e abrir o Núcleo de novo, a categoria \"desaparecia\" do menu (continuava existindo, só não aparecia como página).",
    "Corrigido: o menu agora se atualiza sozinho assim que a lista de cada tipo (Visão Geral) termina de carregar os dados do escritório, sem precisar abrir \"Categorias...\" de novo."
   ]
  },
  {
   "versao": "2026.11.04.2131",
   "data": "04/11/2026 21:31",
   "titulo": "Cadastro de empresas: campos da Receita/DF-e que não vieram ficam editáveis",
   "itens": [
    "Na ficha da empresa, um campo da atualização cadastral (Receita Federal ou DF-e) que não veio preenchido — como aconteceu com o Endereço de algumas empresas — agora pode ser digitado à mão.",
    "Clicar em \"⟳ Atualizar\" de novo não apaga mais o que foi preenchido manualmente: a próxima atualização só grava o que a Receita/DF-e realmente trouxer, nunca apaga um campo já preenchido com um valor vazio.",
    "O campo único \"Endereço\" virou três campos separados — Logradouro, Número e Complemento — iguais ao cadastro de CNPJ da Receita (antes vinham todos juntos num só campo).",
    "A atualização do CNPJ agora tenta outra fonte quando a primeira não trouxer o Logradouro (acontecia em algumas empresas) — sem perder o que já tinha vindo certo (CEP, bairro, cidade, UF)."
   ]
  },
  {
   "versao": "2026.11.04.1601",
   "data": "04/11/2026 16:01",
   "titulo": "Cadastros — novo cadastro de Contatos (Leads, Clientes, Fornecedores, Parceiros, Equipe)",
   "itens": [
    "A página Cadastros ganhou um menu novo: Painel | Contatos | Leads | Clientes | Fornecedores | Parceiros | Equipe — cada um com sua própria lista e seu próprio cadastro.",
    "Contatos → Visão Geral: todos os contatos juntos, com um cartão por tipo (clique para filtrar a lista) e busca por nome, empresa ou e-mail.",
    "Cada contato tem nome, empresa, CNPJ/CPF, cargo/função, telefone, e-mail, cidade/UF, responsável no escritório, observação e situação (ativo/inativo).",
    "Esse cadastro é novo e separado: não se mistura com o Atendimento de leads/prospectos do Núcleo Interno (Comercial) nem com o cadastro completo de empresas, que continua do jeito que sempre foi, em Clientes → Empresas (com Clientes → Contatos ao lado, como aba nova).",
    "Campos específicos por tipo: Lead ganhou Origem, Próximo retorno e Temperatura; Fornecedor ganhou Categoria; Parceiro ganhou Tipo de parceria; Equipe ganhou Departamento, Ramal e Aniversário. O tipo do contato pode ser trocado a qualquer momento (ex.: um Lead que virou Cliente).",
    "Aviso de possível duplicado ao salvar (mesmo nome + empresa, mesmo e-mail ou mesmo telefone) — você decide se salva assim mesmo.",
    "Campo Empresa com busca automática no cadastro de empresas: escolher uma sugestão vincula o contato àquela empresa.",
    "Responsável agora é escolhido entre os usuários do Núcleo (\"Nome (login)\"), em vez de texto livre.",
    "\"☷ Colunas da lista...\" (menu \"⋯\"): escolha quais colunas aparecem em cada lista.",
    "Ações em lote pelo botão direito: marcar várias linhas como ativo/inativo, definir o responsável de várias de uma vez, ou excluir várias.",
    "\"📥 Importar (Excel/CSV)...\" e \"📊/📄 Exportar (Excel/PDF)\" no menu \"⋯\" — com planilha modelo para preencher. A importação já funciona até na Visão Geral: a planilha pode trazer uma coluna \"Tipo\" (Lead, Cliente, Fornecedor, Parceiro ou Equipe) em cada linha; quem não vier com o tipo definido usa o \"Tipo padrão\" escolhido na hora de importar.",
    "Painel (Início) com indicadores reais: total, ativos/inativos, sem responsável, aniversariantes do mês e leads com retorno atrasado, com uma lista do que pede atenção.",
    "Botões \"💬 WhatsApp\" e \"✉ E-mail\" no cadastro do contato, para abrir a conversa ou o e-mail direto com o telefone/e-mail cadastrado.",
    "Histórico leve no cadastro do contato: registre anotações rápidas com data e usuário, sem virar um campo de observação só.",
    "Categorias por página (menu \"⋯\" → \"🗂 Categorias...\"): em Leads, Clientes, Fornecedores, Parceiros e Equipe, você define suas próprias categorias e cada uma ativa vira uma página ao lado de \"Visão Geral\" (que continua mostrando todos, com ou sem categoria) — igual à Gestão de Processos. Categoria não é excluída, só desativada (os contatos continuam na Visão Geral). Em Clientes, só a aba \"Visão Geral\" ganhou categorias — \"Empresas\" e \"Pessoa Física\" continuam como já eram."
   ]
  },
  {
   "versao": "2026.11.02.1842",
   "data": "02/11/2026 18:42",
   "titulo": "Cadastros (ex-Empresas) e Definições do usuário",
   "itens": [
    "A página \"Empresas\" do menu lateral foi renomeada para \"Cadastros\" e ganhou um menu novo, com Painel | Prospecção | Clientes — dentro de Prospecção: Painel, Leads e Prospectos; dentro de Clientes: Painel, Empresas e Pessoa Física.",
    "O cadastro de empresas de sempre (lista, busca, formulário) continua exatamente igual, só mudou de lugar: agora é Clientes → Empresas.",
    "Leads, Prospectos, os dois Painéis e Pessoa Física aparecem \"em construção\" por enquanto — vêm nas próximas atualizações.",
    "O menu \"👤 Nome (Perfil) ▾\" do cabeçalho ganhou \"🎨 Definições do usuário\", acima de \"Alterar minha senha\" — configurações que valem só para você, neste computador.",
    "Dentro, \"Definições de plano de fundo\": escolha o tema de cores do sistema (por enquanto só \"Padrão\" está pronto; \"Escuro\" e \"Azul escuro\" aparecem \"em breve\") e a ordem do menu lateral (Cadastros, Núcleo de Automação, Núcleo Fiscal, Núcleo Interno, BPO Financeiro) — suba ou desça cada item como preferir. Vale a partir da próxima vez que você abrir o Núcleo."
   ]
  },
  {
   "versao": "2026.11.02.1603",
   "data": "02/11/2026 16:03",
   "titulo": "Gestão de Processos — altura das linhas, abrir/fechar tudo e busca por tarefa",
   "itens": [
    "Novo \"📏 Altura das linhas...\" no menu \"⋯\": deixa as linhas da tabela mais altas e espaçadas (com pré-visualização na hora, antes de aplicar) — fica assim pra sempre neste computador, até você mudar de novo.",
    "Botão novo \"⊞ Abrir tudo\" ao lado do \"⟳\": nas visualizações Por empresa e Por tarefa, abre de uma vez todas as linhas (empresa ou tarefa); clicar de novo (\"⊟ Fechar tudo\") esconde todas.",
    "O campo de busca (Empresa, código ou CNPJ) agora também busca pelo nome da TAREFA — digitar o nome de uma tarefa mostra as empresas que têm essa tarefa; nas árvores (Por empresa e Por tarefa), estreita para só aquela tarefa de cada empresa encontrada."
   ]
  },
  {
   "versao": "2026.11.02.0025",
   "data": "02/11/2026 00:25",
   "titulo": "Gestão de Processos — Status colorido e edição rápida",
   "itens": [
    "A coluna Status agora mostra um selo colorido (verde = Concluído, vermelho = Pendente/Atrasada, laranja = Com pendência) — só nessa coluna, as outras não mudam mais de cor.",
    "Nas árvores (Por empresa e Por tarefa), clicar no selo de uma tarefa de uma empresa abre um menu rápido com as situações (Pendente, Em andamento, Concluída, Com pendência, Não se aplica) — escolher uma já grava, sem precisar abrir a tarefa. No Consolidado e nas linhas-resumo (empresa/tarefa) o Status continua só leitura (é um resumo calculado das tarefas de baixo).",
    "Nas árvores, a coluna Processo da tarefa de uma empresa mostra \"Concluído em DD/MM/AAAA\" em verde quando a tarefa está concluída (fica em branco enquanto pendente) — essa informação saiu da coluna Detalhes, onde aparecia antes.",
    "Nas árvores, a coluna PDF foi retirada (não era mais útil) — o anexo de cada tarefa de uma empresa aparece junto com o resto do Detalhes, em verde (ou vermelho quando falta um PDF obrigatório); passar o mouse mostra \"Abrir\" e clicar abre o arquivo.",
    "A largura das colunas que o usuário ajustar (arrastando a borda) agora fica salva de verdade — antes de hoje, fechar e abrir o Núcleo de novo voltava tudo ao padrão.",
    "A coluna Detalhes das árvores (Por empresa e Por tarefa) agora também aparece em \"☷ Colunas\" (marcada como fixa, pode só mudar de ordem)."
   ]
  }
 ],
 "total_versoes": 67,
 "em_breve": [
  "Gerar arquivo XML de NFCom pelo Portal DF-e a partir das chaves de acesso.",
  "Verificação de Débitos GDF, Download de NFS-e (ISS.net) e Consulta de Inscrições Estaduais usando o cadastro de empresas e as pastas fiscais.",
  "Leitura de PDF escaneado (OCR) na Organização de Documentos Fiscais.",
  "Novas automações no Domínio: Inclusão de Acumuladores, Importação de NFC-e e CT-e e Resumos de Apuração (ISS, ICMS e Simples).",
  "Simulação do Planejamento usando o ICMS da UF e o ISS do município da empresa (Parâmetros do Sistema).",
  "Configurações: Banco de Dados e Conexões.",
  "Núcleo Interno: emitir a NFS-e dos honorários direto da conta a receber.",
  "Marketing: seguidores, alcance e postagens lidos sozinhos pelas APIs oficiais da Meta (Instagram/Facebook) e do LinkedIn.",
  "Atendimento conectado ao WhatsApp Business (API oficial): conversas entrando sozinhas no histórico do contato.",
  "Núcleo Web: banco de dados na nuvem e acesso pelo navegador.",
  "BPO Financeiro: relatório do Domínio e categorias com plano de contas fixo do escritório."
 ],
 "planos": [
  {
   "nome": "Essencial",
   "descricao": "Cadastro de empresas e consultas federais.",
   "preco": "Sob consulta",
   "tem_preco": false,
   "destaque": false,
   "personalizado": false,
   "limites": [
    "Até 3 usuários",
    "Até 50 empresas",
    "Até 20 certificados por computador"
   ],
   "modulos": [
    {
     "nome": "Acessos do Governo — Federal",
     "incluso": true
    },
    {
     "nome": "Acessos do Governo — Estadual",
     "incluso": false
    },
    {
     "nome": "Acessos do Governo — Municipal",
     "incluso": false
    },
    {
     "nome": "Automações no Domínio",
     "incluso": false
    },
    {
     "nome": "Outras automações",
     "incluso": true
    }
   ]
  },
  {
   "nome": "Profissional",
   "descricao": "Acessos do Governo completos (Federal, Estadual e Municipal).",
   "preco": "Sob consulta",
   "tem_preco": false,
   "destaque": true,
   "personalizado": false,
   "limites": [
    "Até 10 usuários",
    "Até 300 empresas",
    "Até 150 certificados por computador"
   ],
   "modulos": [
    {
     "nome": "Acessos do Governo — Federal",
     "incluso": true
    },
    {
     "nome": "Acessos do Governo — Estadual",
     "incluso": true
    },
    {
     "nome": "Acessos do Governo — Municipal",
     "incluso": true
    },
    {
     "nome": "Automações no Domínio",
     "incluso": false
    },
    {
     "nome": "Outras automações",
     "incluso": true
    }
   ]
  },
  {
   "nome": "Completo",
   "descricao": "Todos os módulos, inclusive as automações do Domínio, sem limites.",
   "preco": "Sob consulta",
   "tem_preco": false,
   "destaque": false,
   "personalizado": false,
   "limites": [
    "Usuários sem limite",
    "Empresas sem limite",
    "Certificados por computador sem limite"
   ],
   "modulos": [
    {
     "nome": "Acessos do Governo — Federal",
     "incluso": true
    },
    {
     "nome": "Acessos do Governo — Estadual",
     "incluso": true
    },
    {
     "nome": "Acessos do Governo — Municipal",
     "incluso": true
    },
    {
     "nome": "Automações no Domínio",
     "incluso": true
    },
    {
     "nome": "Outras automações",
     "incluso": true
    }
   ]
  },
  {
   "nome": "Personalizado",
   "descricao": "Módulos e limites definidos um a um pelo proprietário do Núcleo.",
   "preco": "Sob consulta",
   "tem_preco": false,
   "destaque": false,
   "personalizado": true,
   "limites": [
    "Usuários sem limite",
    "Empresas sem limite",
    "Certificados por computador sem limite"
   ],
   "modulos": [
    {
     "nome": "Acessos do Governo — Federal",
     "incluso": true
    },
    {
     "nome": "Acessos do Governo — Estadual",
     "incluso": true
    },
    {
     "nome": "Acessos do Governo — Municipal",
     "incluso": true
    },
    {
     "nome": "Automações no Domínio",
     "incluso": true
    },
    {
     "nome": "Outras automações",
     "incluso": true
    }
   ]
  }
 ],
 "automacoes": [
  {
   "categoria": "Federal",
   "itens": [
    {
     "nome": "Download de NF-e de Entrada (Distribuição DF-e)",
     "descricao": "Baixa pelo canal oficial as NF-e em que a empresa é destinatária, de qualquer estado, com certificado A1.",
     "icone": "📥",
     "portal": "Ambiente Nacional da NF-e",
     "uf": "",
     "disponivel": true
    },
    {
     "nome": "Download de CT-e (Distribuição DF-e)",
     "descricao": "Baixa pelo canal oficial os CT-e tomados, emitidos e recebidos da empresa, por período, com certificado A1.",
     "icone": "🚚",
     "portal": "Ambiente Nacional do CT-e",
     "uf": "",
     "disponivel": true
    },
    {
     "nome": "Download de NFS-e (Portal Nacional)",
     "descricao": "Baixa pelo canal oficial as NFS-e prestadas e tomadas do Sistema Nacional, por período, com certificado A1.",
     "icone": "🧾",
     "portal": "Portal Nacional da NFS-e",
     "uf": "",
     "disponivel": true
    },
    {
     "nome": "Consulta de Inscrições Estaduais (CCC)",
     "descricao": "Consulta a inscrição estadual e a situação cadastral das empresas da planilha na UF indicada e gera PDF e relatório.",
     "icone": "🪪",
     "portal": "Cadastro Centralizado de Contribuinte (SVRS)",
     "uf": "",
     "disponivel": true
    },
    {
     "nome": "Gerar arquivo XML NFCom",
     "descricao": "Consulta no Portal DF-e as NFCom das chaves de acesso da planilha e salva os XML na pasta de destino.",
     "icone": "📄",
     "portal": "Portal DF-e (SVRS)",
     "uf": "",
     "disponivel": false
    }
   ]
  },
  {
   "categoria": "Estadual",
   "itens": [
    {
     "nome": "Verificação de Débitos GDF",
     "descricao": "Consulta os débitos das empresas junto à Fazenda Pública do DF e salva o resultado em PDF.",
     "icone": "🏛",
     "portal": "Agenci@Net",
     "uf": "DF",
     "disponivel": true
    },
    {
     "nome": "Consultar Malha Fiscal",
     "descricao": "Consulta todas as empresas com divergência na Malha Fiscal e gera relatório geral e comparação.",
     "icone": "🔎",
     "portal": "Agenci@Net",
     "uf": "DF",
     "disponivel": true
    },
    {
     "nome": "Consultar Rito Especial",
     "descricao": "Consulta o Rito Especial das empresas na Agenci@Net.",
     "icone": "📑",
     "portal": "Agenci@Net",
     "uf": "DF",
     "disponivel": false
    },
    {
     "nome": "Download de XML — NFC-e, NFCom e outros",
     "descricao": "Pede e baixa os XML (NFC-e, NFCom, NF-e...) emitidos ou recebidos das empresas da planilha.",
     "icone": "🗂",
     "portal": "Agenci@Net",
     "uf": "DF",
     "disponivel": true
    }
   ]
  },
  {
   "categoria": "Municipal",
   "itens": [
    {
     "nome": "Download de NFS-e",
     "descricao": "Baixa as notas fiscais de serviço eletrônicas (prestadas e tomadas) das empresas.",
     "icone": "⬇",
     "portal": "ISS.net Brasília",
     "uf": "DF",
     "disponivel": true
    },
    {
     "nome": "Gerar Relatório de NFS-e (Serviço Prestado)",
     "descricao": "Consulta e baixa os relatórios em PDF e XLS dos serviços prestados.",
     "icone": "📄",
     "portal": "ISS.net Brasília",
     "uf": "DF",
     "disponivel": true
    },
    {
     "nome": "Gerar DAR ISS",
     "descricao": "Emite e baixa as guias DAR de ISS (serviços prestados e tomados) das empresas.",
     "icone": "💵",
     "portal": "ISS.net Brasília",
     "uf": "DF",
     "disponivel": true
    },
    {
     "nome": "Relatório de Pendências do Contribuinte (ISS)",
     "descricao": "Gera e salva em PDF o relatório de pendências de ISS das empresas.",
     "icone": "⚠",
     "portal": "ISS.net Brasília",
     "uf": "DF",
     "disponivel": true
    }
   ]
  },
  {
   "categoria": "Domínio",
   "itens": [
    {
     "nome": "Inclusão de NCMs no Domínio",
     "descricao": "Inclui os NCMs da planilha na tela de Configuração de NCM/CEST do Domínio.",
     "icone": "🧾",
     "portal": "Parametrizações",
     "uf": "",
     "disponivel": true
    },
    {
     "nome": "Inclusão de Acumuladores",
     "descricao": "Inclui acumuladores no Domínio a partir de uma planilha.",
     "icone": "🗃",
     "portal": "Parametrizações",
     "uf": "",
     "disponivel": false
    },
    {
     "nome": "Importação de NFCom",
     "descricao": "Entra em cada empresa pelo código do Domínio, importa os XML de NFCom da pasta fiscal do mês e grava.",
     "icone": "📥",
     "portal": "Importação",
     "uf": "",
     "disponivel": true
    },
    {
     "nome": "Importação de NF-e",
     "descricao": "Entra em cada empresa pelo código do Domínio, importa os XML de NF-e da pasta fiscal do mês e grava.",
     "icone": "📥",
     "portal": "Importação",
     "uf": "",
     "disponivel": true
    },
    {
     "nome": "Importação de NFC-e",
     "descricao": "Importa os XML de NFC-e para o Domínio.",
     "icone": "📥",
     "portal": "Importação",
     "uf": "",
     "disponivel": false
    },
    {
     "nome": "Importação de NFS-e",
     "descricao": "Entra em cada empresa pelo código do Domínio, importa os XML de NFS-e (Padrão Nacional) da pasta fiscal do mês e grava.",
     "icone": "📥",
     "portal": "Importação",
     "uf": "",
     "disponivel": true
    },
    {
     "nome": "Importação de CT-e",
     "descricao": "Importa os XML de CT-e para o Domínio.",
     "icone": "📥",
     "portal": "Importação",
     "uf": "",
     "disponivel": false
    },
    {
     "nome": "Atualização de Retenção NFCom",
     "descricao": "Busca notas de saída NFCom pelo documento e atualiza as retenções via acumulador.",
     "icone": "💰",
     "portal": "Alterações",
     "uf": "",
     "disponivel": true
    },
    {
     "nome": "Cancelamento de Movimentos Fiscais",
     "descricao": "Cancela movimentos fiscais (notas) no Domínio a partir de uma planilha.",
     "icone": "🚫",
     "portal": "Alterações",
     "uf": "",
     "disponivel": false
    },
    {
     "nome": "Alterar Dados de Impostos do ICMS",
     "descricao": "Altera os dados do imposto ICMS nas notas do Domínio.",
     "icone": "✏",
     "portal": "Alterações",
     "uf": "",
     "disponivel": false
    },
    {
     "nome": "Alterar Dados de Impostos do PIS e COFINS",
     "descricao": "Altera os dados de PIS e COFINS nas notas do Domínio.",
     "icone": "✏",
     "portal": "Alterações",
     "uf": "",
     "disponivel": false
    },
    {
     "nome": "Gerar Resumo de Apuração - ISS",
     "descricao": "Gera o resumo de apuração do ISS das empresas no Domínio.",
     "icone": "🧮",
     "portal": "Apurações",
     "uf": "",
     "disponivel": false
    },
    {
     "nome": "Gerar Resumo de Apuração - ICMS",
     "descricao": "Gera o resumo de apuração do ICMS das empresas no Domínio.",
     "icone": "🧮",
     "portal": "Apurações",
     "uf": "",
     "disponivel": false
    },
    {
     "nome": "Gerar Resumo de Apuração - Simples",
     "descricao": "Gera o resumo de apuração do Simples Nacional das empresas no Domínio.",
     "icone": "🧮",
     "portal": "Apurações",
     "uf": "",
     "disponivel": false
    }
   ]
  },
  {
   "categoria": "Outros",
   "itens": [
    {
     "nome": "Organização de Documentos Fiscais",
     "descricao": "Lê os documentos fiscais em PDF ou XML de uma pasta, organiza os arquivos e gera relatório.",
     "icone": "🗂",
     "portal": "Documentos Fiscais",
     "uf": "",
     "disponivel": true
    },
    {
     "nome": "Gerar Relatórios de Faturamento",
     "descricao": "Gera relatórios consolidados de faturamento.",
     "icone": "📊",
     "portal": "Relatórios",
     "uf": "",
     "disponivel": false
    }
   ]
  }
 ],
 "total_automacoes": 17,
 "gerado_em": "06/11/2026 10:33"
};
