import SupplierService from "../services/supplier.service.js";

async function getSupplierFG(req, res, next) {
    try {
        res.send(await SupplierService.getSupplierFG());
    } catch (error) {
        next(error);
    }
}

async function getCarga(req, res, next) {
    try {

    } catch (error) {
        next(error);
    }
}

async function getSupplier(req, res, next) {
    try {

    } catch (error) {
        next(error);
    }
}

async function getSupplierById(req, res, next) {
    try {

    } catch (error) {
        next(error);
    }
}

export default {
    getSupplierFG,
    getCarga,
    getSupplier,
    getSupplierById
};
