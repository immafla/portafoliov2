export interface Employment {
    companyLogo: string;
    urlSite: string;
	title: string;
	subtitle: string;
	body: string[];
	stackDev: string[];
	proyects: string[];
	colorTheme: (value:number) => string;
}

export interface Employe {
	firstName: string;
	lastName: string;
	profesion: string;
	aboutMe: string;
}