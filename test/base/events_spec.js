import Events from '../../src/base/events'

describe('Events', function(){
  beforeEach(function(){
    this.events = new Events()
  })

  it('subcribes to a given event', function(){
    var counter = 0
    var eventsCounter = function() {
      counter += 1
    }

    this.events.on("clappr.any.event", eventsCounter)
    expect(counter).to.be.equal(0)

    this.events.trigger("clappr.any.event")
    expect(counter).to.be.equal(1)
  })

  it('subscribes to a list of events separated by spaces', function(){
    var counter = 0
    var eventsCounter = function() {
      counter += 1
    }

    this.events.on("clappr.any.event clappr.my.event", eventsCounter)
    expect(counter).to.be.equal(0)

    this.events.trigger("clappr.my.event")
    expect(counter).to.be.equal(1)
  })

  it('subscribes to a given event using an object', function(){
    var counter = 0

    this.events.on({"clappr.any.event": function(){ counter += 1  }})
    expect(counter).to.be.equal(0)

    this.events.trigger("clappr.any.event")
    expect(counter).to.be.equal(1)
  })

  it('subscribes to a given event with context', function(){
    var context = { counter: 9 }
    var eventsCounter = function() {
      this.counter += 1
    }

    this.events.on("clappr.any.event", eventsCounter, context)
    expect(context.counter).to.be.equal(9)

    this.events.trigger("clappr.any.event")
    expect(context.counter).to.be.equal(10)
  })

  it('can unsub an event', function(){
    var counter = 0
    var eventsCounter = function() {
      counter += 1
    }

    this.events.on("clappr.any.event", eventsCounter)
    expect(counter).to.be.equal(0)
    this.events.off("clappr.any.event")

    this.events.trigger("clappr.any.event")
    expect(counter).to.be.equal(0)
  })

  it('can trigger multiple times', function(){
    var counter = 1
    var eventsCounter = function() {
      counter += 1
    }

    this.events.on("clappr.any.event", eventsCounter)
    expect(counter).to.be.equal(1)

    this.events.trigger("clappr.any.event")
    this.events.trigger("clappr.any.event")
    expect(counter).to.be.equal(3)
  })

  it('restricts to trigger only once', function(){
    var counter = 1
    var eventsCounter = function() {
      counter += 1
    }

    this.events.once("clappr.any.event", eventsCounter)
    expect(counter).to.be.equal(1)

    this.events.trigger("clappr.any.event")
    this.events.trigger("clappr.any.event")
    expect(counter).to.be.equal(2)
  })

  it('permits to listen events in other objects', function(){
    var counter = 0
    var eventsCounter = function() {
      counter += 1
    }
    var myEvents = new Events()
    var myCounter = function() {
      counter += 2
    }

    this.events.on("clappr.any.event", eventsCounter)
    myEvents.listenTo(this.events, "clappr.any.event", myCounter)

    expect(counter).to.be.equal(0)

    this.events.trigger("clappr.any.event")
    expect(counter).to.be.equal(3)
  })

  it('permits to listen once events in other objects', function(){
    var counter = 0
    var eventsCounter = function() {
      counter += 1
    }
    var myEvents = new Events()
    var myCounter = function() {
      counter += 1
    }

    this.events.on("clappr.any.event", eventsCounter)
    myEvents.listenToOnce(this.events, "clappr.any.event", myCounter)

    expect(counter).to.be.equal(0)

    this.events.trigger("clappr.any.event")
    this.events.trigger("clappr.any.event")
    expect(counter).to.be.equal(3)
  })

  it('permits to stop listening events in other objects', function(){
    var counter = 0
    var eventsCounter = function() {
      counter += 1
    }
    var myEvents = new Events()
    var myCounter = function() {
      counter += 2
    }

    this.events.on("clappr.any.event", eventsCounter)
    myEvents.listenTo(this.events, "clappr.any.event", myCounter)

    expect(counter).to.be.equal(0)

    myEvents.stopListening(this.events, "clappr.any.event", myCounter)
    this.events.trigger("clappr.any.event")
    expect(counter).to.be.equal(1)
  })
})
