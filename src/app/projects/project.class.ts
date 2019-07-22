export class Project {
    title: string;
    description: string;
    role: string;
    owner_name: string;
    owner_profile: string;
    owner_link: string;
    github_repository: string;
    website: string;
    technologies: Array<string>;

    static getKeys(): Array<string> {
        return ['title', 'description', 'role', 'owner_name', 'owner_profile', 'owner_link', 'github_repository',
        'website', 'technologies'];
    }
}