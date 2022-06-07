export interface DataTable {
  unit_name: string;
  price: number;
  unit: number;
  unit_price: number;
}

export interface Calendar{
  title: string;
  slug: string;
  data: any;
  setStartDate: any;
  setEndDate: any;
  statusCallApi: boolean;
  onShowAll: any;
  onShow: any;
  onClear: any;
}