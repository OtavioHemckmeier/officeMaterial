const {validationResult} = require('express-validator');

const Post = require('../models/post');

exports.fetchAll = async (req, res, next) => {
    const {status, solicitante, descricao} = req.body
    try {
        const [allPosts] = await Post.fetchAll(status, solicitante, descricao);
        res.status(200).json(allPosts);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.findByUserId = async (req, res, next) => {
    try {
        const [allPosts] = await Post.findByUserId(req.query.userId);
        res.json(allPosts);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.findById = async (req, res, next) => {
    try {
        const [allPosts] = await Post.findById();
        res.status(200).json(allPosts);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.changeStatus = async (req, res, next) => {

    const {id, status, observacao} = req.body

    try {
        const [allPosts] = await Post.changeStatus(id, status, observacao);
        res.status(200).json(allPosts);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.postPost = async (req, res, next) => {

    try {
        const post = req.body;
        const result = await Post.save(post);
        res.status(201).json({message: 'Posted!'});
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.deletePost = async (req, res, next) => {
    try {
        const deleteResponse = await Post.delete(req.params.id);
        res.status(200).json(deleteResponse);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};
