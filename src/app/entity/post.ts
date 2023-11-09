export class Post {
    postId: number | undefined;
    jobTitle: string | undefined;
    location: string | undefined;
    salary: string | undefined;
    experience: string | undefined;
    description: string | undefined;
    dateLastModified: string | undefined;


    constructor(postId: number | undefined, jobTitle: string | undefined, location: string | undefined, salary: string | undefined, experience: string | undefined, description: string | undefined, dateLastModified: string | undefined) {
        this.postId = postId;
        this.jobTitle = jobTitle;
        this.location = location;
        this.salary = salary;
        this.experience = experience;
        this.description = description
    }
}
