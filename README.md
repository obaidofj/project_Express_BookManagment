# Project using Express for Book Managment

This project is backend using Express js to mange json book data, 
The APIs can be used as :

### <span style="color: green;"> >> get all books :</span>
Example:

get => localhost:3000/api/books/

### <span style="color: green;"> >> get book by id :</span>
Example:

get => localhost:3000/api/books/1

### <span style="color: green;"> >> add book by posting json body book date :</span>
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
### <span style="color: green;"> >> delete book - by id :</span>
Example:

delete => localhost:3000/api/books/1

### <span style="color: green;"> >> update book - by id and body new data:</span>
Example:

put => localhost:3000/api/books/2
new raw body json book date :
```{       
        "title": "new title",
        "author": "new authre name",
        "publicationYear": 2016
}
```
### <span style="color: green;"> >> search book using part of book name as:</span>
Example:

get => localhost:3000/api/books/search/name?name=pride  

### <span style="color: green;"> >> search book by year as:</span>
Example:

get => localhost:3000/api/books/search/year?year=pride  