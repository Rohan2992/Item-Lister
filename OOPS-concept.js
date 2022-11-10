// jshint esversion:6

// Object

// const Book = {
//     name: 'John Doe',
//     title: 'Book 1',
//     year: '2000',

//     getName: function getName() {
//         console.log(`The name is ${this.name}`);
//     }
// };

// Using Functions

// function Book(name, title, year) {
//     this.name = name;
//     this.title = title;
//     this.year = year;

//     this.getName = function () {
//         console.log(`The name is ${this.name}`);
//     };
//     // return {
//     //     name: name,
//     //     title: title,
//     //     year: year
//     // };
// }

// Book.prototype.publication = 'Nathus';

// Book.prototype = Object.create({ publication: 'Nathus' });

// Book.prototype.getName = function () {
//     console.log(`The name is ${this.name}`);
// };

// const newBook = new Book('John Doe', 'Book 1', '2000');
// console.log(newBook);

// function Magazine(name, title, year, month) {
//     Book.call(this, name, title, year);

//     this.month = month;
// }

// Magazine.prototype = Object.create(Book.prototype);
// const Mag1 = new Magazine('John Doe', 'Book 1', '2000', 'sept');

// Magazine.prototype.constructor = Magazine;


// object Prototypes
// function Book(name, author) {
//     this.name = name;
//     this.author = author;
// }

// const bookProtos = {
//     getName: function () {
//         console.log("I am get name");
//     },

//     getTitle: function () {
//         console.log("I am get age");
//     }
// };

// book1 = Object.create(bookProtos);

// const book1 = Object.create(bookProtos, {
//     title: { value: 'John Doe' },
//     year: { value: 2000 }
// });
// book1.title = 'John Doe';
// book1.year = 2000;

// console.log(book1);

// class Book {
//     constructor(name, title, year) {
//         this.name = name;
//         this.title = title;
//         this.year = year;
//     }

//     getName() {
//         return (`The name of the book is ${this.title}.`);
//     }

//     getTitle() {
//         return `${this.title} is the title of this book.`;
//     }

//     static getYear() {
//         console.log(`The year of the book is ${this.year}.`);
//     }
// }


// const book1 = new Book('Book1', 'John Doe', 2002);
// Book.getYear();










const book1 = {
    title: 'Book 1',
    author: 'John Doe',
    year: '2020'
};

const book2 = {
    title: 'Book 2',
    author: 'Johnny Doe',
    year: '2021'
};


// using function

function Books(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

    this.getName = function () { return (`The name of the book is ${this.title} and ${this.author} is the author of this book.`); };

    this.getAge = function () {
        const year = new Date().getFullYear();
        return (`Book is ${year - this.year} years old.`);
    };
}

Books.prototype.getName = function () {
    return (`The name of the book is ${this.title} and ${this.author} is the author of this book.`);
};

Books.prototype.getAge = function () {
    const year = new Date().getFullYear();
    return (`Book is ${year - this.year} years old.`);
};

const book3 = new Books('Book 1', 'John Doe', '2020');
console.log(book3);
// console.log(book1);


// prototypal inheritance

function Books(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

    // this.getName = function () {
    //     return (`The name of the book is ${this.title} and ${this.author} is the author of this book.`);
    // };

    // this.getAge = function () {
    //     const year = new Date().getFullYear();
    //     return (`Book is ${year - this.year} years old.`);
    // };
}

Books.prototype.getName = function () {
    return (`The name of the book is ${this.title} and ${this.author} is the author of this book.`);
};

Books.prototype.getAge = function () {
    const year = new Date().getFullYear();
    return (`Book is ${year - this.year} years old.`);
};

// function Magazine(title, author, year, rating) {
//     Books.call(this, title, author, year);
//     this.rating = rating;
// }

// Magazine.prototype = Object.create(Books.prototype);
// Magazine.prototype.constructor = Magazine;

// const book1 = new Books('Book 1', 'John Doe', '2020');
// console.log(book1.getName());
// console.log(book1.getAge());

// const mag1 = new Magazine('Book 1', 'John Doe', '2020', '5');
// Magazine.prototype.constructor = Magazine;

// console.log(mag1);

// object create

const bookProtos = {
    getName: function () {
        return (`The name of the book is ${this.title} and ${this.author} is the author of this book.`);
    },

    getAge: function () {
        const year = new Date().getFullYear();
        return (`Book is ${year - this.year} years old.`);
    }
};

const books = Object.create(bookProtos);
// {
//     title: { value: 'Book 1' },
//     author: { value: 'Book 1' },
//     year: { value: '2022' }
// }

books.title = 'Book 1';
books.author = 'Book 1';
books.year = '2022';

console.log(books);

// classes

class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getAge() {
        const year = new Date().getFullYear();
        return (`Book is ${year - this.year} years old.`);
    }

    getName() {
        return (`The name of the book is ${this.title} and ${this.author} is the author of this book.`);
    }
}

const Book1 = new Book('Book 1', 'John Doe', '2020');

class Magazine extends Book {
    constructor(title, author, year, month) {
        super(title, author, year);

        this.month = month;
    }
}

const mag1 = new Magazine('book 1', 'John Doe', '2020', 'Sept');

console.log(mag1);
