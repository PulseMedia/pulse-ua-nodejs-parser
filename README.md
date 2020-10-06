# Pulse NodeJS UserAgent Parser

### Useage

Import the PulseUA-Module an execute the "parse"-Method with the UserAgent-string

##### Example

```js
var PulseUA = require('./PulseUA');
var pulseUserAgent = PulseUA.parse("Pulse/1.0 (JS, ECMAScript; CSharp, like C) Early/1.0.0.0");

//Output Object to console
console.log(JSON.stringify(pulseUserAgent));
```

### UserAgent Object

The "parse"-Method returns the following Object with Keys/Values

| Key | Value |
| ------ | ------ |
| name | "Pulse" |
| version | "1.0" |
| fullversion | "1.0.0.0" |
| versionName | "Early" |
| technologies | [ "JS, ECMAScript", "CSharp, like C" ] |