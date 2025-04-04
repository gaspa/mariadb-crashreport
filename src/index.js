import {createConnection} from "mysql2/promise";

const CREATE_TABLE_ASSET = `
CREATE TABLE IF NOT EXISTS test_table (
  col_primary VARCHAR(255) PRIMARY KEY,
  col_1 VARCHAR(255),
  col_2 VARCHAR(255),
  col_3 VARCHAR(255),
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) CHARACTER SET utf8 COLLATE utf8_general_ci;`;

const crashingSQL = `
INSERT INTO test_table (col_primary,
        col_1, col_2, col_3
)
VALUES (?, ?, ?, ?)
ON DUPLICATE KEY UPDATE col_1 = VALUES(col_1),
                        col_2      = VALUES(col_2),
                        col_3      = VALUES(col_3)`

const crashingPHS = [
  'r1',
  'd 1 c 1',
  'd 1 c 2',
  'd 1 c 3',
  'plus 1',
  'plus 2',
  'plus 3',
  'plus 4',
  'plus 5'
];

const dbOptions = {
    host: 'localhost',
    user: 'user',
    password: 'dbpwd',
    database: 'db'
};

async function main(){
    const connection = await createConnection(dbOptions);
    if(!connection) throw new Error('No connection found');
    const obj = await connection.execute(CREATE_TABLE_ASSET);
    console.log('table created');
    const showTable = await connection.execute('show create table test_table');
    console.log('table:', showTable);
    const [rows, cols] = await connection.execute(crashingSQL,crashingPHS);
    console.log(rows);
    console.log(cols);
}

console.log('starting...');
main().then( () => {
    console.log('Finished correctly');
    process.exit(0);
}).catch(error => {
    console.error(error);
    process.exit(1);
})
