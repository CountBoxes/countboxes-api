import { create , get } from "../controllers/User";

const userRoutes = app => {
    app.post("/user", create);
    app.get("/user", get);

    
}

export default userRoutes;