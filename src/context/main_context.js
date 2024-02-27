import React, {createContext, useReducer, useEffect} from 'react'
import  Context  from './app_context';
import CheckoutSettings from './checkout_settings';
const token = ''
const initialState = {
    amount: 0
}

const Reducer = (state, action) => {
    switch (action.type) {
        case 'SET_CONF':
            return action.payload;
        case 'TOGGLE_TERMS':
            console.count('terms')
            return {
                ...state,
                runAnim: false,
                userAgreesToTerms: !state.userAgreesToTerms
            }
        case 'TOGGLE_LOADING':
            console.count('toggle loading')
            return {
                ...state,
                loading: !state.loading
            }
        case 'LOADING_OFF':
            console.count('LOADING OFF')
            return {
                ...state,
                loading: false
            }
        case 'SET_PAYMENT_METHODS':
            return {
                ...state,
                paymentMethods: action.payload
            }
        case 'SET_ERROR':
            return {
                ...state,
                error: action.payload
            }
            
        default: return {...state}
    }
}

async function loadConf(dispatch){
    const conf = await CheckoutSettings.init(token)

    if(conf.status === 'approved' || conf.status === 'authorized'){
        document.location.href = conf.successUrl;
        return;
    }
    dispatch({
        type: 'SET_CONF',
        payload: conf
    })
    return conf
}
export const MainStore = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState)
        
    useEffect(() => {
        if(!Context.initDone) {
            loadConf(dispatch)
            .then((conf) => initialSetup(conf))
            .then((conf) => {
                dispatch({type: 'LOADING_OFF', payload: false})
                Context.initDone = true
            })
        }
    })

    return(
        <MainContext.Provider value={[state, dispatch]}>
            {!state.loading && children}
        </MainContext.Provider>
    )
}

export const MainContext = createContext(initialState)
export default MainStore