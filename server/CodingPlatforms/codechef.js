import express from "express";

const codechefHandler = async (req, res) => {
  const { id } = req.params;
  res.json({ message: `CodeChef problem with ID: ${id}` });
}

export default codechefHandler;