import Loader from '../../src/components/loader'

import PlaybackPlugin from 'base/playback'
import CorePlugin from 'base/core_plugin'
import ContainerPlugin from 'base/container_plugin'
import UIContainerPlugin from 'base/ui_container_plugin'

describe('Loader', function() {

  describe('addExternalPlugins function', function() {
    it('should extend the plugins array with the external ones', function() {
      const playbackPlugin = PlaybackPlugin.extend({name: 'playbackPlugin'})
      const containerPlugin = ContainerPlugin.extend({name: 'containerPlugin'})
      const corePlugin = CorePlugin.extend({name: 'corePlugin'})

      const loader = new Loader()

      const nativePlaybackPluginsCount = loader.playbackPlugins.length
      const nativeContainerPluginsCount = loader.containerPlugins.length
      const nativeCorePluginsCount = loader.corePlugins.length

      loader.addExternalPlugins({playback: [playbackPlugin]})
      expect(loader.playbackPlugins.length).to.be.equal(nativePlaybackPluginsCount + 1)

      loader.addExternalPlugins({container: [containerPlugin]})
      expect(loader.containerPlugins.length).to.be.equal(nativeContainerPluginsCount + 1)

      loader.addExternalPlugins({core: [corePlugin]})
      expect(loader.corePlugins.length).to.be.equal(nativeCorePluginsCount + 1)
    })

    it('should support an array of plugins and group them by type', function() {
      const playbackPlugin = PlaybackPlugin.extend({name: 'playbackPlugin'})
      const containerPlugin = ContainerPlugin.extend({name: 'containerPlugin'})
      const corePlugin = CorePlugin.extend({name: 'corePlugin'})

      const loader = new Loader()

      const nativePlaybackPluginsCount = loader.playbackPlugins.length
      const nativeContainerPluginsCount = loader.containerPlugins.length
      const nativeCorePluginsCount = loader.corePlugins.length

      loader.addExternalPlugins([playbackPlugin, containerPlugin, corePlugin])
      expect(loader.playbackPlugins.length).to.be.equal(nativePlaybackPluginsCount + 1)
      expect(loader.containerPlugins.length).to.be.equal(nativeContainerPluginsCount + 1)
      expect(loader.corePlugins.length).to.be.equal(nativeCorePluginsCount + 1)
    })

    it('should prioritize external plugins if their names collide', function() {
      const spinnerPlugin = ContainerPlugin.extend({container: {},  name: 'spinner'})
      const loader = new Loader()
      expect(loader.containerPlugins.filter((plugin) => {
        return plugin.prototype.name === 'spinner'
      })[0]).to.not.be.equal(spinnerPlugin)

      loader.addExternalPlugins({container: [spinnerPlugin]})

      expect(loader.containerPlugins.filter((plugin) => {
        return plugin.prototype.name === 'spinner'
      })[0]).to.be.equal(spinnerPlugin)
    })

    it('should allow only a plugin with a given name', function() {
      const spinnerPlugin = ContainerPlugin.extend({container: {},  name: 'spinner'})
      const loader = new Loader()
      expect(loader.containerPlugins.filter((plugin) => {
        return plugin.prototype.name === 'spinner'
      }).length).to.be.equal(1)

      loader.addExternalPlugins({container: [spinnerPlugin]})

      expect(loader.containerPlugins.filter((plugin) => {
        return plugin.prototype.name === 'spinner'
      }).length).to.be.equal(1)
    })
  })

  describe('validateExternalPluginsType function', function() {
    it('should throw an exception if its not core plugin', function() {
      const loader = new Loader()
      expect(function() { loader.validateExternalPluginsType({core: [PlaybackPlugin]}) }).to.throw('external playback plugin on core array')
      expect(function() { loader.validateExternalPluginsType({container: [PlaybackPlugin]}) }).to.throw('external playback plugin on container array')

      expect(function() { loader.validateExternalPluginsType({core: [ContainerPlugin]}) }).to.throw('external container plugin on core array')
      expect(function() { loader.validateExternalPluginsType({playback: [ContainerPlugin]}) }).to.throw('external container plugin on playback array')

      expect(function() { loader.validateExternalPluginsType({container: [CorePlugin]}) }).to.throw('external core plugin on container array')
      expect(function() { loader.validateExternalPluginsType({playback: [CorePlugin]}) }).to.throw('external core plugin on playback array')

      expect(function() { loader.validateExternalPluginsType({core: [UIContainerPlugin]}) }).to.throw('external container plugin on core array')
      expect(function() { loader.validateExternalPluginsType({playback: [UIContainerPlugin]}) }).to.throw('external container plugin on playback array')
    })
  })
})
