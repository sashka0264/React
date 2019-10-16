export default class GotService {
    constructor() {
        this._apiBase = "https://www.anapioficeandfire.com/api/";
    }

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status ${res.status}`);
        }
        // Если завершится с ошибкой

        const some = await res.json();
        return some;
    }

    getAllCharacters() {
        console.log(this.getResource("/characters?page=5&pageSize=10"))
        return this.getResource("/characters?page=5&pageSize=10");
    }

    getCharacters(id) {
        return this.getResource(`/characters/${id}`);
    }
}