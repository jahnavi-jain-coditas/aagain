export interface fetchedExamRegisteredDetails {
  examination_slot_id: string,
  examination_date: string,
  examination_type: string,
  examination_slot_start_time: string,
  examination_slot_end_time: string,
}


export interface userPageState {
  fetchedData: fetchedExamRegisteredDetails[];
  pageNumber: number;
  errorStatus:string;
  registrationSuccessStatus:string;
  paymentSuccessStatus:string;


}

export type userPageAction=|
{type: "fetch_data", data_received: fetchedExamRegisteredDetails[] }|
{ type: "on_click_prev", page_current: number }|
{ type: "on_click_next",page_current: number }|
{type:"on_error",error_received:string}|
{type:"on_registration_success",success_message:string}|
{type:"on_payment_success",success_message:string}

