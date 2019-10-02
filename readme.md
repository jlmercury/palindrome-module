# Phrase object (with palindrome detector)

This is a sample NPM module created in [*Learn Enouth JavaScript to Be Dangerous*](https://www.learnenough.com/javascript-tutorial) by Michael Hartl.

The module can be used as follows:

```
$ npm install --global jlmercury-palindrome
$ vim test.js
let Phrase = require("jlmercury-palindrome");
let napoleonsLament = new Phrase("Able was I, ere I saw Elba.");
console.log(napoleonsLament.palindrome());
$ node test.js
true
```
