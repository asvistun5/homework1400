const moment = require('moment');
const fs = require('fs/promises');
const path = require('path');

const prodPath = path.join(__dirname, '../../posts.json');

function getDate() {
    return moment().format('YYYY-MM-DD HH:mm:ss');
}

const postService = {
    async getAll(skip, take) {
        const data = JSON.parse(await fs.readFile(prodPath, 'utf-8'));
        skip = parseInt(skip) || 0;
        take = take ? parseInt(take) : data.length;
        return data.slice(skip, skip + take);
    },

    async getById(id) {
        const data = JSON.parse(await fs.readFile(prodPath, 'utf-8'));
        return data.find(p => String(p.id) === String(id));
    },

    async create({ title, description, image }) {
        const data = JSON.parse(await fs.readFile(prodPath, 'utf-8'));
        const newPost = {
            id: data.length + 1,
            title,
            description,
            image,
            date: getDate()
        };
        data.push(newPost);
        await fs.writeFile(prodPath, JSON.stringify(data, null, 2), 'utf-8');
        return newPost;
    }
}


module.exports = postService