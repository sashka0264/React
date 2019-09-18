let state = {
    profilePage: {
        posts: [ 
            {id: 1, message: "Всем привет!", likes: "12"}, 
            {id: 2, message: "Как у вас всех дела? =)", likes: "2"}
        ]
    },
    messagesPage: {
        dialogs: [ 
            {id: 1, name: "Уля Мирзоева"}, 
            {id: 2, name: "Анна Потапова"}, 
            {id: 3, name: "Влад Балабкин"}, 
            {id: 4, name: "Тимур Костенко"}, 
            {id: 5, name: "Андрей Арчаков"}
        ],
        messages: [ 
            {id: 1, content: "Привет, Саня!"}, 
            {id: 2, content: "Как дела-то?"}, 
            {id: 3, content: "=)"}, 
        ]
        // Данные с сервера в виде массива обьектов
    }
};
export {state};