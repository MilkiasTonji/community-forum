export const getUniqueId = () => {
    return Math.floor(100000 + Math.random() * 900000); // generate 6 digit random numbers
}