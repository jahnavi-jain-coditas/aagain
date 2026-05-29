import ManageUserHeader from "../ManageUserHeader/ManageUserHeader";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./ManageUser.module.scss"
import RoleBasedFilter from "../RoleBasedFilter/RoleBasedFilter";
import StatusBasedFilter from "../StatusBasedFilter/StatusBasedFilter";
import SortingDropDown from "../SortingDropDown/SortingDropDown";
import Button from "../Button/Button";
import Table from "../Table/Table";
import type { fetchedUserCredentials, ManageUserAction, ManageUserState } from "./ManageUser.types";
import { useEffect, useReducer } from "react";
import {  fetchUserDetailsOnNavigate } from "../../services/fetchUserFilterBased.service";



const initialState: ManageUserState = {
  fetchedData: [],
  pageNumber: 1,
  searched_name: "",
  role_selected: "All",
  status_selected: "All",
  sort_order: ""
};

function reducer(state: ManageUserState, action: ManageUserAction): ManageUserState {
  switch (action.type) {
    case "navigate_to_manage_user":
      return { ...state, fetchedData: action.data_received };
    case "on_select_sortOrder":
      return { ...state, sort_order: action.current_sortOrder, pageNumber: 1 };
    case "on_click_next":
      return { ...state, pageNumber: action.page_current };
    case "on_click_prev":
      return { ...state, pageNumber: action.page_current };
    case "on_click_searchButton":
      return { ...state, searched_name: action.current_search, pageNumber: 1};
    case "on_select_roleFilter":
      return { ...state, role_selected: action.current_role,pageNumber: 1 };
    case "on_select_statusFilter":
      return { ...state, status_selected: action.current_status,pageNumber: 1 }
    default:
      throw Error("Unknown action received");
  }

}


const ManageUser = () => {
  const [state, dispatch] = useReducer(reducer, initialState);


  const fetchDetailsOnNavigation = async (page: number) => {
    try {
      const response = await fetchUserDetailsOnNavigate(page);
      dispatch({ type: "navigate_to_manage_user", data_received: response })
      console.log(response)
    }
    catch (error: any) {
      console.log(error);
    }

  }

  useEffect(() => { fetchDetailsOnNavigation(state.pageNumber,state.role_selected,state.searched_name,state.sort_order,state.status_selected) }, [state.pageNumber,state.role_selected,state.searched_name,state.sort_order,state.status_selected])

  






  return (
    <div className={styles.manageUserPage}>
      <ManageUserHeader />
      <div className={styles.searchAndFilter}>

        <SearchBar
          value={state.searched_name}
          onSearch={() =>
            dispatch({ type: "on_click_searchButton", current_search: state.searched_name })} />


        <RoleBasedFilter
          value={state.role_selected}
          onChange={() => { dispatch({ type: "on_select_roleFilter", current_role: state.role_selected }) }} />


        <StatusBasedFilter
          value={state.status_selected}
          onChange={() =>
            dispatch({ type: "on_select_statusFilter", current_status: state.status_selected })} />


        <SortingDropDown
          value={state.sort_order}
          onChange={() =>
            dispatch({ type: "on_select_sortOrder", current_sortOrder: state.sort_order })} />


      </div>
      <main>
        <Table>

          <Table.TableHead>
            <Table.Row>
              <Table.HeaderCell>First Name</Table.HeaderCell>
              <Table.HeaderCell>Last Name</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell>Deleted</Table.HeaderCell>
              <Table.HeaderCell>Role</Table.HeaderCell>
              <Table.HeaderCell>Actions</Table.HeaderCell>


            </Table.Row>

          </Table.TableHead>

          <Table.TableBody>
            {state.fetchedData.map((userDetails: fetchedUserCredentials, index) => {
              return (
                <Table.Row key={index}>
                  <Table.Cell>{userDetails.user_first_name}</Table.Cell>
                  <Table.Cell>{userDetails.user_last_name}</Table.Cell>
                  <Table.Cell>{userDetails.user_email}</Table.Cell>
                  <Table.Cell>{userDetails.is_deleted ? "Yes" : "No"}</Table.Cell>
                  <Table.Cell>{userDetails.user_role}</Table.Cell>
                  <Table.Cell>
                    <div>
                      <Button>Edit</Button>
                      <Button>view</Button>
                    </div>
                  </Table.Cell>





                </Table.Row>
              )
            })
            }

          </Table.TableBody>


        </Table>

        <Button
          onClick={() => dispatch({ type: "on_click_prev", page_current: state.pageNumber - 1 })} disabled={state.pageNumber === 1}
        >Previous
        </Button>

        <Button
          onClick={() => dispatch({ type: "on_click_next", page_current: state.pageNumber + 1 })}>Next
        </Button>


      </main>






    </div>


  )
}
export default ManageUser;