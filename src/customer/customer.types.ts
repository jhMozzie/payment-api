export interface Customer {
  id: number;
  name: string;
  tax_id: string;
  address: string;
  created_at: Date;
}

export type CreateCustomerInput = Omit<Customer, 'id' | 'created_at'>;
export type UpdateCustomerInput = Partial<CreateCustomerInput>;