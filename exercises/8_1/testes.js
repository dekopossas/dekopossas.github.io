function smallerName(array) {
    let nameBook = '----------------------------------';
      // escreva aqui o seu código
      for (let c = 0; c < array.length; c += 1){
          let bookName = array[c].name;
          if (bookName.length < nameBook.length){
              nameBook = bookName;
          }
      }
    // Variável nameBook que receberá o valor do menor nome;
    return nameBook;
  }
  
  console.log(smallerName(books))
  
  assert.equal(smallerName(books), 'Duna');