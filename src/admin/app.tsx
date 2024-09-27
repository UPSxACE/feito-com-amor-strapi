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
      "en":{
        "app.components.Auth.form.welcome.title": "Welcome back!",
        "app.Auth.form.welcome.title": "Welcome back!",
        "app.components.Auth.form.welcome.subtitle": "Login to your account",
        "app.Auth.form.welcome.subtitle": "Login to your account",
      },
      "pt-BR": {
        "app.components.Auth.form.welcome.subtitle": "Entrar na sua conta",
        "app.Auth.form.welcome.subtitle": "Entrar na sua conta",
        /** Upload plugin */
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
        /** Content Manager plugin */
        "content-manager.actions.clone.error":
          "Ocorreu um erro ao tentar clonar o documento.",
        "content-manager.actions.clone.label": "Duplicar",
        "content-manager.actions.delete.dialog.body":
          "Tem certeza de que deseja excluir este documento? Esta ação é irreversível.",
        "content-manager.actions.delete.error":
          "Ocorreu um erro ao tentar excluir o documento.",
        "content-manager.actions.delete.label":
          "Excluir entrada{isLocalized, select, true { (todos os locais)} other {}}",
        "content-manager.actions.discard.dialog.body":
          "Tem certeza de que deseja descartar as alterações? Esta ação é irreversível.",
        "content-manager.actions.discard.label": "Descartar alterações",
        "content-manager.actions.edit.error":
          "Ocorreu um erro ao tentar editar o documento.",
        "content-manager.actions.edit.label": "Editar",
        "content-manager.actions.unpublish.dialog.body":
          "Tem certeza de que deseja retirar a publicação disso?",
        "content-manager.actions.unpublish.dialog.option.keep-draft":
          "Retirar a publicação e manter o último rascunho",
        "content-manager.actions.unpublish.dialog.option.replace-draft":
          "Retirar a publicação e substituir o último rascunho",
        "content-manager.actions.unpublish.error":
          "Ocorreu um erro ao tentar retirar a publicação do documento.",
        "content-manager.bulk-publish.already-published": "Já Publicado",
        "content-manager.bulk-publish.modified":
          "Pronto para publicar alterações",
        "content-manager.bulk-unpublish.already-unpublished": "Já Despublicado",
        "content-manager.components.DynamicZone.extra-components":
          "Há {number, plural, =0 {# componentes extras} one {# componente extra} other {# componentes extras}}",
        "content-manager.components.Filters.usersSelect.label":
          "Pesquisar e selecionar um usuário para filtrar",
        "content-manager.components.RelationInput.icon-button-aria-label":
          "Arrastar",
        "content-manager.containers.edit-settings.modal-form.description":
          "Descrição",
        "content-manager.containers.edit-settings.modal-form.editable":
          "Campo editável",
        "content-manager.containers.edit-settings.modal-form.error":
          "Ocorreu um erro ao tentar abrir o formulário.",
        "content-manager.containers.edit-settings.modal-form.label": "Rótulo",
        "content-manager.containers.edit-settings.modal-form.mainField":
          "Título da entrada",
        "content-manager.containers.edit-settings.modal-form.mainField.hint":
          "Defina o campo exibido nas visualizações de edição e lista",
        "content-manager.containers.edit-settings.modal-form.placeholder":
          "Texto de marcador",
        "content-manager.containers.edit-settings.modal-form.size": "Tamanho",
        "content-manager.containers.edit.header.more-actions": "Mais ações",
        "content-manager.containers.edit.information.document.label": "Criado",
        "content-manager.containers.edit.information.document.value":
          "{time}{isAnonymous, select, true {} other { por {author}}}",
        "content-manager.containers.edit.information.last-draft.label":
          "Atualizado",
        "content-manager.containers.edit.information.last-draft.value":
          "{time}{isAnonymous, select, true {} other { por {author}}}",
        "content-manager.containers.edit.information.last-published.label":
          "Publicado",
        "content-manager.containers.edit.information.last-published.value":
          "{time}{isAnonymous, select, true {} other { por {author}}}",
        "content-manager.containers.edit.panels.default.more-actions":
          "Mais ações de documento",
        "content-manager.containers.edit.panels.default.title": "Entrada",
        "content-manager.containers.edit.tabs.draft": "rascunho",
        "content-manager.containers.edit.tabs.label": "Status do documento",
        "content-manager.containers.edit.tabs.published": "publicado",
        "content-manager.containers.edit.title.new": "Criar uma entrada",
        "content-manager.containers.list-settings.modal-form.error":
          "Ocorreu um erro ao tentar abrir o formulário.",
        "content-manager.containers.list-settings.modal-form.label":
          "Editar {fieldName}",
        "content-manager.containers.list.autoCloneModal.create": "Criar",
        "content-manager.containers.list.autoCloneModal.description":
          "Uma nova entrada será criada com o mesmo conteúdo, mas você terá que alterar os seguintes campos para salvá-la.",
        "content-manager.containers.list.autoCloneModal.error.relation":
          "Duplicar a relação pode removê-la da entrada original.",
        "content-manager.containers.list.autoCloneModal.error.unique":
          "Valores idênticos em um campo único não são permitidos.",
        "content-manager.containers.list.autoCloneModal.header": "Duplicar",
        "content-manager.containers.list.autoCloneModal.title":
          "Esta entrada não pode ser duplicada diretamente.",
        "content-manager.containers.list.selectedEntriesModal.selectedCount.publish":
          "&lt;b&gt;{publishedCount}&lt;/b&gt; {publishedCount, plural, =0 {entradas} one {entrada} other {entradas}} já publicadas. &lt;b&gt;{draftCount}&lt;/b&gt; {draftCount, plural, =0 {entradas} one {entrada} other {entradas}} prontas para publicar. &lt;b&gt;{withErrorsCount}&lt;/b&gt; {withErrorsCount, plural, =0 {entradas} one {entrada} other {entradas}} aguardando ação.",
        "content-manager.containers.list.selectedEntriesModal.selectedCount.unpublish":
          "&lt;b&gt;{draftCount}&lt;/b&gt; {draftCount, plural, =0 {entradas} one {entrada} other {entradas}} já despublicadas. &lt;b&gt;{publishedCount}&lt;/b&gt; {publishedCount, plural, =0 {entradas} one {entrada} other {entradas}} prontas para despublicar.",
        "content-manager.containers.list.selectedEntriesModal.title":
          "Publicar entradas",
        "content-manager.containers.list.table.row-actions": "Ações da linha",
        "content-manager.containers.SettingPage.add.relational-field":
          "Inserir outro campo relacionado",
        "content-manager.containers.SettingPage.relations":
          "Campos relacionados",
        "content-manager.dnd.cancel-item":
          "{item}, descartado. Reordenação cancelada.",
        "content-manager.dnd.drop-item":
          "{item}, descartado. Posição final na lista: {position}.",
        "content-manager.dnd.grab-item":
          "{item}, pego. Posição atual na lista: {position}. Pressione a seta para cima e para baixo para alterar a posição, Espaço para soltar, Escape para cancelar.",
        "content-manager.dnd.instructions":
          "Pressione a barra de espaço para pegar e reordenar",
        "content-manager.dnd.reorder":
          "{item}, movido. Nova posição na lista: {position}.",
        "content-manager.error.records.fetch-draft-relatons":
          "Ocorreu um erro ao buscar relações de rascunho neste documento.",
        "content-manager.form.Input.hint.character.unit":
          "{maxValue, plural, one { caractere} other { caracteres}}",
        "content-manager.form.Input.hint.minMaxDivider": " / ",
        "content-manager.form.Input.hint.text":
          "{min, select, undefined {} other {mín. {min}}}{divider}{max, select, undefined {} other {máx. {max}}}{unit}{br}{description}",
        "content-manager.history.content.localized":
          "Este valor é específico para este local. Se você restaurar esta versão, o conteúdo não será substituído para outros locais.",
        "content-manager.history.content.missing-assets.message":
          "{number, plural, =1 {Foi} other {Foram}} excluídos na Biblioteca de Mídia e não podem ser restaurados.",
        "content-manager.history.content.missing-assets.title":
          "{number, plural, =1 {Asset ausente} other {{number} assets ausentes}}",
        "content-manager.history.content.missing-relations.message":
          "{number, plural, =1 {Foi} other {Foram}} excluídos e não podem ser restaurados.",
        "content-manager.history.content.missing-relations.title":
          "{number, plural, =1 {Relação ausente} other {{number} relações ausentes}}",
        "content-manager.history.content.new-field.message":
          "Este campo não existia quando esta versão foi salva. Se você restaurar esta versão, ele estará vazio.",
        "content-manager.history.content.new-field.title": "Novo campo",
        "content-manager.history.content.no-relations": "Sem relações.",
        "content-manager.history.content.not-localized":
          "Este valor é comum a todos os locais. Se você restaurar esta versão, o conteúdo será substituído para todos os locais.",
        "content-manager.history.content.unknown-fields.message":
          "Esses campos foram excluídos ou renomeados no Content-Type Builder. &lt;b&gt;Esses campos não serão restaurados.&lt;/b&gt;",
        "content-manager.history.content.unknown-fields.title":
          "Campos desconhecidos",
        "content-manager.history.document-action": "Histórico de Conteúdo",
        "content-manager.history.page-title": "Histórico de {contentType}",
        "content-manager.history.restore.confirm.button": "Restaurar",
        "content-manager.history.restore.confirm.message":
          "{isDraft, select, true {O conteúdo restaurado substituirá seu rascunho.} other {O conteúdo restaurado não será publicado, substituirá o rascunho e será salvo como alterações pendentes. Você poderá publicar as alterações a qualquer momento.}}",
        "content-manager.history.restore.confirm.title":
          "Tem certeza de que deseja restaurar esta versão?",
        "content-manager.history.restore.error.message":
          "Não foi possível restaurar a versão.",
        "content-manager.history.restore.success.message":
          "O conteúdo da versão restaurada ainda não está publicado.",
        "content-manager.history.restore.success.title": "Versão restaurada.",
        "content-manager.history.sidebar.show-newer":
          "Mostrar versões mais novas",
        "content-manager.history.sidebar.show-older":
          "Mostrar versões mais antigas",
        "content-manager.history.sidebar.title": "Versões",
        "content-manager.history.sidebar.version-card.aria-label":
          "Cartão de versão",
        "content-manager.history.sidebar.versionDescription":
          "{distanceToNow}{isAnonymous, select, true {} other { por {author}}}{isCurrent, select, true { &lt;b&gt;(atual)&lt;/b&gt;} other {}}",
        "content-manager.history.version.subtitle":
          "{hasLocale, select, true {{subtitle}, em {locale}} other {{subtitle}}}",
        "content-manager.listView.validation.errors.message":
          "Certifique-se de que todos os campos estejam válidos antes de publicar (campo obrigatório, limite mínimo/máximo de caracteres, etc.)",
        "content-manager.listView.validation.errors.title": "Ação necessária",
        "content-manager.popUpWarning.bodyMessage.contentType.delete":
          "Tem certeza de que deseja excluir o Tipo de Conteúdo?",
        "content-manager.popUpWarning.bodyMessage.contentType.delete.all":
          "Tem certeza de que deseja excluir essas entradas?",
        "content-manager.popUpWarning.bodyMessage.contentType.publish.all":
          "Tem certeza de que deseja publicar essas entradas?",
        "content-manager.popUpWarning.bodyMessage.contentType.unpublish.all":
          "Tem certeza de que deseja despublicar essas entradas?",
        "content-manager.popUpwarning.warning.bulk-has-draft-relations.message":
          "&lt;b&gt;{count} {count, plural, one { relação } other { relações } } de {entities} { entities, plural, one { entrada } other { entradas } } {count, plural, one { não está } other { não estão } }&lt;/b&gt; publicadas ainda e podem levar a comportamentos inesperados.",
        "content-manager.popUpWarning.warning.has-draft-relations.message":
          "Esta entrada está relacionada a {count, plural, one {# entrada de rascunho} other {# entradas de rascunho}}. Publicá-la pode deixar links quebrados em seu aplicativo.",
        "content-manager.popUpWarning.warning.has-draft-relations.title":
          "Confirmação",
        "content-manager.popUpWarning.warning.unpublish":
          "Se você não publicar este conteúdo, ele se tornará automaticamente um Rascunho.",
        "content-manager.popUpWarning.warning.unpublish-question":
          "Tem certeza de que não deseja publicá-lo?",
        "content-manager.popUpWarning.warning.updateAllSettings":
          "Isso modificará todas as suas configurações",
        "content-manager.relation.add": "Adicionar relação",
        "content-manager.relation.disconnect": "Remover",
        "content-manager.relation.error-adding-relation":
          "Ocorreu um erro ao tentar adicionar a relação.",
        "content-manager.relation.isLoading": "Relações estão carregando",
        "content-manager.relation.loadMore": "Carregar mais",
        "content-manager.relation.notAvailable": "Sem relações disponíveis",
        "content-manager.relation.publicationState.draft": "Rascunho",
        "content-manager.relation.publicationState.published": "Publicado",
        "content-manager.reviewWorkflows.stage.label": "Estágio de revisão",
        "content-manager.success.record.clone": "Documento clonado",
        "content-manager.success.record.discard": "Alterações descartadas",
        "content-manager.success.record.publishing": "Publicando...",
        "content-manager.success.records.delete": "Excluído com sucesso.",
        "content-manager.success.records.publish": "Publicado com sucesso.",
        "content-manager.success.records.unpublish":
          "Despublicado com sucesso.",
        "content-manager.validation.error":
          "Há erros de validação no seu documento. Corrija-os antes de salvar.",
        /** extra */
        "content-manager.plugin.name": "Gestão de conteúdos",
        "upload.input.label": "Arraste & Solte aqui ou",
        "upload.modal.upload-list.sub-header.add-folder"
      },
    },
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};
