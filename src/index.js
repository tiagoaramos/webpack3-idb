import * as idb from 'idb'

const dataBasename = 'database'

if (process.env.NODE_ENV == 'test') {
idb.deleteDB(dataBasename)
}
idb.openDB(dataBasename, 1, {
    upgrade (db, oldVersion, newVersion, transaction) {
        console.log('configDB - OLd Verison ' + oldVersion)
        console.log('configDB - New Verison ' + newVersion)
        switch (oldVersion) {
            case 0:
                dbPromise.createObjectStore('user', {
                    keyPath: 'id',
                    autoIncrement: true
                })
                dbMetaUser.createIndex('user', 'user', {unique: false})
        }
    }
})