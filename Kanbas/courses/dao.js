import courseModel from "./model.js";
export const findAllCourses = () => courseModel.find();
export const findCourseById = (courseId) => courseModel.findById(courseId);
export const createCourse = (course) => {
    //delete course._id
    return courseModel.create(course);
};
export const updateCourse = (courseId, course) =>  courseModel.updateOne({ _id: courseId }, { $set: course });
export const deleteCourse = (courseId) => courseModel.deleteOne({ _id: courseId });