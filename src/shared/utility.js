export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};

export const characterAppearences = (character, episodes) => {
  const indexes = [];

  episodes.forEach((ep, index) => {
    let found = ep.characters.findIndex(
      (name) => name.toLowerCase().includes(character.name.toLowerCase()) || name.toLowerCase().includes(character.nickname.toLowerCase())
    );

    if (found >= 0) {
      indexes.push(index);
    }
  });

  return indexes;
};
