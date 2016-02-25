# NumberFormatterJS

Creating a javascript library for number formatting. This is to brush up my javascript fundamentals.

Add the NumFormat.js to your document. 

Examples : 

1. display(formatType) 

  One can add a display based on countries. Right now only for US. 
  NumFormat("1000").display("US")

2. fType 

  Add a suffix for the value of the number. Right now - Thousand, Million, Billion supported. 
  NumFormat("1000000").fType();
