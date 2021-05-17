import express from "express";
import userController from "../controllers/userController.js";

const router = express.Router();
const {
  getUsers,
  getOneUser,
  postUser,
  updateUser,
  deleteUser,
} = userController;

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - address
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the client
 *         name:
 *           type: string
 *           description: The client name
 *         address:
 *           type: string
 *           description: The client address
 *         isActive:
 *           type: boolean
 *           description: The client address
 *         category:
 *           type: number
 *           description: The client address
 *         date:
 *           type: date
 *           description: The client date
 *       example:
 *         id: d5fE_asz
 *         name: Juan Perez
 *         address: Matheu 850
 *         isActive: false
 *         category: 1
 *         date: 3434758437

 */

/**
 * @swagger
 * tags:
 *  name: Users
 *  description: all the routes related to users
 */

/**
 * @swagger
 * /users:
 *  get:
 *    summary: returns all the users
 *    tags: [Users]
 *    responses:
 *      200:
 *        description: all users
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/User'
 *      404:
 *        description: cant get users
 */
router.get("/", getUsers);


/**
 * @swagger
 * /users/{id}:
 *  get:
 *    summary: returns one user
 *    tags: [Users]
 *    parameters: 
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: user id
 *    responses:
 *      200:
 *        description: one user
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      400:
 *        description: no users with that id
 */
router.get("/:id", getOneUser);

/**
 * @swagger
 * /users:
 *  post:
 *    summary: add one user
 *    tags: [Users]
 *    requestBody:
 *      required: true
 *      content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *    responses:
 *      200:
 *        description: add new users
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/User'
 *      500:
 *        description: couldnt post
 */
router.post("/", postUser);

/**
 * @swagger
 * /users/{id}:
 *  patch:
 *    summary: modify one user by id
 *    tags: [Users]
 *    parameters: 
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: user id
 *    requestBody:
 *      required: true
 *      content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *    responses:
 *      200:
 *        description: modify one user
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      400:
 *        description: bad request
 *      404:
 *        description: no users with that id
 *      500:
 *        description: server error
 */
router.patch("/:id", updateUser);

/**
 * @swagger
 * /users/{id}:
 *  delete:
 *    summary: delete the user
 *    tags: [Users]
 *    parameters: 
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: user id
 *    responses:
 *      200:
 *        description: one user
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      400:
 *        description: bad request
 *      404:
 *        description: no users with that id
 * 
 */
router.delete("/:id", deleteUser);


export default router;
