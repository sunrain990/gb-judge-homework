/**
 * Created by kevin on 16/7/22.
 */
export const getIndexImage = ({dispatch}) => {
    api.getIndexImage().then(response => {
        if(!response.ok){
            return dispatch(types.GET_INDEX_IMG, {indexImg: img})
        }
        dispatch(types.GET_INDEX_IMG, {indexImg: response.data.img})
    }, response => {
        dispatch(types.GET_INDEX_IMG, {indexImg: img})
    })
}