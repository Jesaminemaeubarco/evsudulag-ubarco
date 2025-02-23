export interface UserModel {
    username: string;
    password: string;
    personalInfo: {
        id: number;
        name: string;
        birthday: string;
        age: number;
        sex: string;
        address: string;
        imgUrl: string;
    }
}