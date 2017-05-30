export const selectLibrary = (libraryId) => {
    console.log('pressed by id', libraryId)
    return {
        type: 'select_library',
        payload: libraryId
    }
}