export const onInput = input => ({
    type: 'TASK',
    payload: input
});

export const onSelect = option => ({
    type: 'OPTION',
    payload: option
})