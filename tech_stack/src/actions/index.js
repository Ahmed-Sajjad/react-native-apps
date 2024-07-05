export const selectLibrary = (libraryId) => {
    console.log('Hello '+libraryId);
    return {
        type: 'select_library',
        payload: libraryId
    };
};

export const selectSomethingElse = () => {
    console.log('Hmph');
};