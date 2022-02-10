export interface ILocalizedUIContent {
  developmentApproaches: string
  frontend: string
  backend: string
  devOps: string
  about: string
  languages: string
  workExperience: string
  clickToSee: string
  lastUpdated: string
}

interface ISpokenLaunguage {
  name: string
  levelDescription: string
}

export interface IExperienceTimelineItem {
  companyName: string
  year: string
  description: string
  details: string[]
}

interface ITechStack {
  developmentApproaches: string[]
  frontend: string[]
  backend: string[]
  devOps: string[]
}

export interface ILocalizedPageContent {
  pageTitle: string
  fullName: string
  role: string
  email: string
  github: string
  aboutMe: string[]
  experienceDescription: string
  languages: ISpokenLaunguage[]
  experienceTimeline: IExperienceTimelineItem[]
  stack: ITechStack
}

export default interface ILocalizedContent {
  uiContent: ILocalizedUIContent
  pageContent: ILocalizedPageContent
}
