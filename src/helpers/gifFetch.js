export const gifFetch = async (search) => {

    const url = 'https://api.giphy.com/v1/gifs/search';
    const key = 'FbLveAmDCDbLoXR1LtjsS93hEQdq1vuK';
    const limit = 30;


    const response = await fetch(`${url}?api_key=${key}&q=${search}&limit=${limit}`)
    const { data } = await response.json();

    const newData = data.map(({ id, title, images: { downsized_medium: { url } } }) => {
        return {
            id,
            title,
            url
        }
    })

    return newData;
}
