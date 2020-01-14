import { Injectable } from '@angular/core';

export class Profile {
    constructor(public prId:string, public prName:string) {}
}

export class Technology {
    constructor(public techId:number, public techname:string) {}
}

export class User {
    userName: string;
    profile: Profile = null;
    technologies: Technology[];

    constructor() {}
}

@Injectable()
export class UserService {
    getProfiles(): Profile[] {
        let profiles = [
            new Profile('dev', 'Développeur'),
            new Profile('man', 'Manager'),
            new Profile('dir', 'Directeur'),
            new Profile('tst', 'Testeur'),
            new Profile('chf', 'Chef de projet'),
        ];
        return profiles;
    }

    getTechnologies(): Technology[] {
        let technologies = [
            new Technology(100, 'ASP.net'),
            new Technology(101, 'Angular7'),
            new Technology(102, 'TypeScript'),
            new Technology(103, 'C#'),
        ];

        return technologies;
    }

    createUser(user: User): void {
        console.log(`Nom du candidat: ${user.userName}`);
        console.log(`Profile/Fonction ID: ${user.profile.prId}`);
        console.log(`Profile/Fonction nom: ${user.profile.prName}`);

        for (let i = 0; i < user.technologies.length; i++) {
            console.log(`Technology ID: ${user.technologies[i].techId}`);
            console.log(`Technology name: ${user.technologies[i].techname}`);
            
        }        
    }
}