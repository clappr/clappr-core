import { getBrowserLanguage } from '../base/utils'
import $ from 'clappr-zepto'
import CorePlugin from '../base/core_plugin'

/**
 * The internationalization (i18n) plugin
 * @class Strings
 * @constructor
 * @extends CorePlugin
 * @module plugins
 */
export default class Strings extends CorePlugin {
  get name() { return 'strings' }

  constructor(core) {
    super(core)
    this._initializeMessages()
  }
  /**
   * Gets a translated string for the given key.
   * @method t
   * @param {String} key the key to all messages
   * @return {String} translated label
   */
  t(key) {
    const lang = this._language()
    const fallbackLang = this._messages['en']
    const i18n = lang && this._messages[lang] || fallbackLang
    return i18n[key] || fallbackLang[key] || key
  }

  _language() { return this.core.options.language || getBrowserLanguage() }

  _initializeMessages() {
    const defaultMessages = {
      'en': {
        'live': 'live',
        'back_to_live': 'back to live',
        'disabled': 'Disabled',
        'playback_not_supported': 'Your browser does not support the playback of this video. Please try using a different browser.',
        'default_error_title': 'Could not play video.',
        'default_error_message': 'There was a problem trying to load the video.',
      },
      'pt': {
        'live': 'ao vivo',
        'back_to_live': 'voltar para o ao vivo',
        'disabled': 'Desativado',
        'playback_not_supported': 'Seu navegador não supporta a reprodução deste video. Por favor, tente usar um navegador diferente.',
        'default_error_title': 'Não foi possível reproduzir o vídeo.',
        'default_error_message': 'Ocorreu um problema ao tentar carregar o vídeo.',
      },
      'es': {
        'live': 'vivo',
        'back_to_live': 'volver en vivo',
        'disabled': 'Discapacitado',
        'playback_not_supported': 'Su navegador no soporta la reproducción de un video. Por favor, trate de usar un navegador diferente.',
      },
      'ru': {
        'live': 'прямой эфир',
        'back_to_live': 'к прямому эфиру',
        'disabled': 'Отключено',
        'playback_not_supported': 'Ваш браузер не поддерживает воспроизведение этого видео. Пожалуйста, попробуйте другой браузер.',
      },
      'fr': {
        'live': 'en direct',
        'back_to_live': 'retour au direct',
        'disabled': 'Désactivé',
        'playback_not_supported': 'Votre navigateur ne supporte pas la lecture de cette vidéo. Merci de tenter sur un autre navigateur.',
        'default_error_title': 'Impossible de lire la vidéo.',
        'default_error_message': 'Un problème est survenu lors du chargement de la vidéo.',
      },
      'tr': {
        'live': 'canlı',
        'back_to_live': 'canlı yayına dön',
        'disabled': 'Engelli',
        'playback_not_supported': 'Tarayıcınız bu videoyu oynatma desteğine sahip değil. Lütfen farklı bir tarayıcı ile deneyin.',
      },
      'et': {
        'live': 'Otseülekanne',
        'back_to_live': 'Tagasi otseülekande juurde',
        'disabled': 'Keelatud',
        'playback_not_supported': 'Teie brauser ei toeta selle video taasesitust. Proovige kasutada muud brauserit.',
      },
    }

    this._messages = $.extend(true, defaultMessages, this.core.options.strings || {})
    this._messages['pt-BR'] = this._messages['pt']
    this._messages['en-US'] = this._messages['en']
    this._messages['es-419'] = this._messages['es']
    this._messages['fr-FR'] = this._messages['fr']
    this._messages['tr-TR'] = this._messages['tr']
    this._messages['et-EE'] = this._messages['et']
  }
}
