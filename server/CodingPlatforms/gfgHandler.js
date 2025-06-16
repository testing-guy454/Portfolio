import express from "express";

const gfgHandler = async (req, res) => {
  const { id } = req.params;
  res.json({ message: `GeeksforGeeks problem with ID: ${id}` });
}

export default gfgHandler;