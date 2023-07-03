export const CHANGE_OPTION_ACTION_TYPE = 'CHANGE_OPTION_ACTION'

export const changeOptionAction = (index) => {
	return {
		type: CHANGE_OPTION_ACTION_TYPE,
    index: index
	}
}
