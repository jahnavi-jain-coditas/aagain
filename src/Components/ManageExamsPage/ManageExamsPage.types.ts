export interface slotCredentials {
  slot_type: string,
  slot_date: Date,
  slot_start_time: Date,
  slot_end_time: Date,
  slot_capacity: number,

};

export type fetchedExamCredentials= {
  slot_id:string;
  slot_type: string,
  slot_date: string,
  slot_start_time: string,
  slot_end_time: string,
  slot_total_capacity: number,
  slot_available_capacity: number

}