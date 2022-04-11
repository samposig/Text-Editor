import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (id, value) => {
  //connect to database
  const jateDB = await openDB('jate', 1);
  //new transaction
  const trans = jateDB.transaction('jate', 'readwrite');
  const req = objectStore.put({id: id, value: value});
  const res = await req;
  console.log('data saved to jateDB');
};
// TODO: Add logic for a method that gets all the content from the database
export const getDb = async (value) => {
  console.log('getDb implemented');
  const jateDB = await openDB('jate', 1);
  const trans = jateDB.transaction('jate', 'readwrite');
  const objectStore = tx.objectStore('jate');
  const req = objectStore.getAll();
  const res = await req;
  console.log('dta saved to databse', res);
};
initdb();
