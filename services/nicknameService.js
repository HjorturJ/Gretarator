const db = require("../db/mongoConnection");
const globalTryCatch = require("../handlers/globalTryCatch");

const nickService = () => {
    const getAllNicks = async () => {
        return await globalTryCatch(async () => {
            const result = await db.Nickname.find({});
            if(result == null || result.length == 0) {
                return {
                    status: 404,
                    body: "No nicknames were found"
                }
            }

            return {
                status: 200,
                body: result
            };
        });
    };

    const getNickByName = async (nick) => {
        return await globalTryCatch(async () => {
            const result = await db.Nickname.find({ nickname: nick });
            if(result == null || result.length == 0) {
                return {
                    status: 404,
                    body: "Nickname was not found!"
                }
            }

            return {
                status: 200,
                body: result
            };
        });
    };

    const createNick = async (nick) => {
        return await globalTryCatch(async () => {
            const nickname = await db.Nickname.find({ nickname: nick.nickname });
            if(nickname.length != 0) {
                return {
                    status: 400,
                    body: "This nickname already exists!"
                }
            }

            const result = await db.Nickname.create(nick);
            return {
                status: 201,
                body: result
            };
        })
    };

    const deleteNickByName = async (nick) => {
        return await globalTryCatch(async () => {
            const result = await db.Nickname.find({ nickname: nick });
            if(result == null || result.length == 0) {
                return {
                    status: 204,
                    body: "No such nickname found!"
                }
            }
            
            const deleted = await db.Nickname.findOneAndDelete({ nickname: nick });
            
            return {
                status: 204,
                body: "Deleted!"
            };
        });
    };

    const getRandomNick = async () => {
        return await globalTryCatch(async () => {
            const allNicks = await db.Nickname.find({});
            if(allNicks == null || allNicks.length == 0) {
                return {
                    status: 404,
                    body: "No nicknames were found"
                }
            }

            var randomNick = allNicks[Math.floor(Math.random()*allNicks.length)];

            return {
                status: 200,
                body: randomNick
            };
        });
    };

    return {
        getAllNicks,
        getNickByName,
        createNick,
        deleteNickByName,
        getRandomNick
    };
};

module.exports = nickService();