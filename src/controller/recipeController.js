const {addRecipe, getRecipe, countRecipe, updateRecipe} = require("../models/recipeModel");
const createError = require("http-errors");
const errorServ = new createError.InternalServerError();
const { response } = require("../helper/response");

const add = async (req, res, next) => {
    try {
        const {title, ingredients} = req.body;
        const user_id = "1";
        const data = {
            title,
            ingredients,
            user_id,
            recipe_photo : req.files.recipePhoto[0].path ,
            recipe_video : req.files.recipeVideo[0].path,
            createdAt : new Date()
        };
        await addRecipe(data);
        response(res,data,200,"Insert Recipe Succesfully");
    }catch(error){
        console.log(error);
        next(errorServ);
    }
};

const update = async (req, res, next) =>{
    try {
        const {title, ingredients} = req.body;
        const user_id = "1";
        const id = req.params.id ;
        const data = {
            title,
            ingredients,
            user_id,
            recipe_photo : req.files.recipePhoto[0].path ,
            recipe_video : req.files.recipeVideo[0].path,
            updatedAt : new Date()
        };
        await updateRecipe(data,id);
        response(res, data, 201, "Update Recipe Successfully");
    }catch(error){
        console.log(error);
        next(errorServ);
    }
};

const getAllRecipe = async (req, res, next) =>{
    try {
        const page = parseInt(req.query.page) || 1;
        let limit = parseInt(req.query.limit) || 4;
        const offset = (page - 1) * limit;
        const sortBy = req.query.sortby || "id";
        const sortOrder = req.query.sortorder || "asc";
        const search = req.query.search || "";
        const result = await getRecipe({ limit, offset, sortBy, sortOrder, search });

        const { rows: [count] } = await countRecipe();
        const totalData = search === "" ? parseInt(count.total) : (result.rows).length;

        if (totalData < limit) {
            limit = totalData;
        }

        if ((result.rows).length === 0) {
            response(res,null, 404, "Data not found");
        }

        const totalPage = Math.ceil(totalData / limit);
        const pagination = {
            currentPage: page,
            dataPerPage: limit,
            totalData,
            totalPage
        };
        response(res, result.rows, 200, "Get data success", pagination);

    }catch(error){
        console.log(error);
        next(errorServ);
    }
};

module.exports = {
    add,
    update,
    getAllRecipe
};