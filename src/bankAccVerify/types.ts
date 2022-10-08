export declare type FetchBank = {
  id: number;
  bankName: string;
  slug: string;
  bankCode: string;
  bankCountry: string;
  bankCurrency: string;
  bankId: number;
  createdAt: Date;
  updatedAt: Date;
};

declare type Verification = {
  status: boolean;
  apiMode: string;
  event: string;
  charge: number;
  balance: number;
  ipAddress: string;
  verifiedAt: Date;
};

export interface BasicVerification extends Verification {
  data: { account_number: number; account_name: string };
}

export interface AdvanceVerification extends Verification {
  account_currency: string;
  first_name: string;
  last_name: string;
  account_name: string;
  other_names: string;
  account_type: string;
  address_1: string;
  address_2: string;
  city: string;
  phone: string;
  postal_code: string;
  state_code: string;
  country_code: string;
  nationality: string;
  country_of_issue: string;
  dob: Date;
  expiry_date: Date;
  identity_number: string;
  identity_type: string;
}
