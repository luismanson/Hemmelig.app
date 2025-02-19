import config from '../config';

export const getUser = async (token) => {
    const data = await fetch(`${config.get('api.host')}/account/`, {
        method: 'GET',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    });

    if (data.status === 401) {
        return {
            statusCode: 401,
        };
    }

    return await data.json();
};

export const deleteUser = async (token) => {
    const data = await fetch(`${config.get('api.host')}/account/delete`, {
        method: 'POST',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            action: 'delete me',
        }),
    });

    if (data.status === 401) {
        return {
            statusCode: 401,
        };
    }

    return await data.json();
};

export const updateUser = async (data, token) => {
    const response = await fetch(`${config.get('api.host')}/account/update`, {
        method: 'PUT',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
    });

    if (response.status === 401) {
        return {
            statusCode: 401,
        };
    }

    return await response.json();
};
