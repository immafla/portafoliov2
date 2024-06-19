import { icons_tech, icons_products } from '../utils/icons'
import { company_logos } from '../utils/images'
import { colors } from '../utils/constants'
import type { Employment, Employe } from '../interfaces'

export const EmploymentData: Employment[] = [
	//Periferia
	{	
		jobTitle:"Lider técnico frontend, Fábrica de desarrollo:",
		period: "Junio 2023 - Actualmente / Tiempo completo",
		companyLogo: company_logos.periferia,
        urlSite: 'https://periferiaitgroup.com/',
		body: [
			"Liderar y delegar funciones al equipo de desarrollo.", 
			"Apoyo técnico a proyectos en diferentes tecnologías web.", 
			"Ocasionalmente dictar semilleros front end."
		],
		jobPosition: [
			{

			}
		],
		stackDev: [
			icons_tech.reactjs,
			icons_tech.angular,
			icons_tech.node,
			icons_tech.html,
			icons_tech.css,
			icons_tech.graphql,
		],
		proyects: [
			icons_products.gou,
			icons_products.avalpaycenter
		],
		colorTheme: (op) => colors.periferia(op)
	},
	//Adl
	{
		jobTitle:"Desarrollador frontend, Avaldigitallabs:",
		period: "Septiembre 2021 - Junio 2023 / Tiempo completo",
		companyLogo: company_logos.adl,
        urlSite: 'https://www.adldigitallab.com/',
		body: [
			"Participar en la definición del producto.",
			"Implementar y crear microfrontends.",
			"Se logro mejorar la seguridad del aplicativo y la optimización del SEO.",
			"Definición e implementación de arquitectura por organismos.",
			"Se logra aumentar la cobertura de pruebas unitarias de 90%.",
			"Se logra reducir los code smells a menos del 10%.",
			"Se logra reducir el codigo repetido a menos del 8%.",
			"Maquetación responsive design de todas las vistas."
		],
		stackDev: [
			icons_tech.reactjs,
			icons_tech.html,
			icons_tech.css,
			icons_tech.node,
			icons_tech.graphql,
			icons_tech.redux,
			icons_tech.dynamodb,
			icons_tech.jest,
			icons_tech.mongodb,
		],
		proyects: [
			icons_products.gou,
		],
		colorTheme: (op) => colors.adl(op)
	},
	//Mineducacion
	{
		companyLogo: company_logos.mineducacion,
        urlSite: 'https://www.mineducacion.gov.co/portal/',
		jobTitle:"Desarrollador fullstack",
		period: "Marzo 2022 - Febrero 2023 / Freelance",
		body: [
			"Se logra migrar al 100% el aplicativo a Angular 13.",
			"Diseño e implementación de infraestructura y frontend.",
			"Aprovisionamiento de infraestructura (linux+docker+nginx).",
			"Diseño de mocks con figma.",
			"Se logra mejorar la UI/UX con bootstrap.",
			"Se implementan el consumo de servicios de geolicalización y mapas.",
			"Maquetación de todas las vistas en responsive design.",
			"Se implementan metodos para optimizar la seguridad del app.",
			"Se logra dockerizar microservicios en JAVA y el proyecto angular.",
			"Automatizacion y despliegues continuos."
		],
		stackDev: [
			icons_tech.angular,
			icons_tech.html,
			icons_tech.css,
			icons_tech.bootstrap,
			icons_tech.node,
			icons_tech.nginx,
			icons_tech.github,
			icons_tech.docker,
			icons_tech.linux,
		],
		proyects: [
			icons_products.gou,
		],
		colorTheme: (op) => colors.mineducacion(op)
	},
	//Salud electronica
	{
		companyLogo: company_logos.salud_electronica,
        urlSite: 'https://saludelectronica.com/',
		jobTitle:"Desarrollador fullstack:",
		period: "Abril 2023 - Actualmente / Freelance",
		body: [
			"Participar en la definición del producto.",
			"Dividir funcionalidades en componentes atomicos.",
			"Maquetación responsive design de todas las vistas.",
			"Diseño y uso de bases de datos.",
			"Optimización del rendimiento de las consultas en MongoDB.",
			"Optimización del rendimiento en el renderizado con datos masivos.",
		],
		stackDev: [
			icons_tech.nextjs,
			icons_tech.reactjs,
			icons_tech.html,
			icons_tech.css,
			icons_tech.node,
			icons_tech.github,
			icons_tech.mongodb
		],
		proyects: [
			icons_products.octa_cloud,
		],
		colorTheme: (op) => colors.saludelectronica(op)
	},
	//Radio enlace
	{
		companyLogo: company_logos.radio_enlace,
        urlSite: 'https://radioenlacesas.com/',
		jobTitle:"Desarrollador junior:",
		period: "Agosto 2015 - Agosto 2016 / Tiempo completo",
		body: [
			"Diseño y desarrollo de pagina web corporativa.",
			"Maquetación responsive design de todas las vistas.",
			"Diseño y desarrollo de aplicación web para manejo de inventario interno.",
			"Optimización del rendimiento de las consultas en MongoDB."
		],
		stackDev: [
			icons_tech.html,
			icons_tech.css,
			icons_tech.node,
			icons_tech.mongodb,
		],
		proyects: [
			
		],
		colorTheme: (op) => colors.radioenlace(op)
	},
	//AD Impresos
	{
		companyLogo: company_logos.ad_impresos,
        urlSite: 'https://adimpresossas.com/',
		jobTitle:"Diseñador publicista + Desarrollador junior:",
		period: "Febrero 2011 - Enero 2015 / Tiempo completo",
		body: [
			"Diseño y desarrollo de pagina web corporativa.",
			"Maquetación responsive design de todas las vistas.",
			"Diseño de publicidad general en COREL DRAWN e Illustrator",
		],
		stackDev: [
			icons_tech.javascript,
			icons_tech.html,
			icons_tech.css,
		],
		proyects: [
			
		],
		colorTheme: (op) => colors.adimpresos(op)
	}
]

export const EmployeData: Employe = {
	firstName: 'Iván',
	lastName: 'Mafla',
	profesion: 'Senior Frontend enginer',
	aboutMe: '+5 años de experiencia, Soy ingeniero electrónico orientado a desarrollo web y me especializo en construir (y ocasionalmente diseñar) aplicaciones web, Actualmente estoy enfocado en plataformas de pagos. ',
}