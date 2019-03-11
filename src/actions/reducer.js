import Immutable from 'immutable';
const { fromJS } = require('immutable');

const INITIAL_COMPONENT_STATES =
{
    name: "",
    description: "",
    importAutomatically: "",
    defaultVersionType: "",
    templateName: "",
    useVfs: ""
}
const INITIAL_ENV_STATES = {
    name: "",
    agent: "",
    templateName: ""
}
const INITIAL_STATES = fromJS({
    teamName: "",
    javahome: "",
    app_Name: "",
    app_trouxID: "",
    app_ContactEmailID: "",
    app_onboardingJira: "",
    app_PRN_ID: "",
    templateName: "",
    credentials: "",
    serverURL: "",
    components: [],
    environments: []
});

function initializeStates(state, payload) {
    let ucdData = payload.yamlData.ucd;
    let newState = {
        javahome: ucdData.server.javahome,
        teamName: ucdData.application.teams,
        app_Name: ucdData.application.name,
        app_trouxID: ucdData.application["template/Troux ID"],
        app_ContactEmailID: ucdData.application["template/appContactEmailID"],
        app_onboardingJira: ucdData.application["template/onboardingJira"],
        app_PRN_ID: ucdData.application["template/PRN"],
        templateName: ucdData.application.templateName,
        serverURL: ucdData.server.url,
        credentials: ucdData.server.credentials,
        components: [],
        environments: []
    }
    payload.yamlData.ucd.component && Object.keys(payload.yamlData.ucd.component).map((key, index) => {
        newState.components.push({
            name: payload.yamlData.ucd.component[key]["name"],
            description: payload.yamlData.ucd.component[key]["description"],
            importAutomatically: payload.yamlData.ucd.component[key]["importAutomatically"],
            templateName: payload.yamlData.ucd.component[key]["templateName"],
            useVfs: (payload.yamlData.ucd.component[key]["useVfs"] === 'true'),
            ...payload.yamlData.ucd.componentproperties[key]
        })
        Object.keys(payload.yamlData.ucd.componentproperties[key]).map((prop, index) => {
            if (!INITIAL_COMPONENT_STATES.hasOwnProperty(prop))
                INITIAL_COMPONENT_STATES[prop] = "";
        })
    });
    payload.yamlData.ucd.environments && Object.keys(payload.yamlData.ucd.environments).map((key, index) => {
        newState.environments.push({
            name: key,
            agent: payload.yamlData.ucd.addenvagents[key],
            templateUsed: payload.yamlData.ucd.environments[key],
            ...payload.yamlData.ucd.resourceProperties[key]
        })
        Object.keys(payload.yamlData.ucd.resourceProperties[key]).map((prop, index) => {
            if (!INITIAL_ENV_STATES.hasOwnProperty(prop))
                INITIAL_ENV_STATES[prop] = "";
        })
    })
    return state.mergeDeep(newState);
}

function setUCDInput(state, payload) {
    const { key, value } = payload;
    const _state = state.toJS();
    if (payload.section) {
        return Array.isArray(_state[payload.section])
            ? state.setIn([payload.section, payload.index, payload.key], payload.value)
            : state.updateIn([payload.section, payload.key], value => payload.value);
    }
    else {
        return (_state[key] === value) ? state : state.set(key, value);
    }
}

function addProperties(state, payload) {
    let sectionToUpdate = state.get(payload.section).toJS().map((entry, index) => {
        for (var eachValue in payload.value) {
            if (!state.get(payload.section).toJS()[index][payload.value[eachValue]]) {
                (payload.section === "components") ?
                    INITIAL_COMPONENT_STATES[eachValue] = "" :
                    INITIAL_ENV_STATES[eachValue] = "";
                entry[payload.value[eachValue]] = "";
            }
        }
        return entry;
    })
    return state.set(payload.section, fromJS(sectionToUpdate));
}

export default function reducer(state = INITIAL_STATES, action) {
    const payload = action.payload;
    switch (action.type) {
        case 'INITIALIZE_STATES':
            {
                return initializeStates(state, payload);
            }
        case 'UPDATE_UCD_STORE_VALUE':
            {
                return setUCDInput(state, payload);
            }
        case 'ADD_UPDATE_ARRAY_ENTRY':
            {
                let rawObject = payload.section === "components" ? INITIAL_COMPONENT_STATES : INITIAL_ENV_STATES
                if (payload.section) {
                    return payload.action === "add" ? state.updateIn([payload.section], arr => arr.push(rawObject)) : state.updateIn([payload.section], arr => arr.splice(payload.index, 1))
                }

            }
        case 'ADD_REMOVE_PROPERTIES':
            {
                if (payload.section) {
                    return addProperties(state, payload);
                }

            }

        default:
            return state;
    }
}
