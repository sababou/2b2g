import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    metadata: {
      logged : null,
      book : 3,
      user: 1,
      conversation: 1,
      borrow: 1,
      rate: 1
    },
    categories: [
      {
        id: 1,
        name: "Nouveautés",
        books : [
          {
            id: 1,
            title: "Atomic Habits",
            author: "Author Doe",
            owner: "1",
            cover: "C:\\wamp64\\www_vue\\books4u\\src\\assets\\images\\book_covers\\1.jpg",
            abstract: "C:\\wamp64\\www_vue\\books4u\\src\\assets\\images\\book_abstracts\\1.jpg",
            category: 1
          },
          {
            id: 2,
            title: "Elemental Days",
            author: "John Lennon",
            owner: "1",
            cover: "C:\\wamp64\\www_vue\\books4u\\src\\assets\\images\\book_covers\\2.jpg",
            abstract: "C:\\wamp64\\www_vue\\books4u\\src\\assets\\images\\book_abstracts\\1.jpg",
            category: 1
          },
          {
            id: 4,
            title: "Renewal",
            author: "Moro L. Duke",
            owner: "1",
            cover: "C:\\wamp64\\www_vue\\books4u\\src\\assets\\images\\book_covers\\3.jpg",
            abstract: "C:\\wamp64\\www_vue\\books4u\\src\\assets\\images\\book_abstracts\\1.jpg",
            category: 1
          },
          {
            id: 5,
            title: "Harry Potter",
            author: "Martin Rowling",
            owner: "1",
            cover: "C:\\wamp64\\www_vue\\books4u\\src\\assets\\images\\book_covers\\4.jpg",
            abstract: "C:\\wamp64\\www_vue\\books4u\\src\\assets\\images\\book_abstracts\\1.jpg",
            category: 1
          }
        ]
      },
      {
        id: 2,
        name: "Roman",
        books: [
          {
            id: 1,
            title: "Atomic Habits",
            author: "Author Doe",
            owner: "1",
            cover: "C:\\wamp64\\www_vue\\books4u\\src\\assets\\images\\book_covers\\1.jpg",
            abstract: "C:\\wamp64\\www_vue\\books4u\\src\\assets\\images\\book_abstracts\\1.jpg",
            category: 1
          },
          {
            id: 2,
            title: "Elemental Days",
            author: "John Lennon",
            owner: "1",
            cover: "C:\\wamp64\\www_vue\\books4u\\src\\assets\\images\\book_covers\\2.jpg",
            abstract: "C:\\wamp64\\www_vue\\books4u\\src\\assets\\images\\book_abstracts\\1.jpg",
            category: 1
          },
          {
            id: 4,
            title: "Renewal",
            author: "Moro L. Duke",
            owner: "1",
            cover: "C:\\wamp64\\www_vue\\books4u\\src\\assets\\images\\book_covers\\3.jpg",
            abstract: "C:\\wamp64\\www_vue\\books4u\\src\\assets\\images\\book_abstracts\\1.jpg",
            category: 1
          },
          {
            id: 5,
            title: "Harry Potter",
            author: "Martin Rowling",
            owner: "1",
            cover: "C:\\wamp64\\www_vue\\books4u\\src\\assets\\images\\book_covers\\4.jpg",
            abstract: "C:\\wamp64\\www_vue\\books4u\\src\\assets\\images\\book_abstracts\\1.jpg",
            category: 1
          }
        ]
      },
      {
        id: 3,
        name: "Cuisine",
        books: [
          {
            id: 1,
            title: "Atomic Habits",
            author: "Author Doe",
            owner: "1",
            cover: "C:\\wamp64\\www_vue\\books4u\\src\\assets\\images\\book_covers\\1.jpg",
            abstract: "C:\\wamp64\\www_vue\\books4u\\src\\assets\\images\\book_abstracts\\1.jpg",
            category: 1
          },
          {
            id: 2,
            title: "Elemental Days",
            author: "John Lennon",
            owner: "1",
            cover: "C:\\wamp64\\www_vue\\books4u\\src\\assets\\images\\book_covers\\2.jpg",
            abstract: "C:\\wamp64\\www_vue\\books4u\\src\\assets\\images\\book_abstracts\\1.jpg",
            category: 1
          },
          {
            id: 4,
            title: "Renewal",
            author: "Moro L. Duke",
            owner: "1",
            cover: "C:\\wamp64\\www_vue\\books4u\\src\\assets\\images\\book_covers\\3.jpg",
            abstract: "C:\\wamp64\\www_vue\\books4u\\src\\assets\\images\\book_abstracts\\1.jpg",
            category: 1
          },
          {
            id: 5,
            title: "Harry Potter",
            author: "Martin Rowling",
            owner: "1",
            cover: "C:\\wamp64\\www_vue\\books4u\\src\\assets\\images\\book_covers\\4.jpg",
            abstract: "C:\\wamp64\\www_vue\\books4u\\src\\assets\\images\\book_abstracts\\1.jpg",
            category: 1
          }
        ]
      }
    ],
    users: [
      {
        id: 1,
        name: "John Doe",
        email: "johndoe@2b2g.com",
        principally: "Emprunt",
        password: "12345678",
        address: "Paris 75000"
      },
      {
        id: 2,
        name: "Jane Monroe",
        email: "janee@test.com",
        principally: "Emprunt",
        password: "abcd1234",
        address: "Lyon 69000"
      }
    ],
    books: [
      {
        id: 1,
        title: "Atomic Habits",
        author: "Author Doe",
        owner: 1,
        cover: "C:\\wamp64\\www_vue\\books4u\\src\\assets\\images\\book_covers\\1.jpg",
        abstract: "C:\\wamp64\\www_vue\\books4u\\src\\assets\\images\\book_abstracts\\1.jpg",
        category: 1
      },
      {
        id: 2,
        title: "Elemental Days",
        author: "John Lennon",
        owner: 1,
        cover: "C:\\wamp64\\www_vue\\books4u\\src\\assets\\images\\book_covers\\2.jpg",
        abstract: "C:\\wamp64\\www_vue\\books4u\\src\\assets\\images\\book_abstracts\\1.jpg",
        category: 1
      },
      {
        id: 3,
        title: "Beautiful Seasons",
        author: "Connor McGregor",
        owner: 2,
        cover: "C:\\wamp64\\www_vue\\books4u\\src\\assets\\images\\book_covers\\3.jpg",
        abstract: "C:\\wamp64\\www_vue\\books4u\\src\\assets\\images\\book_abstracts\\1.jpg",
        category: 2
      },
    ],
    conversations: [
      {
        id: 1,
        usr1: 1,
        usr2: 2
      }
    ],
    messages: [
      {
        id: 1,
        conversation: 1,
        sender: 1,
        reciever: 2,
        message: "Hello",
        borrow: null,
        date: "14/01/2021 10:15"
      },
      {
        id: 1,
        conversation: 1,
        sender: 1,
        reciever: 2,
        message: "ça va?",
        borrow: null,
        date: "14/01/2021 10:16"
      },
      {
        id: 1,
        conversation: 1,
        sender: 1,
        reciever: 2,
        message: "Super et toi ?",
        borrow: null,
        date: "14/01/2021 10:18"
      },
    ],
    borrows: [
      {
        id: 1,
        borrower: 1,
        book: 1,
        date_borrow: "20/01/2021 10:00",
        date_giveback: "20/02/2021 10:00",
        state: "pending"
      }
    ],
    ratesUser: [
      {
        id: 1,
        rater: 1,
        rated: 2,
        rate: 5
      }
    ],
  },
  mutations: {
    ADD_BOOK(state, data){
      state.books.push(data)
    },
    ADD_USER(state, data){
      state.users.push(data)
    },
    ADD_CONVERSATION(state, data){
      state.conversations.push(data)
    },
    ADD_MESSAGE(state, data){
      state.messages.push(data)
    },
    ADD_BORROW(state, data){
      state.borrows.push(data)
    },
    ADD_RATEUSER(state, data){
      state.ratesUser.push(data)
    },
    UPDATE_LOGGEDUSER(state){
      state.metadata.logged = 1;
    },
    UPDATE_LOGOUTUSER(state){
      state.metadata.logged = null;
    },
  },
  actions: {
    addBook(context, _id, _title, _author, _owner, _cover, _abstract, _category){
      let data = {
        id: _id,
        title: _title,
        author: _author,
        owner: _owner,
        cover: _cover,
        abstract: _abstract,
        category: _category
      }
      context.commit('ADD_BOOK', data)
    },
    addUser(context, _id, _name, _email, _principally, _password){
      let data = {
        id: _id,
        name: _name,
        email: _email,
        principally: _principally,
        password: _password
      }
      context.commit('ADD_USER', data)
    },
    addConversation(context, _id, _usr1, _usr2){
      let data = {
        id: _id,
        usr1: _usr1,
        usr2: _usr2
      }
      context.commit('ADD_CONVERSATION', data)
    },
    addMessage(context, _id,_conversation, _sender, _reciever, _message, _borrow, _date){
      let data = {
        id: _id,
        conversation: _conversation,
        sender: _sender,
        reciever: _reciever,
        message: _message,
        borrow: _borrow,
        date: _date
      }
      context.commit('ADD_MESSAGE', data)
    },
    addBorrow(context, _id, _borrower, _book, _date_borrow, _date_giveback, _state){
      let data = {
        id: _id,
        borrower: _borrower,
        book: _book,
        date_borrow: _date_borrow,
        date_giveback: _date_giveback,
        state: _state
      }
      context.commit('ADD_BORROW', data)
    },
    addRateUser(context, _id, _rater, _rated, _rate){
      let data = {
        id: _id,
        rater: _rater,
        rated: _rated,
        rate: _rate
      }
      context.commit('ADD_RATEUSER', data)
    },
    logUser(context){

      context.commit('UPDATE_LOGGEDUSER')
    },
    logoutUser(context){

      context.commit('UPDATE_LOGOUTUSER')
    },



  },
  modules: {
  }
})
