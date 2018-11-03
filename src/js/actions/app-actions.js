import AppConstants from '../constants/app-constants';
import { dispatch, register } from '../dispatchers/app-dispatcher';

export default {
	addItem(item) {
		dispatch({
			item,
			actionType: AppConstants.ADD_ITEM,
		})
	},
	removeItem(item) {
		dispatch({
			item,
			actionType: AppConstants.REMOVE_ITEM,
		})
	},
	increaseItem(item) {
		dispatch({
			item,
			actionType: AppConstants.INCREASE_ITEM,
		})
	},
	decreaseItem(item) {
		dispatch({
			item,
			actionType: AppConstants.DECREASE_ITEM,
		})
	},
}
