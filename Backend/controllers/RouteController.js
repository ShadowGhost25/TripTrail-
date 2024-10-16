import routeModel  from '../models/route.js'
export const createRoute = async (req, res)=> {
    try {

       const doc = new routeModel({
        title: req.body.title,
        places: req.body.places,
        notes: req.body.notes,
        budget: req.body.budget,
        user: req.userId
       })
       const route = await doc.save()
       res.json(doc)
    } catch (err) {
        console.log('Err маршрут => ', err)
        res.status(500).json({ message: 'Неудалось удалось создать маршрут' })
    }
}