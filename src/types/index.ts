export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ContactFormData {
  brand: string;
  name: string;
  phone: string;
  email: string;
  amazonStatus: string;
  services: string[];
  message: string;
  file?: FileList;
  privacyAgreed: boolean;
}
