module.exports = Phrase;
// Adds `reverse` to all strings.
String.prototype.reverse = function() {
	return Array.from(this).reverse().join("");
}


// Defines a Phrase object.
function Phrase(content) {
	this.content = content;

	this.processor = function processor(string) {
		return string.toLowerCase();
	}

	// Returns content processed for palindrome testing.
	this.processedContent = function processedContent() {
		return this.processor(this.content);
	}

	// Returns the letters in the content.
	this.letters = function letters() {
		for (i = 0; i < this.content.length; i++) {
			let theLetters = [];
			if ( this.content.charAt(i).match(/[a-zA-Z]/) ) {
				theLetters.push(this.content.charAt(i));
			}
			return theLetters.join("");
		};
	}

	// Returns true for a palindrome, false otherwise.
	this.palindrome = function palindrome() {
		return this.processedContent() === this.processedContent().reverse();
	}
}
