// Gerado por publicar_site.py — não editar à mão.
window.NUCLEO = {
 "nome": "Núcleo de Automação de Processo",
 "slogan": "Automação fiscal e contábil para escritórios de contabilidade",
 "email": "alansantos.fiscal@gmail.com",
 "whatsapp": "",
 "download": {
  "publico": false,
  "url": "https://drive.usercontent.google.com/download?id=14DuTO0s3I8kVtsSwUHiaVWa8WkWQsjMG&export=download&confirm=t",
  "versao": "2026.10.23.1644",
  "data": "23/10/2026 16:44",
  "sha256": ""
 },
 "versoes": [
  {
   "versao": "2026.10.23.1644",
   "data": "23/10/2026 16:44",
   "titulo": "Planejamento Tributário: apresentação para o cliente e acompanhamento",
   "itens": [
    "Na página Resultado da simulação, o botão \"📄 Apresentação para o cliente (PDF)\" gera o relatório do planejamento com a logomarca, o papel timbrado e o cabeçalho/rodapé do escritório: capa, sumário executivo (situação atual × opção recomendada e a economia por mês e em 12 meses), premissas, análise comparativa tributo a tributo, gráficos, memorial de cálculo, recomendação, cronograma de implementação, ressalvas e aceite.",
    "Novo em ⚙ Configurações: \"Modelo de Apresentação do Planejamento\" — escolha as seções que saem no PDF, a ordem, os títulos e os textos (com formatação e campos como {{cliente_nome}} e {{economia_anual}}), o layout da página e o cronograma padrão de implantação.",
    "Ao gerar a apresentação, o planejamento entra no acompanhamento: Planejamento → \"📈 Acompanhamento\" mostra todos, com a implantação (%), a próxima etapa, as etapas atrasadas e a economia prevista × realizada.",
    "O acompanhamento de cada planejamento tem o cronograma (prazos, responsável, situação), a economia mês a mês (os tributos pagos podem ser buscados na Gestão de Processos do Núcleo Fiscal), as reuniões e registros com o cliente, o histórico e o relatório de acompanhamento em PDF.",
    "Menu do Núcleo Fiscal reorganizado: Painel | Gestão de Processos | Planejamento Tributário | Gestão Tributária. Em Planejamento Tributário ficam as páginas Cenário Atual (empresas e o cenário/regime em vigor), Simulações e Acompanhamento."
   ]
  },
  {
   "versao": "2026.10.22.2342",
   "data": "22/10/2026 23:42",
   "titulo": "Simulação: página Análises com visual novo",
   "itens": [
    "Um cartão por opção comparada (empresa, cenário ou regime), com o total no topo e a melhor em verde com \"✔ MELHOR OPÇÃO\". Vale para os 3 tipos de simulação.",
    "Cada cartão traz os tributos consolidados — ICMS, ISS, PIS, COFINS, IRPJ, CSLL e INSS (CPP) — com o % de carga e o valor. No Simples, o DAS é aberto em cada tributo pela partilha do Anexo/faixa.",
    "Título em destaque com o tipo de análise e uma faixa verde com a conclusão (ex.: economia por mês e por ano da melhor opção).",
    "\"Visualizar detalhes\" abre uma janela por cima com os tributos e o memorial de cálculo, sem poluir a página."
   ]
  },
  {
   "versao": "2026.10.22.2227",
   "data": "22/10/2026 22:27",
   "titulo": "Simulação: cada cenário comparado com as suas receitas e custos",
   "itens": [
    "Comparação entre cenários: as páginas Receita e Custos e Despesas mostram um cartão para cada cenário (o da simulação e os marcados no Início), no mesmo visual dos Cenários de planejamento. Clique no cenário para abrir as empresas, atividades e receitas dele, exatamente como foram configuradas.",
    "Em cada cenário comparado você distribui a mesma receita bruta entre os CNPJs e as receitas (ex.: 30 mil no SCM e 20 mil nos livros) e ajusta os custos. O cartão fechado mostra receita, total devido e carga.",
    "A página Análises compara os cenários com esses valores — o resultado é o da estrutura que você montou.",
    "Os blocos das empresas na Receita ganharam o visual novo (CNPJ n em azul, regime num selo)."
   ]
  },
  {
   "versao": "2026.10.22.2148",
   "data": "22/10/2026 21:48",
   "titulo": "Cenários de planejamento com visual novo",
   "itens": [
    "⚙ Configurações → Cenários de Planejamento Tributário: cada cenário virou um cartão mais limpo — CENÁRIO n | nome | Apagar. Clique em \"CENÁRIO n\" para recolher (fica só o nome) ou abrir; há também \"Abrir todos\" e \"Recolher todos\".",
    "Nova estrutura: CNPJ (limite de faturamento, período e regime) → CNAE (atividade) → produtos e serviços com o %. Um CNPJ pode ter várias atividades, e cada atividade várias receitas.",
    "Botões + CNPJ, + CNAE e + PRODUTO no pé do cartão: entram no CNPJ/CNAE destacado (clique no CNPJ ou no CNAE para escolher). Despesas, funcionários e observação do CNPJ ficam em \"detalhes\".",
    "O % de cada produto ou serviço é da receita do CNPJ. Os cenários já cadastrados continuam valendo (cada CNPJ antigo vira um CNPJ com uma atividade).",
    "Não lembra o código? Aperte F2: no campo do CNAE abre a lista dos CNAEs cadastrados; em qualquer outro lugar do cartão abre a lista de produtos e serviços (dá para marcar vários de uma vez) para o CNAE destacado. Os botões 🔍 F2 e 🔍 Lista (F2) fazem o mesmo."
   ]
  },
  {
   "versao": "2026.10.22.1800",
   "data": "22/10/2026 18:00",
   "titulo": "Planejamento Tributário: escolha o tipo de comparação",
   "itens": [
    "Núcleo Fiscal → Planejamento → Nova simulação: o 1º passo agora é escolher o que o estudo vai comparar — Empresas, Cenários ou Regimes. O restante do Início aparece depois da escolha.",
    "Comparação entre empresas: cada CNPJ do cenário lado a lado (faturamento, folha, tributos, carga) e o melhor regime que cada uma poderia adotar, com a economia por mês.",
    "Comparação entre cenários: o cenário escolhido × outros cenários do planejamento (mesma receita) × uma hipótese de variação da receita e da folha (ex.: +20% de faturamento).",
    "Comparação entre regimes: a estrutura no Simples, no Presumido e no Real. O regime que a empresa não pode adotar (receita acima do limite, CNAE impeditivo no Simples) aparece com o motivo e não concorre a melhor.",
    "Página 4 (Análises) muda conforme a comparação: uma coluna por empresa, por cenário ou por regime, uma linha por tributo (ICMS, ISS, PIS, COFINS, IRPJ, CSLL, INSS/CPP, DAS), total e carga em destaque e a melhor opção marcada. O botão \"Memorial de cálculo\" de cada coluna abre embaixo a conta passo a passo.",
    "O Resultado abre com a comparação escolhida, e o gráfico de barras acompanha o tipo.",
    "Cenários de planejamento: cada atividade (CNPJ) do cenário agora tem as suas receitas — produtos e serviços do cadastro de regras de Tributação, com o % de cada uma na atividade. A simulação monta uma linha por receita, já com as alíquotas da regra.",
    "Comparação entre cenários sem limitação: dá para comparar com cenários de QUALQUER planejamento (agrupados por planejamento, com filtro de setor). Na Análise, o cenário de outro planejamento aparece como \"#002 · Cenário 1\"."
   ]
  },
  {
   "versao": "2026.10.21.2339",
   "data": "21/10/2026 23:39",
   "titulo": "Propostas e contratos: status padronizados, bloqueio depois do aceite e assinaturas",
   "itens": [
    "Status iguais para proposta e contrato, com cores: Em edição (cinza), Gerado (azul), Enviado (roxo), Aceito (verde), Recusado (vermelho) e Encerrado (cinza-escuro) — nos selos, nas listas e na legenda.",
    "O status acompanha o fluxo: gerar o PDF marca como Gerado, preparar o e-mail pergunta se marca como Enviado, e o botão \"Status ▾\" mostra só as mudanças possíveis.",
    "Aceito = bloqueado para edição (🔒): fica só a visualização dos dados, o PDF e o histórico. A trava também vale na gravação, mesmo que alguém tente alterar por outro caminho.",
    "Contrato: só passa a gerar honorários no Financeiro depois de ACEITO. No contrato aceito ainda dá para suspender/reativar o faturamento, anexar o PDF assinado (\"📎 Documento ▾\") e encerrar.",
    "Novo \"✍ Assinaturas\": escolha quem assina (cliente, escritório, responsável técnico, testemunhas, outros), o rótulo, nome e documento de cada um, quantas por linha e cidade/data — no modelo (padrão) ou só naquela proposta/contrato.",
    "Os documentos antigos foram convertidos: Rascunho → Em edição, Enviada/Em negociação → Enviado, Aceita/Ativo → Aceito (Suspenso → Aceito com faturamento suspenso)."
   ]
  }
 ],
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
  "Núcleo Web: banco de dados na nuvem e acesso pelo navegador."
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
 "gerado_em": "26/10/2026 09:01"
};
