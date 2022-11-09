import * as AccountSvc from "../services/AccountSvc.js";

export const getAccounts = async (req, res) => {
  try {
    const {page} = req.params;
    const accounts = await AccountSvc.getAccounts(page);

    // const bcrypt = require("bcrypt");
    // const salt = await bcrypt.genSalt(10);
    // const password = "123";
    // const passHash = await bcrypt.hash(password, salt);

    // console.log(passHash);

    return res.status(200).json(accounts);
  } catch (error) {
    res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};

export const getAccountById = async (req, res) => {
  try {
    const { _id } = req.params;

    const account = await AccountSvc.getAccountById(_id);
    return res.status(200).json(account);
  } catch (error) {
    res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};

export const addAccount = async (req, res) => {
  try {
    const account = req.body;
    const newAccount = await AccountSvc.addAccount(account);

    return res.status(200).json(newAccount);
  } catch (error) {
    res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};

export const updateAccount = async (req, res) => {
  try {
    const { _id } = req.params;
    const account = req.body;

    await AccountSvc.updateAccount(_id, account);

    const accountUpdate = await AccountSvc.getAccountById(_id);

    return res.status(200).json(accountUpdate);
  } catch (error) {
    res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};

export const deleteAccount = async (req, res) => {
  try {
    const { _id } = req.params;

    await AccountSvc.deleteAccount(_id);

    return res.status(200).json({
      Message: "ok",
    });
  } catch (error) {
    return res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};