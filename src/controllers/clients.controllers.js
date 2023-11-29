import { database } from "./../database/database.js";

const getClients = async (req, res) => {
  try {
    const connection = await database.getConnection();
    const result = await connection.query("SELECT * FROM ciudadanos");
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
const getClient = async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await database.getConnection();
    const result = await connection.query(
      "SELECT * FROM ciudadanos WHERE id = ?",
      id
    );
    if (result.length === 0) {
      res.status(404);
      res.send("Id no registrada");
      return;
    }
    res.json(result);
  } catch {
    res.status(500);
    res.send(error.message);
  }
};

const addClient = async (req, res) => {
  try {
    const { nombre, apellido, dni, direccion, deuda } = req.body;
    if (!nombre || !apellido || !dni || !direccion || !deuda) {
      res.status(400);
      res.send("Faltan datos");
      return;
    }

    const client = { nombre, apellido, dni, direccion, deuda };
    const connection = await database.getConnection();
    await connection.query("INSERT INTO ciudadanos SET ?", client);
    res.json({ message: "Client add" });
    return;
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
const updateClient = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, apellido, dni, direccion, deuda } = req.body;
    if (!nombre || !apellido || !dni || !direccion || !deuda) {
      res.status(400);
      res.send("Faltan datos");
      return;
    }
    const client = { nombre, apellido, dni, direccion, deuda };
    const connection = await database.getConnection();
    await connection.query("UPDATE ciudadanos SET ? WHERE id = ?", [
      client,
      id,
    ]);
    if (result.length === 0) {
      res.status(404);
      res.send("Id no registrada");
      return;
    }
    res.json({ message: "Client update" });
    return;
  } catch {
    res.status(500);
    res.send(error.message);
  }
};
const deleteClient = async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await database.getConnection();
    const result = await connection.query(
      "DELETE FROM ciudadanos WHERE id = ?",
      id
    );
    if (result.affectedRows === 0) {
      res.status(404);
      res.send("Id no registrada");
      return;
    }
    res.json({ message: "Client deleted" });
  } catch {
    res.status(500);
    res.send(error.message);
  }
};

export const clientsController = {
  getClients,
  getClient,
  addClient,
  updateClient,
  deleteClient,
};
