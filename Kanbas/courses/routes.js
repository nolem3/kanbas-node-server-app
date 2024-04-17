import * as dao from "./dao.js";

export default function CourseRoutes(app) {
    app.get("/api/courses/:id", async (req, res) => {
        const { id } = req.params;
        const course = await dao.findCourseById(id);
        if (!course) {
            res.status(404).send("Course not found");
            return;
        }
        res.send(course);
    });
    app.put("/api/courses/:id", async (req, res) => {
        const { id } = req.params;
        const course = req.body;
        const status = await dao.updateCourse(id, course);
        res.json(status);
    });
    app.delete("/api/courses/:id", async (req, res) => {
        const { id } = req.params;
        const status = await dao.deleteCourse(id);
        res.json(status);
    });
    app.get("/api/courses", async (req, res) => {
        const courses = await dao.findAllCourses();
        res.json(courses);
    });
    app.post("/api/courses", async (req, res) => {
        const course = {
            ...req.body,
            _id: new Date().getTime().toString()
        };
        const addedCourse = await dao.createCourse(course);
        res.send(addedCourse);
    });
}