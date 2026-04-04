# Typescript no Angular

### Criar componentes

Exemplo de código para criar novos componentes:

``` typescript
import { Component } from '@angular/core';

@Component ({
    selector: 'app-teste',
    templateUrl: './teste.component.html',
    styleUrls: ['./teste.component.css']
})

export class TesteComponent {

}
```

### Informações relevantes

* **Export:** Para deixar outro arquivo usar sua classe.

* **Import:** Para puxar o que você precisa de outro lugar.

* **Caminho (Path):** O caminho tem que estar perfeito (./pasta/arquivo).

* **package.json:** é o arquivo mais importante de um projeto Angular/Node para criar dependências, ou seja
ele pode ser transportado para outra máquina/servidor e lendo esse arquivo ele pode ser recriado.
Por exemplo, podemos excluir a pasta node_modules e o package.json vai recriar todos os módulos ao ser executado. 

* **angular.json:** é um arquivo de configurações do Angular e define as configurações do projeto, como as dependências, os arquivos a serem compilados, a estrutura do diretório, as tarefas de construção, a configuração do servidor de desenvolvimento e muito mais.  

* **tsconfig.json:** é o arquivo de configurações principal do Typescript. Ele define as opções de compilação e as configuraçõoes do projeto. Nele você pode especificar o diretório de saída, a versão do ECMAScript a ser usada, habilitar ou desabilitar recursos específicos do Typescript entre outras coisas.

* **tslint.json:** este arquivo define as regras e configurações para o linter Typescript. O linter ajuda a manter um código consistente e livre de erros, aplicando regras de estilo e boas práticas de programação. Você pode definir suas próprias regras ou usar configurações predefinidas.

* **karma.conf.js:** se você estiver usando o Karma como test runner para seus testes unitários no Angular, este arquivo contém a configuração para a execução dos testes. Você pode definir os arquivos a serem testados, os frameworks a serem usados, os reporters de resultados e outras opções relacionadas aos testes.

* **protactor.conf.js:** se você estiver usando o Protactor para executar testes de ponta a ponta (e2e) no Angular, este arquivo contém a configuração para os testes e2e. Você pode definir os caminhos dos arquivos de teste, as configurações do navegador, as URLs a serem testadas e outras opções relevantes para os testes e2e.
