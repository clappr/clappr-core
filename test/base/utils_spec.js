import * as utils from '../../src/base/utils'
import  $ from 'clappr-zepto'

const pushUrl = function(path) {
  window.history.pushState({},'', path)
}

describe('Utils', function() {
  describe('extend', function() {
    class Base {
      get name() { return 'base' }
      constructor(p1, p2) {
        this.prop1 = p1
        this.prop2 = p2
      }
      test() {}
    }

    it('should create a new class that extends parent', function() {
      const Derived = utils.extend(Base, {})
      const d = new Derived(1, 'some-value')
      expect(d.name).to.be.equal('base')
      expect(d.test()).to.be.undefined
    })

    it('should pass constructor parameters to super constructor', function() {
      const Derived = utils.extend(Base, {})
      const d = new Derived(1, 'some-value')
      expect(d.prop1).to.be.equal(1)
      expect(d.prop2).to.be.equal('some-value')
    })

    it('should pass constructor parameters to initialize method', function() {
      const Derived = utils.extend(Base, {
        initialize(p1, p2, p3) {
          this.prop3 = p3
        }
      })
      const d = new Derived(1, 'some-value', 42)
      expect(d.prop3).to.be.equal(42)
    })

    it ('should support overriding methods', function() {
      const Derived = utils.extend(Base, {
        test() { return true }
      })
      const d = new Derived()
      expect(d.test()).to.be.true
    })

    it ('should support overriding read-only properties', function() {
      const Derived = utils.extend(Base, {
        get name() { return 'derived' }
      })
      const d = new Derived()
      expect(d.name).to.be.equal('derived')
    })
  })

  it('creates unique id for a given prefix', function() {
    expect(utils.uniqueId('a')).to.not.be.equal(utils.uniqueId('a'))
  })

  it('converts seconds to time string format', function() {
    expect(utils.formatTime(1)).to.be.equal('00:01')
    expect(utils.formatTime(10)).to.be.equal('00:10')
    expect(utils.formatTime(60 * 10 + 15)).to.be.equal('10:15')
    expect(utils.formatTime(60 * 60 * 12)).to.be.equal('12:00:00')
    expect(utils.formatTime(60 * 60 * 24)).to.be.equal('1:00:00:00')
    expect(utils.formatTime(60 * 60 * 27)).to.be.equal('1:03:00:00')
  })

  it('should convert querystring seek regex in seconds', function() {

    pushUrl('/some/path/?t=1h10m30s')
    expect(utils.seekStringToSeconds()).to.equal(4230)

    pushUrl('/some/path/?t=40s')
    expect(utils.seekStringToSeconds()).to.equal(40)

    pushUrl('/some/path/?t=40s&stretch=false')
    expect(utils.seekStringToSeconds()).to.equal(40)

    pushUrl('/some/path/?t=30m5s')
    expect(utils.seekStringToSeconds()).to.equal(1805)

    pushUrl('/some/path/?t=1m')
    expect(utils.seekStringToSeconds()).to.equal(60)

    pushUrl('/some/path/?t=1h10s')
    expect(utils.seekStringToSeconds()).to.equal(3610)

    pushUrl('/some/path/?autoPlay=true&t=5m5s')
    expect(utils.seekStringToSeconds()).to.equal(305)

    pushUrl('/some/path/')
    expect(utils.seekStringToSeconds()).to.equal(0)

    pushUrl('/some/path/videos-1h/')
    expect(utils.seekStringToSeconds()).to.equal(0)

    pushUrl('/video/business/media/100000003661916/destroying.html?playlistId=1194811622182#t=6000&cview=true')
    expect(utils.seekStringToSeconds()).to.equal(6000)

    pushUrl('/video/business/media/100000003661916/destroying.html?playlistId=1194811622182#t=6000s&cview=true')
    expect(utils.seekStringToSeconds()).to.equal(6000)

    pushUrl('/video/business/media/100000003661916/destroying.html?playlistId=1194811622182#t=10m10s&cview=true')
    expect(utils.seekStringToSeconds()).to.equal(610)

    pushUrl('/video/business/media/100000003661916/destroying.html?playlistId=1194811622182#t=1h20m10s&cview=true')
    expect(utils.seekStringToSeconds()).to.equal(4810)

    pushUrl('/video/business/media/100000003661916/destroying.html?playlistId=1194811622182#t=6000s')
    expect(utils.seekStringToSeconds()).to.equal(6000)

    pushUrl('/video/business/media/100000003661916/destroying.html?playlistId=1194811622182#t=6000')
    expect(utils.seekStringToSeconds()).to.equal(6000)

    pushUrl('/video/business/media/100000003661916/destroying.html?playlistId=1194811622182&t=5m5s')
    expect(utils.seekStringToSeconds()).to.equal(305)

    pushUrl('/video/business/media/100000003661916/destroying.html?t=5m5s')
    expect(utils.seekStringToSeconds()).to.equal(305)

    pushUrl('/video/business/media/100000003661916/destroying.html?playlistId=1194811622182#t=5m5s')
    expect(utils.seekStringToSeconds()).to.equal(305)

    pushUrl('/video/business/media/100000003661916/destroying.html?playlistId=1194811622182&t=1h10m30s')
    expect(utils.seekStringToSeconds()).to.equal(4230)

    pushUrl('/video/business/media/100000003661916/destroying.html?playlistId=1194811622182&t=1m')
    expect(utils.seekStringToSeconds()).to.equal(60)

    pushUrl('/video/business/media/100000003661916/destroying.html?playlistId=1194811622182&t=40s')
    expect(utils.seekStringToSeconds()).to.equal(40)

    pushUrl('/video/business/media/100000003661916/destroying.html?playlistId=1194811622182&t=40s&more=here')
    expect(utils.seekStringToSeconds()).to.equal(40)

    pushUrl('/video/business/media/100000003661916/destroying.html?playlistId=1194811622182&t=30m5s')
    expect(utils.seekStringToSeconds()).to.equal(1805)

    pushUrl('/video/business/media/100000003661916/destroying.html?playlistId=1194811622182&t=5m5s')
    expect(utils.seekStringToSeconds()).to.equal(305)

    pushUrl('/video/business/media/100000003661916/destroying.html?playlistId=1194811622182')
    expect(utils.seekStringToSeconds()).to.equal(0)
  })

  describe('removeArrayItem', function() {
    it('removes an item when it exists', function() {
      const a = [1, 2, 3]
      utils.removeArrayItem(a, 2)
      expect(a.indexOf(2)).to.be.equal(-1)
      expect(a.length).to.be.equal(2)
    })

    it('does not remove anything when item doesn\'t exist', function() {
      const a = [1, 2, 3]
      utils.removeArrayItem(a, 4)
      expect(a.length).to.be.equal(3)
    })
  })

  describe('listContainsIgnoreCase', function() {
    it('finds when it contains an item', function() {
      const aList = ['audio/aac', 'video/mp4']
      const anItem = 'audio/aac'

      const doesitcontains = utils.listContainsIgnoreCase(anItem, aList)

      expect(doesitcontains).to.be.true
    })

    it('finds when it contains a list of any letter case', function() {
      const aList = ['AUDIO/aac', 'VIDEO/mp4']
      const anItem = 'audio/aac'

      const doesItContains = utils.listContainsIgnoreCase(anItem, aList)

      expect(doesItContains).to.be.true
    })

    it('finds when it contains an item of any letter case', function() {
      const aList = ['audio/aac', 'video/mp4']
      const anItem = 'AUDIO/AAC'

      const doesItContains = utils.listContainsIgnoreCase(anItem, aList)

      expect(doesItContains).to.be.true
    })

    it('does not find when an item is not contained', function() {
      const aList = ['audio/aac', 'video/mp4']
      const anItem = 'application/x-mpegURL'

      const doesItContains = utils.listContainsIgnoreCase(anItem, aList)

      expect(doesItContains).to.be.false
    })

    it('does not find when an item is undefined', function() {
      const aList = ['audio/aac', 'video/mp4']
      const anItem = undefined

      const doesItContains = utils.listContainsIgnoreCase(anItem, aList)

      expect(doesItContains).to.be.false
    })

    it('does not find when the list is undefined', function() {
      const aList = undefined
      const anItem = 'audio/aac'

      const doesItContains = utils.listContainsIgnoreCase(anItem, aList)

      expect(doesItContains).to.be.false
    })
  })

  describe('Config', function() {
    beforeEach(function() {
      localStorage.removeItem('clappr.localhost.volume')
    })

    it('restores default volume', function() {
      expect(utils.Config.restore('volume')).to.be.equal(100)
    })

    it('restores a persisted volume', function() {
      utils.Config.persist('volume', 42)
      expect(utils.Config.restore('volume')).to.be.equal(42)
    })

    it('returns undefined for unknown key', function() {
      expect(utils.Config.restore('unknown.key.CAFE')).to.be.equal(undefined)
    })
  })

  describe('DomRecycler', function() {
    it('can be configured', function() {
      utils.DomRecycler.configure({ foo: 'bar' })
      expect(utils.DomRecycler.options.foo).to.be.equal('bar')
      expect(utils.DomRecycler.options.recycleVideo).to.be.false
    })

    it('create a Zepto collection object', function() {
      const $el = utils.DomRecycler.create('div')
      // Zepto collection assertion : https://github.com/madrobby/zepto/issues/349#issuecomment-4985091
      expect($.zepto.isZ($el)).to.be.true
    })

    it('does not recycle video tag by default', function() {
      const video1 = utils.DomRecycler.create('video')
      utils.DomRecycler.garbage(video1)
      const video2 = utils.DomRecycler.create('video')
      expect(video1[0]).to.not.be.equal(video2[0])
    })

    it('recycle video tag if recycleVideo option is set', function() {
      utils.DomRecycler.configure({ recycleVideo: true })
      const video1 = utils.DomRecycler.create('video')
      utils.DomRecycler.garbage(video1)
      const video2 = utils.DomRecycler.create('video')
      expect(video1[0]).to.be.equal(video2[0])
    })
  })
})
