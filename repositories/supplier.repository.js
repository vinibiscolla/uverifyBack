import { promises as fs } from "fs";
const { readFile, writeFile } = fs;

async function saveToken(tokenObj) {
    await writeFile("./token.json", JSON.stringify(tokenObj, null, 2));
}

export default {
    saveToken
};
