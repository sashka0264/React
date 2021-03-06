export default class GotService {

    constructor() {
        this._apiBase = "https://www.anapioficeandfire.com/api/";
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status ${res.status}`);
        }

        return await res.json();
    }

    getAllCharacters = async () => {
        const res = await this.getResource("/characters?page=5&pageSize=10");;
        return res.map(this._transformCharacter);
    }

    getCharacter = async (id) => {
        const character = await this.getResource(`/characters/${id}`);
        return this._transformCharacter(character);
    }

    getAllHouses = async () => {
        const res = await this.getResource(`/houses/`);
        return res.map(this._transformHouse);
    }

    getHouse = async (id) => {
        const house = await this.getResource(`/houses/${id}/`);
        return this._transformHouse(house);
    }

    getAllBooks = async () => {
        const res = await this.getResource(`/books/`);
        return res.map(this._transformBook); 
    }

    getBook = async (id) => {
        const book = await this.getResource(`/books/${id}`);
        return this._transformBook(book);
    }

    isNoData = (data) => {
        if (data) {
            return data;
        } else {
            return "No data :("
        }
    }

    _transformCharacter = (char) => {
        return {
            name: this.isNoData(char.name),
            gender: this.isNoData(char.gender), 
            born: this.isNoData(char.born),
            died: this.isNoData(char.died),
            culture: this.isNoData(char.culture)
        }
    }


    _transformHouse = (house) => {
        
        return {
            name: this.isNoData(house.name),
            region: this.isNoData(house.region),
            words: this.isNoData(house.words),
            titles: this.isNoData(house.titles.toString()),
            overlord: this.isNoData(house.overlord),
            ancestralWeapons: this.isNoData(house.ancestralWeapons.toString())
        }
    }

    _transformBook = (book) => {
        return {
            name: this.isNoData(book.name),
            numberOfPages: this.isNoData(book.numberOfPages),
            publisher: this.isNoData(book.publisher),
            released: this.isNoData(book.released)
        }
    }
}