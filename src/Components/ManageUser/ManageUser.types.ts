export type fetchedUserCredentials = {
  user_first_name: string,
  user_last_name:string,
  user_email: string,
  is_deleted: boolean,
  user_role: string,
  
}
export interface ManageUserState {
  fetchedData: fetchedUserCredentials[],
  pageNumber: number;
  searched_name:string;
  role_selected:string;
  status_selected:string;
  sort_order:string;

  
}

export type ManageUserAction = |
{ type: "navigate_to_manage_user", data_received: fetchedUserCredentials[] }| 
{ type: "on_click_searchButton",current_search:string}|
{ type: "on_select_roleFilter",current_role:string}|
{ type: "on_select_statusFilter",current_status:string}|
{ type: "on_select_sortOrder",current_sortOrder:string}|
{ type: "on_click_prev", page_current: number }|
{ type: "on_click_next",page_current: number }
