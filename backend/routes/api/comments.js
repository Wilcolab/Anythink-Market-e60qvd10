/**
 * Comments API Router
 * 
 * This router provides endpoints for managing comments in the application.
 * 
 * Endpoints:
 *   GET /api/comments/
 *     - Retrieves all comments, sorted by creation date (newest first).
 *     - Response: 200 OK with array of comment objects, or 500 on error.
 * 
 *   DELETE /api/comments/:id
 *     - Deletes a comment by its ID.
 *     - Response: 200 OK with success message if deleted, 404 if not found, or 500 on error.
 * 
 * Dependencies:
 *   - Express Router
 *   - Mongoose (Comment model)
 */

const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;
//Hey Github Copilot, can you help me with the code for the comments API route?
router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find().sort({ createdAt: -1 });
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: "Error fetching comments" });
  }
});
// add another endpoint for deleting a comment
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const comment = await Comment.findByIdAndDelete(id);
    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }
    res.status(200).json({ message: "Comment deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting comment" });
  }
});