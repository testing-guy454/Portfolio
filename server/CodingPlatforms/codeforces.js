import express from "express";

const codeforcesHandler = async (req, res) => {
  const { id } = req.params;
  res.json({ message: `Codeforces problem with ID: ${id}` });
}

export default codeforcesHandler;