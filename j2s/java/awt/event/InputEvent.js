Clazz.declarePackage ("java.awt.event");
c$ = Clazz.decorateAsClass (function () {
this.when = 0;
this.modifiers = 0;
this.source = null;
this.id = 0;
this.consumed = false;
Clazz.instantialize (this, arguments);
}, java.awt.event, "InputEvent");
Clazz.makeConstructor (c$, 
function (source, id, when, modifiers) {
this.source = source;
this.id = id;
this.when = when;
this.modifiers = modifiers;
}, "~O,~N,~N,~N");
$_M(c$, "isShiftDown", 
function () {
return (this.modifiers & 1) != 0;
});
$_M(c$, "ibsControlDown", 
function () {
return (this.modifiers & 2) != 0;
});
$_M(c$, "isMetaDown", 
function () {
return (this.modifiers & 4) != 0;
});
$_M(c$, "isAltDown", 
function () {
return (this.modifiers & 8) != 0;
});
$_M(c$, "isAltGraphDown", 
function () {
return (this.modifiers & 32) != 0;
});
$_M(c$, "getWhen", 
function () {
return this.when;
});
$_M(c$, "getModifiers", 
function () {
return this.modifiers & (-16321);
});
$_M(c$, "getModifiersEx", 
function () {
return this.modifiers & -64;
});
$_M(c$, "consume", 
function () {
this.consumed = true;
});
$_M(c$, "isConsumed", 
function () {
return this.consumed;
});
c$.getModifiersExText = $_M(c$, "getModifiersExText", 
function (modifiers) {
return "[" + modifiers + "]";
}, "~N");
Clazz.defineStatics (c$,
"SHIFT_MASK", 1,
"CTRL_MASK", 2,
"META_MASK", 4,
"ALT_MASK", 8,
"ALT_GRAPH_MASK", 32,
"BUTTON1_MASK", 16,
"BUTTON2_MASK", 8,
"BUTTON3_MASK", 4,
"SHIFT_DOWN_MASK", 64,
"CTRL_DOWN_MASK", 128,
"META_DOWN_MASK", 256,
"ALT_DOWN_MASK", 512,
"BUTTON1_DOWN_MASK", 1024,
"BUTTON2_DOWN_MASK", 2048,
"BUTTON3_DOWN_MASK", 4096,
"ALT_GRAPH_DOWN_MASK", 8192,
"FIRST_HIGH_BIT", 16384,
"JDK_1_3_MODIFIERS", 63,
"HIGH_MODIFIERS", -16384);
