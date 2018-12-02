(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bg1 = function() {
	this.initialize(img.bg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,970,90);


(lib.bg2 = function() {
	this.initialize(img.bg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,970,90);


(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,489,90);


(lib.pin = function() {
	this.initialize(img.pin);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,137);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.pink = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.instance = new lib.Bitmap1();
	this.instance.parent = this;
	this.instance.setTransform(893.15,477.35,0.7267,0.7267,-92.655);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E8168B").s().p("AzM1RMAjjgCRMAC2As0MgjjACRg");
	this.shape.setTransform(1053.9,255.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.pink, new cjs.Rectangle(876.7,105,300.0999999999999,372.4), null);


(lib.pin_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.pin();
	this.instance.parent = this;
	this.instance.setTransform(-47,-2,0.1205,0.1205);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pin_1, new cjs.Rectangle(-47,-2,11.100000000000001,16.5), null);


(lib.orange = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F3784C").s().p("A+EXXMAAAgmHMA8JgJYMAAAAwRg");
	this.shape.setTransform(950.2058,76.8472,2.6902,1.4191,0,-78.6408,101.3587);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.orange, new cjs.Rectangle(633.3,-457.3,626.9000000000001,1085), null);


(lib.map = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF029").s().p("AAABRQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAgBIgBgFQgKgngBgIQgFgtgQgaQgIgMADgPQABgIAHAAQAFAAAFAHQAHAKAEAMQAHAaAVAAIAPgCQAKAAACAJQACAGgGADIgKAGQgYAPABAeIgBAfQAAAHgDABg");
	this.shape.setTransform(78.0687,31.824,0.254,0.254);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF029").s().p("AgGAFIACgFIAGgFIACgBQABAAAAABQABAAAAAAQABABAAAAQAAABgBABIgGAHIgDACQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBgBAAg");
	this.shape_1.setTransform(84.7288,70.7683,0.254,0.254);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF029").s().p("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");
	this.shape_2.setTransform(45.0031,41.5839,0.254,0.254);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF029").s().p("AgKBBQgFAAgCgEQgCgEAAgEQADgJAAgMIABgRIAAgsQAAgQAHgIIAIgHQAEgEAFAAIADAAQAHACABAIIgBAMQgGAxgPAyQgDAIgFAAg");
	this.shape_3.setTransform(79.0236,33.4814,0.254,0.254);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.map, new cjs.Rectangle(2,2.5,86,78.2), null);


(lib.headline3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAjBrIAAhVIgBgSQgCgGgFgJQgJgNgRAAQgQAAgKANQgJALAAAWIAABVIgqAAIAAjWIAVAAQAIABAHAGQAGAGAAAJIAAAxQAMgTAUgFQAUgEASAHQASAIAMAPQALARABAbIAABhg");
	this.shape.setTransform(222.55,21.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag2BAQgUgXAAgpQAAgoATgWQAUgYAjAAQAlABAVAWQALAOAFASIgsAAIgGgKQgIgIgPAAQgNAAgJAIQgLANAAAcQAAAcALAMQAIAKAQAAQAKABAIgFIADgCIAEgEIAFgEQADgDAIgBIAfAAQgHAagTAPQgTANgeAAQgiABgUgXg");
	this.shape_1.setTransform(205.625,23.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag1BKQgQgMAAgcQAAgaAPgLQAPgKAYgEIAHgBIAJgCQAcgDAAgNQAAgJgKgEQgJgCgJAAQgHAAgHACQgHADgDAHIgqAAQACgUAPgMQARgPAfAAQAjABARAMQASAMAAAWIAAA5QAAAZgJANQgJAPgMAFQgOAIgOABIgZABQgXAAgRgMgAAFAIIgNADQgLADgFAFQgFAHAAAHQAAAJAGAGQAFAFALAAQARAAAKgKQAKgKAAgRIAAgQQgJAEgQAEg");
	this.shape_2.setTransform(189.825,23.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag3BAQgVgXABgpQgBgoAUgWQATgYAkAAQAlABAUAWQAVAXAAApIAAAEIAAADIgBADIhrAAQAAAUAJAJQAIAKAPAAQALABAHgFIAEgCIADgEIAFgEQAEgDAIgBIAfAAQgHAagUAPQgSANgdAAQgkABgTgXgAAggQQgCgQgHgJQgJgIgOAAQgNAAgJAIQgJAKAAAPIA/AAIAAAAg");
	this.shape_3.setTransform(173.85,23.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhXBrIAAi/QAAgJAGgHQAHgGAJgBIBOAAQAhABASAOQARAPAAAZQAAAQgHALQgHALgMAGQAQAHAJALQAIANAAATQAAAfgUARQgVARglAAgAgtBFIA0AAQARAAAKgHQAIgHAAgOQAAgQgIgGQgIgHgUABIgzAAgAgtgYIAyAAQAQABAIgGQAHgFAAgMQAAgMgHgGQgHgFgSAAIgxAAg");
	this.shape_4.setTransform(155.875,21.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag1BKQgQgMAAgcQAAgaAPgLQAPgKAYgEIAHgBIAJgCQAcgDAAgNQAAgJgKgEQgJgCgJAAQgHAAgHACQgHADgDAHIgqAAQACgUAPgMQARgPAfAAQAjABARAMQASAMAAAWIAAA5QAAAZgJANQgJAPgMAFQgOAIgOABIgZABQgXAAgRgMgAAFAIIgNADQgLADgFAFQgFAHAAAHQAAAJAGAGQAFAFALAAQARAAAKgKQAKgKAAgRIAAgQQgJAEgQAEg");
	this.shape_5.setTransform(130.275,23.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgVBrIAAjWIAWAAQAIAAAHAHQAGAFAAAJIAADBg");
	this.shape_6.setTransform(119.675,21.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgSBVQgVgFgMgLQgNgLgGgUQgFgTgBgTQABgRAEgRQAEgRAKgLQARgTAagDQAYgEAVAIQAXAJAMAXQAKAVABAbQgBATgEAPQgFAOgGAKQgPAVgXAFQgMADgLAAQgJAAgJgCgAgHgvQgKACgFAFQgNAOACAcQABAcAKALQADAFAJAEQAKADAIgDQAKgCAIgMQAHgLABgZQAAgVgIgMQgGgLgKgDIgJgCIgIACg");
	this.shape_7.setTransform(108,23.6956);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag2BAQgUgXAAgpQAAgoATgWQAUgYAjAAQAlABAVAWQALAOAFASIgsAAIgGgKQgIgIgPAAQgNAAgJAIQgLANAAAcQAAAcALAMQAIAKAQAAQAKABAIgFIADgCIAEgEIAFgEQADgDAIgBIAfAAQgHAagTAPQgTANgeAAQgiABgUgXg");
	this.shape_8.setTransform(91.525,23.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag1BKQgQgMAAgcQAAgaAPgLQAPgKAYgEIAHgBIAJgCQAcgDAAgNQAAgJgKgEQgJgCgJAAQgHAAgHACQgHADgDAHIgqAAQACgUAPgMQARgPAfAAQAjABARAMQASAMAAAWIAAA5QAAAZgJANQgJAPgMAFQgOAIgOABIgZABQgXAAgRgMgAAFAIIgNADQgLADgFAFQgFAHAAAHQAAAJAGAGQAFAFALAAQARAAAKgKQAKgKAAgRIAAgQQgJAEgQAEg");
	this.shape_9.setTransform(75.725,23.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag3BJQgSgPAAgcIAAgCIArAAQAAANAJAGQAJAHAPAAQALgBAIgEQAIgEAAgIQAAgLgagGIgQgDQghgJgMgJQgMgMAAgTQAAgYASgPQATgPAeAAQAfAAAUAPQASAPABAZIgbAAQgMAAgGgKIgFgFQgIgFgMgBQgMABgGADQgGAEAAAIQAAAJAfAHIAHACIAFABQAgAIANAKQAMALAAASQAAAcgUAPQgTANglAAQgjAAgSgNg");
	this.shape_10.setTransform(60.025,23.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAyBVQgJAAgGgGQgFgGAAgJIAAhUQgBgPgIgHQgKgHgLAAQgKAAgJAHQgJAHAAAPIAABpIgsAAIAAhgQAAgrAXgPQAWgOAbgBQAaAAAXAOQAYAPAAAsIAABgg");
	this.shape_11.setTransform(44.1,23.55);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag4BAQgTgXgBgpQABgoASgWQAVgYAjAAQAlABAVAWQATAXAAApIAAAEIAAADIAAADIhsAAQABAUAJAJQAIAKAQAAQAKABAIgFIADgCIAEgEIAEgEQAEgDAHgBIAgAAQgHAagTAPQgUANgcAAQgkABgUgXgAAfgQQgBgQgIgJQgHgIgPAAQgNAAgJAIQgJAKgBAPIA/AAIAAAAg");
	this.shape_12.setTransform(27.55,23.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhRBrIAAi/QAAgJAGgHQAHgGAJgBIBIAAQAjAAARASQARASAAAiQAAAhgRARQgRARgfABIg2AAIAABMgAglgHIAqAAQASAAAHgIQAIgGAAgRQAAgOgHgKQgJgHgOAAIgtAAg");
	this.shape_13.setTransform(10.225,21.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.headline3, new cjs.Rectangle(0,2.8,234.3,38.300000000000004), null);


(lib.headline = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8F200").s().p("AAzBVQgJAAgHgGQgFgGAAgJIAAhUQgBgPgIgHQgJgHgMAAQgKAAgJAHQgJAHAAAPIAABpIgsAAIAAhgQAAgrAXgPQAWgOAbgBQAbAAAXAOQAWAPAAAsIAABgg");
	this.shape.setTransform(200.95,14.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8F200").s().p("AgVBrIAAikIAWAAQAIAAAHAFQAGAHAAAIIAACQgAgVhIIAAgjIAWAAQAIABAHAGQAGAGAAAJIAAANg");
	this.shape_1.setTransform(190.375,11.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F8F200").s().p("AhKBCIAuAAQAFAJAKAFQALAEAJgCQALgCAIgKQAJgKAAgUIAAgLQgKASgUAFQgSADgSgHQgUgIgNgUQgNgUAAggQAAgnASgYQARgYAoAAQAdAAAZARQAaAQAAArIAABXQAAAsgaAQQgZAQgdAAQg6AAgOg2gAgbhCQgIAPABAUQgBAqAZAFQAYAFAMgQQAGgHACgOQADgPgDgOQgBgPgJgLQgIgLgPAAQgVAAgHAQg");
	this.shape_2.setTransform(170.1,17.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F8F200").s().p("AAyBVQgIAAgGgGQgHgGAAgJIAAhUQABgPgKgHQgJgHgLAAQgKAAgJAHQgJAHABAPIAABpIgsAAIAAhgQAAgrAVgPQAXgOAbgBQAbAAAWAOQAYAPAAAsIAABgg");
	this.shape_3.setTransform(153.75,14.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F8F200").s().p("AgVBrIAAikIAWAAQAIAAAHAFQAGAHAAAIIAACQgAgVhIIAAgjIAWAAQAIABAHAGQAGAGAAAJIAAANg");
	this.shape_4.setTransform(143.175,11.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F8F200").s().p("AAyBVQgIAAgGgGQgHgGAAgJIAAhUQABgPgKgHQgJgHgLAAQgKAAgJAHQgJAHABAPIAABpIgsAAIAAhgQAAgrAVgPQAXgOAbgBQAbAAAWAOQAYAPAAAsIAABgg");
	this.shape_5.setTransform(131.7,14.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F8F200").s().p("AgVBrIAAikIAWAAQAIAAAHAFQAGAHAAAIIAACQgAgVhIIAAgjIAWAAQAIABAHAGQAGAGAAAJIAAANg");
	this.shape_6.setTransform(121.125,11.85);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F8F200").s().p("AAjBrIAAhVIgBgSQgCgGgFgJQgJgNgRAAQgQAAgKANQgJALAAAWIAABVIgqAAIAAjWIAVAAQAJABAGAGQAGAGAAAJIAAAxQAMgSAUgGQAUgEASAHQASAIALAPQAMARABAbIAABhg");
	this.shape_7.setTransform(109.05,11.85);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F8F200").s().p("Ag3BJQgSgPAAgcIAAgBIArAAQAAAMAJAGQAJAHAPAAQALgBAIgEQAIgEAAgHQAAgMgagGIgQgDQghgJgMgJQgMgMAAgTQAAgYASgPQATgPAeAAQAfAAAUAPQASAPABAZIgbAAQgMAAgGgKIgFgFQgIgFgMgBQgMABgGADQgGAEAAAIQAAAJAfAHIAHACIAFABQAgAIANAKQAMALAAASQAAAcgUAPQgTANglAAQgjAAgSgNg");
	this.shape_8.setTransform(92.275,14.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F8F200").s().p("Ag3BJQgSgPAAgcIAAgBIArAAQAAAMAJAGQAJAHAPAAQALgBAIgEQAIgEAAgHQAAgMgagGIgQgDQghgJgMgJQgMgMAAgTQAAgYASgPQATgPAeAAQAfAAAUAPQASAPABAZIgbAAQgMAAgGgKIgFgFQgIgFgMgBQgMABgGADQgGAEAAAIQAAAJAfAHIAHACIAFABQAgAIANAKQAMALAAASQAAAcgUAPQgTANglAAQgjAAgSgNg");
	this.shape_9.setTransform(68.075,14.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F8F200").s().p("AgTAbQAPAAAAgXIAAgEIgPAAIAAgoIAnAAIAAAgQAAAxgnAAg");
	this.shape_10.setTransform(56.875,6.625);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F8F200").s().p("AAyBVQgIAAgGgGQgHgGABgJIAAhUQAAgPgKgHQgJgHgLAAQgKAAgJAHQgJAHABAPIAABpIgsAAIAAhgQgBgrAWgPQAXgOAbgBQAbAAAWAOQAYAPAAAsIAABgg");
	this.shape_11.setTransform(44.75,14.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F8F200").s().p("AgxBGQgXgOAAgrIAAhgIAsAAIAABoQAAAQAJAHQAJAGAKABQAMgBAJgGQAIgHABgQIAAhUQAAgIAFgHQAHgFAJAAIAVAAIAABgQAAAsgWAOQgXANgbAAQgbgBgWgNg");
	this.shape_12.setTransform(28.6,14.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F8F200").s().p("Ag+BfQgXgSgCgkIAsAAQADATAMAHQAMAJAVAAQATAAALgHQAKgGAAgOQgBgTg3gNIgBgBIgFgBQgggHgLgHQgMgHgFgNQgHgKABgSQAAgfAVgRQAVgRApAAQAlAAAUARQAWATABAgIgZAAQgPAAgFgNQgDgGgGgFQgMgIgSAAQgSAAgJAHQgJAHAAAMQAAARAkAJIAOADIAUAGIAOADIASAIQAMAGAHAMQAGAOABAPQgBAigWASQgXASgpAAQgpAAgWgSg");
	this.shape_13.setTransform(10.75,11.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.headline, new cjs.Rectangle(0,-6.6,212.1,38.2), null);


(lib.ThatShine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag1BKQgQgMAAgcQAAgaAPgLQAPgKAYgEIAHgBIAJgCQAcgDAAgNQAAgJgKgEQgJgCgJAAQgHAAgHACQgHADgDAHIgqAAQACgUAPgMQARgPAfAAQAjABARAMQASAMAAAWIAAA5QAAAZgJANQgJAPgMAFQgOAIgOABIgZABQgXAAgRgMgAAFAIIgNADQgLADgFAFQgFAHAAAHQAAAJAGAGQAFAFALAAQARAAAKgKQAKgKAAgRIAAgQQgJAEgQAEg");
	this.shape.setTransform(136.475,23.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgiBoQgPgFgKgMQgSgXAAgoQAAgnASgXQATgZAdAAQAOAAAMAHQANAHAIAMIAAhHIAVAAQAJAAAGAGQAGAHAAAIIAAB5QAAAsgaAQQgZAPgdAAQgQAAgQgFgAgZgMQgJAMAAAWQAAAZAJANQAJANARAAQAQAAAKgNQAJgNAAgZQAAgWgKgNQgKgMgQAAQgQAAgJANg");
	this.shape_1.setTransform(120.25,21.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag1BKQgQgMAAgcQAAgaAPgLQAPgKAYgEIAHgBIAJgCQAcgDAAgNQAAgJgKgEQgJgCgJAAQgHAAgHACQgHADgDAHIgqAAQACgUAPgMQARgPAfAAQAjABARAMQASAMAAAWIAAA5QAAAZgJANQgJAPgMAFQgOAIgOABIgZABQgXAAgRgMgAAFAIIgNADQgLADgFAFQgFAHAAAHQAAAJAGAGQAFAFALAAQARAAAKgKQAKgKAAgRIAAgQQgJAEgQAEg");
	this.shape_2.setTransform(104.175,23.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AguBTIAAhQQAAgYAHgRQAIgQAMgKQAMgKAPgEQAPgEASAAIADAAIADAAIAAAsIgOAAQgTAAgIAJQgIAIAAATIAABVg");
	this.shape_3.setTransform(91.4,23.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgSBVQgVgFgMgLQgNgLgGgUQgFgTgBgTQABgRAEgRQAEgRAKgLQARgTAagDQAYgEAVAIQAXAJAMAXQAKAVAAAbQAAATgEAPQgFAOgGAKQgPAVgXAFQgMADgLAAQgJAAgJgCgAgHgvQgKACgEAFQgOAOACAcQABAcAKALQADAFAJAEQAKADAIgDQAKgCAIgMQAHgLABgZQAAgVgIgMQgGgLgKgDIgJgCIgIACg");
	this.shape_4.setTransform(77.4,23.6956);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABmBVQgKAAgGgGQgFgGgBgJIAAhUQAAgPgJgHQgJgHgLAAQgLAAgJAHQgJAHAAAPIAAAJIAABgIgqAAIAAhgIAAgJQAAgPgJgHQgKgHgLAAQgLAAgJAHQgJAHAAAPIAABpIgrAAIAAhgQgBgrAXgPQAWgOAbgBQAOAAAOADQANAEALAIQAKgHAMgEQANgEAOAAQAbAAAXAOQAXAPAAAsIAABgg");
	this.shape_5.setTransform(55.6,23.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag1BKQgQgMAAgcQAAgaAPgLQAPgKAYgEIAHgBIAJgCQAcgDAAgNQAAgJgKgEQgJgCgJAAQgHAAgHACQgHADgDAHIgqAAQACgUAPgMQARgPAfAAQAjABARAMQASAMAAAWIAAA5QAAAZgJANQgJAPgMAFQgOAIgOABIgZABQgXAAgRgMgAAFAIIgNADQgLADgFAFQgFAHAAAHQAAAJAGAGQAFAFALAAQARAAAKgKQAKgKAAgRIAAgQQgJAEgQAEg");
	this.shape_6.setTransform(34.625,23.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgVBrIAAjWIAWAAQAIAAAHAHQAGAFAAAJIAADBg");
	this.shape_7.setTransform(24.025,21.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag3BJQgSgPAAgcIAAgCIArAAQAAANAJAGQAJAHAPAAQALgBAIgEQAIgEAAgIQAAgLgagGIgQgDQghgJgMgJQgMgMAAgTQAAgYASgPQATgPAeAAQAfAAAUAPQASAPABAZIgbAAQgMAAgGgKIgFgFQgIgFgMgBQgMABgGADQgGAEAAAIQAAAJAfAHIAHACIAFABQAgAIANAKQAMALAAASQAAAcgUAPQgTANglAAQgjAAgSgNg");
	this.shape_8.setTransform(12.625,23.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgVBrIAAi/QAAgJAGgHQAHgGAIgBIAWAAIAADWg");
	this.shape_9.setTransform(2.225,21.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ThatShine, new cjs.Rectangle(-2,2.8,149.3,38.300000000000004), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEEF35").s().p("EgmVAfBMgACgvlMBMRgOcMAAeA+Bg");
	this.shape.setTransform(245.6,198.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,491.2,397.1), null);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhUBVQgjgjAAgyQAAgxAjgjQAjgjAxAAQAyAAAjAjQAjAjAAAxQAAAygjAjQgjAjgyAAQgxAAgjgjg");
	this.shape_1.setTransform(12.025,12.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,24.1,24.1), null);


(lib.CTA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgrAUIA6gUIg6gTIAAgcIBXAkIAAAWIhXAlg");
	this.shape.setTransform(513.075,-79.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAVA2IgVhDIgUBDIgYAAIgchrIAcAAIAPBEIAThEIAVAAIATBEIAOhEIAcAAIgcBrg");
	this.shape_1.setTransform(494.9,-78.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AglApQgOgPABgaIAAAAQAAgQAGgNQAGgMAMgHQAMgHAOAAQAWAAAOANQAOAOABAXIAAAGQAAAZgNAPQgOAPgYAAQgXAAgOgPgAgPgYQgHAJAAAQQAAAQAHAIQAFAIAKAAQALAAAFgIQAHgIgBgRQABgPgHgJQgFgIgLAAQgKAAgFAIg");
	this.shape_2.setTransform(481.6,-78.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAdBJIg5hfIAABfIgeAAIAAiRIAeAAIA5BfIAAhfIAfAAIAACRg");
	this.shape_3.setTransform(468.6,-80.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AARBNIgbgsIgKALIAAAhIgdAAIAAiZIAdAAIAABUIAFgHIAbgfIAjAAIgnAsIAqA/g");
	this.shape_4.setTransform(451.475,-81.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgkApQgOgPgBgaIAAAAQABgQAGgNQAGgMAMgHQALgHAPAAQAWAAAOANQANAOACAXIABAGQAAAZgPAPQgOAPgXAAQgWAAgOgPgAgQgYQgFAJgBAQQABAQAFAIQAGAIAKAAQAKAAAHgIQAFgIAAgRQAAgPgFgJQgHgIgKAAQgKAAgGAIg");
	this.shape_5.setTransform(439.6,-78.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AglApQgOgPABgaIAAAAQAAgQAGgNQAGgMAMgHQAMgHAOAAQAWAAAOANQAOAOABAXIAAAGQAAAZgNAPQgOAPgYAAQgXAAgOgPgAgPgYQgHAJAAAQQAAAQAHAIQAFAIAKAAQALAAAFgIQAHgIgBgRQABgPgHgJQgFgIgLAAQgKAAgFAIg");
	this.shape_6.setTransform(428.05,-78.925);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag1BJIAAiRIAzAAQAaAAANAKQAOAKAAAUQAAAKgGAJQgFAIgKAEQALACAHAIQAGAJAAAMQAAAVgNALQgOALgYAAgAgXAxIAZAAQAKAAAGgFQAGgGAAgIQAAgVgVABIgaAAgAgXgLIAWAAQAWgBAAgRQAAgKgGgEQgGgFgLAAIgVAAg");
	this.shape_7.setTransform(415.875,-80.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E8168B").s().p("ArUBtIAAjaIWpAAIAADag");
	this.shape_8.setTransform(462.4569,-80.5159,0.9207,1.407);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(395.7,-95.9,133.50000000000006,30.80000000000001);


(lib.bg2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bg2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg2_1, new cjs.Rectangle(0,0,970,90), null);


(lib.bg1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bg1();
	this.instance.parent = this;
	this.instance.setTransform(-15,0,1.05,1.05);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg1_1, new cjs.Rectangle(-15,0,1018.5,94.5), null);


(lib._1022 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfAsQAAgMAGgJQAFgJALgHIACgCIAEgCQAHgEAFgFQAEgEAAgFQAAgHgDgDQgEgDgGAAQgGAAgDAEQgEAFAAAHIAAABIgJAAQgFAAgBgDQgBgDAAgEQACgIAGgGQAIgIAOAAQAOAAAJAHQAIAIAAAMQAAAKgFAGQgEAGgMAIIgLAHQgGAEAAAEIAlAAIAAAPg");
	this.shape.setTransform(11.075,68.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgfAsQAAgMAGgJQAFgJALgHIACgCIAEgCQAHgEAFgFQAEgEAAgFQAAgHgDgDQgEgDgGAAQgGAAgDAEQgEAFAAAHIAAABIgJAAQgFAAgBgDQgBgDAAgEQACgIAGgGQAIgIAOAAQAOAAAJAHQAIAIAAAMQAAAKgFAGQgEAGgMAIIgLAHQgGAEAAAEIAlAAIAAAPg");
	this.shape_1.setTransform(3.575,68.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgIAsIAAhHIgaAAIAAgGQAAgEADgDQADgDADAAIA8AAIAAAQIgaAAIAABHg");
	this.shape_2.setTransform(-8.125,68.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgcAiQgLgLAAgXQAAgVALgMQALgMATAAQARAAAKAIQAJAIACAQIgLAAQgGAAgDgGIgEgGQgFgDgJAAQgKAAgHAHQgGAIAAANQAAAPAGAHQAGAIALAAQAIAAAFgEQAFgEACgIIASAAQgCAPgKAIQgKAJgRAAQgTAAgKgMg");
	this.shape_3.setTransform(-16.925,68.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgeAiQgMgMAAgWQAAgUAMgNQALgMATAAQATAAAMAMQAMAOAAATQAAAWgMAMQgMAMgTAAQgTAAgLgMgAgRgVQgHAHAAAOQAAAPAHAIQAGAHALABQAMgBAGgHQAGgJABgOQgBgNgGgIQgGgIgMAAQgLAAgGAIg");
	this.shape_4.setTransform(-26.4,68.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib._1022, new cjs.Rectangle(-32.5,59.5,50.3,17.900000000000006), null);


(lib._1017 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAFAsIAAgUIglAAIAAgQIAggzIAOAAQAEAAACADQADADAAADIAAAGIAAAmIAKAAIAAAOIgKAAIAAAUgAgSAKIAYAAIAAglg");
	this.shape.setTransform(11.4,68.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgfAsQAAgMAGgJQAFgJALgHIACgCIAEgCQAHgEAFgFQAEgEAAgFQAAgHgDgDQgEgDgGAAQgGAAgDAEQgEAFAAAHIAAABIgJAAQgFAAgBgDQgBgDAAgEQACgIAGgGQAIgIAOAAQAOAAAJAHQAIAIAAAMQAAAKgFAGQgEAGgMAIIgLAHQgGAEAAAEIAlAAIAAAPg");
	this.shape_1.setTransform(3.625,68.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgIAsIAAhHIgaAAIAAgGQAAgEADgDQADgDADAAIA8AAIAAAQIgaAAIAABHg");
	this.shape_2.setTransform(-8.075,68.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgcAiQgLgMAAgVQAAgXALgLQALgMATAAQARAAAKAJQAJAHACAPIgLAAQgGAAgDgFIgEgGQgFgEgJAAQgKAAgHAIQgGAHAAAPQAAANAGAIQAGAIALAAQAIAAAFgEQAFgEACgIIASAAQgCAPgKAJQgKAIgRAAQgTAAgKgMg");
	this.shape_3.setTransform(-16.875,68.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgfAiQgLgNAAgUQAAgVALgNQANgMASAAQATAAAMAMQAMANgBAVQABAUgMANQgLAMgUAAQgTAAgMgMgAgRgWQgGAJgBAOQABAOAGAHQAGAJALgBQAMABAGgJQAHgHgBgOQABgOgHgJQgGgHgMAAQgLAAgGAHg");
	this.shape_4.setTransform(-26.35,68.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib._1017, new cjs.Rectangle(-32.4,59.5,50.599999999999994,17.900000000000006), null);


(lib.yellow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(983.9,284.9,1.8127,1.2941,0,-72.128,107.8726,245.2,198.8);
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.yellow, new cjs.Rectangle(602.2,-217,762.3,1005.1), null);


(lib.timestamp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Path_1();
	this.instance.parent = this;
	this.instance.setTransform(21.6,26.65,1,1,0,0,0,12,12);
	this.instance.alpha = 0.5;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlIELIAAoVIIVAAIAADdIB8h8IAAFTIh8h8IAADdgAiohqQgsAtAAA9QAAA/AsAsQAtAsA+AAQA+AAAsgsQAsgsAAg/QAAg9gsgtQgsgtg+AAQg+AAgtAtg");
	this.shape.setTransform(27.825,26.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.timestamp, new cjs.Rectangle(-5.1,0,65.89999999999999,53.4), null);


(lib.headline2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.instance = new lib.ThatShine();
	this.instance.parent = this;
	this.instance.setTransform(60.85,17.15,1,1,0,0,0,55.8,19.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.headline2, new cjs.Rectangle(3.1,0.8,149.3,38.2), null);


// stage content:
(lib.VFL1118_MichaelResponse_Expedia_970x90_IslamoradaPensacola01_eng_html5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_166 = function() {
		if(!this.alreadyExecuted){
		this.alreadyExecuted=true;
		this.loopNum=1;
		} else {
		this.loopNum++;
		if(this.loopNum==2){
		this.stop();
		}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(166).call(this.frame_166).wait(1));

	// Logo
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgmAmQgQgPAAgXQAAgVAQgQQAQgQAWAAQAXAAAQAQQAQAPAAAWQAAAXgQAPQgQAPgXABQgWgBgQgPgAgagbQgMAMAAAPQAAAQAMAMQALAMAPAAQAQAAALgMQALgMAAgQQAAgPgLgMQgLgMgQAAQgPAAgLAMg");
	this.shape.setTransform(899.9468,39.8292,1.4752,1.4752);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAAA1IgfhJIgNBIIgPAAIAThoIAKAAIAeBJIAghJIALAAIARBoIgQAAIgLhIIggBJg");
	this.shape_1.setTransform(917.096,39.7923,1.4752,1.4752);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgWAmQgQgPAAgXQAAgVAQgQQAQgQAWAAQALAAAMAGIAAARQgLgJgNAAQgPAAgLAMQgLAMAAAPQAAARALALQALAMAQAAQAMAAALgJIAAARQgMAGgMAAQgWgBgPgPg");
	this.shape_2.setTransform(885.2685,39.8292,1.4752,1.4752);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjBAPQAAAAABgBQAAAAAAAAQAAAAABgBQAAAAABAAICcgVQChgQBBAWQABAAAAAAQAAAAABAAQAAAAgBABQAAAAAAAAIgEABQg+gFgxABQh8AEiPAPIgCABIgCgBg");
	this.shape_3.setTransform(898.814,57.8019,1.4752,1.4752);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AkogOQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAABgBIAFgBQBeAPBMADQCyAGDsgJQAEAAABACQAAABAAAAQAAAAAAAAQgBAAgBAAQgBAAgBAAQh1ANh+AEIhLACQi+AAhSghg");
	this.shape_4.setTransform(791.313,53.3778,1.4752,1.4752);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AnGAUQgJgBARgBIASAAQBgABCNgIQA2gDB6gMQCPgPBRgFQBogGBTAGQBHAFgKADQgEACgFgBQgSgCgdgBIgagBQg2AAhOAFQhJAEh8AQQhxAPhGAEQgnADg1AAQhcAAiFgIg");
	this.shape_5.setTransform(853.3552,55.953,1.4752,1.4752);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAaAzIgLgcIgeAAIgLAcIgXAAIAqhlIAPAAIAqBlgAAHADIAAgBIgBgCIgGgOIgFAOIgCADIAOAAg");
	this.shape_6.setTransform(866.976,40.0505,1.4752,1.4752);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgmAyIgFgBIAAhiIAcgBQAcAAAQAOQAPAPAAAVQAAAQgIANQgIAMgNAFQgOAFgTAAIgUgBgAgUAeIAQAAQAIgCAEgCQAEgCADgFQAFgHAAgKQAAgTgPgIQgKgEgNAAIgCAAg");
	this.shape_7.setTransform(854.2154,40.198,1.4752,1.4752);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgKAyIAAhkIAVAAIAABkg");
	this.shape_8.setTransform(845.0323,40.1611,1.4752,1.4752);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAOAzIgZglIgGAAIAAAlIgXAAIAAhjIAagCQATAAAKAIQALAIAAAPQAAARgQAJIABABIAeArgAgRgdIAAAYIAMAAQAEAAABgDQADgEAAgFQAAgNgQAAg");
	this.shape_9.setTransform(836.9556,40.1243,1.4752,1.4752);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgkAlQgPgPAAgWQABgWAPgPQAOgOAWAAQAWAAAOAPQAPAPAAAWQAAAXgPAOQgPAOgWAAQgWAAgOgPgAgTgXQgHAIAAANQgBAOAJAJQAIAKALAAQAMAAAIgIQAHgIAAgNQAAgNgJgKQgHgKgMAAQgMAAgHAIg");
	this.shape_10.setTransform(822.2404,40.198,1.4752,1.4752);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgfAyIAAhkIAXAAIAABQIAoAAIgEAUg");
	this.shape_11.setTransform(810.8444,40.1611,1.4752,1.4752);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgcAyIAAhjIA5AAIAAAUIgiAAIAAATIAeAAIAAATIgeAAIAAApg");
	this.shape_12.setTransform(800.9606,40.198,1.4752,1.4752);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgGAzIAAhVIABgEIgEABIgeAAIAAgNIBPAAIAAANIgfAAIgDgBIAAAEIAABVg");
	this.shape_13.setTransform(788.9377,40.198,1.4752,1.4752);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgFAzIAAhlIALAAIAABlg");
	this.shape_14.setTransform(779.8283,40.198,1.4752,1.4752);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgdAqIACgOQANANAOAAQAHAAAFgFQAFgFAAgHQAAgLgPgGIgIgEQgUgIAAgSQAAgMAIgIQAIgIAMAAQAOAAALAJIgGAMQgLgKgJAAQgGAAgEAFQgFAEAAAGQAAAHAHAFIAQAJQAVAJAAARQAAANgJAJQgJAIgNAAQgOAAgOgKg");
	this.shape_15.setTransform(771.7515,40.2718,1.4752,1.4752);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgGAzIAAhlIANAAIAABlg");
	this.shape_16.setTransform(763.8223,40.198,1.4752,1.4752);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgFAzIgnhkIAMAAIAgBTIABAAIAIgZIAYg6IAMAAIgnBkg");
	this.shape_17.setTransform(754.1228,40.2349,1.4752,1.4752);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgHAIQgDgEAAgEQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAEgDAEQgDADgFAAQgEAAgDgDgAgHAAQAAAJAHAAQAEAAACgDQACgCABgEQgBgCgCgDQgCgDgEAAQgHAAAAAIgAACAGIgBgDQAAAAAAgBQAAAAAAAAQAAAAgBAAQAAgBAAAAIgBAAIAAAFIgDAAIAAgLIAEAAIADABIABACQAAABAAABQAAAAAAAAQAAAAgBAAQAAAAgBAAIAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAABIABACgAgBAAIABAAQAAAAAAAAQABAAAAAAQABAAAAgBQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAIgBAAg");
	this.shape_18.setTransform(878.0031,46.2095,1.4752,1.4752);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(167));

	// CTA
	this.instance = new lib.CTA();
	this.instance.parent = this;
	this.instance.setTransform(312.65,32.85,1,1,0,0,0,282.6,-81.6);
	this.instance.alpha = 0;
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(134).to({_off:false},0).to({y:43.9,alpha:1},10,cjs.Ease.backOut).wait(23));

	// 10-24
	this.instance_1 = new lib._1017();
	this.instance_1.parent = this;
	this.instance_1.setTransform(532.7,15.45,1,1,0,0,0,23.9,9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(94).to({_off:false},0).to({alpha:1},4).wait(69));

	// 10-22
	this.instance_2 = new lib._1022();
	this.instance_2.parent = this;
	this.instance_2.setTransform(533.9,15.45,1,1,0,0,0,25.1,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(90).to({alpha:0},4).wait(73));

	// time stamp
	this.instance_3 = new lib.timestamp();
	this.instance_3.parent = this;
	this.instance_3.setTransform(467.55,74.95,0.2148,0.2148,0,0,0,33,26.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(167));

	// pin
	this.instance_4 = new lib.pin_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(361.8,68.3,1,1,0,0,0,5.5,8.2);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(16).to({_off:false},0).to({y:75.9,alpha:1},13,cjs.Ease.backOut).wait(61).to({alpha:0},4).wait(11).to({x:289.05,y:-2.65},0).to({y:10.75,alpha:1},11,cjs.Ease.backOut).wait(51));

	// map
	this.instance_5 = new lib.map();
	this.instance_5.parent = this;
	this.instance_5.setTransform(279.1,46.3,1,1,0,0,0,45.1,41.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(167));

	// headline-3
	this.instance_6 = new lib.headline3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(132.4,50.85,1,1,0,0,0,117.1,19.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(105).to({_off:false},0).to({y:59.1,alpha:1},11,cjs.Ease.backOut).wait(51));

	// headline-2
	this.instance_7 = new lib.headline2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(71.15,45.05,1,1,0,0,0,59.1,16.4);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(16).to({_off:false},0).to({y:58.05,alpha:1},13,cjs.Ease.backOut).wait(61).to({alpha:0},4).wait(73));

	// headline-1
	this.instance_8 = new lib.headline();
	this.instance_8.parent = this;
	this.instance_8.setTransform(90.25,25.55,1,1,0,0,0,75.2,16.4);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(4).to({_off:false},0).to({y:34.55,alpha:1},13,cjs.Ease.backOut).wait(150));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A5WIaIAAwzMAytAAAIAAQzg");
	mask.setTransform(820.825,47.275);

	// rays
	this.instance_9 = new lib.pink();
	this.instance_9.parent = this;
	this.instance_9.setTransform(697.1,223,1,1,0,180,0,886.6,42.1);

	this.instance_10 = new lib.orange();
	this.instance_10.parent = this;
	this.instance_10.setTransform(548.35,-54.35,1,1,-2.952,0,0,669,-195);
	this.instance_10.alpha = 0.6992;

	this.instance_11 = new lib.yellow();
	this.instance_11.parent = this;
	this.instance_11.setTransform(547.45,-53.65,1,1,-8.178,0,0,762.4,-89.5);

	var maskedShapeInstanceList = [this.instance_9,this.instance_10,this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]}).wait(167));

	// bg-2
	this.instance_12 = new lib.bg2_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_12.alpha = 0.1719;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(90).to({_off:false},0).to({scaleX:1.006,scaleY:1.006,x:149.15,y:125.3,alpha:1},9).to({scaleX:1.056,scaleY:1.056,x:141.65,y:127.05},55).wait(13));

	// bg-1
	this.instance_13 = new lib.bg1_1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(156.8,119.45,0.9556,0.9556,0,0,0,150.1,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({scaleX:1.0211,scaleY:1.0211,x:153.55,y:127.65},92).to({regX:150,scaleX:1.0213,scaleY:1.0213,x:153.5,alpha:0},7).wait(68));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(468.3,32.2,556.9000000000001,68.89999999999999);
// library properties:
lib.properties = {
	id: 'E79E982A1C3C4CDD817645292E36AB62',
	width: 970,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg1.jpg", id:"bg1"},
		{src:"images/bg2.jpg", id:"bg2"},
		{src:"images/Bitmap1.png", id:"Bitmap1"},
		{src:"images/pin.png", id:"pin"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['E79E982A1C3C4CDD817645292E36AB62'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;