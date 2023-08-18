const Author = require("../models/author")

const asyncHandler = require("express-async-handler")

// display list of all authors
exports.author_list = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Author list")
})

// display detail page for a specific author
exports.author_detail = asyncHandler(async (req, res, next)=> {
    res.send(`NOT IMPLEMENTED: Author detail ${req.params.id}`)
})

// display Author create form on GET
exports.author_create_get = asyncHandler(async (req, res, next)=> {
    res.send("NOT IMPLEMENTED: Author create GET")
})

// handle Author create on POST
exports.author_create_post = asyncHandler(async (req,res,next)=>{
    res.send("NOT IMPLEMENTED: Author create POST")
})

// display Author delete form on GET
exports.author_delete_get = asyncHandler(async (req, res, next)=>{
    res.send("NOT IMPLEMENTED: Author delete GET")
})

// handle Author delete on POST
exports.author_delete_post = asyncHandler(async (req, res, next)=>{
    res.send("NOT IMPLEMENTED: Author delete POST")
})

// display author update form on GET
exports.author_update_get = asyncHandler(async(req,res,next)=>{
    res.send("NOT IMPLEMENTED: Author update GET")
})

// handle author update on POST
exports.author_update_post = asyncHandler(async(req, res, next)=>{
    res.send("NOT IMPLEMENTED: Author update POST")
})