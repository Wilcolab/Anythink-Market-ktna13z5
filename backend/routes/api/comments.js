/**
 * Express router for handling comment operations
 * @module routes/api/comments
 * @requires express
 * @requires mongoose
 */

/**
 * GET /api/comments/:postId
 * Retrieve all comments for a specific post
 * @async
 * @param {Object} req - Express request object
 * @param {string} req.params.postId - The ID of the post
 * @param {Object} res - Express response object
 * @returns {Promise<void>} JSON array of comments or error message
 * @throws {Error} Responds with 500 status if retrieval fails
 */

/**
 * POST /api/comments/:postId
 * Create a new comment for a specific post
 * @async
 * @param {Object} req - Express request object
 * @param {string} req.params.postId - The ID of the post
 * @param {Object} req.body - Request body
 * @param {string} req.body.content - The comment content
 * @param {Object} res - Express response object
 * @returns {Promise<void>} JSON object of created comment or error message
 * @throws {Error} Responds with 500 status if creation fails
 */

/**
 * DELETE /api/comments/:commentId
 * Delete a specific comment by its ID
 * @async
 * @param {Object} req - Express request object
 * @param {string} req.params.commentId - The ID of the comment to delete
 * @param {Object} res - Express response object
 * @returns {Promise<void>} Success message or error message
 * @throws {Error} Responds with 500 status if deletion fails
 */

/**
 * GET /api/comments
 * Health check endpoint for Comments API
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {void}
 */

/**
 * DELETE /api/comments
 * Generic delete endpoint for Comments API
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {void}
 */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;
// Hey GitHub Copilot, please implement the following routes for comments:
// 1. GET /api/comments/:postId - Retrieve all comments for a specific post
// 2. POST /api/comments/:postId - Create a new comment for a specific post
// 3. DELETE /api/comments/:commentId - Delete a specific comment by its ID

// 1. GET /api/comments/:postId
router.get("/:postId", async (req, res) => {
  try {
    const comments = await Comment.find({ postId: req.params.postId });
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve comments." });
  }
});

// 2. POST /api/comments/:postId
router.post("/:postId", async (req, res) => {
  try {
    const newComment = new Comment({
      postId: req.params.postId,
      content: req.body.content,
    });
    await newComment.save();
    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ error: "Failed to create comment." });
  }
});

// 3. DELETE /api/comments/:commentId
router.delete("/:commentId", async (req, res) => {
  try {
    await Comment.findByIdAndDelete(req.params.commentId);
    res.status(200).json({ message: "Comment deleted successfully." });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete comment." });
  }
});

router.get("/", (req, res) => {
  res.send("Comments API is working!");
});

router.delete("/", (req, res) => {
  res.send("Delete request to Comments API received!");
});