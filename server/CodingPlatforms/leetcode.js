import express from "express";

const leetcodeHandler = async (req, res) => {
  const { id } = req.params;
  res.json({ message: `LeetCode problem with ID: ${id}` });
}

export default leetcodeHandler;