import { validationResult } from "express-validator";

export default (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const errorArray = errors.array();
    
    // Если ошибки представлены в виде массива, возвращаем только первую
    if (Array.isArray(errorArray) && errorArray.length > 0) {
      return res.status(400).json({ error: errorArray[0] });
    }

    // Если уже объект (на случай, если результат приходит в виде объекта)
    return res.status(400).json({ error: errors.mapped() });
  }

  // Продолжаем выполнение, если ошибок нет
  next();
};
