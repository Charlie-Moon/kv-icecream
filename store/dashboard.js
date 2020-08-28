export const state = () => ({
    isOn: true,
});

export const actions = {
    toggleDashboard({commit}) {
        commit('SET_TOGGLE_DASHBOARD');
    },
};

export const mutations = {
    SET_TOGGLE_DASHBOARD: (state)  => {
        state.isOn = !state.isOn;
    },
};