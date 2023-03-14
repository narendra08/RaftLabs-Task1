const {isArray,isEmpty}= require('lodash');
const {header , body , param , query,validationResult} = require('express-validator');
const Handler = require('../serviceHanler');

const rejectIfInvalid =(req,res,next)=>{
    const err =validationResult(req).array();

    if(err && isArray(err) && !isEmpty(err)){
        console.log('Validation Error');
        const handler = new Handler();
        const e = ['validation error'];
        err.forEach((error)=>{
            e.push(error);
        })
        return handler.serviceHandler(req,res, Promise.reject(e));
    }
  return next();
}

const saveProductValidation = async (req,res,next)=>{
    await Promise.all(saveProductSchema.map((x)=>x.run(req)));
    rejectIfInvalid(req,res,next)
}

const saveProductSchema = [
    header('authorization')
    .optional()
    .not()
    .isEmpty()
    .withMessage('empty authorization'),
    body('id')
    .not()
    .isEmpty()
    .withMessage('value should not be empty')
    .isNumeric({min:1,max:15})
    .withMessage('invalid id , id length should be less than 15'),
    body('title')
    .not()
    .isEmpty()
    .withMessage('value should not be empty')
    .isString()
    .withMessage('title should be string'),
    body('description')
    .not()
    .isEmpty()
    .withMessage('value should not be empty')
    .isString()
    .withMessage('description should be string'),
    body('price')
    .not()
    .isEmpty()
    .withMessage('value should not be empty')
    .isNumeric({min:1,max:15})
    .withMessage('price should be integer'),
    body('discountPercentage')
    .not()
    .isEmpty()
    .withMessage('value should not be empty')
    .isNumeric({min:1,max:15})
    .withMessage('discountPercentage should be integer'),
    body('rating')
    .not()
    .isEmpty()
    .withMessage('value should not be empty')
    .isNumeric({min:1,max:15})
    .withMessage('rating should be integer'),
    body('stock')
    .not()
    .isEmpty()
    .withMessage('value should not be empty')
    .isNumeric({min:1,max:15})
    .withMessage('stock should be integer'),
    body('brand')
    .not()
    .isEmpty()
    .withMessage('value should not be empty')
    .isString()
    .withMessage('brand should be string'),
    body('category')
    .not()
    .isEmpty()
    .withMessage('value should not be empty')
    .isString()
    .withMessage('category should be string'),

]

module.exports ={saveProductValidation}