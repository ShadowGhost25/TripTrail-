import routeModel from '../models/route.js'

export const getAllRoute = async (req, res) => {
    try {
const userId = req.params.id  
        console.log(userId) 
    const routes = await routeModel.find({ user: userId }).populate('user').exec()
    res.json(routes)
    } catch (err) {
        console.log('Err маршрут => ', err)
        res.status(500).json({ message: 'Неудалось отобразить маршрут' })
    }
}

export const removeRoute = async (req, res) => {
    try {
        const routId = req.params.id
        const doc = await routeModel.findByIdAndDelete(routId)

        if (!doc) {
            return res.status(404).json({
                message: 'Маршрут не найден'
            })
        }

        res.json({ success: true })
    } catch (err) {
        console.log('Catch error => ', err)
        return res.status(500).json({
            message: 'Не удалось удалить маршрут'
        })
    }
}

export const updateRoute = async (req, res) => {
    try {
        const routeId = req.params.id

        // Найти и обновить маршрут по ID
        const updatedRoute = await routeModel.findByIdAndUpdate(
            routeId,
            {
                title: req.body.title,
                places: req.body.places,
                notes: req.body.notes,
                budget: req.body.budget,
            },
        )

        if (!updatedRoute) {
            return res.status(404).json({
                message: 'Маршрут не найден',
            })
        }

        res.json({success:true})
    } catch (err) {
        console.log('Err при обновлении маршрута => ', err)
        res.status(500).json({
            message: 'Не удалось обновить маршрут',
        })
    }
}

export const createRoute = async (req, res) => {
  try {
    const { title, places, notes, budget, user } = req.body
    const doc = new routeModel({
      title,
      places,
      notes,
      budget,
      user: req.userId,
    })

    const route = await doc.save()
    res.json(route)
  } catch (err) {
    console.log('Err маршрут => ', err)
    res.status(500).json({ message: 'Не удалось создать маршрут' })
  }
}
