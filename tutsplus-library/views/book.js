block content
    .well.well-lg
        h1 #[strong Name:] #{book.name}
        ul
            li #[strong Description:] #{book.description}
            li #[strong Author:] #{book.author}
            li #[strong Genre:]
                each genre in book.genre
                    #{genre.name}
                    |,
