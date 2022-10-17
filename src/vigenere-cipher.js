const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  // constructor(direct = true) {
	// 	this.direct = direct;
	// }

  encrypt() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  decrypt(encryptedMessage, key) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here 
  }
  // encrypt(message, key) {
  //   if ((!message) || (!key)) throw Error("Incorrect arguments!");
  //   let cypher = '';
	// 	message = message.toUpperCase();
	// 	for(let i =0; i<message.length; i++) {
	// 		if(message[i] === " ") {
	// 			cypher += message[i];
	// 		} else {
	// 			cypher += String.fromCharCode(((message.charCodeAt(i) + key.charCodeAt(i))%26)+65)
	// 		}
	// 	}
  //   //console.debug(this.direct);
	// 	return (this.direct) ? cypher : [...cypher].reverse().join("");
  // }
  // decrypt(encryptedMessage, key) {
  //   if ((!encryptedMessage) || (!key)) throw Error("Incorrect arguments!");
  //   let text = '';
	// 	for(let i =0; i<encryptedMessage.length; i++) {
	// 		if(encryptedMessage[i] === " ") {
	// 			text += encryptedMessage[i];
	// 		} else {
	// 			text += String.fromCharCode(((((encryptedMessage.charCodeAt(i) - key.charCodeAt(i)) % 26)+26)%26)+65)
	// 		}
	// 	}
	// 	return (this.direct) ? text : [...text].reverse().join("");
  // }
}

module.exports = {
  VigenereCipheringMachine
};
