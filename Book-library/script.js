document.addEventListener('DOMContentLoaded', function() {
    const books = [
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald", image: "https://www.webdelico.com/wp-content/uploads/2021/01/81TAyDpFKVL.jpg", category: "Fiction", borrowed: false },
        { title: "Sapiens: A Brief History of Humankind", author: "Yuval Noah Harari", image: "https://d30a6s96kk7rhm.cloudfront.net/original/readings/978/009/959/9780099590088.jpg", category: "Non-Fiction", borrowed: true },
        { title: "Brief Answers to the Big Questions", author: "Stephen Hawking", image: "https://images.penguinrandomhouse.com/cover/700jpg/9781984844620", category: "Science", borrowed: false },
        { title: "1984", author: "George Orwell", image: "https://imgv2-2-f.scribdassets.com/img/word_document/338240944/original/82f08c539c/1587828916?v=1", category: "Fiction", borrowed: false },
        { title: "Educated", author: "Tara Westover", image: "https://cdn2.penguin.com.au/covers/original/9780099511021.jpg", category: "Non-Fiction", borrowed: false },
        { title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", image: "https://imgv2-2-f.scribdassets.com/img/word_document/92768543/original/589f3707ee/1622549723?v=1", category: "Science Fiction", borrowed: false },
        { title: "A Brief History of Time", author: "Stephen Hawking", image: "https://sulfurbooks.com/wp-content/uploads/2021/03/original-1345-685x1024.jpeg", category: "Science", borrowed: false },
        { title: "The Selfish Gene", author: "Richard Dawkins", image: "https://images.thenile.io/r1000/9780199291151.jpg", category: "Science", borrowed: false },
        { title: "Cosmos", author: "Carl Sagan", image: "https://images.thenile.io/r1000/9780345539434.jpg", category: "Science", borrowed: false },
        { title: "The Origin of Species", author: "Charles Darwin", image: "http://d28hgpri8am2if.cloudfront.net/book_images/cvr9781416561477_9781416561477_hr.jpg", category: "Science", borrowed: false },
        { title: "The Elegant Universe", author: "Brian Greene", image: "https://i.pinimg.com/originals/95/0b/cf/950bcfc6d934947dcae749c155e32ad4.jpg", category: "Science", borrowed: false },
        { title: "Neuromancer", author: "William Gibson", image: "https://book24.hu/img/boritok_cover/agave/william_gibson_-_neuromancer_b1_300dpi_cover.jpg", category: "Science Fiction", borrowed: false },
        { title: "Do Androids Dream of Electric Sheep?", author: "Philip K. Dick", image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1507838927i/36402034.jpg", category: "Science Fiction", borrowed: false },
        { title: "Foundation", author: "Isaac Asimov", image: "https://covers.openlibrary.org/b/id/7883980-L.jpg", category: "Science Fiction", borrowed: false },
        { title: "The Diary of a Young Girl", author: "Anne Frank", image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1560816565i/48855.jpg", category: "Biography", borrowed: false },
        { title: "Long Walk to Freedom", author: "Nelson Mandela", image: "https://d3525k1ryd2155.cloudfront.net/h/126/396/319396126.0.x.jpg", category: "Biography", borrowed: false },
        { title: "Gone Girl", author: "Gillian Flynn", image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1554086139i/19288043.jpg", category: "Thriller", borrowed: false },
        { title: "The Silence of the Lambs", author: "Thomas Harris", image: "https://s.yimg.com/fz/api/res/1.2/cF1My9cX7836v_m2DypFlQ--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI2MDtxPTgwO3c9MTY4/https://s.yimg.com/zb/imgv1/5cae0053-3a6a-3192-a014-b4d109dfe80a/t_500x300", category: "Thriller", borrowed: false },
        { title: "Sharp Objects", author: "Gillian Flynn", image: "https://upload.wikimedia.org/wikipedia/en/d/dc/Sharp-objects-book-cover.jpg", category: "Thriller", borrowed: false },
        { title: "The Girl with the Dragon Tattoo", author: "Stieg Larsson", image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1684638853i/2429135.jpg", category: "Thriller", borrowed: false },
        { title: "Misery", author: "Stephen King", image: "https://s.yimg.com/fz/api/res/1.2/pM__GViPeV.bUcDPIcfy5w--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI2MDtxPTgwO3c9MTcy/https://s.yimg.com/zb/imgv1/9cc5d4c3-95d2-3be3-a1aa-931d33729e6b/t_500x300", category: "Thriller", borrowed: false },
        { title: "The Autobiography of Malcolm X", author: "Malcolm X", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/The_Autobiography_of_Malcolm_X_%281st_ed_dust_jacket_cover%29.jpg/330px-The_Autobiography_of_Malcolm_X_%281st_ed_dust_jacket_cover%29.jpg", category: "Biography", borrowed: false },
        { title: "Steve Jobs", author: "Walter Isaacson", image: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781501127625/steve-jobs-9781501127625_hr.jpg", category: "Biography", borrowed: false },
        { title: "Unbroken: A World War II Story of Survival, Resilience, and Redemption", author: "Laura Hillenbrand", image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1327861115i/8664353.jpg", category: "Biography", borrowed: false },
        { title: "The Silent Patient", author: "Alex Michaelides", image: "https://img1.od-cdn.com/ImageType-100/1493-1/%7B66440256-9376-467B-828B-9E5404778D19%7DIMG100.JPG", category: "Thriller", borrowed: false },
        { title: "Dune", author: "Frank Herbert", image: "https://www.indiependent.co.uk/wp-content/uploads/2020/06/A1u2fY5yTL-scaled.jpg", category: "Science Fiction", borrowed: false },
        { title: "The 7 Habits of Highly Effective People", author: "Stephen Covey", image: "https://s.yimg.com/fz/api/res/1.2/.qPbDlrUtZ3x0cdrT5SDtQ--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI2MDtxPTgwO3c9MTY4/https://s.yimg.com/zb/imgv1/cac33611-09a0-340c-a1c2-88b738113e6f/t_500x300", category: "Motivational", borrowed: false },
        { title: "Think and Grow Rich", author: "Napoleon Hill", image: "https://excellencethinking.com/wp-content/uploads/edd/2017/08/think_and_grow_rich_book.jpg", category: "Motivational", borrowed: false },
        { title: "The Power of Positive Thinking", author: "Norman Vincent Peale", image: "https://media.thuprai.com/front_covers/The_Power_of_positive_thinking_by_Norman_Vincent_Peale_-_front.jpeg", category: "Motivational", borrowed: false },
        { title: "Daring Greatly: How the Courage to Be Vulnerable Transforms the Way We Live, Love, Parent, and Lead", author: "Brené Brown", image: "http://ecx.images-amazon.com/images/I/51a5dK3cuRL._SY344_BO1,204,203,200_QL70_.jpg", category: "Motivational", borrowed: false },
        { title: "Mindset: The New Psychology of Success", author: "Carol S. Dweck", image: "https://i5.walmartimages.com/asr/a25214ea-23d6-4ef2-ace3-c794ada26b5c_1.407ac9c713d5294140c364263b66007b.jpeg", category: "Motivational", borrowed: false },
        { title: "To Kill a Mockingbird", author: "Harper Lee", image: "https://cdn2.penguin.com.au/covers/original/9781785150357.jpg", category: "Fiction", borrowed: false },
        { title: "Becoming", author: "Michelle Obama", image: "https://images.thenile.io/r1000/9780525633754.jpg", category: "Biography", borrowed: false }
    ];

    const categories = [...new Set(books.map(book => book.category))];

    const bookList = document.querySelector('.book-list');
    const categoryList = document.querySelector('.category-list');
    const historyList = document.querySelector('.history-list');
    const searchInput = document.getElementById('search-input');
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const menuIcon = document.querySelector('.menu-icon');
    const navbar = document.querySelector('.navbar');
    const featuredBooksList = document.querySelector('.featured-books-list');
    const booksReadSpan = document.getElementById('books-read');
    const challengeGoalSpan = document.getElementById('challenge-goal');
    const updateChallengeButton = document.getElementById('update-challenge');
    
    let darkMode = false;
    let readingChallenge = JSON.parse(localStorage.getItem('readingChallenge')) || { booksRead: 0, goal: 10 };

    function displayBooks(booksToDisplay) {
        bookList.innerHTML = '';
        booksToDisplay.forEach(book => {
            const bookItem = document.createElement('div');
            bookItem.className = 'book-item';
            bookItem.innerHTML = `
                <img src="${book.image}" alt="${book.title}">
                <h3>${book.title}</h3>
                <p>by ${book.author}</p>
                <button data-title="${book.title}">${book.borrowed ? 'Return' : 'Borrow'}</button>
            `;
            bookList.appendChild(bookItem);
        });
        addBorrowButtonListeners();
    }

    function displayCategories() {
        categoryList.innerHTML = '';
        categories.forEach(category => {
            const categoryItem = document.createElement('div');
            categoryItem.className = 'category-item';
            categoryItem.innerHTML = `<h3>${category}</h3>`;
            categoryItem.addEventListener('click', () => filterByCategory(category));
            categoryList.appendChild(categoryItem);
        });
    }

    function displayHistory() {
        historyList.innerHTML = '';
        books.filter(book => book.borrowed).forEach(book => {
            const historyItem = document.createElement('div');
            historyItem.className = 'history-item';
            historyItem.innerHTML = `
                <h3>${book.title}</h3>
                <p>by ${book.author}</p>
            `;
            historyList.appendChild(historyItem);
        });
    }

    function addBorrowButtonListeners() {
        document.querySelectorAll('.book-item button').forEach(button => {
            button.addEventListener('click', function() {
                const bookTitle = this.getAttribute('data-title');
                const book = books.find(b => b.title === bookTitle);
                if (book) {
                    book.borrowed = !book.borrowed;
                    displayBooks(books);
                    displayHistory();
                    saveToLocalStorage();
                }
            });
        });
    }

    function filterByCategory(category) {
        const filteredBooks = books.filter(book => book.category === category);
        displayBooks(filteredBooks);
    }

    function displayFeaturedBooks() {
        const featuredBooks = books.slice(0, 3);
        featuredBooksList.innerHTML = '';
        featuredBooks.forEach(book => {
            const bookElement = document.createElement('div');
            bookElement.className = 'featured-book';
            bookElement.innerHTML = `
                <img src="${book.image}" alt="${book.title}">
                <h3>${book.title}</h3>
                <p>by ${book.author}</p>
                <div class="star-rating" data-rating="0">☆☆☆☆☆</div>
            `;
            featuredBooksList.appendChild(bookElement);
        });
        addStarRatingListeners();
    }

    function addStarRatingListeners() {
        document.querySelectorAll('.star-rating').forEach(ratingElement => {
            ratingElement.addEventListener('click', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const rating = Math.ceil((x / rect.width) * 5);
                this.setAttribute('data-rating', rating);
                this.innerHTML = '★'.repeat(rating) + '☆'.repeat(5 - rating);
            });
        });
    }

    function updateReadingChallenge() {
        booksReadSpan.textContent = readingChallenge.booksRead;
        challengeGoalSpan.textContent = readingChallenge.goal;
    }

    function saveToLocalStorage() {
        localStorage.setItem('borrowedBooks', JSON.stringify(books.filter(book => book.borrowed)));
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
        localStorage.setItem('readingChallenge', JSON.stringify(readingChallenge));
    }

function loadFromLocalStorage() {
        const borrowedBooks = JSON.parse(localStorage.getItem('borrowedBooks')) || [];
        borrowedBooks.forEach(borrowedBook => {
            const book = books.find(b => b.title === borrowedBook.title);
            if (book) {
                book.borrowed = true;
            }
        });

        darkMode = JSON.parse(localStorage.getItem('darkMode')) || false;
        document.body.classList.toggle('dark-mode', darkMode);
        darkModeToggle.textContent = darkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode';

        readingChallenge = JSON.parse(localStorage.getItem('readingChallenge')) || { booksRead: 0, goal: 10 };
        updateReadingChallenge();
    }

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        const filteredBooks = books.filter(book => 
            book.title.toLowerCase().includes(query) ||
            book.author.toLowerCase().includes(query)
        );
        displayBooks(filteredBooks);
    });

    darkModeToggle.addEventListener('click', () => {
        darkMode = !darkMode;
        document.body.classList.toggle('dark-mode', darkMode);
        darkModeToggle.textContent = darkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode';
        saveToLocalStorage();
    });

    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    updateChallengeButton.addEventListener('click', () => {
        readingChallenge.booksRead++;
        updateReadingChallenge();
        saveToLocalStorage();
    });

 
    loadFromLocalStorage();
    displayBooks(books);
    displayCategories();
    displayHistory();
    displayFeaturedBooks();
    updateReadingChallenge();

    
   
});