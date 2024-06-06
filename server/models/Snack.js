const db = require('../db/connect');

class Snack {
    constructor({snack_id, snack_name, snack_description, healthy, vegetarian, votes, image_url}) {
        this.snack_id = snack_id;
        this.snack_name = snack_name;
        this.snack_description = snack_description;
        this.healthy = healthy;
        this.vegetarian = vegetarian;
        this.votes = votes;
        this.image_url = image_url;
    }

    static async getAll() {
        const [response] = await db.query("SELECT * FROM snack;");
        console.log(response)
        if(response.length == 0) {
            throw new Error("No snacks available")
        }
        return response.map(s => new Snack(s));
    }

    static async getSnackById(id) {
        const [response] = await db.query(`SELECT * FROM snack WHERE snack_id=?;`,[id]);
        if(response.length !== 1) {
            throw new Error('Unable to get snack');
        }
        return new Snack(response[0]);
    }

    static async create(data) {
        const { snack_name, snack_description, healthy, vegetarian, votes, image_url } = data;
        const [existingSnack] = await db.query(`SELECT snack_name FROM snack WHERE LOWER (snack_name)=?`, [snack_name]);
        if(existingSnack.length === 0) {
            let [response] = await db.query(`INSERT into snack (snack_name, snack_description, healthy, vegetarian, votes, image_url) VALUES (?, ?, ?, ?, ?, ?);`, [snack_name, snack_description, healthy, vegetarian, votes, image_url]);
            const id =response.insertId
            const result = await Snack.getSnackById(parseInt(id));
            return result;

        } else {
            throw new Error('Snack with the name already exist');
        }
    }
}

module.exports=Snack