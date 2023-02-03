//  Can you find out who will get the delicious cake
function JimOrDela(marksOfJim, marksOfDela) {
    return marksOfJim > marksOfDela ? "Jim" : "Dela";
}

// Can you find out who will get the delicious cake
function JimOrDelaOrChinku(marksOfJim, marksOfDela, marksOfChinku) {
    return marksOfJim > marksOfDela
      ? "Jim"
      : marksOfDela > marksOfChinku
      ? "Dela"
      : "Chinku";
  }