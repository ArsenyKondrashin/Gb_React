export const TOGGLE_PROFILE = 'PROFILE::TOGGLE_PROFILE';
export const CHANGE_NAME = 'PROFILE::CHANGE_NAME';

export const toggleProfile = () => ({
    type: TOGGLE_PROFILE,
});

export const changeName = (value) => ({
    type: CHANGE_NAME,
    payload: value,
});