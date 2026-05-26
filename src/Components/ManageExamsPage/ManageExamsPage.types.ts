export interface slotCredentials {
  slot_type: string,
  slot_date: Date,
  slot_start_time: Date,
  slot_end_time: Date,
  slot_capacity: number,

};

export type fetchedExamCredentials = {
  examination_slot_id: string,
  examination_date: string,
  examination_type: string,
  examination_slot_start_time: string,
  examination_slot_end_time: string,
  examination_slot_total_capacity: number,
  examination_slot_available_capacity: number

}
export interface ManageExamState {
  addExamModalOpen: boolean,
  fetchedData: fetchedExamCredentials[],
  pageNumber: number;


}

export type ManageExamAction = | { type: "set_modal_open"; is_open: boolean }
  | { type: "fetch_data", data_received: fetchedExamCredentials[] }
  | { type: "set_page_number", page_current: number }

