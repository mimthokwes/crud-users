import { getDB } from "../config/db.js";

// Get data from database
export const getAllUsers = async (req, res) => {
  const db = getDB();
  try {
    const [rows] = await db.query("SELECT * FROM users");
    return res.status(200).json({ message: "fetch data success", data: rows });
  } catch {
    return res.status(500).json({ Error: "fetch data failed" });
  }
};

// Get data from database by Id
export const getUserById = async (req, res) => {
  const db = getDB();

  try {
    const [rows] = await db.query("SELECT * FROM users WHERE id = ?", [
      req.params.id,
    ]);
    if (rows.length === 0) {
      return res.status(404).json({ message: "data not found" });
    }
    return res.status(200).json({ message: "fetch data success", data: rows });
  } catch {
    return res.status(500).json({ Error: "fetch data failed" });
  }
};

// Post data from database
export const createUser = async (req, res) => {
  const db = getDB();
  const { name, nim, email, phone } = req.body;

  if (!name || !nim || !email || !phone) {
    return res.status(400).json({ Error: "data must be filled" });
  }
  try {
    const [result] = await db.query(
      "INSERT INTO users (name,nim,email,phone) VALUES (?,?,?,?)",
      [name, nim, email, phone]
    );

    return res
      .status(201)
      .json({
        message: "success",
        data: [{ id: result.insertId, name, nim, email, phone }],
      });
  } catch {
    return res.status(500).json({ Error: "insert data failed" });
  }
};

// Delete data from database
export const deleteUser = async (req, res) => {
  const db = getDB();
  const userId = req.params.id;
  try {
    const [userRows] = await db.query(
      "SELECT * FROM users WHERE id = ?",
      [userId]
    );
    if (userRows.length === 0) {
      return res.status(404).json({ error: "Data not found" });
    }
    const deleteUser = userRows[0];

    const [result] = await db.query(
      "DELETE FROM users WHERE id = ?",
      [userId]
    );
    return res
      .status(200)
      .json({ message: "delete data success", data: deleteUser });
  } catch {
    return res.status(500).json({ Error: "delete data failed" });
  }
};

// Update data from database
