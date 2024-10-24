import jwt from 'jsonwebtoken'
import userModel from '../models/user.js'
import bcrypt from 'bcrypt'
import { validationResult } from 'express-validator'

export const register = async (req, res) => {
    try {
        const { password, repeatPassword, firstName, lastName, email } = req.body;

        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: { msg: 'Пользователь с такой почтой уже существует' } });
        }

        if (password !== repeatPassword) {
            return res.status(400).json({ error: { msg: 'Пароли не совпадают' } });
        }

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const doc = new userModel({
            firstName,
            lastName,
            email,
            password: hash,
        });

        const user = await doc.save();

        const token = jwt.sign({ _id: user._id }, 'secret123', { expiresIn: '30d' });

        const { password: userPassword, ...userData } = user._doc;

        res.json({ ...userData, token });
    } catch (err) {
        console.log('Ошибка при регистрации => ', err);
        res.status(500).json({ message: 'Не удалось зарегистрироваться' });
    }
};
//!
export const login = async (req, res) => {
    try {
        const user = await userModel.findOne({ email: req.body.email })
        if (!user) {
            return res.status(404).json({
                message: 'Неверный пароль или логин'
            })
        }
        const isValidPass = await bcrypt.compare(req.body.password, user._doc.password)
        if (!isValidPass) {
            return res.status(400).json({
                message: 'Неверный пароль или логин'
            })
        }
        const token = jwt.sign({
            _id: user._id
        }, 'secret123', { expiresIn: '30d' })
        const { passwordHash, ...userData } = user._doc
        res.json(
            { ...userData, token }
        )
    } catch (err) {
        console.log('Err авторизация => ', err)
        res.status(500).json({ message: 'Неудалось авторизоваться' })
    }
}
//!
export const me = async (req, res) => {
    try {
        const user = await userModel.findById(req.userId)
        if (!user) {
            return res.status(404).json({
                message: 'Пользователь не найден'
            })
        }
        const { passwordHash, ...userData } = user._doc
        res.json(
            { userData }
        )
    } catch (err) {
        console.log('Err аутентификация => ', err)
        res.status(500).json({ message: 'Нет доступа' })
    }
}
//!
export const updateUser = async (req, res) => {
    try {
        const userId = req.params.id

        const updateUser = await userModel.findByIdAndUpdate(
            userId,
            {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
            },
        )

        if (!updateUser) {
            return res.status(404).json({
                message: 'Пользователь не найден',
            })
        }

        res.json(updateUser)
    } catch (err) {
        console.log('Err при обновлении пользователя => ', err)
        res.status(500).json({
            message: 'Не удалось обновить пользователя',
        })
    }
}