const TOKEN_TYPE = {
    "QUOTEDSTRING": {
        matchingRegEx: /((?<![\\])['"])((?:.(?!(?<![\\])\1))*.?)\1/g,
        
    }

};

class Token {
    _tokenType: string;
    _tokenName: string;
    _startIndex: number;
    _endIndex: number;
   
    constructor(message: string) {
      this.greeting = message;
    }
   
    greet() {
      return "Hello, " + this.greeting;
    }
  }
   
  
class GqlQueryParser {
    _gqlQueryString: string;
    _tokensArray
   
    constructor(message: string) {
      this.greeting = message;
    }
   
    greet() {
      return "Hello, " + this.greeting;
    }
  }
   