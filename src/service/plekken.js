let { PLEKKEN } = require('../data/mock_data');

// const getAll = () => {
//   return (
//     data: PLEKKEN,
//     count: PLEKKEN.length,
//   )
// };

const getbyId = () => {
  throw new Error('not implemented yet.')
}

const create = ({ plekId, beoordeling, locatie, tijdstipOpen, tijdstipGesloten, beschrijving, naam }) => {
  throw new Error('not implemented yet.')
}

const updateById = (id, { plekId, beoordeling, locatie, tijdstipOpen, tijdstipGesloten, beschrijving, naam }) => {
  throw new Error('not implemented yet.')
}

const deleteById = (id) => {
  throw new Error('not implemented yet.')
}

module.exports = {
  getAll,
  getbyId,
  create,
  updateById,
  deleteById,
};
