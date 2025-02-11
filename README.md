# GeoJSON View README
## Descrição
O GeoJSON View é uma aplicação web interativa que utiliza a biblioteca Leaflet para visualizar, editar e explorar dados geoespaciais em formato GeoJSON. 
Esta aplicação também integra diversas camadas temáticas através de serviços WMS fornecidos pelo IBGE, permitindo análises geográficas ricas e dinâmicas. 
O projeto foi projetado para profissionais e entusiastas de geotecnologias que buscam uma ferramenta prática e funcional para manipulação de dados espaciais.

## Funcionalidades Principais
1. Visualização de GeoJSON: Carregue arquivos GeoJSON e visualize os dados no mapa.
3. Edição Interativa: Use ferramentas de desenho para criar e editar polígonos, linhas, retângulos e marcadores diretamente no mapa.
3. Camadas Temáticas: Adicione camadas WMS do IBGE, como Meio Ambiente, Agricultura, Recursos Hídricos, Florestas e Índices Econômicos.
4. Estilo Dinâmico: Destaque feições selecionadas no mapa com estilos personalizados
5. Exibição de Atributos: Veja os atributos das feições GeoJSON em uma tabela lateral detalhada.
6. Controle de Camadas: Alterne entre camadas de mapa base (ruas e satélite) e ative/desative camadas temáticas.

## Tecnologias Utilizadas

1. HTML/CSS: Estrutura e design responsivo para uma interface simples e funcional.
2. JavaScript: Manipulação dinâmica do mapa e eventos interativos.
3. Leaflet: Biblioteca principal para renderização e manipulação de mapas.
4. Leaflet-Draw: Ferramentas de edição e desenho de feições geográficas.
5. Turf.js: Análise geoespacial avançada (pronto para futuras extensões).
6. Serviços WMS do IBGE: Integração de camadas temáticas externas.

## Como Usar
1. Abrir o projeto: Salve o código em um arquivo index.html e abra-o em um navegador moderno
2. Visualizar dados GeoJSON: Clique no botão "Carregar GeoJSON" no canto superior direito e selecione o arquivo GeoJSON que deseja visualizar.
3. Explorar o mapa: Navegue pelo mapa, interaja com as camadas temáticas e veja as informações das feições clicando sobre elas.
4. Editar elementos: Utilize a barra de ferramentas de desenho para criar novas feições no mapa ou editar as existentes.
5. Alternar camadas: Use o controle de camadas para alternar entre mapas base (Ruas ou Satélite) e ativar/desativar camadas temáticas

## Estrutura do Código
1. Cabeçalho HTML: Configurações iniciais, como links para bibliotecas externas (Leaflet, Leaflet-Draw e Turf.js).
2. Estilo CSS: Layout responsivo para o mapa e a tabela de informações.
3. Scripts JavaScript:
     Configuração inicial do mapa.
     Controle de camadas base e temáticas.
     Ferramentas de desenho e eventos interativos.
     Lógica para carregar, exibir e editar arquivos GeoJSON.
   
## Requisitos
1. Navegador moderno com suporte a ES6+.
2. Conexão com a internet para carregar bibliotecas externas e camadas WMS.

## Futuras Extensões
1. Suporte a análises geoespaciais avançadas com Turf.js.
2. Exportação de feições editadas para arquivos GeoJSON.
3. Integração com outras fontes de dados WMS/WMTS.
4. Personalização de estilos e ícones das feições.

## 


