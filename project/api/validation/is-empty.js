//Эта функция проверяет, является ли переданное значение undefined или null или длина объекта или строки равна 0.
const isEmpty = (value) => {
    return (
        value === undefined ||
        value === null ||
        (typeof value === 'object' && Object.keys(value).length === 0) ||
        (typeof value === 'string' && value.trim().length === 0)
    );
};
module.exports = isEmpty;