export interface LiqPayPayload {
  signature: string;
  data: string;
}

export enum LiqPayAction {
  Pay = "pay",
  Hold = "hold",
  Subscribe = "subscribe",
  PayDonate = "paydonate",
}

export interface LiqPayObject {
  public_key: string;
  version: number;
  action: LiqPayAction;
  amount: number;
  currency: "USD" | "UAH" | "EUR";
  description: string;
  order_id: string;
  subscribe_date_start: string;
  subscribe_periodicity: "month" | "year";
  paytypes?: string;
  result_url?: string;
  //   server_url?: string;
  //   dae?: string | LiqPayCustomData;
}

export interface LiqPayCustomData {
  email: string;
}
