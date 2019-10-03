module.exports = Phrase;
// Adds `reverse` to all strings.
String.prototype.reverse = function() {
	return Array.from(this).reverse().join("");
}


// Defines a Phrase object.
function Phrase(content) {
	this.content = content;

	// Returns content processed for palindrome testing.
	this.processedContent = function processedContent() {
		return this.letters().toLowerCase();
	}

	// Returns the letters in the content.
	// For example:
	// 	new Phrase("Hello, world!").letters() === "Helloworld"
	this.letters = function letters() {
		const lettersLegex = /[a-z]/ig;
		return (this.content.match(lettersLegex) || []).join("");
	}

	// Returns true for a palindrome, false otherwise.
	this.palindrome = function palindrome() {
		if (this.letters()) {
			return this.processedContent() === this.processedContent().reverse();
		} else {
				return false
		}
	}
}
