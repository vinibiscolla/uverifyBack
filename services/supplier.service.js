import SupplierRepository from "../repositories/supplier.repository.js";
import axios from "axios";
import { promises as fs } from "fs";

const { readFile, writeFile } = fs;

async function getSupplierFG(req, res, next) {
    try {
        const jsonToken = JSON.parse(await readFile("./token.json"));
        var supplierData;

        let config = {
            method: 'GET',
            url: urlFG + urlSupplierSuffix,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; Charset=UTF-8',
                'Authorization': 'Bearer ' + jsonToken.access_token
            }
        };

        await axios(config)
            .then(function (response) {
                supplierData = response.data.data;

                if (!supplierData) {
                    throw new Error("Empty");
                }

                console.log(response.data);

            })
            .catch(function (error) {
                console.log(error);
            })

        return supplierData
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
