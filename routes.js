import userController from "./controllers/userControllers.js"
import taskController from "./controllers/taskController.js"
const _routes=[
    ['', userController],
    ['task', taskController]
]
const routes = (app)=>{
    _routes.forEach(router=>{
        const [url, controller]= router;
        app.use(`/api/${url}`, controller)
    })
}
export default routes