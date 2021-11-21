let moives = [
  {
    id: 0,
    name: "이터널스",
    score: 5.59,
  },
  {
    id: 1,
    name: "장르만 로맨스",
    score: 6.85,
  },
  {
    id: 2,
    name: "강릉",
    score: 6.38,
  },
  {
    id: 3,
    name: "듄",
    score: 7.93,
  },
  {
    id: 4,
    name: "프렌치 디스패치",
    score: 7.93,
  },
];

export const getMovies = () => moives;

export const getId = (id) => {
  const result = moives.filter((moive) => moive.id === id);
  return result[0];
};

export const deleteMovie = (id) => {
  const clear = moives.filter((movie) => movie.id !== id);
  if (moives.length > clear.length) {
    console.log("성공");
    moives = clear;
    return true;
  } else {
    console.log("실패");
    return false;
  }
};

export const addMovie = (name, score) => {
  const newData = { id: moives.length + 1, name, score };
  moives.push(newData);
  return newData;
};
