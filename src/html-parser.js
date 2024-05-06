import * as domino from '@mixmark-io/domino';

function createHTMLParser () {
  var Parser = function () {}

  Parser.prototype.parseFromString = function (string) {
    return domino.createDocument(string)
  }

  return Parser
}

export default createHTMLParser()
