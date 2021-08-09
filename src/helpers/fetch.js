const baseUrl = 'https://apisamci.olah.agency/api/v1'

const fetchSinToken = ( endpoint, data, method = 'GET' ) => {

    const url = `${ baseUrl }/${ endpoint }`;

    if ( method === 'GET' ) {
        return fetch( url );
    } else {
        return fetch( url, {
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify( data )
        });
    }
}

const fetchDelete = ( endpoint, data, method = 'DELETE' ) => {

    const url = `${ baseUrl }/${ endpoint }`;

    if ( method === 'DELETE' ) {
        return fetch( url );
    } else {
        return fetch( url, {
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify( data )
        });
    }
}

const fetchConToken = ( endpoint, data, method = 'GET' ) => {

    const url = `${ baseUrl }/${ endpoint }`;
    const token = localStorage.getItem('token') || '';
    const Auth = `Bearer ${ token }` || ''

    if ( method === 'GET' ) {
        return fetch( url, {
            method,
            headers:{
                'Authorization': Auth
            } 
        } );
    } else {
        return fetch( url, {
            method,
            headers: {
                'Content-type': 'application/json',
                'Authorization': Auth
            },
            body: JSON.stringify( data )
        });
    }
}

const baseUrlTest = 'https://reqres.in/api'

const fetchTest = ( endpoint, data, method = 'GET' ) => {

    const url = `${ baseUrlTest }/${ endpoint }`;

    if ( method === 'GET' ) {
        return fetch( url );
    } else {
        return fetch( url, {
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify( data )
        });
    }
}

export {
    fetchSinToken,
    fetchConToken,
    fetchDelete,
    fetchTest
}