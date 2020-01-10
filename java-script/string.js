/*
Input: address = "255.100.50.0"
Output: "255[.]100[.]50[.]0"
*/
var defangIPaddr = function(address) {
  //return address.split('.').join('[.]');
  return address.replace(/\./g, "[.]");
};
