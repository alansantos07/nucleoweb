// Gerado por publicar_site.py — não editar à mão.
window.NUCLEO = {
 "nome": "Núcleo de Automação de Processo",
 "slogan": "Automação fiscal e contábil para escritórios de contabilidade",
 "email": "alansantos.fiscal@gmail.com",
 "whatsapp": "",
 "download": {
  "publico": true,
  "url": "https://drive.usercontent.google.com/download?id=14DuTO0s3I8kVtsSwUHiaVWa8WkWQsjMG&export=download&confirm=t",
  "versao": "2026.10.30.1035",
  "data": "30/10/2026 10:35",
  "sha256": "4dd7ac46b4df350edd7043575f05c898d9f9ac9d4ef39bbc30de9d2fded7900a"
 },
 "versoes": [
  {
   "versao": "2026.10.30.1035",
   "data": "30/10/2026 10:35",
   "titulo": "Portal do Cliente com a marca do escritório",
   "itens": [
    "Empresas → 🌐 Portal → 🎨 Aparência do portal: o portal das empresas passa a aparecer com o nome, a logomarca, as cores e os contatos do escritório, com pré-visualização na hora.",
    "Cada escritório ganha o seu link (ex.: .../portal/?e=scm): quem entra por ele já vê a marca na tela de entrada, com a mensagem de boas-vindas, telefone, WhatsApp, e-mail e site.",
    "Dentro do portal, botão \"Falar com o escritório\" abre o WhatsApp do escritório; o convite enviado à empresa já leva o link do escritório.",
    "Honorários no portal com os arquivos: PDF do boleto (Banco Inter), DANFSe e XML da NFS-e para a empresa baixar. São gerados na publicação (Empresas → Portal → Publicar) pelo computador que tem o Inter e o certificado da NFS-e configurados.",
    "Publicação automática do portal: quando uma guia \"enviar ao cliente\" muda na Gestão de Processos ou um honorário da empresa muda no Financeiro (boleto, NFS-e, recebimento), o portal se atualiza sozinho em até 20 segundos. Dá para desligar em Empresas → Portal.",
    "Aviso por e-mail à empresa: ligue em Empresas → Portal e, a cada publicação, a empresa recebe um e-mail quando chegar guia, boleto ou NFS-e nova, com a lista e o link do portal. A mensagem é sua (✉ Mensagem do aviso, com campos e prévia). Coisas antigas não são avisadas.",
    "Portal com a aba Obrigações: calendário com as datas de pagamento e entrega das obrigações da empresa (Apuração, Declaração e tarefas \"enviar ao cliente\" da Gestão de Processos), do mês e do próximo, com a situação de cada uma.",
    "Portal com a aba Documentos: contratos assinados (Comercial) entram sozinhos, e em Empresas → Portal → 📎 Documentos você anexa certidões, relatórios, alvarás e outros PDFs, com validade (avisa quando está vencendo).",
    "Portal com a aba Enviar documentos: a empresa manda notas, extratos, folha e comprovantes ao escritório (arrastando os arquivos, com tipo, competência e mensagem) e acompanha se o escritório já recebeu.",
    "Empresas → Portal → 📥 Recebidos: o escritório vê o que as empresas mandaram e baixa com um clique para a pasta da empresa no mês, em \"Recebidos do cliente\\<tipo>\".",
    "Portal com a aba Solicitações: a empresa abre pedidos (segunda via, dúvida, alteração cadastral, departamento pessoal...) com anexos e conversa com o escritório. No Núcleo, Empresas → Portal → 💬 Solicitações mostra as novas em negrito, com resposta, anexos e situação (Aberta, Em andamento, Aguardando cliente, Concluída); com o aviso por e-mail ligado, a empresa recebe a resposta por e-mail.",
    "Portal do Cliente com visual novo: menu lateral (Início, Financeiro, Fiscal, Documentos e Atendimento) com avisos em vermelho, e a página Início com os próximos vencimentos, os avisos (guia vencida, resposta nova, certidão vencendo) e atalhos. No celular, o menu abre pelo botão ☰.",
    "Esqueci a senha no próprio portal: a empresa informa o e-mail, recebe um código de 6 dígitos (vale 15 minutos) e cria a senha nova sozinha, sem precisar pedir ao escritório.",
    "Mural de comunicados: em Empresas → Portal → 📢 Comunicados o escritório publica avisos (feriado, legislação, prazo importante) para todas as empresas ou só para algumas, com período no ar e destaque para os importantes; aparecem no alto do Início do portal e podem ir também por e-mail."
   ]
  },
  {
   "versao": "2026.10.29.1501",
   "data": "29/10/2026 15:01",
   "titulo": "Importar empresas de Excel ou TXT",
   "itens": [
    "Empresas → ⋯ → Importar empresas: traga o cadastro de uma planilha Excel (.xlsx) ou de um arquivo de texto (.txt/.csv). Tem planilha modelo com instruções e as listas das Classificações.",
    "Você escolhe quais colunas importar (CNPJ e Razão Social são obrigatórios) e confere, antes de gravar, linha a linha o que entra, o que entra com aviso e o que não entra — e por quê.",
    "CNPJ já cadastrado nunca é sobrescrito; CNPJ inválido, repetido no arquivo ou código do Domínio já usado ficam de fora. No fim, relatório em Excel e atalho para atualizar o cadastro das importadas.",
    "Empresas → ⋯ → Exportar / imprimir empresas: Excel ou PDF do seu jeito — escolha as empresas (lista atual, selecionadas ou todas, com filtros próprios), as colunas e a ordem delas, ordenação e agrupamento. No PDF: título, orientação, letra, cor, logomarca e dados do escritório, zebrado, total e rodapé com \"Página X de Y\", com pré-visualização na tela e botão Imprimir."
   ]
  },
  {
   "versao": "2026.10.29.1350",
   "data": "29/10/2026 13:50",
   "titulo": "Colunas da lista de empresas do seu jeito",
   "itens": [
    "Empresas → ☷ Colunas: agora são até 10 colunas, e CNPJ, Cód. Domínio e Empresa deixaram de ser fixas (podem sair da lista ou mudar de lugar).",
    "Novo quadro \"Ordem das colunas\" no topo da janela: use ◀ ▶ para mudar a posição de cada coluna e ✕ para tirar.",
    "Página Empresas com indicadores no topo: total, matrizes, filiais, Simples Nacional, CNPJ ativo, CNPJ com restrição e não consultadas na Receita. Eles acompanham a busca, e clicar num cartão filtra a lista.",
    "Os botões Colunas, Atualizar, Pastas e Portal foram para o menu ⋯ ao lado de \"+ Nova empresa\".",
    "Botão direito na lista de empresas: Abrir, Selecionar todas (Ctrl+A), Limpar seleção e Excluir (tecla Delete). A exclusão pede para digitar EXCLUIR e guarda uma cópia no banco para recuperar; exige a permissão nova \"Excluir o cadastro inteiro da empresa\" (Administrador e Supervisor).",
    "Novo: Solicitações de melhoria (⚙ Configurações → Novidades e Versões → aba 💡). Descreva a sua ideia (tipo, módulo, categoria e prioridade), apoie (👍) as dos colegas do escritório — as mais apoiadas sobem no ranking — e acompanhe a resposta do Núcleo: em análise, aprovada, em desenvolvimento, concluída."
   ]
  },
  {
   "versao": "2026.10.29.1118",
   "data": "29/10/2026 11:18",
   "titulo": "Suporte para quem esqueceu a senha",
   "itens": [
    "\"Esqueci minha senha\" na tela de login abre a janela de Suporte: mostra o passo a passo para recuperar o acesso e permite enviar um pedido informando o CNPJ do escritório e o usuário ou e-mail.",
    "O pedido avisa por e-mail os Administradores do escritório e o suporte do Núcleo, com um número de protocolo. Por segurança, a senha nunca é enviada por e-mail.",
    "Proprietário do Núcleo: ⚙ Configurações → Pedidos de Suporte lista os pedidos de todos os escritórios (filtro por situação, escritório e busca) e registra o atendimento (Aberto, Em atendimento, Resolvido, resposta e histórico). O menu mostra quantos estão em aberto."
   ]
  },
  {
   "versao": "2026.10.29.1003",
   "data": "29/10/2026 10:03",
   "titulo": "Tudo no banco do escritório (nada só no computador)",
   "itens": [
    "Certificados digitais: o arquivo .pfx e a senha agora ficam no banco do escritório, criptografados. Cadastrou em um computador, vale em todos — não precisa mais cadastrar de novo em cada máquina.",
    "E-mail de envio e Banco Inter passam a ser do escritório: configure uma vez e todos os computadores usam.",
    "Download de NF-e e de CT-e: o controle da SEFAZ (última consulta, notas pendentes) e os XML baixados ficam no banco. Outro computador continua de onde parou, sem o bloqueio de 1 hora da SEFAZ; se dois computadores tentarem o mesmo CNPJ ao mesmo tempo, o segundo pula aquele CNPJ e avisa.",
    "Download de XML pela Agenci@Net: os pedidos que ficaram aguardando a SEFAZ podem ser baixados em qualquer computador (\"Baixar pendentes\").",
    "Na primeira vez que cada computador entrar nesta versão, o que estava só nele sobe para o banco sozinho."
   ]
  },
  {
   "versao": "2026.10.26.1029",
   "data": "26/10/2026 10:29",
   "titulo": "Núcleo Web: Portal do Cliente",
   "itens": [
    "Novo em Empresas → \"🌐 Portal\": libere o Portal do Cliente para cada empresa (e-mail e senha provisória, com o texto do convite pronto para enviar) e publique o que ela pode ver.",
    "A empresa entra pelo navegador (Área do Cliente da página do Núcleo), cria a própria senha no 1º acesso e vê, só para consulta: as guias de impostos com valor, vencimento e o PDF; os honorários com a NFS-e e o código do boleto/PIX; e os dados da empresa e o contato do escritório.",
    "Entram no portal as tarefas da Gestão de Processos marcadas para enviar ao cliente (dos últimos 6 meses) e as contas a receber da empresa no Financeiro. Um mesmo e-mail pode ver várias empresas.",
    "Publicar de novo só envia os PDFs novos. Acesso desativado some do portal na hora."
   ]
  }
 ],
 "total_versoes": 52,
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
 "gerado_em": "30/10/2026 11:25"
};
