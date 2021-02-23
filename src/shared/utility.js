/**
 * Updates an object's properties with the properties of a new object
 *
 * @param {object} oldObject The original object that will be modified
 * @param {object} updatedProperties The object with the properties that will be added/updated in the original object
 *
 * @returns {object} Updated object
 */
export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};

/**
 * Creates an array of appearances for the character based on the list of main characters that appear in each episode.
 * Although some characters appear in some episodes, the list may be empty because he/she is not considered a main character.
 *
 * @param {object} character Character object with all it's properties
 * @param {Array} episodes List of all Breaking Bad episodes
 *
 * @returns {Array} List of indexes of episodes in which the character appears
 */
export const characterAppearances = (character, episodes) => {
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

export const fixDateString = (date) => {
  return date.split('-').join('/');
};

export const formatEpisodeString = (season, episode) => {
  return 'S' + season.trim().padStart(2, '0') + 'E' + episode.trim().padStart(2, '0');
};
