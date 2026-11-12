export type CustomerType = 'residential' | 'commercial';

export type ResidentialServiceType = 
  | 'standard'
  | 'deep'
  | 'move_in_out'
  | 'recurring'
  | 'apartment'
  | 'one_time';

export type CommercialFacilityType =
  | 'office'
  | 'retail'
  | 'medical'
  | 'education'
  | 'fitness'
  | 'warehouse';

export type CleaningFrequency = 
  | 'one_time'
  | 'weekly'
  | 'bi_weekly'
  | 'monthly';

export interface AddOnOption {
  id: string;
  name: string;
  price: number;
  description: string;
  iconName: string;
}

export interface QuoteState {
  customerType: CustomerType;
  // Residential
  residentialService: ResidentialServiceType;
  bedrooms: number;
  bathrooms: number;
  squareFeetResidential: string;
  frequency: CleaningFrequency;
  selectedAddOns: string[];
  // Commercial
  facilityType: CommercialFacilityType;
  squareFeetCommercial: string;
  commercialFrequency: string;
  preferredSchedule: string;
  commercialRequirements: string[];
  // Contact & Location
  fullName: string;
  email: string;
  phone: string;
  streetAddress: string;
  city: string;
  zipCode: string;
  preferredDate: string;
  preferredTime: string;
  specialNotes: string;
  hasPets: boolean;
}

export interface ServiceDetail {
  id: ResidentialServiceType | 'commercial';
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  bestFor: string;
  checklistHighlights: string[];
  startingPrice: string;
}

export interface ChecklistItem {
  area: string;
  task: string;
  standard: boolean;
  deep: boolean;
  moveInOut: boolean;
}

export interface ReviewItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  serviceType: string;
  date: string;
  text: string;
  source: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'services' | 'pricing' | 'guarantee' | 'preparation';
}
