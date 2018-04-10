import Core from '../../src/components/core'
import PlayerError from '../../src/components/error'
import Events from '../../src/base/events'

describe('PlayerError', function() {
  beforeEach(function() {
    this.core = new Core({})
    this.playerError = this.core.playerError
    this.errorData = {
      code: 'test_01',
      description: 'test error',
      level: PlayerError.Levels.FATAL,
      origin: 'test',
      scope: 'it',
      raw: {},
    }
  })

  describe('when error method is called', function() {
    it('triggers ERROR event', function() {
      sinon.spy(this.core, 'trigger')
      this.playerError.error(this.errorData)

      assert.ok(this.core.trigger.calledWith(Events.ERROR, {
        code: 'test_01',
        description: 'test error',
        level: PlayerError.Levels.FATAL,
        origin: 'test',
        scope: 'it',
        raw: {},
      }))
    })

    describe('when core is not set', function() {
      it('does not trigger ERROR event', function() {
        sinon.spy(this.core, 'trigger')
        this.playerError.core = undefined
        this.playerError.error(this.errorData)

        assert.notOk(this.core.trigger.calledWith(Events.ERROR, this.errorData))
      })
    })
  })
})
