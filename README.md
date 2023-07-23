# Project using Express for Book Managment

This project is backend using Express js to mange json book data, 
The APIs can be used as :

### >> get all books :
Example:

get => localhost:3000/api/books/

### >> get book by id :
Example:

get => localhost:3000/api/books/1

### >> add book by posting json body book date :
Example:

post => localhost:3000/api/books/
```data as json raw body :
{       "id":1,
        "title": "the book title",
        "author": "the authar name",
        "publicationYear": 2016
} 
```
(it added to bottom)
### >> delete book - by id :
Example:

delete => localhost:3000/api/books/1

### >> update book - by id and body new data:
Example:

put => localhost:3000/api/books/2
new raw body json book date :
```{       
        "title": "new title",
        "author": "new authre name",
        "publicationYear": 2016
}
```
### >> search book using part of book name as:
Example:

get => localhost:3000/api/books/search/name?name=pride  

### >> search book by year as:
Example:

get => localhost:3000/api/books/search/year?year=pride  