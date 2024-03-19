// Print name n times with recursion
function printName(name: string, i: number, n: number): void {
  if(i > n) {
    return
  }
  console.log(name)
  printName(name, i+1, n)
}

printName('Tahmid Hasan', 1, 5)