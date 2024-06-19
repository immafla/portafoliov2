export interface Employment {
	jobTitle: string;
	period: string;
    companyLogo: string;
    urlSite: string;
	body: string[];
	stackDev: string[];
	jobPosition?: any[]
	proyects: string[];
	colorTheme: (value:number) => string;
}

export interface Employe {
	firstName: string;
	lastName: string;
	profesion: string;
	aboutMe: string;
}