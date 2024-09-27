import type { StrapiApp } from "@strapi/strapi/admin";

export default {
  config: {
    locales: [
      // 'ar',
      // 'fr',
      // 'cs',
      // 'de',
      // 'dk',
      // 'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      "pt-BR",
      // "pt",
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      // 'zh',
    ],
    translations: {
      "pt-BR": {
        "apiError.FileTooBig":
          "O arquivo enviado excede o tamanho máximo permitido.",
        "upload.generic-error": "Ocorreu um erro ao enviar o arquivo.",
        "bulk.select.label": "Selecionar todos os arquivos",
        "control-card.stop-crop": "Parar o recorte",
        "form.upload-url.error.url.invalid": "Uma URL é inválida",
        "form.upload-url.error.url.invalids": "{number} URLs são inválidas",
        "header.actions.add-assets": "Adicionar novos arquivos",
        "header.actions.add-folder": "Adicionar nova pasta",
        "header.actions.add-assets.folder": "pasta",
        "header.actions.upload-new-asset": "Enviar novo arquivo",
        "header.content.assets-empty": "Nenhum arquivo",
        "input.placeholder.icon": "Solte o arquivo nesta zona",
        "input.notification.not-supported":
          "Você não pode enviar este tipo de arquivo, apenas os seguintes tipos são aceitos – {fileTypes}",
        "list.assets.title": "Arquivos ({count})",
        "list.asset.at.finished": "Os arquivos terminaram de carregar.",
        "list.assets-empty.search": "Nenhum resultado encontrado",
        "list.assets.empty": "A Biblioteca de Mídia está vazia",
        "list.assets.empty-upload": "Envie seus primeiros arquivos...",
        "list.assets.empty.no-permissions": "Sem permissões para visualizar",
        "list.assets.loading-asset":
          "Carregando a visualização para a mídia: {path}",
        "list.assets.not-supported-content": "Nenhuma visualização disponível",
        "list.assets.preview-asset":
          "Visualização para o vídeo no caminho {path}",
        "list.assets.selected":
          "{numberFolders, plural, one {1 pasta} other {# pastas}} - {numberAssets, plural, one {1 arquivo} other {# arquivos}}",
        "list-assets-select": "Selecionar arquivo {name}",
        "list.folder.edit": "Editar pasta",
        "list.folder.select": "Selecionar pasta {name}",
        "list.folder.subtitle":
          "{folderCount, plural, =0 {# pasta} one {# pasta} other {# pastas}}, {filesCount, plural, =0 {# arquivo} one {# arquivo} other {# arquivos}}",
        "list.folders.title": "Pastas ({count})",
        "list.folders.link-label": "Acessar pasta",
        "mediaLibraryInput.actions.nextSlide": "Próximo slide",
        "mediaLibraryInput.actions.previousSlide": "Slide anterior",
        "mediaLibraryInput.placeholder":
          "Clique para adicionar um arquivo ou arraste e solte um na área",
        "mediaLibraryInput.slideCount": "{n} de {m} slides",
        "modal.folder.move.title": "Mover elementos para",
        "modal.remove.success-label":
          "Os elementos foram excluídos com sucesso.",
        "modal.move.success-label": "Os elementos foram movidos com sucesso",
        "modal.upload-list.footer.button":
          "Enviar {number, plural, one {# arquivo} other {# arquivos}} para a biblioteca",
        "modal.upload-list.sub-header.button": "Adicionar mais arquivos",
        "search.clear.label": "Limpar pesquisa",
        "search.label": "Buscar por um arquivo",
        "search.placeholder": "ex: o primeiro cachorro na lua",
        "settings.blockTitle": "Gerenciamento de Arquivos",
        "settings.form.sizeOptimization.description":
          "Habilitar esta opção reduzirá o tamanho da imagem e ligeiramente reduzirá sua qualidade.",
        "settings.form.sizeOptimization.label": "Otimização do tamanho",
        "settings.header.label": "Biblioteca de Mídia",
        "settings.section.doc.label": "DOC",
        "settings.sub-header.label":
          "Configure as configurações da Biblioteca de Mídia",
        "sort.label": "Ordenar por",
        "sort.updated_at_asc": "Atualizações mais antigas",
        "sort.updated_at_desc": "Atualizações mais recentes",
        "list.table.header.actions": "ações",
        "list.table.header.preview": "visualização",
        "list.table.header.name": "nome",
        "list.table.header.ext": "extensão",
        "list.table.header.size": "tamanho",
        "list.table.header.createdAt": "criado",
        "list.table.header.updatedAt": "última atualização",
        "list.table.header.sort": "Ordenar por {label}",
        "list.table.content.empty-label": "Este campo está vazio",
        "tabs.title": "Como você deseja enviar seus arquivos?",
        "config.back": "Voltar",
        "config.subtitle":
          "Defina as configurações de visualização da biblioteca de mídia.",
        "config.entries.title": "Itens por página",
        "config.sort.title": "Ordem de classificação padrão",
        "config.entries.note":
          "Número de arquivos exibidos por padrão na Biblioteca de Mídia",
        "config.note":
          "Nota: Você pode substituir este valor na biblioteca de mídia.",
        "config.popUpWarning.warning.updateAllSettings":
          "Isso modificará todas as suas configurações",
        "view-switch.list": "Visualização em Lista",
        "view-switch.grid": "Visualização em Grade",
      },
    },
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};
