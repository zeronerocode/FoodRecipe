const pool = require("../config/db");

const addRecipe = ({title, ingredients, user_id, recipe_photo, recipe_video, createdAt}) => {
    return new Promise ((resolve,reject)=>{
        pool.query("INSERT INTO recipe(title,ingredients,user_id,recipe_photo,recipe_video, created_at)VALUES($1,$2,$3,$4,$5,$6)",
        [title, ingredients, user_id, recipe_photo, recipe_video, createdAt],
        (error, result) => {
            if (!error) {
                resolve(result);
            } else {
                reject(error);
            }
        });
    });
};

const countRecipe = () => {
    return pool.query("SELECT COUNT(*) AS total FROM recipe");
};

const getRecipe = ({limit, offset, sortBy, sortOrder, search}) => {
    return new Promise ((resolve,reject)=>{
        pool.query(`SELECT * FROM recipe WHERE title ILIKE '%${search}%' ORDER BY ${sortBy} ${sortOrder} LIMIT ${limit} OFFSET ${offset}`,
        (error, result) => {
            if (!error) {
                resolve(result);
            } else {
                reject(error);
            }
        });
    });
};

const getDetailRecipe = (id) => {
    return new Promise ((resolve,reject)=>{
        pool.query(`SELECT * FROM recipe WHERE id = ${id} `,
        (error, result) => {
            if (!error) {
                resolve(result);
            } else {
                reject(error);
            }
        });
    });
};

const updateRecipe = ({title, ingredients, recipe_photo, recipe_video, updatedAt},id) =>{
    return new Promise ((resolve, reject)=>{
        pool.query("UPDATE recipe SET title=$1, ingredients=$2, recipe_photo=$3, recipe_video=$4, updated_at=$5 WHERE id = $6",
        [title, ingredients, recipe_photo, recipe_video, updatedAt, id],
        (error, result) => {
            if (!error) {
                resolve(result);
            } else {
                reject(error);
            }
        });
    });
};

const delRecipe = (id) => {
    return pool.query("DELETE FROM recipe WHERE id = $1", [id]);
};

module.exports = {
    addRecipe,
    countRecipe,
    getRecipe,
    updateRecipe,
    getDetailRecipe,
    delRecipe
};