const { error } = require('./constants');
const File = require('./file')
const assert = require('assert')

// IFEE
;(async () => {
    // variables created at this block, just are valid while it's executing
    {
        const filePath = './mocks/emptyFile-invalid.csv'
        const expected = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
        const result = File.csvToJSON(filePath)

        await assert.rejects(result, expected)
    }

    {
        const filePath = './mocks/invalid-header.csv'
        const expected = new Error(error.FILE_FIELDS_ERROR_MESSAGE)
        const result = File.csvToJSON(filePath)

        await assert.rejects(result, expected)
    }

    {
        const filePath = './mocks/fiveItems-invalid.csv'
        const expected = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
        const result = File.csvToJSON(filePath)

        await assert.rejects(result, expected)
    }
    {
        const filePath = './mocks/threeItems-valid.csv'
        const expected = [
            {
                id: 1, 
                name: 'xuxa da silva', 
                profession: 'developer', 
                age: 120
            },
            {
                id: 2, 
                name: 'jose da silva', 
                profession: 'manager', 
                age: 30
            },
            {
                id: 3, 
                name: 'zezinho', 
                profession: 'qa', 
                age: 25
            },

        ]

        const result = await File.csvToJSON(filePath)
        assert.deepEqual(result, expected)
    }

})()