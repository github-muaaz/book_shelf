const storage = {
    get: (key: string) => {
        const item = window.localStorage.getItem(key);
        try {
            return item ? JSON.parse(item) : null;
        } catch (error) {
            console.error(`Error parsing localStorage item '${key}':`, error);
            return null;
        }
    },
    set: (key: string, value: object, deleteOld: boolean) => {
        if (!value || Object.keys(value).length === 0) {
            return;
        }
        try {
            const existingData = storage.get(key) || {};
            const newData = deleteOld ? { ...value } : { ...existingData, ...value };
            window.localStorage.setItem(key, JSON.stringify(newData));
        } catch (error) {
            console.error(`Error setting localStorage item '${key}':`, error);
        }
    },
    remove: (key: string) => {
        try {
            window.localStorage.removeItem(key);
        } catch (error) {
            console.error(`Error removing localStorage item '${key}':`, error);
        }
    },
};

export default storage;
