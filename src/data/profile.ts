export interface SocialLink {
	label: string;
	href: string;
	icon: 'linkedin' | 'github' | 'website';
}

export interface EducationItem {
	institution: string;
	degree: string;
	location: string;
	years: string;
}

export interface ExperienceItem {
	company: string;
	role: string;
	period: string;
	location?: string;
	description?: string;
	details?: string[];
}

export interface SkillCategory {
	category: string;
	skills: string[];
}

export interface Certification {
	name: string;
}

export interface Profile {
	name: string;
	title: string;
	tagline: string;
	location: string;
	email: string;
	website: string;
	introduction: string;
	education: EducationItem[];
	experiences: ExperienceItem[];
	skillCategories: SkillCategory[];
	certifications: Certification[];
	socialLinks: SocialLink[];
}

export const profile: Profile = {
	name: 'Kevin Pleitez',
	title: 'Fullstack Developer',
	tagline:
		'Specialized in Mobile (iOS, Android, Flutter), Backend (Node.js, Java, PHP) & AI-Assisted Development',
	location: 'San Salvador, El Salvador',
	email: 'pleitez95geova@gmail.com',
	website: 'https://kev95p.github.io',
	introduction:
		'Fullstack developer with 7+ years of experience building native and cross-platform mobile applications, scalable backend services, and enterprise web systems. Specialized in iOS (SwiftUI/UIKit), Android (Jetpack Compose/Kotlin), Flutter, Node.js (NestJS/Express), Java (Spring Boot), and PHP (Laravel). Proven track record leading architecture decisions, integrating AI-assisted development workflows, and delivering mission-critical solutions for retail, fintech, and government sectors.',
	education: [
		{
			institution: 'Universidad de Sonsonate',
			degree: 'Bachelor of Science in Computer Systems Engineering',
			location: 'Sonsonate, El Salvador',
			years: '2014 – 2021',
		},
	],
	experiences: [
		{
			company: 'Business Development Group, S.A.',
			role: 'Fullstack & Mobile Developer',
			period: 'May 2025 – Present',
			location: 'Outsourcing for Walmart Centroamérica',
			details: [
				'Drive the development of new features and provide comprehensive support for the Walmart CA e-commerce mobile application across its multiple retail formats.',
				'Lead the architectural design and development using native and multiplatform technologies for high-scale retail environments.',
				'Maintain and scale backend services built with Node.js (NestJS/Express) and Java (Spring Boot) to support regional operations.',
				'Leverage advanced AI agents and CLIs (Gemini CLI, Claude Code, GitHub Copilot, OpenCode) to accelerate code generation, refactoring, and automated testing.',
				'Optimize production software by implementing best practices in both frontend and backend layers for mission-critical applications.',
			],
		},
		{
			company: 'NIU SA de CV (Niu App)',
			role: 'Mobile & Backend Developer',
			period: 'Jan 2023 – May 2025',
			details: [
				'Developed core features for the NIU Fintech mobile application, enhancing financial services for users across the region.',
				'Estimated and implemented complex functionalities for iOS (Swift/UIKit/SwiftUI) and Android (Kotlin/Jetpack Compose).',
				'Designed cross-platform components using Flutter and KMP (Kotlin Multiplatform) to unify business logic.',
				'Integrated SDD (Software Driven Design) workflows to streamline development cycles and maintain high code quality standards.',
			],
		},
		{
			company: 'Grupo GD SA de CV',
			role: 'Fullstack Developer',
			period: 'Apr 2021 – Jun 2022',
			details: [
				'Designed and developed end-to-end applications using PHP (Laravel/CodeIgniter) and Java (Spring Boot/JSP).',
				'Built dynamic web interfaces using Angular and React.',
				'Managed service deployments and infrastructure on Google Cloud Platform (GCP).',
				'Led iOS development workstreams using Swift for specialized client requirements.',
			],
		},
		{
			company: 'Creativa Consultores SA de CV',
			role: 'Fullstack Developer',
			period: 'May 2018 – Feb 2021',
			details: [
				'Developed robust enterprise systems for government and international clients using Java (Spring Boot, JSP) and C#.',
				'Engineered multiple native and hybrid mobile applications, tailoring solutions for diverse platform requirements.',
				'Built web frontends with Angular, jQuery, and responsive CSS.',
				'Managed full lifecycle development, including CI/CD pipeline configuration and cloud service deployments.',
			],
		},
		{
			company: 'Universidad de Sonsonate',
			role: 'Instructor',
			period: 'Jul 2019 – Dec 2020',
			details: [
				'Taught advanced courses in Mobile Development, Compilers, and Operating Systems.',
			],
		},
		{
			company: 'Sandoval y Guevara Inversiones',
			role: 'Software Developer',
			period: 'Jan 2018 – May 2018',
			details: [
				'Developed and maintained web applications using PHP (CodeIgniter) and JavaScript.',
			],
		},
	],
	skillCategories: [
		{
			category: 'AI-Assisted Development',
			skills: [
				'Gemini CLI',
				'Claude Code',
				'GitHub Copilot',
				'OpenCode',
				'SDD',
			],
		},
		{
			category: 'Mobile',
			skills: [
				'Swift (UIKit, SwiftUI)',
				'Dart (Flutter)',
				'Kotlin (Jetpack Compose, KMP)',
				'Android SDK',
			],
		},
		{
			category: 'Backend',
			skills: [
				'Node.js (NestJS, Express)',
				'Java (Spring Boot, JSP)',
				'PHP (Laravel, CodeIgniter)',
				'C# (.NET)',
			],
		},
		{
			category: 'Frontend',
			skills: [
				'Angular',
				'React',
				'TypeScript',
				'jQuery',
				'HTML5',
				'CSS3 (Sass)',
			],
		},
		{
			category: 'Tools & Databases',
			skills: [
				'Docker',
				'Git',
				'CI/CD Pipelines',
				'SQL (PostgreSQL, MySQL)',
				'MongoDB',
			],
		},
		{
			category: 'Methodologies',
			skills: ['SOLID', 'Design Patterns', 'SCRUM', 'Clean Architecture'],
		},
		{
			category: 'Languages',
			skills: ['Spanish (Native)', 'English (Intermediate)'],
		},
	],
	certifications: [
		{ name: 'AI-Driven Software Engineering & Prompt Engineering' },
		{ name: 'Spring Boot & Java Enterprise' },
		{ name: 'NestJS & Node.js Backend Development' },
		{ name: 'PHP Web Development (Laravel/CodeIgniter)' },
		{ name: 'Clean Architecture & Android Architecture' },
		{ name: 'Docker & DevOps Fundamentals' },
	],
	socialLinks: [
		{
			label: 'LinkedIn',
			href: 'https://www.linkedin.com/in/kpleitez/',
			icon: 'linkedin',
		},
		{
			label: 'GitHub',
			href: 'https://github.com/kev95p',
			icon: 'github',
		},
	],
};
