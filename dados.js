// Gerado por publicar_site.py — não editar à mão.
window.NUCLEO = {
 "nome": "Núcleo de Automação de Processo",
 "slogan": "Automação fiscal e contábil para escritórios de contabilidade",
 "email": "alansantos.fiscal@gmail.com",
 "whatsapp": "",
 "download": {
  "publico": true,
  "url": "https://drive.usercontent.google.com/download?id=14DuTO0s3I8kVtsSwUHiaVWa8WkWQsjMG&export=download&confirm=t",
  "versao": "2026.10.29.1118",
  "data": "29/10/2026 11:18",
  "sha256": "434f9d4c55cb5191c5f3091eb2ee0d5eeadc408c427c2216c53e6db7c8f95c0a"
 },
 "versoes": [
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
  },
  {
   "versao": "2026.10.26.0840",
   "data": "26/10/2026 08:40",
   "titulo": "Login mais seguro",
   "itens": [
    "O usuário e a senha agora são conferidos no Banco Central do Núcleo antes de liberar o acesso aos dados do escritório. A senha continua sem sair do computador: vai só um resumo protegido dela.",
    "Depois de 5 tentativas com a senha errada, aquele usuário fica bloqueado por 10 minutos.",
    "A partir do segundo acesso, o login fica mais rápido (uma consulta só ao Central).",
    "Sem internet, o Núcleo continua entrando pela última cópia do cadastro, como antes."
   ]
  },
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
  }
 ],
 "total_versoes": 49,
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
 "gerado_em": "29/10/2026 11:31"
};
