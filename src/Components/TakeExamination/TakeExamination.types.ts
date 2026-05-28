export interface examinationStates{
  take_exam_button:boolean,
  complete_exam_button:boolean
}

export type examinationAction=|{ type: "set_take_exam_modal_open"; is_take_exam_open: boolean }|
{type:"set_complete_exam_modal_open",is_complete_exam_open:boolean}
