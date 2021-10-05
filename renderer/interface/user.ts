export default interface User {
    id: string;
    name: string;
    email: string;
    address: string;
    role: {
        id: string;
        name: string;
    },
    isAdmin: boolean;
}
