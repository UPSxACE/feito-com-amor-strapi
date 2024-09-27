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
        "upload.apiError.FileTooBig":
          "O arquivo enviado excede o tamanho máximo permitido.",
        "upload.upload.generic-error": "Ocorreu um erro ao enviar o arquivo.",
        "upload.bulk.select.label": "Selecionar todos os arquivos",
        "upload.control-card.stop-crop": "Parar o recorte",
        "upload.form.upload-url.error.url.invalid": "Uma URL é inválida",
        "upload.form.upload-url.error.url.invalids":
          "{number} URLs são inválidas",
        "upload.header.actions.add-assets": "Adicionar novos arquivos",
        "upload.header.actions.add-folder": "Adicionar nova pasta",
        "upload.header.actions.add-assets.folder": "pasta",
        "upload.header.actions.upload-new-asset": "Enviar novo arquivo",
        "upload.header.content.assets-empty": "Nenhum arquivo",
        "upload.input.placeholder.icon": "Solte o arquivo nesta zona",
        "upload.input.notification.not-supported":
          "Você não pode enviar este tipo de arquivo, apenas os seguintes tipos são aceitos – {fileTypes}",
        "upload.list.assets.title": "Arquivos ({count})",
        "upload.list.asset.at.finished": "Os arquivos terminaram de carregar.",
        "upload.list.assets-empty.search": "Nenhum resultado encontrado",
        "upload.list.assets.empty": "A Biblioteca de Mídia está vazia",
        "upload.list.assets.empty-upload": "Envie seus primeiros arquivos...",
        "upload.list.assets.empty.no-permissions":
          "Sem permissões para visualizar",
        "upload.list.assets.loading-asset":
          "Carregando a visualização para a mídia: {path}",
        "upload.list.assets.not-supported-content":
          "Nenhuma visualização disponível",
        "upload.list.assets.preview-asset":
          "Visualização para o vídeo no caminho {path}",
        "upload.list.assets.selected":
          "{numberFolders, plural, one {1 pasta} other {# pastas}} - {numberAssets, plural, one {1 arquivo} other {# arquivos}}",
        "upload.list-assets-select": "Selecionar arquivo {name}",
        "upload.list.folder.edit": "Editar pasta",
        "upload.list.folder.select": "Selecionar pasta {name}",
        "upload.list.folder.subtitle":
          "{folderCount, plural, =0 {# pasta} one {# pasta} other {# pastas}}, {filesCount, plural, =0 {# arquivo} one {# arquivo} other {# arquivos}}",
        "upload.list.folders.title": "Pastas ({count})",
        "upload.list.folders.link-label": "Acessar pasta",
        "upload.mediaLibraryInput.actions.nextSlide": "Próximo slide",
        "upload.mediaLibraryInput.actions.previousSlide": "Slide anterior",
        "upload.mediaLibraryInput.placeholder":
          "Clique para adicionar um arquivo ou arraste e solte um na área",
        "upload.mediaLibraryInput.slideCount": "{n} de {m} slides",
        "upload.modal.folder.move.title": "Mover elementos para",
        "upload.modal.remove.success-label":
          "Os elementos foram excluídos com sucesso.",
        "upload.modal.move.success-label":
          "Os elementos foram movidos com sucesso",
        "upload.modal.upload-list.footer.button":
          "Enviar {number, plural, one {# arquivo} other {# arquivos}} para a biblioteca",
        "upload.modal.upload-list.sub-header.button": "Adicionar mais arquivos",
        "upload.search.clear.label": "Limpar pesquisa",
        "upload.search.label": "Buscar por um arquivo",
        "upload.search.placeholder": "ex: o primeiro cachorro na lua",
        "upload.settings.blockTitle": "Gerenciamento de Arquivos",
        "upload.settings.form.sizeOptimization.description":
          "Habilitar esta opção reduzirá o tamanho da imagem e ligeiramente reduzirá sua qualidade.",
        "upload.settings.form.sizeOptimization.label": "Otimização do tamanho",
        "upload.settings.header.label": "Biblioteca de Mídia",
        "upload.settings.section.doc.label": "DOC",
        "upload.settings.sub-header.label":
          "Configure as configurações da Biblioteca de Mídia",
        "upload.sort.label": "Ordenar por",
        "upload.sort.updated_at_asc": "Atualizações mais antigas",
        "upload.sort.updated_at_desc": "Atualizações mais recentes",
        "upload.list.table.header.actions": "ações",
        "upload.list.table.header.preview": "visualização",
        "upload.list.table.header.name": "nome",
        "upload.list.table.header.ext": "extensão",
        "upload.list.table.header.size": "tamanho",
        "upload.list.table.header.createdAt": "criado",
        "upload.list.table.header.updatedAt": "última atualização",
        "upload.list.table.header.sort": "Ordenar por {label}",
        "upload.list.table.content.empty-label": "Este campo está vazio",
        "upload.tabs.title": "Como você deseja enviar seus arquivos?",
        "upload.config.back": "Voltar",
        "upload.config.subtitle":
          "Defina as configurações de visualização da biblioteca de mídia.",
        "upload.config.entries.title": "Itens por página",
        "upload.config.sort.title": "Ordem de classificação padrão",
        "upload.config.entries.note":
          "Número de arquivos exibidos por padrão na Biblioteca de Mídia",
        "upload.config.note":
          "Nota: Você pode substituir este valor na biblioteca de mídia.",
        "upload.config.popUpWarning.warning.updateAllSettings":
          "Isso modificará todas as suas configurações",
        "upload.view-switch.list": "Visualização em Lista",
        "upload.view-switch.grid": "Visualização em Grade",
      },
    },
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};
