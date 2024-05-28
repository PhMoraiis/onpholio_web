export interface ILink {
  title: string
  path: string
}

export interface IButton {
  title: string
  path: string
}

export interface INavbarProps {
  links: ILink[]
  linkButton: IButton
}